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

If you need to overwrite a native function liked to the framework (custom inventory for example), you can overwrite my functions by added them in the config file.
You don't need to use all functions.

#### <Badge type="client" text="Client" /> Initialize the framework
```lua
-- Function to init your framework
--@side Server
-- variable "Core" is the global variable for core script
-- variable "CoreInv" is the global variable for inventory scriot
Config.InitFramework = function()
end
```
#### <Badge type="client" text="Client" /> Restrict the color palette
```lua
--Function to restrict the color palette
--@side Client
--@param typeItem = 'horse' or 'component'
--@return false if the player can't open the color palette
--@return true if the player can open the color palette
Config.CanOpenColorPalette = function(typeItem)
    return true
end
```
#### <Badge type="client" text="Client" /> Restrict the access to specific stable
```lua
--Function to restrict the access to a specific stable
--@side Client
--@param stableID is the ID of stable
--@return false to cancel the access to the stable
Config.CanAccessToStable= function(stableID)
    return true
end
```
#### <Badge type="client" text="Client" /> Stop saddlebag animation {badge=Badge personnalisé}
```lua
--Client event to stop the saddlebag animation
'kd_stable:client:closeSaddleBag'
```

#### <Badge type="server" text="Server" /> Initialize the framework
```lua
-- Function to init your framework
--@side Server
-- variable "Core" is the global variable for core script
-- variable "CoreInv" is the global variable for inventory scriot
Config.InitFramework = function()
end
```
#### <Badge type="server" text="Server" /> Check money
```lua
--Function to check if the player has enough money to buy the cloth
--@side Server
--@param source is the serverID of the player
--@param price is the price of the cloth
--@param moneyType is the devise of the price : 0 for normal & 1 for gold
--@return true/false to accept/deny the purchase
Config.CanBuy = function(source,price,moneyType)
end
```
#### <Badge type="server" text="Server" /> Give money
```lua
--Function to give money to player
--@side Server
--@param source is the serverID of the player
--@param amount is the money amount
Config.GiveMoney = function(source,amount)
end
```
#### <Badge type="server" text="Server" /> Get Identifier
```lua
--Function to get the identifier of player
--@side Server
--@param source is the serverID of the player
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
--@side Server
--@param source is the serverID of the player
--@return the job name
Config.GetJob = function(source)
end
```
#### <Badge type="server" text="Server" /> Get RP Name
```lua
--Function to get the player's job
--@side Server
--@param source is the serverID of the player
--@return the player name
Config.GetRPName = function(source)
end
```
#### <Badge type="server" text="Server" /> Use Item
```lua
--Function to use an item
--@side Server
--@param source is the serverID of the player
--@param item is the item name
--@param amount is the amount used
--@param meta is the meta of item
--@param remove is if the item have to be removed
--@return true if the item is used
Config.UseItem = function(source,item,amount,meta,remove)
end
```
#### <Badge type="server" text="Server" /> Notification
```lua
--Function to send notification to player
--@side Server
--@param source is the serverID of the player
--@param text is the text of notification
Config.Notify = function(source,text)
end
```
#### <Badge type="server" text="Server" /> Overwrite horse slot
```lua
--Function to overwrite the number of horse the player can buy
--@side Server
--@param typeOrder is the type of order : 'horse' or 'wagon'
--@param source is the serverID of the player
Config.overwriteMaxSlot = function(typeOrder,source)
end
```
#### <Badge type="server" text="Server" /> Open saddlebag
```lua
--Function to open saddlebag
--@side Server
--@param source is the serverID of the player
--@param saddlebagID is the ID of container
Config.OpenSaddlebag = function(source,saddlebagID)
end
```
#### <Badge type="server" text="Server" /> Open wagon locker
```lua
--Function to open wagon locker
--@side Server
--@param source is the serverID of the player
--@param wagonID is the ID of container
Config.OpenWagonLocker = function(source,wagonID)
end
```
#### <Badge type="server" text="Server" /> Overwrite price
```lua
--Function to overwrite order price
--@side Server
--@param source is the serverID of the player
--@param typeOrder = 'horse' or 'component' or 'wagon' or 'reviveHorse'
--@param data is the identifiant of item
--       horseID for 'reviveHorse'
--       horseID for 'horse'
--       category for 'component'
--       wagonID for 'wagon'
--@param price is the default price of order
--@return price with the price format
Config.overwritePrice = function(source,typeOrder, data, price)
    return true
end
```
#### <Badge type="server" text="Server" /> Restrict horse buying
```lua
--Function to restrict specific horse buying
--@side Server
--@param source is the serverID of the player
--@param horseID is the ID of wagon in Config.horses list
--@return false to cancel the order
Config.restrictHorseBuying(source,horseID)
    return true
end
```
#### <Badge type="server" text="Server" /> Restrict wagon buying
```lua
--Function to restrict specific wagon buying
--@side Server
--@param source is the serverID of the player
--@param wagonID is the ID of wagon in Config.wagons list
--@return false to cancel the order
Config.restrictWagonBuying(source,wagonID)
    return true
end
```

