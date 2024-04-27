# :necktie: Clothing Store
Documentation relating to the kd_clothingstore.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/redm/clothing-store)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/afp8_zY7WX0?si=tWRzRmBMctwgdtKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_clothingstore works with VORP, RedEM:RP (2023 & old), QR Core, RSG Core & RPX frameworks. 

To install kd_clothingstore:
- Drag and drop the resource into your resources folder
  - kd_clothingstore 
- Add this ensure in your server.cfg
  - `ensure kd_clothingstore`
- Be sure you remove your previous clothing store script

::: details For RedEM:RP (old only)
You have to edit the keep the ensure of redemrp_clothing and replace it with this empty resource :

https://github.com/kaddarem-tebex/redemrp_clothing/releases
:::

⚠ If you want to use clothes as items. You have to create some items. The list of items is in Config.clothesItem variable in the config file. ⚠

Congratulation, the **Clothing Store** script is ready to be used!

## 2. Usage
Go on the store (blip on the map) to get the prompt. Press the key to open the menu.

## 3. Config.lua

:::details Config.lua
```lua
Config = {}

Config.Debug = false
Config.BlipSprite = `blip_shop_tailor`	 -- Clothing shop sprite
Config.BlipSpriteWardrobes = `blip_shop_wardrobe`
Config.DisplayOutfitId = false
Config.PercentResell = 0.33 -- Use 0 tu turn off the resell feature : 0.5 = 50% of the initial price
Config.CanResellInWardrobe = false --Allow player to resell clothes in wardrobe
Config.OpenStoreNewCharacter = true
Config.EnablePrompt = true
Config.ExtraLightIntensity = 10.0 -- Light added in the store to see better the character
Config.OffsetRoutingBucket = 0 --value added to the serverID of the player to define the instance ID
Config.enableClothesManagement = true --use false to turn off the clothes management feature

Config.commands = { --set false to disable a command
	refreshAllClothes = "rac" --command to refresh all clothes, use "/rac 0" to only update clothes states
}

Config.oldVORPChar = false --(Only for VORP users) to use the C# version of VORP Character

Config.Keys = {
	enter = "INPUT_FRONTEND_RB",
	buyGold = "INPUT_INTERACT_ANIMAL",
	turn = "INPUT_CONTEXT_X",
	delete = "INPUT_SWITCH_SHOULDER",
	resell = "INPUT_LOOK_BEHIND"
}

Config.KeysDisabled = {
	`INPUT_MOVE_UD`,
	`INPUT_MOVE_LR`,
	`INPUT_MOVE_LB`,
	`INPUT_COVER`
}

Config.clothesInItem = true -- set false to disable this feature
Config.clothesItem = { -- Only necessary if Config.clothesInItem = true
	gloves = 'gloves',
	eyewear = 'eyewear',
  dresses = 'dresses',
	shirts_full = 'shirts_full',
  armor = 'armor',
	gauntlets = 'gauntlets',
	suspenders = 'suspenders',
	neckties = 'neckties',
	neckwear = 'neckwear',
	vests = 'vests',
	coats = 'coats',
	coats_closed = 'coats',
	cloaks = 'cloaks',
	ponchos = 'ponchos',
	masks = 'masks',
	masks_large = 'masks',
	hats = 'hats',
	accessories = 'accessories',
	loadouts = 'loadouts',
	satchels = 'satchels',
	jewelry_rings_right = 'jewelry',
	jewelry_rings_left = 'jewelry',
	jewelry_bracelets = 'jewelry',
	aprons = 'aprons',
  pants = 'pants',
	skirts = 'skirts',
	belts = 'belts',
	belt_buckles = 'belt_buckles',
	gunbelts = 'gunbelts',
	holsters_left = 'holsters',
	boots = 'boots',
	boot_accessories = 'boot_accessories',
	spats = 'spats',
	chaps = 'chaps',
  badges = 'badges',
  gunbelt_accs = 'gunbelt_accs',
  hair_accessories = 'hair_accessories'
}

Config.Stores = {
	{ -- VALENTINE
		book = vector4(-326.17, 773.757, 117.5, -170.0), --location of the book
		fittingRoom = vector4(-329.31, 775.11, 120.63, 294.79), --location of the fitting room
		pedCoords = vector4(-325.67, 772.63, 116.44, 11.3), --location of the tailor ped
		pedModel = `S_M_M_Tailor_01`, --model of the tailor ped
		blip = true, --if the blip is displayed for this store
		distancePrompt = 2.0, --distance to display the prompt
		needInstance = true,
	},
}

Config.Wardrobes = {
	{
		location = vector3(1223.55, -1288.67, 76.9),
		blip = true,
		distancePrompt = 2.0,
		needInstance = false
	},
}

-- Price for each category
-- use -1 to turn off the category
Config.Prices = {
	coats_closed = 5,
	chaps = 4,
	spats = 5,
	ponchos = 4.25,
	holsters_left = 3.12,
	masks = 10,
	neckwear = 2.15,
	armor = 20,
	jewelry_rings_left = 1.25,
	jewelry_rings_right = 1.25,
	boot_accessories = 3.55,
	gloves = 4.25,
	badges = 2,
	gunbelts = 5,
	loadouts = 6.7,
	vests = 5,
	shirts_full = 5,
	pants = 5,
	suspenders = 1.5,
	gunbelt_accs = 1,
	hats = 3.5,
	cloaks = 5,
	coats = 5,
	belts = 2,
	gauntlets = 3,
	eyewear = 6,
	boots = 5,
	jewelry_bracelets = 2,
	satchels = 10,
	accessories = 2,
	neckties = 2,
	skirts = 5,
	belt_buckles = 1,
	dresses = 5
}

Config.modelPrices = {}
Config.modelPrices["male"] = {}
Config.modelPrices["female"] = {}
for category in pairs (Config.Prices) do
	Config.modelPrices["male"][category] = {}
	Config.modelPrices["female"][category] = {}
end
--Config.modelPrices[<sexe>][<category>][<number>] = <price>
Config.modelPrices["male"]["hats"][2] = Config.Prices.hats * 1.25
Config.modelPrices["male"]["hats"][3] = {money=2.75, gold = 2}
Config.modelPrices["male"]["hats"][4] = 5.5
Config.modelPrices["male"]["hats"][5] = 4.25
Config.modelPrices["male"]["hats"][6] = Config.Prices.hats * 2
Config.modelPrices["female"]["skirts"][6] = Config.Prices.hats * 2

--Function to buy item with gold for framework without native way to do it
Config.CanBuyWithGold = function (source,price)
	return false
end
```
:::

