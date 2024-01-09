# :horse: Stable
Documentation relating to the kd_stable.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/package/5705468)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/LUgGS5I5FjM?si=wIuK5RGZWczm_twX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
To install kd_stable:
- Drag and drop the resource into your resources folder
  - kd_stable 
- Add this ensure in your server.cfg
  - `ensure kd_stable`
- Be sure you remove your previous stable script
Congratulation, the **Stable** script is ready to be used!

## 2. Usage
Go to the store (blip on the map) to get the prompt. Press the key to open the menu.

## 3. Config.lua file
**Price format**

You can use dollar and/or gold to set the price in the config file
```lua
--To use only dollar
price = 5.00 --or price = {money = 5.0}
--To use dollar and fold
price = {money = 5.00, gold = 2}
--To use only gold
price = {gold = 2}
```

:::details Config.lua
```lua
-------------------------------
-- DOCUMENTATION : https://docs.jumpon-studios.com/
--------------------------------

-------------------------------------------
-- DON'T EDIT THIS FILE
-- TO OVERWRITE CONFIG VALUE, USE overwriteConfig.lua file instead
-------------------------------------------

Config = {}
Config.debug = false

Config.realisticMod = false
-- if true :
-- No horse teleportation. You can only whistle horse if he is near than you.
-- Horse are linked on the last stable you use to stabling it.

Config.distancePromptStore = 2.0 --maximum distance to display the prompt to open the store
Config.distanceSpawnPed = 15.0 --maximum distance to spawn the stable man
Config.distanceSpawnHorse = 50.0 --distance to spawn the horse when whistle
Config.distanceTeleportHorse = 200.0 -- maximum distance to whistle horse before teleport him
Config.ExtraLightIntensity = 15.0 --Light intensity when preview horse in stable
Config.syncTimer = 2000 --Loop timer to resync horse after using instance
Config.useMenuWithMouse = true --turn off to disable the mouse controler for the menu
Config.needAllHorseWagon = true --turn true to only allow wagon if all needed horses are selected
Config.refreshTimerHorseStat = 1000 --time in ms to calcul the new stat of horse. Little value = more precise but more heavy for CPU
Config.saveHorseStatTimer = 60*1000 --time in ms to save new horses stats in database
Config.disableHorseFlee = false --disable the possibility to flee horses
Config.usePromptHorseStatistics = true --turn off the prompt to display horses statistics
Config.maxDistanceWithHorseshoes = 100 --in kilometers
Config.warningMessageHorseshoePercent = 20 --display a warning message when the horseshoes is under this value
Config.stopRunHorseshoesPercent = 10 --disable horse run when horseshoes is under this value
Config.useHorseHolster = true --false to disable the horse holster
Config.winExpByWalk = { --horse exp win by walking
	distance = 200, --distance to earn new points (in meters)
	point = 1 --amount earn by each distance
}
Config.horseSlots = 5 -- maximum of horse for players (set -1 to unlimited)
Config.wagonSlots = 5 -- maximum of horse for players (set -1 to unlimited)

Config.allowCustomColorForHorse = true --turn off to remove the prompt to allow custom color on horse coat
Config.palettesForHorseCoat = {
	tint_generic_clean = false,
	tint_hair = false,
	tint_horse = true,
	tint_horse_leather = false,
	tint_leather = false,
	tint_makeup = false
}
Config.allowCustomColorForComponent = true --turn off to remove the prompt to allow custom color on horse component
Config.palettesForComponent = {
	tint_generic_clean = true,
	tint_hair = true,
	tint_horse = true,
	tint_horse_leather = true,
	tint_leather = true,
	tint_makeup = true
}

Config.saddlebagMod = 2
-- 0 : No horse saddlebag
-- 1 : Saddlebag only for horse owner
-- 2 : Everyone can access to the saddlebag

Config.saddlebag = {
	maxWeight = 1000.0,
	maxSlots = 10 --for QBR & RSG & VORP
}

Config.keys = {
	enter = "INPUT_FRONTEND_ACCEPT",
	buyGold = "INPUT_INTERACT_ANIMAL",
	favourite = "INPUT_SHOP_SPECIAL",
	ride = "INPUT_FRONTEND_RB",
	bequeath = "INPUT_OPEN_SATCHEL_MENU",
	release = "INPUT_FRONTEND_RS",
	unequip = "INPUT_SHOP_SELL",
	saddlebag = "INPUT_CREATOR_ACCEPT",
	wagonLocker = "INPUT_SHOP_SPECIAL",
	takeSaddlebag = "INPUT_FRONTEND_RS",
	colorPalette = "INPUT_CREATOR_RS",
	takeLantern = "INPUT_HUD_SPECIAL"
}

Config.items = {
	feed = {
		{
			name = 'carrots', --item name
			health = 30, --health bonus for horse
			stamina = 30, --stamina bonus for horse
			remove = true,
		},
	},
	brush = {  --let empty to unlimited horse brush
		{
			name = "horsebrush",
			remove = false,
		}
	}
}

Config.stables = {
	{
		id = "valentine",--must be unique
		name = "Valentine",
		location = vec4(-365.15,792.68,115.18,178.47),
		pedModel = `u_m_m_bwmstablehand_01`,
		blip = `blip_shop_horse`,--set to false to turn the blip off
    disableHorseMenu = false, --set to true to disable the horse menu part
    disableWagonMenu = false, --set to true to disable the wagon menu part
		horsesAvailable = {},--let empty to allow all horses, use false to disable
		canBuyHorseComponents = true, --use false to disable the buying of horse components
		previewHorse = vec4(-369.59,793.00,115.15,177.26), --location to preview new horse
		previewMyHorse = vec4(-371.76,786.87,115.16,272.08), --location to preview your horse
		equipMyHorse = vec4(-371.76,786.87,115.16,272.08), --location for the ride horse scene
		wagonsAvailable = {},--let empty to allow all wagons, use false to disable
		previewWagon = vec4(-371.76,786.87,115.16,272.08), --location to preview wagon
		spawnWagon = vec4(-370.69, 775.85, 116.26, 269.11), --location to spawn wagon
		storeSaddle = vec4(-365.235, 790.888, 116.175,0.0),
		inside = { --polyzone
			vec3(-376.765, 793.418, 116.124),
			vec3(-363.036, 793.695, 116.188),
			vec3(-362.191, 784.502, 116.180),
			vec3(-376.236, 783.673, 116.177)
		},
		parkWagon = { --polyzone to store the wagon (optional)
			vec3(1199.763, -179.827, 100.658),
			vec3(1201.357, -169.945, 100.649),
			vec3(1211.116, -169.303, 101.508),
			vec3(1213.158, -177.519, 101.384)
		}
	},
	...
}

Config.activities = {
	speed = {
		price = {money = 5, gold = 8},
		numberRepeatToLevelUp = 2
	},
	acceleration = {
		price = {money = 5, gold = 8},
		numberRepeatToLevelUp = 2
	},
	handling = {
		price = 5,
		numberRepeatToLevelUp = 2
	}
}

Config.trainings = {
	{
		inside = {
			vec3(-380.670, 767.151, 116.089),
			vec3(-398.417, 765.606, 115.804),
			vec3(-402.168, 768.392, 115.727),
			vec3(-403.746, 787.087, 115.772),
			vec3(-400.821, 790.560, 115.963),
			vec3(-385.480, 791.913, 115.882),
			vec3(-381.809, 788.601, 115.925)
		},
		blip = `blip_horse_owned_bonding_4`,--set to false to turn the blip off
		jobs = {}, --let empty to not restrict to a specific job,
		activities = {'speed','acceleration','handling'} --'speed'/'acceleration'/'handling'
	}
}


Config.prices = {
	horse_saddles = 5,
	horse_saddlebags = 5,
	saddle_stirrups = 5,
	saddle_horns = 5,
	horse_blankets = 5,
	horse_bedrolls = 5,
	horse_manes = 5,
	horse_tails = 5,
	horse_shoes = 5,
	horse_accessories = 5,
	horse_bridles = 5,
	saddle_lanterns = 5,
	horse_mustache = 5,
	wagon = 100,
	horse = 100,
	vehicle_tints = 10,
	vehicle_propsets = 10,
	vehicle_liveries = 10,
	vehicle_lantern_propsets = 10,
	vehicle_extras = 10,
	horse_outfits = 10,
	reviveHorse = {money=100, gold = 23} --set false to disable the revive of horse
}



Config.modelPrices = {}
for category in pairs (Config.prices) do
	Config.modelPrices[category] = {}
	Config.modelPrices[category] = {}
end

Config.modelPrices['horse_saddles'][2] = {money = 50,gold = 2}

Config.horses = {
	[1] = {
		price = {money=2.75,gold = 2},
		name = "New name",
		noDieByAge = true, --if true, the horse will not die by aging (optional)
		age = 5, --Age of the horse if 'Horse Aging' add-ons is loaded
		variations = {
			"A_C_Horse_AmericanPaint_Greyovero",
			"A_C_Horse_AmericanPaint_Overo",
			"A_C_Horse_AmericanPaint_SplashedWhite",
			"a_c_horse_eagleflies",
			"A_C_Horse_AmericanPaint_Tobiano"
		},
		attributes = {
			speed = 4,-- 1<>10
			maxSpeed = 8, -- speed<>10
			acceleration = 2,-- 1<>10
			maxAcceleration = 9, -- acceleration<>10
			handling= 1,--1 = heavy,2 = standard,3 = race,4 = elite
			maxHandling = 4, --handling<>4
		}
	},
	...
}

Config.prices.wagon = 100

Config.wagonLocker = { --default locker size for wagon
	maxWeight = 1000.0,
	maxSlots = 10 --for QBR & RSG & VORP
}

Config.wagons = {
  [1] = {
		price = {money = 500.0, gold = 15},
		model = "armysupplywagon",
		locker = {
			maxWeight = 5000.0,
			maxSlots = 15
		}
	},
  ...
}
```
:::
## 4. Add new activity
You can add more activity to train your horse by edit the file : `modules/horseTraining/client/activities.lua`
```lua
trainingTracks = {
  {
    type = "handling", -- Type of training : "handling", "speed" or "acceleration"
    start = vec4(-386.273, 788.489, 115.865, 93.648), -- location of the start
    camPreview = { -- Camera for the trailer
      { -- Start position
        coords = vec3(-386.293, 800.838, 117.883),
        rot = vec3(-7.000,0.000,155.131),
      },
      { -- End position
        coords = vec3(-388.248, 800.757, 117.926),
        rot = vec3(-7.000,0.000,165.14),
      },
    },
    props = { -- list of props to spawn for the training
      {
        model = `mp001_p_mp_jump_sackshort01`,
        coords = vec3(-392.630, 768.967, 114.730),
        rotation = vec3(0, 0, -85.999),
      },
    },
    checkpoints = { -- list of checkpoints
      {
        coords = vec3(-392.8, 768.856, 116.826),
        marker = "ring", -- optional : Type of marker "ring", "cylinder" or marker hash
        size = vec2(1.0,1.0), -- optional : Size of the marker
        rotation = vec3(0,0,-85) -- optional : Rotation of the marker
        distance = 3.0 -- optional : Distance to valid the checkpoint
      },
    }
  },
```
## 5. For developers

