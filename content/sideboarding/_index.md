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

3 [[Thoughtseize]]; 2 [[Fatal Push]]; 2 [[Force of Vigor]]; 1 [[Ashiok, Dream Render]]; 1 [[Culling Ritual]]; 1 [[Fulminator Mage]]; 1 [[Grist, the Hunger Tide]]; 1 [[Murderous Cut]]; 1 [[Soulless Jailer]]; 1 [[Vexing Bauble]]; 1 [[Witherbloom Charm]].

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

## Credit

The sideboard guide below was modified on July 29 to match as closely as possible the guide that **Xerk** posted to the Yawgmoth discord.

## Matchups

<div class="sideboard-grid">

<section class="matchup-card">
<h3>Boros Energy / Mardu Energy</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Culling Ritual; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 4 Malevolent Rumble; 1 Endurance; 1 Ignoble Hierarch.</p>
<p class="sb-note">This follows the paper guide's removal-heavy plan. With a third Fatal Push, the next cut would be 1 Delighted Halfling on the play or 1 Ouroboroid on the draw; this sideboard uses Ashiok instead, so the default plan stops at six swaps.</p>
</section>

<section class="matchup-card">
<h3>Goryo's Vengeance</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Delighted Halfling; 1 Dredger's Insight; 1 Walking Ballista; 1 Ignoble Hierarch; 1 Haywire Mite; 1 Young Wolf.</p>
<p class="sb-note">Keep Endurance and the remaining Green Sun's Zenith copies. Bauble interferes with free interaction and Ephemerate rebound; sacrifice it before evoking Endurance.</p>
</section>

<section class="matchup-card">
<h3>Affinity</h3>
<p><strong>IN:</strong> 2 Force of Vigor; 1 Culling Ritual; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Endurance; 1 Green Sun's Zenith; 1 Grist, the Hunger Tide; 1 Formidable Speaker; 1 Ouroboroid.</p>
<p class="sb-note">This preserves the fast creature engine while replacing the slower and narrower cards with artifact interaction. Sequence Culling Ritual around your own cheap permanents.</p>
</section>

<section class="matchup-card">
<h3>Eldrazi Tron</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Force of Vigor; 1 Fulminator Mage; 1 Grist, the Hunger Tide.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Dredger's Insight; 1 Endurance; 1 Ignoble Hierarch; 1 Young Wolf; 1 Ouroboroid.</p>
<p class="sb-note">Force is for Chalice of the Void, Trinisphere, and high-value Karn targets rather than the Eldrazi creatures. Thoughtseize and Fulminator attack the mana-development turns.</p>
</section>

<section class="matchup-card">
<h3>Ruby Storm</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Soulless Jailer; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Grist, the Hunger Tide; 2 Yawgmoth, Thran Physician; 1 Ouroboroid.</p>
<p class="sb-note">The plan prioritizes disruption without overboarding. Charm answers a two-mana engine, while Jailer shuts off Past in Flames lines. Vexing Bauble does not stop ordinary storm spells.</p>
</section>

<section class="matchup-card">
<h3>Izzet Prowess / Grixis Prowess</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Culling Ritual; 1 Murderous Cut; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 3 Green Sun's Zenith; 1 Grist, the Hunger Tide; 1 Formidable Speaker; 1 Ouroboroid.</p>
<p class="sb-note">The paper guide also cuts Dryad Arbor and Ignoble Hierarch, but it has a third Fatal Push and one fewer Zenith. In this configuration, the extra Zenith is the natural additional trim and the mana sources remain in the deck.</p>
</section>

<section class="matchup-card">
<h3>RG Eldrazi</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Force of Vigor.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Green Sun's Zenith; 1 Ignoble Hierarch.</p>
<p class="sb-note">This is the direct adaptation of the paper guide: the third Dredger's Insight in that list becomes the third Green Sun's Zenith in this one.</p>
</section>

<section class="matchup-card">
<h3>Eldrazi Bloodchief / Gruul Broodscale</h3>
<p><strong>IN:</strong> 2 Fatal Push; 2 Force of Vigor; 1 Culling Ritual; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Endurance; 1 Green Sun's Zenith; 1 Formidable Speaker; 1 Ignoble Hierarch; 1 Ouroboroid.</p>
<p class="sb-note">Prioritize Basking Broodscale and Glaring Fleshraker. Force is justified by Blade of the Bloodchief, Urza's Saga, and other artifact-heavy configurations; trim a Force for Thoughtseize if the opponent is presenting fewer permanent targets.</p>
</section>

