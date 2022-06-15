onEvent('recipes', (event) => {

<<<<<<< HEAD
    removeRecipeByID(e, [
=======
    removeRecipeByID(event, [
>>>>>>> 37fc8baf095bce5239cbc647cb15f0cea53fb4af
        'nethers_exoticism:crafting_table_recipe_1',
        'nethers_exoticism:crafting_table_recipe_2'
      ])

    modifyShaped(event, 'minecraft:crafting_table', 1, ['AA ', 'BB ', '   '], {
<<<<<<< HEAD
        A: 'minecraft:planks',
        B: 'minecraft:flint'
=======
        A: '#minecraft:planks',
        B: '#forge:gems/flint'
>>>>>>> 37fc8baf095bce5239cbc647cb15f0cea53fb4af
      })

    //modifyShapeless(event, 'minecraft:crafting_table', 1, ['minecraft:planks', '#appliedenergistics2:knife'])

});