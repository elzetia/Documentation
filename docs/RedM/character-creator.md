# :cowboy_hat_face: [BETA] Character creator
Documentation relating to the jo_character_creator.

## 1. Installation
The character creator works on all frameworks compatible with jo_libs ([the list](/jo_libs/)).

To install jo_character_creator:
- Download the library: [jo_libs](https://github.com/Jump-On-Studios/RedM-jo_libs/releases/latest/download/jo_libs.zip)
- Unzip the folder and drop it in your resource folder
- Download jo_character_creator from your [keymaster](https://keymaster.fivem.net/asset-grants?search=jo_character_creator)
- Unzip the folder and drop it in your resource folder
- Add this ensure in your server.cfg
  - `ensure jo_libs`
  - `ensure jo_character_creator`

::: details For VORP
You have to link the character creator inside vorp_character:
* `vorp_character/client/createCharacter.lua` - line 116
```lua:line-numbers=116
RegisterNetEvent("vorpcharacter:startCharacterCreator")
AddEventHandler("vorpcharacter:startCharacterCreator", function()
    exports.weathersync:setSyncEnabled(false)
    ShutdownLoadingScreen()
    TriggerEvent("jo_character_creator:client:open")
end)
```
* `vorp_character/client/client.lua` - line 211
```lua:line-numbers=211
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
    TriggerServerEvent("jo_libs:server:applySkinAndClothes", ped, skin, components) -- [!code ++]
    return skin
end
```
:::

::: details For RSG
You have to link the character creator inside rsg-appearance:
* `rsg-appearance/client/creator.lua` - line 260
```lua:line-numbers=260
RegisterNetEvent('rsg-appearance:client:OpenCreator', function(data, empty)
  TriggerEvent("jo_character_creator:client:open")
end)
```
:::