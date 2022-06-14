onEvent('recipes', (event) => {

    materialsToUnify.forEach((material) => {
        let dust = getPreferredItemInTag(Ingredient.of(`#forge:dust_impures/${material}`)).id;
        let dust_clean = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;

        antimatter_impure_processing(
            event,
            material,
            dust,
            dust_clean
        );
    });

    function antimatter_impure_processing(
        event,
        material,
        dust,
        dust_clean
    ) {
        if (dust == air || dust_clean == air) {
            return;
        }

        event.custom({
            type: 'lychee:item_inside',
            item_in: {
                item: dust
            },
            block_in: {
                blocks: ['water_cauldron'],
                state: {
                    level: 3
                }
            },
            post: [
                {
                    type: 'drop_item',
                    item: dust_clean
                },
                {
                    type: 'place',
                    block: {
                        blocks: ['water_cauldron'],
                        state: {
                            level: 3
                        }
                    }
                }
            ]
        });
    
        }

});

