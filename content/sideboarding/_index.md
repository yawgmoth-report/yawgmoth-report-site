+++
title = "Sideboard guides"
description = "Sideboarding in Yawgmoth."
+++

A list of sideboard guides for each matchup.  Focus on principles to adapt your sideboarding strategy, as opposing configurations and play/draw plans may require small changes.

## Important

At the bottom of the page there are sideboard guides from other pilots or from earlier "current 75" lists on this website (only guides that are publicly available elsewhere).

<style>
.sideboard-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  align-items: start;
}

@media (max-width: 760px) {
  .sideboard-grid {
    grid-template-columns: 1fr;
  }
}

.matchup-card {
  border: 1px solid var(--border-color, #d8d8d8);
  border-radius: 0.6rem;
  padding: 0.85rem 1rem;
  break-inside: avoid;
  background: var(--card-background, transparent);
}

.matchup-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.matchup-card p {
  margin: 0.35rem 0;
  line-height: 1.35;
}

.sb-note {
  font-size: 0.95em;
  opacity: 0.85;
}

.sb-rules {
  border-left: 4px solid var(--border-color, #d8d8d8);
  padding-left: 1rem;
  margin: 1rem 0 1.5rem 0;
}

.sb-rules p {
  margin: 0.35rem 0;
}
</style>

## Sideboard used

3 Thoughtseize; 2 Fatal Push; 2 Force of Vigor; 1 Ashiok, Dream Render; 1 Culling Ritual; 1 Fulminator Mage; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Soulless Jailer; 1 Vexing Bauble; 1 Witherbloom Charm.

## Global notes

<div class="sb-rules">
<p><strong>Metagame basis:</strong> These plans use the MTGGoldfish 30-day Modern snapshot viewed July 23, 2026. The largest archetypes in that snapshot were Boros Energy (11.6%), Goryo's Vengeance (7.7%), Affinity (7.3%), Eldrazi Tron (5.8%), Ruby Storm (5.7%), and Izzet Prowess (4.9%). The matchup order is weighted toward the decks most likely to be encountered, with closely related configurations grouped.</p>
<p><strong>This list has no Chord of Calling.</strong> Green Sun's Zenith can find Endurance only at sorcery speed, and it cannot find Soulless Jailer or Haywire Mite. Do not plan around instant-speed access to those cards.</p>
<p>Do not bring Force of Vigor unless the opponent's main plan or expected post-board plan gives you multiple high-value artifact or enchantment targets. Haywire Mite, Boseiju, Who Endures, and Witherbloom Charm already provide substantial coverage against cheap nonland permanents.</p>
<p><strong>Thoughtseize comes in against combo, big mana, and heavy-counterspell decks.</strong> Preserve enough engine cards to present a clock; do not turn the deck into pure interaction.</p>
<p><strong>Vexing Bauble is symmetrical.</strong> It counters your pitched Force of Vigor and evoked Endurance. Sacrifice Bauble before using either free spell. A Walking Ballista cast for X=0 is also countered, although it still reaches the graveyard.</p>
<p><strong>Soulless Jailer is symmetrical.</strong> It stops your own undying creatures from returning while it is on the battlefield. It also prevents noncreature spells from being cast from graveyards or exile, which is why it appears against Past in Flames, cascade, and suspend. Sequence Jailer only when the opposing graveyard plan matters more than your Young Wolf / Strangleroot Geist recursion.</p>
<p><strong>Witherbloom Charm is not an Urza's Saga answer.</strong> Its removal mode destroys a nonland permanent with mana value 2 or less; against Burn and Prowess, the gain-5-life mode is often the reason to bring it. It cannot remove lands or three-mana hate such as Blood Moon, Trinisphere, or Fight Rigging.</p>
<p><strong>Culling Ritual is powerful but destructive to your own setup.</strong> Treat it as a reset button, not a routine curve play; use creatures and Cauldrons first when possible.</p>
<p>Opponent lists change quickly. The default plans below assume the current common configurations; use the matchup notes to trim narrow answers when the opponent reveals a different build.</p>
</div>

## Matchups

<div class="sideboard-grid">

<section class="matchup-card">
<h3>Boros Energy / Mardu Energy</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Culling Ritual; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Endurance; 1 Malevolent Rumble; 1 Green Sun's Zenith; 1 Ouroboroid.</p>
<p class="sb-note">Culling is part of the default plan against the dense one- and two-mana battlefield, but sequence it so that it does not erase your own Cauldrons and setup creatures. Do not bring Force by default. If they show multiple must-answer enchantments—especially Blood Moon together with Rest in Peace or High Noon—swap 1 Force of Vigor for Murderous Cut.</p>
</section>

<section class="matchup-card">
<h3>Goryo's Vengeance</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Fatal Push; 1 Ashiok, Dream Render; 1 Murderous Cut; 1 Soulless Jailer; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Young Wolf; 1 Haywire Mite; 1 Ouroboroid; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith; 1 Grist, the Hunger Tide.</p>
<p class="sb-note">Keep the maindeck Endurance and two Zeniths as additional graveyard interaction. Bauble is for free Solitude / Force effects and Ephemerate rebound; sacrifice it before evoking Endurance. Push should usually answer Psychic Frog, while Cut remains live against the reanimated threat.</p>
</section>

<section class="matchup-card">
<h3>Affinity</h3>
<p><strong>IN:</strong> 2 Force of Vigor; 1 Culling Ritual; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Endurance; 1 Ouroboroid; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Bauble punishes the zero-mana artifact starts, while Force, Mite, Boseiju, and Charm attack the engine. Culling can be decisive but also destroys most of your cheap battlefield, so cast it from behind or after converting expendable creatures into cards.</p>
</section>

<section class="matchup-card">
<h3>Eldrazi Tron</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Force of Vigor; 1 Fulminator Mage; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Endurance; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Charm covers Expedition Map, Chalice of the Void, Grafdigger's Cage, and Torpor Orb; Force also reaches Trinisphere and the larger Karn targets. Neither card is intended as an answer to the large creatures. Fatal Push is optional only against versions with enough small Eldrazi and reliable revolt targets.</p>
</section>

<section class="matchup-card">
<h3>Ruby Storm</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Fatal Push; 2 Force of Vigor; 1 Soulless Jailer; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Young Wolf; 1 Yawgmoth, Thran Physician; 1 Malevolent Rumble; 1 Green Sun's Zenith; 1 Grist, the Hunger Tide; 1 Ouroboroid; 1 Dredger's Insight.</p>
<p class="sb-note">Current lists are built around both Ruby Medallion and Artist's Talent, so Force is now part of the default plan. Push answers Ral, Charm answers either two-mana engine, and Jailer shuts off Past in Flames lines. Vexing Bauble does not stop ordinary storm spells and stays out.</p>
</section>

<section class="matchup-card">
<h3>Izzet Prowess / Grixis Prowess</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Culling Ritual; 1 Murderous Cut; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Ouroboroid; 1 Malevolent Rumble; 1 Green Sun's Zenith; 1 Formidable Speaker.</p>
<p class="sb-note">Keep Endurance to shrink delirium and interrupt Lava Dart graveyard use, and keep both Insights because the life gain matters. Bauble catches Mutagenic Growth cast for life and a no-mana Lava Dart flashback. Witherbloom Charm can gain 5 life or remove Cori-Steel Cutter and other cheap nonland permanents. Do not bring Force by default.</p>
</section>

<section class="matchup-card">
<h3>Eldrazi Bloodchief / Gruul Broodscale</h3>
<p><strong>IN:</strong> 2 Fatal Push; 2 Force of Vigor; 1 Culling Ritual; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Endurance; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith; 1 Ouroboroid.</p>
<p class="sb-note">Prioritize Basking Broodscale and Glaring Fleshraker. Charm answers Basking Broodscale, Blade of the Bloodchief, and Springleaf Drum; Force is the card that also reaches Urza's Saga. Culling clears much of the compact combo shell but requires careful sequencing around your own cheap permanents.</p>
</section>

<section class="matchup-card">
<h3>Boros Ponza / Land Boom</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Force of Vigor; 1 Grist, the Hunger Tide; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Walking Ballista; 1 Endurance; 2 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Fetch basics early and avoid exposing Dryad Arbor to a free land-destruction target. Force is for Blood Moon and post-board hate, not for the land-destruction spells. Add the second Force over a Badgermole Cub only after seeing several enchantments such as Blood Moon, Rest in Peace, and High Noon.</p>
</section>

<section class="matchup-card">
<h3>Amulet Titan</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Force of Vigor; 1 Ashiok, Dream Render; 1 Fulminator Mage; 1 Soulless Jailer; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Young Wolf; 1 Strangleroot Geist; 1 Ouroboroid; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Ashiok attacks Summoner's Pact, Green Sun's Zenith, Scapeshift, and fetchlands. Force covers Amulet, Spelunking, and Urza's Saga; Charm covers Amulet itself but cannot target Saga because Saga is a land. Jailer is included for the prevalent Aftermath Analyst builds; if they show no graveyard recursion, leave Jailer out and retain Strangleroot Geist.</p>
</section>

<section class="matchup-card">
<h3>Grixis Reanimator</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Fatal Push; 1 Ashiok, Dream Render; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Soulless Jailer.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Walking Ballista; 1 Young Wolf; 1 Haywire Mite; 1 Ouroboroid; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Keep Endurance and two Zeniths. Push is for Psychic Frog and Emperor of Bones; Cut and the second Grist answer Abhorrent Oculus or Archon of Cruelty after they resolve. Fetch basics when Harbinger of the Seas is likely.</p>
</section>

<section class="matchup-card">
<h3>Mono-Green Eldrazi / Eldrazi Ramp</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Force of Vigor; 1 Ashiok, Dream Render; 1 Fulminator Mage; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Endurance; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith; 1 Young Wolf.</p>
<p class="sb-note">The default plan uses Force for Fight Rigging and Trinisphere, while Charm covers Chalice and other cheap nonland permanents. Against a creature-dense list with few artifact or enchantment targets, replace Charm with Murderous Cut; if another trim is needed, retain one of the listed engine cards instead of boarding the second Force.</p>
</section>

<section class="matchup-card">
<h3>Jeskai / Azorius Energy-Control</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Grist, the Hunger Tide; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Young Wolf; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Endurance.</p>
<p class="sb-note">Thoughtseize attacks counters, sweepers, and planeswalkers. Bauble covers free Solitude / Force effects and Isochron Scepter casts; Charm covers Scepter, Rest in Peace, and High Noon. Against a creature-heavy Ocelot Pride / Ajani build, use the Boros Energy plan instead and prioritize Push plus Culling.</p>
</section>

<section class="matchup-card">
<h3>Domain Zoo</h3>
<p><strong>IN:</strong> 2 Fatal Push; 2 Force of Vigor; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Walking Ballista; 1 Young Wolf; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Force is for the Leyline of the Guildpact / Leyline Binding package. If they are a lean creature-burn build without Leyline, trim Force first and retain the engine cards. Cut is the clean answer to Scion of Draco and the larger threats.</p>
</section>

<section class="matchup-card">
<h3>Living End</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Ashiok, Dream Render; 1 Soulless Jailer; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Haywire Mite; 1 Ouroboroid; 1 Dredger's Insight; 1 Grist, the Hunger Tide.</p>
<p class="sb-note">Keep all three Zeniths because they find the maindeck Endurance, but remember that this list has no Chord of Calling: Zenith cannot provide instant-speed interaction. Jailer and Bauble stop the Living End spell cast from exile after cascade, but Bauble also counters an evoked Endurance, so sacrifice Bauble before using the free Endurance line.</p>
</section>

<section class="matchup-card">
<h3>Esper Blink / Azorius Blink</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Walking Ballista; 1 Malevolent Rumble; 1 Green Sun's Zenith; 1 Endurance.</p>
<p class="sb-note">Bauble catches free Solitude and Ephemerate rebound. Charm is for High Noon, Damping Sphere, Rest in Peace, and other cheap hate; if they present no targets and the draw-two mode is not needed, retain the Rumble listed under OUT instead.</p>
</section>

<section class="matchup-card">
<h3>Neobrand / Neoform</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Ashiok, Dream Render; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 1 Haywire Mite; 1 Ouroboroid; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Dredger's Insight.</p>
<p class="sb-note">Bauble is the highest-impact card because it counters Summoner's Pact, Pact of Negation, Nourishing Shoal, and other no-mana spells. Ashiok shuts off Summoner's Pact and library searches. Fatal Push is not a reliable answer to Allosaurus Rider because the active player can cast Neoform immediately after Rider resolves.</p>
</section>

<section class="matchup-card">
<h3>Dimir Midrange / Dimir Flash</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Fatal Push; 1 Grist, the Hunger Tide; 1 Murderous Cut.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Walking Ballista; 1 Haywire Mite; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Thoughtseize is for the counterspell-heavy games. Keep Ouroboroid as a grindy threat and keep Endurance to constrain Murktide Regent and graveyard value. Fetch basics when Harbinger of the Seas is likely.</p>
</section>

<section class="matchup-card">
<h3>Tameshi Belcher</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Force of Vigor; 1 Ashiok, Dream Render; 1 Fulminator Mage; 1 Soulless Jailer; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Walking Ballista; 1 Young Wolf; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith; 1 Grist, the Hunger Tide; 1 Ouroboroid.</p>
<p class="sb-note">Keep Haywire Mite: it answers both Lotus Bloom and Goblin Charbelcher. Bauble stops a suspended Bloom and free counterspells; Jailer disrupts Tameshi recursion; Ashiok shuts off Whir of Invention. Fulminator is a tempo card against the MDFC mana base, especially when copied by Cauldron.</p>
</section>

<section class="matchup-card">
<h3>Yawgmoth Mirror</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Force of Vigor; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Soulless Jailer; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Ignoble Hierarch; 1 Walking Ballista; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Jailer shuts off both players' undying creatures, so deploy it when the asymmetry favors you. Force and Charm supplement Haywire Mite and Boseiju against Cauldron. Culling Ritual is optional on the draw in extremely board-heavy games, but it is not part of the default plan because it destroys your own setup.</p>
</section>

<section class="matchup-card">
<h3>Tron</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Force of Vigor; 1 Ashiok, Dream Render; 1 Fulminator Mage; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Walking Ballista; 1 Endurance; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith; 1 Young Wolf.</p>
<p class="sb-note">Ashiok shuts off Expedition Map and other library searches. Charm covers Map, Chalice, and Cage; Force and Mite also reach the larger Karn artifacts. Fatal Push stays out unless the opponent is actually on a creature-heavy Eldrazi configuration.</p>
</section>

<section class="matchup-card">
<h3>Hollow One / Vengevine</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Ashiok, Dream Render; 1 Murderous Cut; 1 Soulless Jailer; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Haywire Mite; 1 Ouroboroid; 1 Badgermole Cub; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Keep Endurance, the maindeck Grist, and the remaining Zeniths. Jailer stops Vengevine, Detective's Phoenix, and other permanent recursion; Ashiok can exile the graveyard after milling. Charm is either cheap removal or 5 life. Force is not a default answer to Hollow One because the card disadvantage is usually too high.</p>
</section>

<section class="matchup-card">
<h3>Mill</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Fatal Push; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 3 Malevolent Rumble; 2 Dredger's Insight; 1 Grist, the Hunger Tide.</p>
<p class="sb-note">This plan remains at 60 cards. Keep every Zenith because it finds Endurance, and avoid unnecessary self-mill. Bauble counters Archive Trap and Surgical Extraction when no mana was spent. Bring Witherbloom Charm over a Badgermole Cub if they show Mesmeric Orb.</p>
</section>

<section class="matchup-card">
<h3>Burn</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Ouroboroid; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Green Sun's Zenith.</p>
<p class="sb-note">Keep both Dredger's Insights because repeated graveyard exits generate life. Push and Cut answer Eidolon and the early creatures; Mite can exile Roiling Vortex, while Charm can either destroy Vortex or gain 5 life. Force is too costly unless the opponent reveals an unusually enchantment-heavy plan.</p>
</section>

<section class="matchup-card">
<h3>Samwise / Devoted Creature Combo</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Force of Vigor; 1 Culling Ritual; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Soulless Jailer; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Walking Ballista; 1 Young Wolf; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith; 1 Ouroboroid.</p>
<p class="sb-note">This is a flexible creature-combo template. Against Devoted Druid lists without graveyard recursion, leave Jailer out and retain Young Wolf. Against an artifact-light Samwise or Birthing Ritual build, leave Force out and retain one Badgermole Cub.</p>
</section>

</div>

## Last updated

July 23, 2026.