<section class="matchup-card">
<h3>Boros Ponza / Land Boom</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Grist, the Hunger Tide; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 4 Malevolent Rumble; 1 Ignoble Hierarch.</p>
<p class="sb-note">Fetch basics early. Thoughtseize attacks the high-impact land-destruction and prison cards, while Charm covers cheap hate permanents. Force of Vigor is optional only after seeing enough enchantment targets.</p>
</section>

<section class="matchup-card">
<h3>Amulet Titan</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Force of Vigor; 1 Fulminator Mage.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Green Sun's Zenith; 1 Grist, the Hunger Tide; 1 Young Wolf; 1 Ouroboroid.</p>
<p class="sb-note">The paper list removes three Insights; this list has only two, so the additional Zenith is the corresponding trim. Force targets Amulet of Vigor, Spelunking, and Urza's Saga.</p>
</section>

<section class="matchup-card">
<h3>Grixis Reanimator</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Ashiok, Dream Render; 1 Grist, the Hunger Tide; 1 Murderous Cut.</p>
<p><strong>OUT:</strong> 1 Badgermole Cub; 1 Dredger's Insight; 1 Ignoble Hierarch; 1 Haywire Mite; 1 Ouroboroid.</p>
<p class="sb-note">Ashiok occupies the sideboard slot that is the third Fatal Push in the paper guide. Push answers Psychic Frog and Emperor of Bones; Cut and Grist remain live against the larger reanimation targets.</p>
</section>

<section class="matchup-card">
<h3>Mono-Green Eldrazi / Eldrazi Ramp</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Force of Vigor; 1 Fulminator Mage; 1 Grist, the Hunger Tide.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Green Sun's Zenith; 1 Endurance; 1 Ignoble Hierarch; 1 Ouroboroid.</p>
<p class="sb-note">This follows the same restrained package used against RG Eldrazi and Eldrazi Tron. Force is for Fight Rigging, Trinisphere, Chalice, and similar noncreature engines rather than for the large threats.</p>
</section>

<section class="matchup-card">
<h3>Jeskai / Azorius Energy-Control</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Grist, the Hunger Tide; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Green Sun's Zenith; 1 Walking Ballista; 1 Young Wolf; 1 Endurance.</p>
<p class="sb-note">This extends the UW Chant plan to broader control configurations. Bauble covers free interaction and rebound spells; against a creature-heavy energy build, use the Boros Energy plan instead.</p>
</section>

<section class="matchup-card">
<h3>Domain Zoo</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Force of Vigor; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 4 Malevolent Rumble; 1 Endurance; 1 Ignoble Hierarch.</p>
<p class="sb-note">This is the paper plan with one fewer Fatal Push, so Badgermole Cub remains in the deck. Force is primarily for Leyline of the Guildpact and Leyline Binding.</p>
</section>

<section class="matchup-card">
<h3>Living End</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Soulless Jailer; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 3 Badgermole Cub; 1 Haywire Mite; 1 Young Wolf on the play or 1 Ouroboroid on the draw.</p>
<p class="sb-note">Keep all three Green Sun's Zenith copies because they find Endurance, although only at sorcery speed. Bauble and Jailer stop the Living End spell cast from exile; sacrifice Bauble before evoking Endurance.</p>
</section>

<section class="matchup-card">
<h3>UB Frog</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Fatal Push; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Delighted Halfling; 1 Dredger's Insight; 1 Endurance; 1 Walking Ballista; 1 Ignoble Hierarch; 1 Young Wolf on the play or 1 Ouroboroid on the draw.</p>
<p class="sb-note">Thoughtseize is central against the counterspell-heavy plan. The removal package answers Psychic Frog and other must-kill threats while preserving the core engine.</p>
</section>

<section class="matchup-card">
<h3>Esper Blink / Azorius Blink</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Delighted Halfling; 2 Dredger's Insight; 1 Ignoble Hierarch; 1 Haywire Mite.</p>
<p class="sb-note">The paper guide has a third Push and also removes Young Wolf. With only two Push in this sideboard, keep the Wolf. Bauble catches free Solitude and Ephemerate rebound.</p>
</section>

<section class="matchup-card">
<h3>Neobrand / Neoform</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Ashiok, Dream Render; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 1 Haywire Mite; 1 Ouroboroid; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Dredger's Insight.</p>
<p class="sb-note">Bauble counters the no-mana spells, while Ashiok shuts off Summoner's Pact and other library searches. Preserve a fast clock rather than adding narrow creature removal.</p>
</section>

