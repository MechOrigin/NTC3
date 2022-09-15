onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'nethers_exoticism:crafting_table_recipe_1',
        'nethers_exoticism:crafting_table_recipe_2',
        'minecraft:crafting_table',
        'fundamental:mixed_crafting_table',
        'fundamental:custom_to_regular_table_workaround',
        'fundamental:acacia_crafting_table',
        'fundamental:birch_crafting_table',
        'fundamental:dark_oak_crafting_table',
        'fundamental:jungle_crafting_table',
        'fundamental:spruce_crafting_table'
      ])

    modifyShaped(event, 'minecraft:crafting_table', 1, ['BB ', 'AA ', '   '], {
        A: '#minecraft:planks',
        B: '#forge:gems/flint'
      })

    modifyShaped(event, 'minecraft:end_crystal', 1, ['AAA', 'ABA', 'ACA'], {
      A: '#forge:glass',
      B: 'minecraft:beacon',
      C: 'minecraft:ghast_tear'
    })

    modifyShapeless(event, 'minecraft:flint_and_steel', 1, ['#forge:ingots/steel', '#forge:gems/flint'])

    modifyShaped(event, 'minecraft:piston', 1, ['AAA', 'BCB', 'BDB'], {
    A: '#minecraft:planks',
    B: 'quark:sturdy_stone',
    C: '#forge:rods/iron',
    D: "#forge:ingots/redstone_iron"
    })

});