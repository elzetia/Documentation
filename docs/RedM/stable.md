# :horse: Stable
Documentation relating to the kd_stable.

:::tabs
== BUY
[Buy the script](https://store.kaddarem.com/package/5705468)
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
- 
Congratulation, the **Stable** script is ready to be used!

## 2. Usage
Go on the store (blip on the map) to get the prompt. Press the key to open the menu.

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
-- DOCUMENTATION : https://docs.kaddarem.com/
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

If you need to overwrite a native function linked to the framework (custom inventory for example), you can overwrite my functions by added them in the config file.
You don't need to use all functions.

#### <Badge type="client" text="Client" /> Initialize the framework
Function to init your framework
```lua
-- variable "Core" - global variable for core script
-- variable "CoreInv" - global variable for inventory scriot
Config.InitFramework = function()
end
```
#### <Badge type="client" text="Client" /> Restrict the access to specific stable
Function to restrict the access to a specific stable
```lua
-- @param stableID - ID of stable
--@return false to cancel the access to the stable
Config.CanAccessToStable= function(stableID)
    return true
end
```
#### <Badge type="client" text="Client" /> Restrict the color palette
Function to restrict the color palette
```lua
-- @param typeItem = 'horse' or 'component'
--@return false if the player can't open the color palette
--@return true if the player can open the color palette
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
--@return true/false to accept/deny the purchase
Config.CanBuy = function(source,price,moneyType)
end
```
#### <Badge type="server" text="Server" /> Get Identifier
Function to get the identifier of player
```lua
-- @param source - serverID of the player
--@return array with identifier and charid key
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
--@return the job name
Config.GetJob = function(source)
end
```
#### <Badge type="server" text="Server" /> Get RP Name
Function to get the player's job
```lua
-- @param source - serverID of the player
--@return the player name
Config.GetRPName = function(source)
end
```
#### <Badge type="server" text="Server" /> Give money
Function to give money to player
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
Function to send notification to player
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
Config.OpenSaddlebag = function(source,saddlebagID)
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
Function to overwrite the number of horse the player can buy
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
--@return price with the price format
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
--@return true if the item is used
Config.UseItem = function(source,item,amount,meta,remove)
end
```

#### <Badge type="server" text="Server" /> Restrict horse buying
Function to restrict specific horse buying
```lua
-- @param source - serverID of the player
-- @param horseKey - key of Horse in Config.horses list
--@return false to cancel the order
Config.restrictHorseBuying(source,horseKey)
    return true
end
```
#### <Badge type="server" text="Server" /> Restrict wagon buying
Function to restrict specific wagon buying
```lua
-- @param source - serverID of the player
-- @param wagonKey - key of wagon in Config.wagons list
--@return false to cancel the order
Config.restrictWagonBuying(source,wagonKey)
    return true
end
```
### Events

#### <Badge type="client" text="Client" /> Stop saddlebag animation {badge=Badge personnalisé}
Client event to stop the saddlebag animation
```lua
'kd_stable:client:closeSaddleBag'
```

### Actions

Actions are the new way to modify how the script works or add new features added in the `v1.1.0`. These actions are event that occurs at a specific point in time during the execution of the script. But contrary to events, actions are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
RegisterAction(<actionName>, function(<argumentList>)
  -- Add your new feature here
end)
```

- Example :
```lua
RegisterAction('spawnHorse', function(source,horse,horseID)
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
RegisterAction('initHorsePrompt', function(promptGroupId,entity)
end)
```
#### <Badge type="client" text="Client" /> loopTargeting
Fires when the player targets a registered horse
```lua
-- @param target - entity ID of the target
-- @param distance - distance between the player and the entity
RegisterAction('loopTargeting', function(target,distance)
end)
```
#### <Badge type="server" text="Server" /> bequeathHorse
Fires when the player bequeaths the horse to another player
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param targetID - serverID of the player targeted
RegisterAction('bequeathHorse', function(source,horseID,targetID)
end)
```
#### <Badge type="server" text="Server" /> buyComponent
Fires when the player buy a new component
```lua
-- @param source - serverID of the player
-- @param componentData - information about the component
-- componentData.category - category of the component
-- componentData.hash - hash of the component
-- @param price - price of the horse
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
RegisterAction('buyComponent', function(source,componentData,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> buyHorse
Fires when the player buy a new horse
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
-- @param price - price of the horse
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
RegisterAction('buyHorse', function(source,horseData,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> buyWagon
Fires when the player buy a new wagon
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
RegisterAction('buyWagon', function(source,wagonData,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> deleteHorse
Fires when the player deletes a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
RegisterAction('deleteHorse', function(source,horseID)
end)
```
#### <Badge type="server" text="Server" /> horseDying
Fires when a horse is dying
```lua
-- @param horseID - ID of the horse
RegisterAction('horseDying', function(horseID)
end)
```
#### <Badge type="server" text="Server" /> horsesLoaded
Fires when the list of horses is loaded
```lua
RegisterAction('horsesLoaded', function()
end)
```
#### <Badge type="server" text="Server" /> initMySQL
Fires when the MySQL is initilized
```lua
RegisterAction('initMySQL', function()
end)
```
#### <Badge type="server" text="Server" /> newFavorite
Fires when the player defines a new favourite horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
RegisterAction('newFavorite', function(source,horseID)
end)
```
#### <Badge type="server" text="Server" /> openSaddlebag
Fires when the player opens a saddlebag
```lua
-- @param source - serverID of the player
-- @param saddleID - ID of the saddlebag
RegisterAction('openSaddlebag', function(source,saddleID)
end)
```
#### <Badge type="server" text="Server" /> openWagonLocker
Fires when the player opens a wagon locker
```lua
-- @param source - serverID of the player
-- @param wagonID - ID of the wagon
RegisterAction('openWagonLocker', function(source,wagonID)
end)
```
#### <Badge type="server" text="Server" /> putSaddlebag
Fires when the player puts a saddlebag on a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param saddleID - ID of the saddlebag
RegisterAction('putSaddlebag', function(source,horseID,saddleID)
end)
```
#### <Badge type="server" text="Server" /> reviveHorse
Fires when the player revives a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param price - price of the wagon
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
RegisterAction('putSaddlebag', function(source,horseID,price,moneyType)
end)
```
#### <Badge type="server" text="Server" /> spawnHorse
Fires when the player spawns a horse
```lua
-- @param source - serverID of the player
-- @param horse - entity ID of the horse (server entity)
-- @param horseID - ID of the horse
RegisterAction('spawnHorse', function(source,horse,horseID)
end)
```
#### <Badge type="server" text="Server" /> spawnWagon
Fires when the player spawns a wagon
```lua
-- @param source - serverID of the player
-- @param wagon - entity ID of the wagon (server entity)
-- @param wagonID - ID of the wagon
RegisterAction('spawnWagon', function(source,wagon,wagonID)
end)
```
#### <Badge type="server" text="Server" /> stableHorse
Fires when the player stables a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param stableID - ID of the stable
RegisterAction('stableHorse', function(source,horseID,stableID)
end)
```
#### <Badge type="server" text="Server" /> stableWagon
Fires when the player stables a wagon
```lua
-- @param source - serverID of the player
-- @param wagonID - ID of the wagon
-- @param stableID - ID of the stable
RegisterAction('stableWagon', function(source,wagonID,stableID)
end)
```
#### <Badge type="server" text="Server" /> takeSaddlebag
Fires when the player takes a saddlebag off a horse
```lua
-- @param source - serverID of the player
-- @param horseID - ID of the horse
-- @param saddleID - ID of the saddlebag
RegisterAction('takeSaddlebag', function(source,horseID,saddleID)
end)
```

