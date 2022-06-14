onEvent('tags.items', e => {
    e.add('forge:tools/hammer', 'immersiveengineering:hammer')
    e.add('forge:tools/wire_cutter', 'immersiveengineering:wirecutter')

    e.add('thermal:crafting/casts', 'tconstruct:ingot_cast')
    e.add('thermal:crafting/casts', 'tconstruct:nugget_cast')
    e.add('thermal:crafting/casts', 'tconstruct:gem_cast')
    e.add('thermal:crafting/casts', 'tconstruct:rod_cast')
    e.add('thermal:crafting/casts', 'tconstruct:plate_cast')
    e.add('thermal:crafting/casts', 'tconstruct:gear_cast')
    e.add('thermal:crafting/casts', 'tconstruct:wire_cast')

    e.add('forge:nuggets/slimesteel', 'tconstruct:slimesteel_nugget');
    e.add('forge:ingots/slimesteel', 'tconstruct:slimesteel_ingot');
    e.add('forge:ingots/seared_brick', 'tconstruct:seared_brick');
    e.add('forge:nuggets/queens_slime', 'tconstruct:queens_slime_nugget');
    e.add('forge:ingots/queens_slime', 'tconstruct:queens_slime_ingot');
    e.add('forge:slimeball/magma_cream', 'minecraft:magma_cream');
    e.add('forge:honeybottle', 'minecraft:honey_bottle');
    e.add('forge:nuggets/amethyst_bronze', 'tconstruct:amethyst_bronze_nugget');
    e.add('forge:ingots/amethyst_bronze', 'tconstruct:amethyst_bronze_ingot');
    e.add('forge:nuggets/signalum', 'thermal:signalum_nugget');
    e.add('forge:ingots/signalum', 'thermal:signalum_ingot');
    e.add('forge:nuggets/lumium', 'thermal:lumium_nugget');
    e.add('forge:ingots/lumium', 'thermal:lumium_ingot');
    e.add('forge:nuggets/enderium', 'thermal:enderium_nugget');
    e.add('forge:ingots/enderium', 'thermal:enderium_ingot');
    e.add('forge:nuggets/pig_iron', 'tconstruct:pig_iron_nugget');
    e.add('forge:ingots/pig_iron', 'tconstruct:pig_iron_ingot');
    e.add('forge:nuggets/netherite', 'tconstruct:netherite_nugget');
    e.add('forge:ingots/netherite', 'minecraft:netherite_ingot');
    e.add('forge:nuggets/hepatizon', 'tconstruct:hepatizon_nugget');
    e.add('forge:ingots/hepatizon', 'tconstruct:hepatizon_ingot');
    e.add('forge:nuggets/manyullyn', 'tconstruct:manyullyn_nugget');
    e.add('forge:ingots/manyullyn', 'tconstruct:manyullyn_ingot');

    //why?!
    e.add('forge:nuggets/aluminum', 'antimatter_shared:nugget_aluminium');
    e.add('forge:ingots/aluminum', 'antimatter_shared:ingot_aluminium');
    e.add('forge:rods/aluminum', 'antimatter_shared:rod_aluminium');
    e.add('forge:plates/aluminum', 'antimatter_shared:plate_aluminium');
    e.add('forge:gear/aluminum', 'antimatter_shared:gear_aluminium');
    e.add('forge:dust/aluminum', 'antimatter_shared:dust_aluminium');

    //e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')
  })
  onEvent('tags.blocks', e => {
//    e.add('minecraft:climbable', ['minecraft:chain', /additionallanterns:.*_chain/])
    e.add('minecraft:base_stone_overworld', [ 'minecraft:stone',
                                              'minecraft:andesite',
                                              'minecraft:diorite',
                                              'minecraft:granite',
                                              'quark:jasper',
                                              'quark:limestone',
                                              'quark:shale',
                                              'antimatter_shared:granite_red',
                                              'antimatter_shared:granite_black',
                                              'antimatter_shared:marble',
                                              'antimatter_shared:basalt',
                                              'antimatter_shared:komatiite',
                                              'antimatter_shared:limestone',
                                              'antimatter_shared:green_schist',
                                              'antimatter_shared:blue_schist',
                                              'antimatter_shared:kimberlite',
                                              'antimatter_shared:quartzite'])

      e.add('forge:wg_stone', [               'minecraft:stone',
                                              'minecraft:andesite',
                                              'minecraft:diorite',
                                              'minecraft:granite',
                                              'quark:jasper',
                                              'quark:limestone',
                                              'quark:shale',
                                              'antimatter_shared:granite_red',
                                              'antimatter_shared:granite_black',
                                              'antimatter_shared:marble',
                                              'antimatter_shared:basalt',
                                              'antimatter_shared:komatiite',
                                              'antimatter_shared:limestone',
                                              'antimatter_shared:green_schist',
                                              'antimatter_shared:blue_schist',
                                              'antimatter_shared:kimberlite',
                                              'antimatter_shared:quartzite'])
      
  })

  onEvent('tags.entity_types', e => {
    // e.add('mob_grinding_utils:noswab', [/productivebees:.+/, 'artifacts:mimic',])
  })
  