### Functions

If you need to overwrite a native function linked to the framework (custom inventory for example), you can overwrite my functions by adding them in the config file.
You don't need to use all the functions.

#### <Badge type="client" text="Client" /> Initialize the framework
Function to init your framework
```lua
-- variable "Core" - global variable for core script
-- variable "CoreInv" - global variable for inventory scriot
Config.InitFramework = function()
end
```
#### <Badge type="client" text="Client" /> Restrict the access to specific stable
Function to restrict access to a specific stable
```lua
-- @param stableID - ID of stable
-- @return false to cancel the access to the stable
Config.CanAccessToStable= function(stableID)
    return true
end
```
#### <Badge type="client" text="Client" /> Restrict the color palette
Function to restrict the color palette
```lua
-- @param typeItem = 'horse' or 'component'
-- @return false if the player can't open the color palette
-- @return true if the player can open the color palette
Config.CanOpenColorPalette = function(typeItem)
    return true
end
```
#### <Badge type="server" text="Server" /> Check money
Function to check if the player has enough money to buy something
```lua
-- @param source - serverID of the player
-- @param price - price of the cloth
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
-- @return true/false to accept/deny the purchase
Config.CanBuy = function(source,price,moneyType)
end
```
#### <Badge type="server" text="Server" /> Get Identifier
Function to get the identifier of player
```lua
-- @param source - serverID of the player
-- @return array with identifier and charid key
Config.GetIdentifier = function(source)
    local player = {
        identifier = identifier, --the identifier of player
        charid = charid --the charid of player. If not needed just use ''
    }
    return player
end
```
#### <Badge type="server" text="Server" /> Get Job
Function to get the player's job
```lua
-- @param source - serverID of the player
-- @return the job name
Config.GetJob = function(source)
end
```
#### <Badge type="server" text="Server" /> Get RP Name
Function to get the player's name
```lua
-- @param source - serverID of the player
-- @return the player name
Config.GetRPName = function(source)
end
```
#### <Badge type="server" text="Server" /> Give money
Function to give money to the player
```lua
-- @param source - serverID of the player
-- @param amount - money amount
Config.GiveMoney = function(source,amount)
end
```
#### <Badge type="server" text="Server" /> Initialize the framework
Function to init your framework
```lua
-- variable "Core" - global variable for core script
-- variable "CoreInv" - global variable for inventory scriot
Config.InitFramework = function()
end
```
#### <Badge type="server" text="Server" /> Notification
Function to send notification to the player
```lua
-- @param source - serverID of the player
-- @param text - text of notification
Config.Notify = function(source,text)
end
```
#### <Badge type="server" text="Server" /> Open saddlebag
Function to open saddlebag
```lua
-- @param source - serverID of the player
-- @param saddlebagID - ID of container
-- @param horseID - ID of the horse
Config.OpenSaddlebag = function(source,saddlebagID, horseID)
end
```
#### <Badge type="server" text="Server" /> Open wagon locker
Function to open wagon locker
```lua
-- @param source - serverID of the player
-- @param wagonID - ID of container
Config.OpenWagonLocker = function(source,wagonID)
end
```
#### <Badge type="server" text="Server" /> Overwrite horse slot
Function to overwrite the number of horses the player can buy
```lua
-- @param typeOrder - type of order : 'horse' or 'wagon'
-- @param source - serverID of the player
Config.overwriteMaxSlot = function(typeOrder,source)
end
```