## 4. For developers

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
#### <Badge type="server" text="Server" /> Apply new Outfit
Function fires when a player selects an outfit
```lua
--@param source is the serverID of the player
--@param clothes in the table with category in key and hash in value of the outfit
Config.ApplyNewOutfit = function(source,clothes)
end
```
#### <Badge type="server" text="Server" /> Check money
Function to check if the player has enough money
```lua
--@param source is the serverID of the player
--@param price is the price of the cloth
--@param moneyType is the devise of the price : 0 for normal & 1 for gold
-- @return true/false to accept/deny the purchase
Config.CanBuy = function(source,price, moneyType)
  return true
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
#### <Badge type="server" text="Server" /> Get Clothes
Function to get the player's clothes
```lua
--@param source is the serverID of the player
--clothes is a table with clothing category in key and hash of cloth in value.
--clothes can be a json array
Config.GetClothes = function(source)
    local clothes = {}
    return clothes
end
```
#### <Badge type="server" text="Server" /> Get Identifier
Function to get the player identifier
```lua
--@param source is the serverID of the player
-- @return array with identifier and charid key
Config.GetIdentifier = function(source)
    local player = {
        identifier = identifier, --the identifier of player
        charid = charid --the charid of player. If not needed just use ''
    }
    return player
end
```
#### <Badge type="server" text="Server" /> Get Skin
Function to get the player's skin
```lua
--@param source is the serverID of the player
--skin is a table with category in key and data in value.
Config.GetSkin = function(source)
    local skin = {}
    return skin
