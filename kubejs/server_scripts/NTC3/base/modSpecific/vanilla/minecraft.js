onEvent('recipes', (event) => {

    removeRecipeByID(e, [
        'nethers_exoticism:crafting_table_recipe_1',
        'nethers_exoticism:crafting_table_recipe_2'
      ])

    modifyShaped(event, 'minecraft:crafting_table', 1, ['AA ', 'BB ', '   '], {
        A: 'minecraft:planks',
        B: 'minecraft:flint'
      })

    //modifyShapeless(event, 'minecraft:crafting_table', 1, ['minecraft:planks', '#appliedenergistics2:knife'])

});