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

If you need to overwrite a native function liked to the framework (custom inventory for example), you can overwrite my functions by added them in the config file.
You don't need to use all functions.

#### <Badge type="client" text="Client" /> Initialize the framework
```lua
-- Function to init your framework
-- variable "Core" - global variable for core script
-- variable "CoreInv" - global variable for inventory scriot
Config.InitFramework = function()
end
```
#### <Badge type="client" text="Client" /> Restrict the access to specific stable
```lua
--Function to restrict the access to a specific stable
-- @param stableID - ID of stable
--@return false to cancel the access to the stable
Config.CanAccessToStable= function(stableID)
    return true
end
```
#### <Badge type="client" text="Client" /> Restrict the color palette
```lua
--Function to restrict the color palette
-- @param typeItem = 'horse' or 'component'
--@return false if the player can't open the color palette
--@return true if the player can open the color palette
Config.CanOpenColorPalette = function(typeItem)
    return true
end
```
#### <Badge type="server" text="Server" /> Check money
```lua
--Function to check if the player has enough money to buy the cloth
-- @param source - serverID of the player
-- @param price - price of the cloth
-- @param moneyType - devise of the price : 0 for normal & 1 for gold
--@return true/false to accept/deny the purchase
Config.CanBuy = function(source,price,moneyType)
end
```
#### <Badge type="server" text="Server" /> Get Identifier
```lua
--Function to get the identifier of player
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
```lua
--Function to get the player's job
-- @param source - serverID of the player
--@return the job name
Config.GetJob = function(source)
end
```
#### <Badge type="server" text="Server" /> Get RP Name
```lua
--Function to get the player's job
-- @param source - serverID of the player
--@return the player name
Config.GetRPName = function(source)
end
```
#### <Badge type="server" text="Server" /> Give money
```lua
--Function to give money to player
-- @param source - serverID of the player
-- @param amount - money amount
Config.GiveMoney = function(source,amount)
end
```
#### <Badge type="server" text="Server" /> Initialize the framework
```lua
-- Function to init your framework
-- variable "Core" - global variable for core script
-- variable "CoreInv" - global variable for inventory scriot
Config.InitFramework = function()
end
```
#### <Badge type="server" text="Server" /> Notification
```lua
--Function to send notification to player
-- @param source - serverID of the player
-- @param text - text of notification
Config.Notify = function(source,text)
end
```
#### <Badge type="server" text="Server" /> Open saddlebag
```lua
--Function to open saddlebag
-- @param source - serverID of the player
-- @param saddlebagID - ID of container
Config.OpenSaddlebag = function(source,saddlebagID)
end
```
#### <Badge type="server" text="Server" /> Open wagon locker
```lua
--Function to open wagon locker
-- @param source - serverID of the player
-- @param wagonID - ID of container
Config.OpenWagonLocker = function(source,wagonID)
end
```
#### <Badge type="server" text="Server" /> Overwrite horse slot
```lua
--Function to overwrite the number of horse the player can buy
-- @param typeOrder - type of order : 'horse' or 'wagon'
-- @param source - serverID of the player
Config.overwriteMaxSlot = function(typeOrder,source)
end
```

#### <Badge type="server" text="Server" /> Overwrite price
```lua
--Function to overwrite order price
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
```lua
--Function to use an item
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
```lua
--Function to restrict specific horse buying
-- @param source - serverID of the player
-- @param horseID - ID of wagon in Config.horses list
--@return false to cancel the order
Config.restrictHorseBuying(source,horseID)
    return true
end
```
#### <Badge type="server" text="Server" /> Restrict wagon buying
```lua
--Function to restrict specific wagon buying
-- @param source - serverID of the player
-- @param wagonID - ID of wagon in Config.wagons list
--@return false to cancel the order
Config.restrictWagonBuying(source,wagonID)
    return true
end
```
### Events

#### <Badge type="client" text="Client" /> Stop saddlebag animation {badge=Badge personnalisé}
```lua
--Client event to stop the saddlebag animation
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

