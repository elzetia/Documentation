# :tophat: Clothes Wheel
Documentation relating to the kd_clotheswheel.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/redm/clothes-wheel)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/DfbGIS4tGo8?si=G71Vam6KQBNYn-Bh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_clotheswheel works with VORPcore, RedEM:RP and QBR. Be sure you installed one of these frameworks. For custom framework, please read the #4

- Drag and drop the resource in your resources folder
  - kd_clotheswheel
- Add this ensure in your server.cfg
  - `ensure kd_clotheswheel`
- Congratulation, the Clothes Wheel script is ready to be use !
## 2. Usage
The script will automatically detect what clothes you wear to only display them. 
By default, press the key `B` to open the wheel. 

You can also open the wheel from other resource by using the server side event :
```lua
TriggerServerEvent("kd_clotheswheel:server:getClothes")
```
For shirt and neckwear, you have the possibility to put them up/down too.

Listen the action on bandana with this client event :
```lua
AddEventHandler('kd_clotheswheel:client:bandanaUp', function(isUp)
    -- isUp = true if bandana up
    -- isUp = false if bandana down
end)
```

## 3. Config.lua
```lua
-- Menu configuration, array of menus to display
Config = {}
Config.OpenKey = GetHashKey('INPUT_EMOTE_TWIRL_GUN_VAR_A')
Config.CloseAfterSwitch = true --Close the wheel when player turn on/off clothes
Config.PlayAnim = true

Config.commandReload = "refreshCW" --command to refresh the list of equiped clothes (use false to disable it)

Config.Menus = {                                 -- Data that is passed to Javascript
    style = {                               -- Wheel style settings
        sizePx = 800,                       -- Wheel size in pixels
        slices = {                          -- Slice style settings
            hover = { ['fill'] = '#ff0000', ['opacity'] = 0.90 },
            selected = { ['fill'] = '#ff0000', ['opacity'] = 0.80 }
        },
        titles = {                          -- Text style settings
            default = { ['fill'] = '#ffffff', ['stroke'] = 'none', ['font-size'] = 16, ['font-weight'] = 'bold' },
            hover = { ['fill'] = '#ffffff', ['stroke'] = 'none', ['font-size'] = 16, ['font-weight'] = 'bold' },
            selected = { ['fill'] = '#ffffff', ['stroke'] = 'none', ['font-size'] = 16, ['font-weight'] = 'bold' }
        },
        icons = {
            width = 100,
            height = 100
        }
    },
    wheels = {                              -- Array of wheels to display
        {
            navAngle = 270,                 -- Oritentation of wheel
            minRadiusPercent = 0.5,         -- Minimum radius of wheel in percentage
            maxRadiusPercent = 0.8,         -- Maximum radius of wheel in percentage
            labels = {},
        },
        {
            minRadiusPercent = 0.8,
            maxRadiusPercent = 1.0,     
            labels = {}
        },
        {
            minRadiusPercent = 0.8,
            maxRadiusPercent = 1.0,
            labels = {}
        },
        {
            minRadiusPercent = 0.8,
            maxRadiusPercent = 1.0,
            labels = {}
        }
    }
}

Config.Clothes = {
    ["gunbelts"] = true,
    ["spats"] = true,
    ["gloves"] = true,
    ["satchels"] = true,
    ["belts"] = true,
    ["dresses"] = true,
    ["hats"] = true,
    ["boots"] = true,
    ["vests"] = true,
    ["chaps"] = true,
    ["boot_accessories"] = true,
    ["coats_closed"] = true,
    ["armor"] = true,
    ["jewelry_bracelets"] = true,
    ["ponchos"] = true,
    ["holsters_left"] = true,
    ["jewelry_rings_left"] = true,
    ["cloaks"] = true,
    ["neckwear"] = true,
    ["neckties"] = true,
    ["pants"] = true,
    ["loadouts"] = true,
    ["coats"] = true,
    ["masks"] = true,
    ["jewelry_rings_right"] = true,
    ["accessories"] = true,
    ["suspenders"] = true,
    ["belt_buckles"] = true,
    ["shirts_full"] = true,
    ["eyewear"] = true,
    ["gauntlets"] = true,
    ["badges"] = true,
    ["skirts"] = true,
    ["bodies_lower"] = false,
    ["hair_accessories"] = true
}

-- Animation function
function PlayAnimation(category)
    if not Config.PlayAnim then return end
    local dict = ""
    local anim = ""
    local timer = 0
    local offset = 0.0
    local flag = 0
    local flagtop = 24

    if category == "gunbelts" then
        if not Clothes[category].active then
            dict = "script_respawn@one_shot@fullbody@generic@unarmed@stand_adjust_belt@a"
            flag = flagtop
            anim = "respawn_action"
            timer = 1000
        end
    elseif category == "spats" then
    elseif category == "gloves" then
        if not Clothes[category].active then
            dict = "mech_loco_m@character@arthur@fidgets@item_selection@gloves"
            flag = flagtop
            anim = "gloves_b"
            timer = 500
        end
    elseif category == "satchels" then
    elseif category == "belts" then
    elseif category == "dresses" then
    elseif category == "hats" then
        dict = "mech_respawn@nap_grnd"
        anim = "getup_v1_player"
        offset = 0.6
        timer = 900
        flag = flagtop
        if not Clothes[category].active then
            timer = 800
        end
    elseif category == "boots" then
        dict = "script_respawn@one_shot@fullbody@generic@unarmed@stand_boot_clean@a"
        anim = "respawn_action"
        timer = 500
    elseif category == "vests" then
    elseif category == "chaps" then
    elseif category == "boot_accessories" then
    elseif category == "coats_closed" then
    elseif category == "armor" then
    elseif category == "jewelry_bracelets" then
    elseif category == "ponchos" then
    elseif category == "holsters_left" then
    elseif category == "jewelry_rings_left" then
    elseif category == "cloaks" then
    elseif category == "neckwear" then
        dict = "mech_inventory@clothing@bandana"
        flag = flagtop
        if Clothes[category].active then
            anim = "neck_2_satchel"
            timer = 1000
        else
            anim = "satchel_2_neck"
            timer = 2000
        end
    elseif category == "neckties" then
    elseif category == "pants" then
    elseif category == "loadouts" then
    elseif category == "coats" then
    elseif category == "masks" then
        dict = "mech_inventory@clothing@mask"
        flag = flagtop
        if Clothes[category].active then
            anim = "face_2_satchel"
            timer = 1000
        else
            anim = "satchel_2_face"
            timer = 2000
        end
    elseif category == "jewelry_rings_right" then
    elseif category == "accessories" then
    elseif category == "suspenders" then
    elseif category == "belt_buckles" then
    elseif category == "shirts_full" then
    elseif category == "eyewear" then
        dict = "amb_wander@code_human_wander@male@generic"
        flag = flagtop
        anim = "wipe_eyes_02"
        timer = 1000
    elseif category == "gauntlets" then
    elseif category == "badges" then
    end

    if (dict == "") then return end

    RequestAnimDict(dict)
    while not HasAnimDictLoaded(dict) do
        Wait(0)
    end
   
    TaskPlayAnim(PlayerPedId(), dict, anim, 4.0, -4.0, -1, flag, offset, false, false, false)
    Wait(timer)
end
```
## 4. Custom Frameworks

It's possible to force the reload of the clothes equiped by using this client event :
```lua
--Event to send custom data
--@param category : category of clothes you need to reload. Set nil to reload all clothes
TriggerClientEvent('kd_clotheswheel:updateClothes',source,category)
```