#### <Badge type="server" text="Server" /> Overwrite price
Function to overwrite order price
```lua
-- @param source - serverID of the player
-- @param typeOrder = 'horse' or 'component' or 'wagon' or 'reviveHorse'
-- @param data - identifiant of item
--       horseID for 'reviveHorse'
--       horseID for 'horse'
--       category for 'component'
--       wagonID for 'wagon'
-- @param price - default price of order
-- @return price with the price format
Config.overwritePrice = function(source,typeOrder, data, price)
    return true
end
```
#### <Badge type="server" text="Server" /> Use Item
Function to use an item
```lua
-- @param source - serverID of the player
-- @param item - item name
-- @param amount - amount used
-- @param meta - meta of item
-- @param remove - if the item have to be removed or not
-- @return true if the item is used
Config.UseItem = function(source,item,amount,meta,remove)
end
```

#### <Badge type="server" text="Server" /> Restrict horse buying
Function to restrict specific horse buying
```lua
-- @param source - serverID of the player
-- @param horseKey - key of Horse in Config.horses list
-- @return false to cancel the order
Config.restrictHorseBuying(source,horseKey)
    return true
end
```
#### <Badge type="server" text="Server" /> Restrict wagon buying
Function to restrict specific wagon buying
```lua
-- @param source - serverID of the player
-- @param wagonKey - key of wagon in Config.wagons list
-- @return false to cancel the order
Config.restrictWagonBuying(source,wagonKey)
    return true
end
```
### Events