<section class="matchup-card">
<h3>Dimir Midrange / Dimir Flash</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Fatal Push; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Delighted Halfling; 1 Dredger's Insight; 1 Endurance; 1 Walking Ballista; 1 Ignoble Hierarch; 1 Ouroboroid.</p>
<p class="sb-note">This uses the UB Frog structure as the default against counterspell-heavy Dimir decks. On the play, Young Wolf may be the final cut instead of Ouroboroid.</p>
</section>

<section class="matchup-card">
<h3>Tameshi Belcher</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Fulminator Mage; 1 Vexing Bauble.</p>
<p><strong>OUT:</strong> 2 Badgermole Cub; 1 Grist, the Hunger Tide; 2 Malevolent Rumble.</p>
<p class="sb-note">This is the paper guide's compact Belcher package. Keep Haywire Mite for Lotus Bloom and Goblin Charbelcher; Bauble stops suspended Bloom and other no-mana spells.</p>
</section>

<section class="matchup-card">
<h3>Yawgmoth Mirror</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Grist, the Hunger Tide; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Green Sun's Zenith; 1 Walking Ballista; 1 Ouroboroid.</p>
<p class="sb-note">The paper guide brings a third Push and removes three Insights. In this list, the third Zenith replaces the missing Insight as the fifth trim. The plan emphasizes direct removal and the second Grist rather than Force of Vigor or Soulless Jailer.</p>
</section>

<section class="matchup-card">
<h3>UW Chant</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Grist, the Hunger Tide; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Green Sun's Zenith; 1 Walking Ballista; 1 Young Wolf.</p>
<p class="sb-note">This is the direct adaptation of the paper guide, replacing its third Insight with the additional Zenith in this list.</p>
</section>

<section class="matchup-card">
<h3>Tron</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 1 Force of Vigor; 1 Fulminator Mage; 1 Grist, the Hunger Tide.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Green Sun's Zenith; 1 Endurance; 1 Ignoble Hierarch; 1 Ouroboroid.</p>
<p class="sb-note">This mirrors the Eldrazi Tron approach without adding the broader Ashiok package. Force is for Map, Chalice, and Karn artifacts; Thoughtseize and Fulminator pressure the mana plan.</p>
</section>

<section class="matchup-card">
<h3>Hollow One / Vengevine</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Ashiok, Dream Render; 1 Murderous Cut; 1 Soulless Jailer; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Haywire Mite; 1 Ouroboroid; 1 Badgermole Cub; 1 Malevolent Rumble; 1 Dredger's Insight; 1 Green Sun's Zenith.</p>
<p class="sb-note">Keep Endurance and the remaining Zeniths. Jailer stops permanent recursion, while Ashiok can clear the graveyard after milling.</p>
</section>

<section class="matchup-card">
<h3>Mill</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Fatal Push; 1 Vexing Bauble; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 3 Malevolent Rumble; 2 Dredger's Insight; 1 Grist, the Hunger Tide.</p>
<p class="sb-note">This deliberately leaves the deck at 61 cards. Keep every Green Sun's Zenith because it finds Endurance, avoid unnecessary self-mill, and use Charm as an answer to Mesmeric Orb when relevant.</p>
</section>

<section class="matchup-card">
<h3>Burn</h3>
<p><strong>IN:</strong> 2 Fatal Push; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 1 Ouroboroid; 1 Grist, the Hunger Tide; 1 Malevolent Rumble; 1 Green Sun's Zenith.</p>
<p class="sb-note">Keep both Dredger's Insights for the life gain. Charm can either answer Roiling Vortex or gain 5 life; Force of Vigor is too costly unless the opponent shows an unusually enchantment-heavy plan.</p>
</section>

<section class="matchup-card">
<h3>Samwise / Devoted Creature Combo</h3>
<p><strong>IN:</strong> 3 Thoughtseize; 2 Fatal Push; 1 Culling Ritual; 1 Murderous Cut; 1 Witherbloom Charm.</p>
<p><strong>OUT:</strong> 2 Dredger's Insight; 1 Endurance; 1 Green Sun's Zenith; 1 Malevolent Rumble; 1 Formidable Speaker; 1 Ignoble Hierarch; 1 Ouroboroid.</p>
<p class="sb-note">The default follows the same pattern used against other compact combo decks: discard plus efficient interaction, without boarding every possible answer. Against artifact-heavy Samwise builds, replace one Thoughtseize with Force of Vigor; against graveyard-dependent loops, Soulless Jailer can replace the remaining Rumble.</p>
</section>

</div>

## Last updated

July 29, 2026.