end
```
#### <Badge type="server" text="Server" /> Give Item
Function to give item to player
```lua
--@param source is the serverID of the player
--@param item is the item name
--@param quantity is the quantity of item
--@param meta is the meta of the item
Config.GiveItem= function(source,item,quantity,meta)
end
```
#### <Badge type="server" text="Server" /> Give Money
Function to give money to player
```lua
--@param source is the serverID of the player
--@param amount is the amount of money to be sent to the player
Config.GiveMoney = function(source, amount)
end
```
#### <Badge type="server" text="Server" /> Notify
Function to send notification to player from serverside
```lua
--@param source is the serverID of the player
--@param text is the text to be sent to the player
Config.Notify = function(source, text)
end
```
#### <Badge type="server" text="Server" /> Register an Item
Function to register as usable an item
```lua
--@param item is the item name
--@param callback is the callback event with two arguments :
--callback(source,{hash = clothesHash})
Config.RegisterUseItem = function(item,callback)
end
```
#### <Badge type="server" text="Server" /> Remove money
Function to register as usable an item
```lua
--@param source is the serverID of the player
--@param price is the price of the cloth
--@param moneyType is the devise of the price : 0 for normal & 1 for gold
Config.RemoveMoney = function(source,price, moneyType)
end
```
#### <Badge type="server" text="Server" /> Save new clothes
Function to save the new clothe in the database
```lua
--@param source is the serverID of the player
--@param dataPreview is a table with the new cloth data :
-- dataPreview.menu is the category of cloth
-- dataPreview.hash is the hash of cloth
Config.SaveNewCloth = function(source,dataPreview)
end
```

### Events
#### <Badge type="client" text="Client" /> Equip all clothes
You can equip all clothes with this client event :
```lua
TriggerEvent('kd_clothingstore:resetClothes')
```
#### <Badge type="client" text="Client" /> Listen the closing of menu
You can grab the closing of the menu after the ped creation with this client event :
```lua
RegisterNetEvent('kd_clothingstore:client:endCreation', function()
end)
```
#### <Badge type="client" text="Client" /> Open the store
Event to open the store
```lua
--@param needInstance = true/false : Define if the wardrobe need personnal instance
TriggerEvent('kd_clothingstore:openStore', needInstance)
```
#### <Badge type="client" text="Client" /> Open the wardrobe
Event to open the wardrobe
```lua
--@param needInstance = true/false : Define if the wardrobe need personnal instance
TriggerEvent('kd_clothingstore:openWardrobe', needInstance)
```
#### <Badge type="client" text="Client" /> Remove all clothes
You can remove all clothes with this client event :
```lua
TriggerEvent('kd_clothingstore:removeAllClothes')
```
#### <Badge type="client" text="Client" /> Use outfit
You can apply an outfit from his id to a player by trigger this server event (from client) :
```lua
TriggerServerEvent('kd_clothingstore:useOutfitId',id)
```

### Filters

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script added in the `v2.4.8`. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
exports.kd_clothingstore:RegisterFilter(<actionName>, function(variable)
  -- Add your new data here
	return variable -- Don't forget to return the value
end)
```

- Example :
```lua
kd_clothingstore:RegisterFilter('canAccessToSpecificClothes', function(canAccess,source,clothesData,moneyType)
  local job = GetJob(source)
	if job ~= "tailor" then
		return false, SendNotif("Only tailer can buy clothes")
	end
  return canAccess
end)
```

