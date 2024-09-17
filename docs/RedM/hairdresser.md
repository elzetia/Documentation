# :scissors: Hairdresser
Documentation relating to the kd_hairdresser.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/redm/hairdresser)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/fk8_NfIcVTo?si=jPp9u4nlWKLpOtj1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_hairdresser works on all frameworks compatible with jo_libs ([the list](/jo_libs/)).

To install kd_hairdresser :
- Download the library: [jo_libs](https://github.com/Jump-On-Studios/RedM-jo_libs/releases/latest/download/jo_libs.zip)
- Unzip the folder and drop it in your resource folder
- Download kd_hairdresser from your [keymaster](https://keymaster.fivem.net/asset-grants?search=hairdresser)
- Unzip the folder and drop it in your resource folder
- Add this ensure in your server.cfg
  - `ensure jo_libs`
  - `ensure kd_hairdresser`

Congratulation, the Hairdresser script is ready to be use !
:::warning
Be sure you have oxmysql ensure in your server.cfg
:::

::: details For VORP
To fixed clothes and skin, you have to edit two files :
* `vorp_character/client/client.lua` - line 185
```lua:line-numbers=185
function LoadAll(gender, ped, pedskin, components, set)
	RemoveMetaTags(ped)
	IsPedReadyToRender(ped)
	ResetPedComponents(ped)
	local skin = SetDefaultSkin(gender, pedskin)
	ApplyShopItemToPed(skin.HeadType, ped)
	ApplyShopItemToPed(skin.BodyType, ped)
	ApplyShopItemToPed(skin.LegsType, ped)
	ApplyShopItemToPed(skin.Eyes, ped)
	ApplyShopItemToPed(skin.Legs, ped)
	ApplyShopItemToPed(skin.Hair, ped)
	ApplyShopItemToPed(skin.Beard, ped)
	ApplyShopItemToPed(skin.Torso, ped)
	EquipMetaPedOutfit(skin.Waist, ped)
	EquipMetaPedOutfit(skin.Body, ped)
	Citizen.InvokeNative(0xAAB86462966168CE, ped, 1)
	LoadFaceFeatures(ped, skin)
	UpdatePedVariation(ped)
	IsPedReadyToRender(ped)
	LoadComps(ped, components, set)
	SetPedScale(ped, skin.Scale)
	UpdatePedVariation(ped)
	TriggerServerEvent("jo_libs:server:applySkinAndClothes",ped,skin,components) -- [!code ++]
	return skin
end
```
* `vorp_character/server/server.lua` - line 8
```lua:line-numbers=8
function ConvertTable(comps, compTints)
	local NewComps = {}

	for k, comp in pairs(comps) do
		NewComps[k] = { comp = comp, tint0 = 0, tint1 = 0, tint2 = 0, palette = 0 }

		if compTints and compTints[k] and compTints[k][tostring(comp)] then
			local compTint = compTints[k][tostring(comp)]
			NewComps[k].tint0 = compTint.tint0 or 0
			NewComps[k].tint1 = compTint.tint1 or 0
			NewComps[k].tint2 = compTint.tint2 or 0
			NewComps[k].palette = compTint.palette or 0
			NewComps[k].state = compTint.state or nil -- [!code ++]
		end
	end

	return NewComps
end
```
:::

::: details for RSG
To fixed skin, you have to edit one files :
* `rsg-appearance\client\creator.lua` - line 197
```lua:line-numbers=197
function ApplySkin()
    local _Target = PlayerPedId()
    local citizenid = RSGCore.Functions.GetPlayerData().citizenid
    local PlayerData = RSGCore.Functions.GetPlayerData()
    local currentHealth = PlayerData.metadata["health"]

    RSGCore.Functions.TriggerCallback('rsg-multicharacter:server:getAppearance', function(data)
        local _SkinData = data.skin
        local _Clothes = data.clothes
        if _Target == PlayerPedId() then
            local model = GetPedModel(tonumber(_SkinData.sex))
            LoadModel(PlayerPedId(), model)
            _Target = PlayerPedId()
            SetEntityAlpha(_Target, 0)
            LoadedComponents = _SkinData
        end
        FixIssues(_Target)
        LoadHeight(_Target, _SkinData)
        LoadBoody(_Target, _SkinData)
        LoadHead(_Target, _SkinData)
        LoadHair(_Target, _SkinData)
        LoadBeard(_Target, _SkinData)
        LoadEyes(_Target, _SkinData)
        LoadFeatures(_Target, _SkinData)
        LoadBodyFeature(_Target, _SkinData.body_size, Data.Appearance.body_size)
        LoadBodyFeature(_Target, _SkinData.body_waist, Data.Appearance.body_waist)
        LoadBodyFeature(_Target, _SkinData.chest_size, Data.Appearance.chest_size)
        LoadOverlays(_Target, _SkinData)
        SetEntityAlpha(_Target, 255)
        SetAttributeCoreValue(_Target, 0, 100)
        SetAttributeCoreValue(_Target, 1, 100)
        SetEntityHealth(_Target, currentHealth, 0)
        Citizen.InvokeNative(0x8899C244EBCF70DE, _Target, 0.0)
        Citizen.InvokeNative(0xDE1B1907A83A1550, _Target, 0.0)
        if _Target == PlayerPedId() then
            TriggerEvent('rsg-appearance:client:ApplyClothes', _Clothes, _Target)  -- [!code --]
            TriggerEvent('rsg-appearance:client:ApplyClothes', _Clothes, _Target, _SkinData)  -- [!code ++]
        else
            for i, m in pairs(Overlays.overlay_all_layers) do
                Overlays.overlay_all_layers[i] =
                { name = m.name, visibility = 0, tx_id = 1, tx_normal = 0, tx_material = 0, tx_color_type = 0, tx_opacity = 1.0, tx_unk = 0, palette = 0, palette_color_primary = 0, palette_color_secondary = 0, palette_color_tertiary = 0, var = 0, opacity = 0.0 }
            end
        end
    end, citizenid)
end

local function ApplySkinMultiChar(SkinData, Target, ClothesData)
    FixIssues(Target)
    LoadHeight(Target, SkinData)
    LoadBoody(Target, SkinData)
    LoadHead(Target, SkinData)
    LoadHair(Target, SkinData)
    LoadBeard(Target, SkinData)
    LoadEyes(Target, SkinData)
    LoadFeatures(Target, SkinData)
    LoadBodyFeature(Target, SkinData.body_size, Data.Appearance.body_size)
    LoadBodyFeature(Target, SkinData.body_waist, Data.Appearance.body_waist)
    LoadBodyFeature(Target, SkinData.chest_size, Data.Appearance.chest_size)
    LoadOverlays(Target, SkinData)
    TriggerEvent('rsg-appearance:client:ApplyClothes', ClothesData, Target) -- [!code --]
    TriggerEvent('rsg-appearance:client:ApplyClothes', ClothesData, Target, SkinData)  -- [!code ++]
end
```
:::

## 2. Usage
You have two way to use my script :

Go on the shop (marker on the map) and use the command /barber to seat on the chair and open the menu.

Go on the shop and use the prompt to seat on the chair and open the menu

Use my mouse selection and right click on the barber chair to seat on it and open the menu.

For developer, you can force the reload of hair and beard with the client event 
```lua
kd_hairdresser:client:reload
```

### 3. Config.lua file
```lua
-------------------------------
-- DOCUMENTATION : https://docs.jumpon-studios.com/
--------------------------------

Config = {}
Config.debug = false
Config.commandName = "barber" --use false to disable it
Config.audioVolume = 0.5 --value between 0.0 and 1.0
Config.displayBlips = true --display blip on the map
Config.displayPromptDistance = 3.0 -- distance to display the prompt (use false to disable it)

Config.oldVORPChar = false --(Only for VORP users) to use the C# version of VORP Character


Config.prices = {
  hair = 3.75, --Price for hair
  beard = 2.5, --Price for beard
  hair_accessories = 1.0 --Price for hair_accessories
}

Config.shops = { --list of hairdresser shops
  vector3(-813.3,-1366.9,43.75),
  vector3(-306.2,814.2,118.9),
  vector3(2655.4,-1179.9,53.2),
}

Config.keys = {
	enter = "INPUT_FRONTEND_RB", --key to open the store
}

--Client side
Config.displayTip = function(text)
  print(text)
end
```

## 4. For developper
Two client events are fired when you use the script :
1. When you open the menu : `kd_hairdresser:event:Open`
2. When you close the menu : `kd_hairdresser:event:Close`

### Filters

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
exports.kd_haidresser:registerFilter(<actionName>, function(variable)
  -- Add your new data here
	return variable -- Don't forget to return the value
end)
```

#### <Badge type="client" text="Client" /> canOpenMenu
Fires before sit on the chair. Return false to disable the menu
```lua
-- @param canUse - boolean
exports.kd_haidresser:registerFilter('canOpenMenu', function(canOpen)
	return canOpen
end)
```