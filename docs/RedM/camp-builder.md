# :tent: Camp builder
Documentation relating to the kd_campbuilder.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/package/5253763)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/4tKYbyswJGQ?si=vmhF5oiiYUOn8RJp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_campbuilder works with RedEM:RP and VORP. Be sure you installed one of them before to use this script.

- Drag and drop the resource in your resources folder
  - kd_campbuilder
- Add this ensure in your server.cfg
  - `ensure kd_campbuilder`
- Edit the redemrp_inventory to allow kd_campbuilder to add items dynamically.

In redemrp_inventory > client > cl_main.lua add :
```lua
RegisterNetEvent("redemrp_inventory:UpdateItems")
AddEventHandler("redemrp_inventory:UpdateItems", function(_items)
    Config.Items = _items
end)
```

In redemrp_inventory > server > sv_main add : 
```lua
RegisterServerEvent("redemrp_inventory:CreateCustomItem")
AddEventHandler("redemrp_inventory:CreateCustomItem", function(name, data)
    local source = source
    Config.Items[name] = data
    TriggerClientEvent("redemrp_inventory:UpdateItems",source,Config.Items)
end)
```
- Create the table in database
```sql
CREATE TABLE IF NOT EXISTS `camps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `identifier` varchar(50) NOT NULL,
  `characterid` int NOT NULL,
  `propsetModel` varchar(100) NOT NULL,
  `coordinates` varchar(100) NOT NULL,
  `lastrefresh` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
```
- Congratulation, the Camp builder script is ready to be use !
## 2. Usage
Go to the shop (maker in the map) to buy your camp. You will be able to preview them by pressed E.

To place your camp, use the item in your inventory. A preview of the camp will appears. You can rotate it with the mouse wheel . Press Enter to validate the location. 

A boxes will appears instead of your camp. Wait the countdown to have your camp. 

To remove your camp, use the command `/campunbuild` near than it. A countdown will be display again. Wait the end to take it with the command `/camptake` . The camp will be back in your inventory.

## 3. Config.lua
```lua
--@param test
Config = {}
-- Choose your framework
Config.framework = "VORP" -- can be "RedEM", "VORP"

-- Distance to spawn the seller
Config.distanceSpawnPed = 50.0
-- Distance to display the prompt to open the shop
Config.distanceOpenShop = 3.0
-- Distance to spawn camp
Config.distanceShowCamp = 50.0
-- Distance to show countdown
Config.distanceShowTimer = 20.0

-- Key to open the shop (https://www.rdr2mods.com/forums/topic/1575-list-of-keyboard-enums/)
Config.keyOpenShop = 'INPUT_JUMP'
-- Blip icon for shops
Config.blip = "blip_region_caravan"
-- Blip name for shops
Config.blipName = "Boutique de campement"

Config.menu = {}
-- Menu title
Config.menu.title = 'Campement'
-- Menu position
Config.menu.align = 'top-left'

-- Countdown to build camp
Config.durationBuild = 10000
-- Countdown to unbuild camp
Config.durationUnbuild = 10000

-- Fire animation
Config.ptfx = {
  swap = {
    dict = "scr_dm_ftb",
    name = "scr_mp_chest_spawn_smoke",
    scale = 2.0
  }
}

-- Boxes propset
Config.boxes = {
  small = {
    model = 'pg_mp_possecamp_tent_trader01x_b',
    sizeVegModifier = 1.0
  },
  medium = {
    model = 'pg_mp_possecamp_tent_trader03x_b',
    sizeVegModifier = 1.0
  },
  big = {
    model = 'pg_ls_soldier2_01x',
    sizeVegModifier = 1.0
  },
}

-- Shops configuration
Config.shops = {
  {
    -- Identifier of the shop
    name = "shop1",
    -- Configuration of the ped
    ped = {
      netID = 0,
      entityID = 0,
      model = "A_M_M_RANCHER_01",
      coords = vector4(2738.53, -927.25, 42.22, 216.48)
    },
    -- Configuraiton of the preview
    preview = {
      spawn = vector4(2729.02,-930.6,43.24,210.75),
      distance = 5.0,
    }
  },
}

-- Camp available
Config.items = {
  ['Camp'] = { --Category name (can be edited)
    {
      label = "Campement 1", -- Name of the item
      price = 500, -- Price of the camp
      shops = {'shop1'}, -- List of shops where the camp can be buy
      propsetModel = "pg_ambcamp01x_tent_canvas_leanto04", -- Propset model (https://github.com/femga/rdr3_discoveries/blob/master/objects/propsets_list.lua)
      sizeVegModifier = 5.0, -- Size of the vegetation modifier
      size = "small" -- type of boxes when build/unbuild (defined in Config.boxes)
    },
    {label = "Campement 2", price = 500, shops = {'shop1'}, propsetModel = "pg_ambcamp01x_tent_plaid_lean01", sizeVegModifier = 5.0, size = "small"},
    {label = "Campement 3", price = 500, shops = {'shop1'}, propsetModel = "pg_ambcamp01x_tent_plaid_lean02", sizeVegModifier = 5.0, size = "small"},
    {label = "Campement 4", price = 500, shops = {'shop1'}, propsetModel = "pg_ambcamp01x_tent_sticks_tall", sizeVegModifier = 5.0, size = "small"},
    {label = "Campement 5", price = 500, shops = {'shop1'}, propsetModel = "pg_ambcamp01x_tent_string_lean", sizeVegModifier = 2.0, size = "small"},
    {label = "Campement 6", price = 500, shops = {'shop1'}, propsetModel = "pg_ambcamp01x_tent_string_tarp", sizeVegModifier = 5.0, size = "small"},
  },
  -- ['New category'] = {
  --   {label = "feu 1", price = 100, shops = {'shop1'}},
  --   {label = "feu 2", price = 200, shops = {'shop2'}}
  -- }
}
```