#### <Badge type="client" text="Client" /> Restrict the saving of new outfit
Fires to disable the "New" & "Save" button in the outfit menu
```lua
-- @param canSave - boolean : return false to disable buttons
exports.kd_clothingstore:RegisterFilter('canSaveNewOutfit', function(canSave)
	return canSave
end)
```
#### <Badge type="server" text="Server" /> Edit metadata of clothes item
Fires before add the item in the player inventory
```lua
-- @param metadata - table : metadata of the item
-- @param source - int : serverID of the player
-- @param item - string : item name
exports.kd_clothingstore:RegisterFilter('editItemMeta', function(meta,source,item)
	return canAccess
end)
```
#### <Badge type="server" text="Server" /> Restrict specific clothes
Fires before buy a new clothes
```lua
-- @param canAccess - boolean : return false to disable the buying
-- @param source - int : serverID of the player
-- @param clothesData - table : information about clothes
-- @param clothesData.hash - int : hash of the clothes
-- @param moneyType - int : devise of the order : 0 for normal & 1 for gold
exports.kd_clothingstore:RegisterFilter('canAccessToSpecificClothes', function(canAccess,source,clothesData,moneyType)
	return canAccess
end)
```
#### <Badge type="server" text="Server" /> Restrict the using of clothes/outfit item
Fires when a player use an item
```lua
-- @param canUse - boolean : return false to not use the item
-- @param source - int : serverID of the player
-- @param metadata - table : item metadata
exports.kd_clothingstore:RegisterFilter('canUseItem', function(canUse,source,metadata)
	return canAccess
end)
```

## 5. Compatibility issues

### <Badge type="rsg" text="RSG" /> Fix clothes after character creation
Go in `rsg-apperance\client\functions.lua` line 531 and add edit these line :
```lua:line-numbers=530
TriggerServerEvent("rsg-appearance:SetPlayerBucket" , 0)
TriggerServerEvent("rsg-appearance:SaveSkin", CreatorCache, ClothesCache) -- [!code --]
local newClothesData = {}  -- [!code ++]
for k, v in pairs(ClothesCache) do   -- [!code ++]
		local id = tonumber(v.model)   -- [!code ++]
		if id >= 1 then   -- [!code ++]
				if IsPedMale(PlayerPedId()) then   -- [!code ++]
						if clothing["male"][k] ~= nil then   -- [!code ++]
								if clothing["male"][k][id] ~= nil then   -- [!code ++]
										if clothing["male"][k][id][tonumber(v.texture)] ~= nil then   -- [!code ++]
												newClothesData[k] = {hash = tonumber(clothing["male"][k][id][tonumber(v.texture)].hash)}   -- [!code ++]
										end   -- [!code ++]
								end   -- [!code ++]
						end   -- [!code ++]
				else   -- [!code ++]
						if clothing["female"][k] ~= nil then   -- [!code ++]
								if clothing["female"][k][id] ~= nil then   -- [!code ++]
										if clothing["female"][k][id][tonumber(v.texture)] ~= nil then   -- [!code ++]
												newClothesData[k] = {hash = tonumber(clothing["male"][k][id][tonumber(v.texture)].hash)}   -- [!code ++]
										end   -- [!code ++]
								end   -- [!code ++]
						end   -- [!code ++]
				end   -- [!code ++]
		end   -- [!code ++]
end   -- [!code ++]
TriggerServerEvent("rsg-appearance:SaveSkin", CreatorCache, newClothesData)   -- [!code ++]
```
### <Badge type="rsg" text="RSG" /> Fix rsg-bathing
Go in `rsg-bathing\fxmanifest.lua` line 24 and remove the `rsg-wardrobe` dependency
```lua:line-numbers=21
dependencies {
    'rsg-core',
    'rsg-appearance', 
    'rsg-wardrobe' -- [!code --]
}
```
Go in `rsg-bathing\client\client.lua` line 367 and edit `UndressCharacter` function
```lua:line-numbers=367
UndressCharacter = function()
    local ped = PlayerPedId()
    local EquippedWeapons = {}

    EquippedWeapons = exports['rsg-weapons']:EquippedWeapons()

    for i = 1, #EquippedWeapons do
        RemoveWeaponFromPed(ped, EquippedWeapons[i])
    end
    TriggerEvent('rsg-wardrobe:client:removeAllClothing') -- [!code --]
    TriggerEvent('kd_clothingstore:removeAllClothes') -- [!code ++]
end
```