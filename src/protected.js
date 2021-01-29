
const protected_nodes = [
	"travelnet:travelnet",
	"travelnet:elevator",
    "default:ladder_wood",
    "default:ladder_steel",
	"default:chest_locked",
    "default:chest",
    "default:obsidian_glass",
    "digtron:inventory",
    "digtron:combined_storage",
    "digtron:fuelstore",
    "drawers:acacia_wood1",
    "xdecor:mailbox",
    "pipeworks:deployer_off",
    "default:bookshelf",
    "drawers:acacia_wood2",
    "drawers:pine_wood2",
    "elements:hv_material_reducer",
    "technic:tool_workshop",
    "technic:constructor_mk2_off",
    "cottages:water_gen",
    "technic:hv_compactor",
    "technic:gold_chest",
    "pipeworks:filter",
    "technic:hv_generator",
    "default:furnace",
    "technic:hv_alloy_furnace",
    "technic:quarry",
    "technic:constructor_mk3_off",
    "technic:injector",
    "streets:printer",
    "technic:lv_generator",
    "drawers:wood1",
    "streets:signworkshop",
    "pipeworks:mese_tube_000000",
    "technic:solar_furnace",
    "technic:hv_grinder",
    "technic:gold_locked_chest",
    "technic:lv_alloy_furnace",
    "digtron:combined_storage",
    "drawers:junglewood4",
    "moreblocks:circular_saw",
    "drawers:acacia_wood4",
    "technic:iron_locked_chest",
    "technic:hv_centrifuge",
    "elements:hv_particle_accelerator",
    "technic:cnc",
    "technic:mithril_chest",
    "pipeworks:digiline_filter",
    "drawers:aspen_wood4",
    "technic:lv_battery_box0",
    "technic:hv_thresher",
    "drawers:wood2",
    "technic:water_extractor",
    "cottages:shelf_locked",
    "drawers:pine_wood4",
    "drawers:pine_wood1",
    "paleotest:fossil_analyzer",
    "elements:hv_decay_accelerator",
    "technic:lv_extractor",
    "elements:hv_rtg_generator",
    "elements:lv_atomic_constructor",
    "elements:hv_atomic_constructor",
    "drawers:wood4",
    "technic:lv_sawmill",
    "cottages:shelf",
    "technic:hv_nuclear_reactor_core",
    "paleotest:dna_cultivator",
    "technic:constructor_mk1_off",
    "technic:lv_grinder",
    "vessels:shelf",
    "technic:hv_electric_furnace",
    "pipeworks:autocrafter",
    "technic:water_powered_grinder",
    "currency:safe",
    "pipeworks:nodebreaker_off",
    "technic:hv_sawmill",
    "technic:hv_compressor",
    "elements:lv_material_reducer",
    "cottages:threshing_floor",
    "digtron:duplicator",
    "technic:hv_battery_box0",
    "drawers:controller",
    "digtron:builder",
    "bones:bones",
    "digtron:fuelstore",
    "digilines:chest",
    "technic:hv_extractor",
    "technic:silver_locked_chest",
    "digtron:battery_holder",
    "technic:lv_compressor",
    "cottages:handmill",
    "technic:copper_chest",
    "realchess:chessboard",
    "technic:lv_electric_furnace",
    "drawers:acacia_wood1",
    "technic:coal_alloy_furnace",
    "elements:hv_isotope_separator",
    "technic:copper_locked_chest",
    "drawers:aspen_wood1",
    "drawers:aspen_wood2",
    "drawers:junglewood2",
    "technic:silver_chest",
    "currency:barter",
    "pipeworks:dispenser_off",
    "digtron:auto_controller",
    "technic:iron_chest",
    "pipeworks:mese_filter",
    "drawers:junglewood1",
    "cottages:anvil",
    "technic:mithril_locked_chest",
    
	// advtrains nodes
	"advtrains:dtrack_st",
	"advtrains:dtrack_st_45",
	"advtrains:dtrack_cr_60"
];

module.exports = function(mapblock){
	for (let i=0; i<protected_nodes.length; i++){
		if (mapblock.node_id_mapping[protected_nodes[i]] >= 0){
			return true;
		}
	}

	return false;
};
