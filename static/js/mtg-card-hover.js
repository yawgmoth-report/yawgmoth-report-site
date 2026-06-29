(() => {
  const API_URL = "https://api.scryfall.com/cards/named";
  const CACHE_KEY = "yawgmothreport:scryfall-card-cache:v1";
  const FETCH_SPACING_MS = 150; // keeps /cards/named under 2 requests/sec

  let cache = new Map();
  let pending = new Map();
  let fetchChain = Promise.resolve();
  let lastFetchAt = 0;
  let activeLink = null;
  let hideTimer = null;

  try {
    cache = new Map(JSON.parse(sessionStorage.getItem(CACHE_KEY) || "[]"));
  } catch (_) {
    cache = new Map();
  }

  function persistCache() {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify([...cache.entries()].slice(-250)));
    } catch (_) {}
  }

  function normalizeName(name) {
    return name.replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
  }

  function scryfallSearchUrl(name) {
    const params = new URLSearchParams({
      as: "grid",
      order: "name",
      q: `!"${normalizeName(name)}"`,
      unique: "cards"
    });
    return `https://scryfall.com/search?${params.toString()}`;
  }

  function makeCardLink(name) {
    const clean = normalizeName(name);
    const a = document.createElement("a");
    a.className = "mtg-card-link";
    a.dataset.card = clean;
    a.href = scryfallSearchUrl(clean);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = clean;
    return a;
  }

  function cardImageFromObject(card) {
    if (card.image_uris?.normal) return card.image_uris.normal;
    if (card.card_faces?.[0]?.image_uris?.normal) return card.card_faces[0].image_uris.normal;
    if (card.image_uris?.large) return card.image_uris.large;
    if (card.card_faces?.[0]?.image_uris?.large) return card.card_faces[0].image_uris.large;
    return null;
  }

  function queuedJsonFetch(url) {
  const run = async () => {
    const elapsed = Date.now() - lastFetchAt;
    if (elapsed < FETCH_SPACING_MS) {
      await new Promise(resolve => setTimeout(resolve, FETCH_SPACING_MS - elapsed));
    }

    lastFetchAt = Date.now();

    const response = await fetch(url, {
      headers: { Accept: "application/json;q=0.9,*/*;q=0.8" }
    });

    if (!response.ok) throw new Error(`Scryfall returned ${response.status}`);
    return response.json();
  };

  // Important: one failed request should not break the whole future queue.
  const request = fetchChain.catch(() => {}).then(run);
  fetchChain = request.catch(() => {});
  return request;
}

  async function getCardData(name) {
    const clean = normalizeName(name);
    const key = clean.toLowerCase();

    if (cache.has(key)) return cache.get(key);
    if (pending.has(key)) return pending.get(key);

    const params = new URLSearchParams({ exact: clean });

    const promise = queuedJsonFetch(`${API_URL}?${params.toString()}`)
      .then(card => {
        const data = {
          name: card.name || clean,
          page: card.scryfall_uri || scryfallSearchUrl(clean),
          image: cardImageFromObject(card)
        };

        cache.set(key, data);
        persistCache();
        return data;
      })
      .finally(() => pending.delete(key));

    pending.set(key, promise);
    return promise;
  }

  function enhanceWikiCardMarkers(root) {
    const markerPattern = /\[\[([^\[\]\n]{2,90})\]\]/g;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("a, pre, code, script, style, textarea")) {
          return NodeFilter.FILTER_REJECT;
        }

        return /\[\[[^\[\]\n]{2,90}\]\]/.test(node.nodeValue)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const frag = document.createDocumentFragment();
      const text = node.nodeValue;
      let lastIndex = 0;
      let match;

      markerPattern.lastIndex = 0;

      while ((match = markerPattern.exec(text)) !== null) {
        frag.append(document.createTextNode(text.slice(lastIndex, match.index)));
        frag.append(makeCardLink(match[1]));
        lastIndex = markerPattern.lastIndex;
      }

      frag.append(document.createTextNode(text.slice(lastIndex)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function enhanceDecklists(root) {
    root.querySelectorAll("pre code").forEach(code => {
      const text = code.textContent;

      if (!/^\s*(?:SB:\s*)?\d+x?\s+\S/im.test(text)) return;

      const lines = text.split("\n");
      const frag = document.createDocumentFragment();

      lines.forEach((line, index) => {
        const match = line.match(/^(\s*(?:SB:\s*)?\d+x?\s+)(.{2,90}?)(\s*)$/i);

        if (match) {
          frag.append(document.createTextNode(match[1]));
          frag.append(makeCardLink(match[2]));
          frag.append(document.createTextNode(match[3]));
        } else {
          frag.append(document.createTextNode(line));
        }

        if (index < lines.length - 1) {
          frag.append(document.createTextNode("\n"));
        }
      });

      code.replaceChildren(frag);
    });
  }

  function createTooltip() {
    const tooltip = document.createElement("div");
    tooltip.className = "mtg-card-tooltip";
    tooltip.hidden = true;

    const img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";

    tooltip.append(img);
    document.body.append(tooltip);

    return { tooltip, img };
  }

  const { tooltip, img } = createTooltip();

  function positionTooltip(link) {
    const rect = link.getBoundingClientRect();
    const width = tooltip.offsetWidth || 244;
    const height = tooltip.offsetHeight || 340;

    let left = rect.right + 14;
    if (left + width > window.innerWidth - 8) {
      left = rect.left - width - 14;
    }

    left = Math.max(8, Math.min(left, window.innerWidth - width - 8));

    let top = rect.top - 48;
    top = Math.max(8, Math.min(top, window.innerHeight - height - 8));

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  async function showTooltip(link) {
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  activeLink = link;

  const name = link.dataset.card;
  if (!name) return;

  tooltip.classList.add("mtg-card-tooltip--loading");
  tooltip.hidden = false;
  img.removeAttribute("src");
  positionTooltip(link);

  try {
    const data = await getCardData(name);
    if (activeLink !== link) return;

    if (data.page) link.href = data.page;

    if (!data.image) {
      if (activeLink === link) hideTooltip();
      return;
    }

    img.src = data.image;
    img.alt = data.name;
    tooltip.classList.remove("mtg-card-tooltip--loading");
    positionTooltip(link);
  } catch (_) {
    if (activeLink === link) hideTooltip();
  }
}

function hideTooltip(link = null) {
  if (link && activeLink !== link) return;

  activeLink = null;
  tooltip.hidden = true;
  tooltip.classList.remove("mtg-card-tooltip--loading");
}

function scheduleHideTooltip(link) {
  if (hideTimer) clearTimeout(hideTimer);

  hideTimer = setTimeout(() => {
    hideTooltip(link);
  }, 75);
}

  function boot() {
    const root =
      document.querySelector("article") ||
      document.querySelector("main") ||
      document.body;

    enhanceWikiCardMarkers(root);
    enhanceDecklists(root);

    document.addEventListener("pointerover", event => {
  if (event.pointerType === "touch") return;

  const link = event.target.closest("a.mtg-card-link");
  if (link) showTooltip(link);
});

document.addEventListener("pointerout", event => {
  const link = event.target.closest("a.mtg-card-link");
  if (!link) return;

  const nextTarget = event.relatedTarget;
  const nextLink =
    nextTarget instanceof Element
      ? nextTarget.closest("a.mtg-card-link")
      : null;

  // Moving directly from one card link to another should not hide the new card.
  if (nextLink && nextLink !== link) return;

  scheduleHideTooltip(link);
});

document.addEventListener("focusin", event => {
  const link = event.target.closest("a.mtg-card-link");
  if (link) showTooltip(link);
});

document.addEventListener("focusout", event => {
  const link = event.target.closest("a.mtg-card-link");
  if (link) scheduleHideTooltip(link);
});

    document.addEventListener("focusout", event => {
      const link = event.target.closest("a.mtg-card-link");
      if (link) hideTooltip();
    });

    window.addEventListener("scroll", hideTooltip, { passive: true });
    window.addEventListener("resize", hideTooltip);

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") hideTooltip();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();