#### <Badge type="client" text="Client" /> Stop saddlebag animation
Client event to stop the saddlebag animation
```lua
'kd_stable:client:closeSaddleBag'
```

### Exports

#### <Badge type="client" text="Client" /> Get player's horses
exports to get the list of player's horses datas
```lua
exports.kd_stable:getMyHorses()
```

#### <Badge type="client" text="Client" /> Get player's wagons
exports to get the list of player's wagons datas
```lua
exports.kd_stable:getMyWagons()
```

#### <Badge type="server" text="Server" /> Get script configuration
exports to get the script configuration
```lua
exports.kd_stable:getConfig()
```

#### <Badge type="server" text="Server" /> Get horse data
exports to get the horse datas
```lua
-- @param horseID - ID of the horse (optional)
-- if horseID is missing, the function returns the full list of horses
exports.kd_stable:getHorses(horseID)
```

#### <Badge type="server" text="Server" /> Get wagon data
exports to get the wagon datas
```lua
-- @param wagonID - ID of the wagon (optional)
-- if wagonID is missing, the function returns the full list of wagons
exports.kd_stable:getWagons(wagonID)
```



### Actions

[Actions](/DeveloperResources/actions) are the new way to modify how the script works or add new features added in the `v1.1.0`. These actions are event that occurs at a specific point in time during the execution of the script. But contrary to events, actions are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
exports.kd_stable:RegisterAction(<actionName>, function(<argumentList>)
  -- Add your new feature here
end)
```

- Example :
```lua
exports.kd_stable:RegisterAction('spawnHorse', function(source,horse,horseID)
  local horseData = Horses[source][horseID]
  local lanternID = horseData.components.saddle_lanterns?.id or false
  if lanternID then
    Entity(horse).state:set('kd_stable_lanternID',tonumber(lanternID),true)
  end
end)
```
- All actions :
#### <Badge type="client" text="Client" /> initHorsePrompt
Fires when the horse prompt is initialized
```lua
-- @param promptGroupId - prompt group ID
-- @param entity - entity ID of the target
exports.kd_stable:RegisterAction('initHorsePrompt', function(promptGroupId,entity)
end)
```
#### <Badge type="client" text="Client" /> letterBox
Fires when the letter box state is switched
```lua
-- @param show - state of letter box: true/false
exports.kd_stable:RegisterAction('letterBox', function(show)
end)
```
#### <Badge type="client" text="Client" /> loopTargeting
Fires when the player targets a registered horse
```lua
-- @param target - entity ID of the target
-- @param distance - distance between the player and the entity
exports.kd_stable:RegisterAction('loopTargeting', function(target,distance)
end)
```
#### <Badge type="client" text="Client" /> refreshPreviewMyHorse
Fires when the horse components are refreshed
```lua
-- @param entity - entity ID of the horse
-- @param horseData - all horse's datas
exports.kd_stable:RegisterAction('refreshPreviewMyHorse', function(entity,horseData)
end)
```
#### <Badge type="client" text="Client" /> updatePreview
Fires when user select a new item in the menu
```lua
-- @param itemMenuData - all data of menu's item
exports.kd_stable:RegisterAction('updatePreview', function(itemMenuData)
end)
```
#### <Badge type="server" text="Server" /> bequeathHorse
Fires when the player bequeaths the horse to another player
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param targetID - serverID of the player targeted
exports.kd_stable:RegisterAction('bequeathHorse', function(source,horseID,targetID)
end)
```
#### <Badge type="server" text="Server" /> bequeatWagon
Fires when the player bequeaths the wagon to another player
```lua
-- @param source - serverID of the player
-- @param wagonID - ID of the horse
-- @param targetID - serverID of the player targeted
exports.kd_stable:RegisterAction('bequeathWagon', function(source,wagonID,targetID)
end)
```
#### <Badge type="server" text="Server" /> buyComponent
Fires when the player buys a new component
```lua
-- @param source - serverID of the player
-- @param componentData - information about the component
-- componentData.category - category of the component
-- componentData.hash - hash of the component
-- @param price - price of the horse
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
exports.kd_stable:RegisterAction('buyComponent', function(source,componentData,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> buyHorse
Fires when the player buys a new horse
```lua
-- @param source - serverID of the player
-- @param horseData - information about the horse
-- horseData.id - ID of the horse
-- horseData.model - model of the horse
-- horseData.favourite - is favourite horse
-- horseData.name - horse's name
-- horseData.stable - stable where the horse is bought
-- horseData.isFemale - is horse a female
-- horseData.speed - horse's speed statistic
-- horseData.acceleration - horse's acceleration statistic
-- horseData.handling - horse's handling statistic
-- horseData.components - array of horse's components <key: category, value: componentData>
-- horseData.birth - (need aging add-on) horse's birthday
-- horseData.deathAge - (need aging add-on) horse's age of death
-- @param price - price of the horse
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
exports.kd_stable:RegisterAction('buyHorse', function(source,horseData,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> buyWagon
Fires when the player buys a new wagon
```lua
-- @param source - serverID of the player
-- @param wagonData - information about the wagon
-- wagonData.id - ID of the wagon
-- wagonData.model - model of the wagon
-- wagonData.name - name of the wagon
-- wagonData.stable - stable where the wagon is bought
-- wagonData.vehicle_tints - tint of the wagon
-- wagonData.vehicle_extras - extra of the wagon
-- wagonData.vehicle_lantern_propsets - lantern of the wagon
-- wagonData.vehicle_propsets - propset of the wagon
-- wagonData.vehicle_liveries - livery of the wagon
-- @param price - price of the wagon
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
exports.kd_stable:RegisterAction('buyWagon', function(source,wagonData,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> deleteHorse
Fires when the player deletes a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
exports.kd_stable:RegisterAction('deleteHorse', function(source,horseID)
end)
```
#### <Badge type="server" text="Server" /> deleteWagon
Fires when the player deletes a wagon
```lua
-- @param source - serverID of the player
-- @param wagonID - ID of the wagon
exports.kd_stable:RegisterAction('deleteWagon', function(source,wagonID)
end)
```
#### <Badge type="server" text="Server" /> horseDying
Fires when a horse is dying
```lua
-- @param horseID - ID of the horse
exports.kd_stable:RegisterAction('horseDying', function(horseID)
end)
```
#### <Badge type="server" text="Server" /> horsesLoaded
Fires when the list of horses is loaded
```lua
exports.kd_stable:RegisterAction('horsesLoaded', function()
end)
```
#### <Badge type="server" text="Server" /> initSQLValues
Fires when all database values are updated after the script is started
```lua
exports.kd_stable:RegisterAction('initSQLValues', function()
end)
```
#### <Badge type="server" text="Server" /> newFavorite
Fires when the player assigns a new favourite horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
exports.kd_stable:RegisterAction('newFavorite', function(source,horseID)
end)
```
#### <Badge type="server" text="Server" /> openSaddlebag
Fires when the player opens a saddlebag
```lua
-- @param source - serverID of the player
-- @param saddleID - ID of the saddlebag
exports.kd_stable:RegisterAction('openSaddlebag', function(source,saddleID)
end)
```
#### <Badge type="server" text="Server" /> openWagonLocker
Fires when the player opens a wagon locker
```lua
-- @param source - serverID of the player
-- @param wagonID - ID of the wagon
exports.kd_stable:RegisterAction('openWagonLocker', function(source,wagonID)
end)
```
#### <Badge type="server" text="Server" /> outHorse
Fires when the player get out a horse
```lua
-- @param source - serverID of the player
-- @param horse - entity ID of the horse (server entity)
-- @param horseID - ID of the horse
exports.kd_stable:RegisterAction('outHorse', function(source,horse,horseID)
end)
```
#### <Badge type="server" text="Server" /> putSaddlebag
Fires when the player puts a saddlebag on a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param saddleID - ID of the saddlebag
exports.kd_stable:RegisterAction('putSaddlebag', function(source,horseID,saddleID)
end)
```
#### <Badge type="server" text="Server" /> reviveHorse
Fires when the player revives a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param price - price of the wagon
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
exports.kd_stable:RegisterAction('putSaddlebag', function(source,horseID,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> spawnWagon
Fires when the player spawns a wagon
```lua
-- @param source - serverID of the player
-- @param wagon - entity ID of the wagon (server entity)
-- @param wagonID - ID of the wagon
exports.kd_stable:RegisterAction('spawnWagon', function(source,wagon,wagonID)
end)
```
#### <Badge type="server" text="Server" /> stableHorse
Fires when the player stables a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param stableID - ID of the stable
exports.kd_stable:RegisterAction('stableHorse', function(source,horseID,stableID)
end)
```
#### <Badge type="server" text="Server" /> stableWagon
Fires when the player stables a wagon
```lua
-- @param source - serverID of the player
-- @param wagonID - ID of the wagon
-- @param stableID - ID of the stable
exports.kd_stable:RegisterAction('stableWagon', function(source,wagonID,stableID)
end)
```
#### <Badge type="server" text="Server" /> takeSaddlebag
Fires when the player takes a saddlebag off a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param saddleID - ID of the saddlebag
exports.kd_stable:RegisterAction('takeSaddlebag', function(source,horseID,saddleID)
end)
```
#### <Badge type="server" text="Server" /> updateSQLStructure
Fires when the MySQL is initialized
```lua
exports.kd_stable:RegisterAction('updateSQLStructure', function()
end)
```
#### <Badge type="server" text="Server" /> wagonsLoaded
Fires when the list of wagons is fully loaded from the database
```lua
exports.kd_stable:RegisterAction('wagonsLoaded', function()
end)
```

### Filters

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script added in the `v1.2.0`. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
exports.kd_stable:RegisterFilter(<actionName>, function(variable)
  -- Add your new data here
	return variable -- Don't forget to return the value
end)
```

- Example :
```lua
kd_stable:RegisterFilter('filterHorseData', function(horseData)
  horseData = "New name"
  return horseData
end)
```

#### <Badge type="client" text="Client" /> canAccessToStable
Fires before display of the stable prompt
```lua
-- @param canAccess - boolean
-- @param stable - stable data
exports.kd_stable:RegisterFilter('canAccessToStable', function(canAccess, stable)
	return canAccess
end)
```
#### <Badge type="client" text="Client" /> canUseFixHorseCommand
Fires before display of the fix horse prompt with the command
```lua
-- @param canUse - boolean
exports.kd_stable:RegisterFilter('canUseFixHorseCommand', function(canUse)
	return canUse
end)
```
#### <Badge type="client" text="Client" /> canUseFixWagonCommand
Fires before fixing a wagon with the command
```lua
-- @param canUse - boolean
exports.kd_stable:RegisterFilter('canUseFixWagonCommand', function(canUse)
	return canUse
end)
```
#### <Badge type="client" text="Client" /> filterHorseData
Fires before generate horse item in menu
```lua
-- @param horseData - horse's datas
exports.kd_stable:RegisterFilter('filterHorseData', function(horseData)
	return horseData
end)
```
#### <Badge type="client" text="Client" /> filterYourHorseLine
Fires after generated horse item in menu
```lua
-- @param item - menu item
-- @param horseData - horse's datas
exports.kd_stable:RegisterFilter('filterYourHorseLine', function(item,horseData)
	return item
end)
```
#### <Badge type="client" text="Client" /> generateHorseStatisticsForMenu
Fires before the display of the horse statistics in the menu
```lua
-- @param stats - table of horse's statistics 
-- @param horseData - horse's datas
exports.kd_stable:RegisterFilter('generateHorseStatisticsForMenu', function(stats,horseData)
	return stats
end)
```
#### <Badge type="client" text="Client" /> isSameMenu
Fires before do update actions when user select new item in menu
```lua
-- @param same - boolean value
-- same = true - Do update actions
-- same = false - Cancel all update actions
exports.kd_stable:RegisterFilter('isSameMenu', function(same)
	return same
end)
```
#### <Badge type="client" text="Client" /> updateHorseDataBeforeSpawn
Fires before spawn an horse
```lua
-- @param horseData - horse's datas
exports.kd_stable:RegisterFilter('updateHorseDataBeforeSpawn', function(horseData)
	return item
end)
```
#### <Badge type="client" text="Client" /> updateItemHorseAvailable
Fires before display horse owned line in the menu
```lua
-- @param item - menu item
-- @param horseID - horse ID in the database
exports.kd_stable:RegisterFilter('updateItemHorseAvailable', function(item, horseID)
	return item
end)
```
#### <Badge type="client" text="Client" /> updateLangForNUI
Fires before update translated string
```lua
-- @param _lang - array of translated script
-- <key> is the key of string (don't edit them)
-- <value> is the translated string
exports.kd_stable:RegisterFilter('updateLangForNUI', function(_lang)
	return _lang
end)
```
#### <Badge type="client" text="Client" /> updatePreviewPrompt
Fires after all update action to edit the current prompt
```lua
-- @param currentPrompt - name of the current prompt
-- @param itemMenuData - all data of menu's item
exports.kd_stable:RegisterFilter('updatePreviewPrompt', function(currentPrompt,itemMenuData)
	return currentPrompt
end)
```
#### <Badge type="server" text="Server" /> buyHorse
Fires when player buy a new horse, just before the 'buyHorse' action
```lua
-- @param horseData - horse's datas filtered
-- @param horseID - horse ID in Config.horses table
-- @param source - serverID of the player
exports.kd_stable:RegisterFilter('buyHorse', function(horseData,horseID,source)
	return horseData
end)
```
#### <Badge type="server" text="Server" /> loadHorseData
Fires at the start of the script after all horses data is loaded
```lua
-- @param horseData - horse's datas filtered
-- @param itemMenuData - horse's datas filtered from database
exports.kd_stable:RegisterFilter('loadHorseData', function(horseData,horseDataFromDB)
	return horseData
end)
```
#### <Badge type="server" text="Server" /> updateMaxStableSlot
Fires when player opens a saddlebag
```lua
-- @param maxAmount - maximum of slot
-- @param source - serverID of the player
-- @param typeOrder - 'horse' or 'wagon'
exports.kd_stable:RegisterFilter('updateMaxStableSlot', function(maxAmount,source,typeOrder)
	return maxAmount
end)
```
#### <Badge type="server" text="Server" /> updateSaddlebagConfig
Fires when player opens a saddlebag
```lua
-- @param saddlebagConfig - saddlebag configuration
-- saddlebagConfig.maxSlots
-- saddlebagConfig.maxWeight
-- @param hash - saddlebag component hash
-- @param source - serverID of the player
-- @param horseID - ID of the horse
exports.kd_stable:RegisterFilter('updateSaddlebagConfig', function(saddlebagConfig,hash,source, horseID)
	return saddlebagConfig
end)
```