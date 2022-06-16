onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'nethers_exoticism:crafting_table_recipe_1',
        'nethers_exoticism:crafting_table_recipe_2'
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
    D: "#forge:ingots/red_alloy"
    })

});