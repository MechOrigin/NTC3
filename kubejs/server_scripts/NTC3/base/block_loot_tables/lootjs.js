onEvent("lootjs", (event) => {
    event
    .addBlockLootModifier("secretly_complicated:lignite_coal_ore")
    .addWeightedLoot([1, 6], [
        Item.of("morecharcoal:coal_chunk"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:tetrahedrite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:stibnite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:antimony_impure_dust"),
    ]);    

    event
    .addBlockLootModifier("secretly_complicated:pyrite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ]); 
  
    event
    .addBlockLootModifier("secretly_complicated:chalcopyrite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:brown_limonite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:yellow_limonite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:banded_iron_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:malachite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:lazurite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("minecraft:lapis_lazuli"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:cinnabar_ore")
    .addWeightedLoot([1, 3], [
        Item.of("thermal:cinnabar"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:cassiterite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tin_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:graphite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:graphite_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:aluminium_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:copper_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:emerald_ore")
    .addWeightedLoot([1, 3], [
        Item.of("minecraft:emerald"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:lead_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:lead_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:silver_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:silver_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:nickel_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:nickel_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:tin_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tin_impure_dust"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:zinc_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:zinc_impure_dust"),
    ]);
  
});