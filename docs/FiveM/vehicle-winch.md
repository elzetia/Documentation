# <img src='/images/winch.webp'/> Vehicle WINCH
Documentation relating to the kd_winch.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/package/5230768)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/CIs16GE6hZM?si=pfp8U1-hPmXm1Yoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
Vehicle WINCH is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).

- Drag and drop this 4 resources in your resources folder
  - InteractSound
  - kd_custom-native
  - kd_hud-event
  - kd_winch
- Add this 4 ensures in your server.cfg
  - `ensure InteractSound`
  - `ensure kd_custom-native`
  - `ensure kd_hud-event`
  - `ensure kd_winch`
- Congratulation, the Vehicle WINCH script is ready to be use !
- 
## 2. Usage
By default, the script is configured to work with the Dune Loader: `dloader`. Use your admin menu (or other scripts) to spawn it. 

A help message with key will appears at the top left of your screen every time action is available. Please read them to know what keys are usable. 
1. Go to the front of the dune loader to take the winch.
2. Go to near other car to attach it.
3. Back to the front of the dune loader or inside to roll up/down the winch
4. If you need to detach the winch, go back to the front of vehicle and take the winch. You can store it by go back to the front of the dune loader 

## 3. Config.lua
```lua
Config = {}

-- Display more help message by turn it to true
Config.Debug = false 
-- Max length of the winch.
Config.MaxLengthRope = 19.0
-- Duration to synchronize the rope between players
Config.ResyncRopeFrenquency = 10000 --ms
-- Tow truck available for this scripts
Config.ValidModel = {
-- Copy this array to add vehicle. Add-on vehicle compatible
    [`dloader`] =  {
        ropeBone = "engine", -- Bone where winch will be attach
        ropeOffset = vector3(0.0,0.8,-0.45), -- Offset of bone
        ropeDistanceTake = 1.5 -- Distance to take the winch
    }
}
-- Model name of the hook
Config.HookModel = 'prop_rope_hook_01'
4. Add new vehicle
To add a new vehicle, just copy the dloader array in the Config.ValidModel variable and change the modelname. Sometime, you will have to change the configuration of the vehicle to make it more usable. 
Example :
Config.ValidModel = {
 [`dloader`] =  {
        ropeBone = "engine", -- Bone where winch will be attach
        ropeOffset = vector3(0.0,0.8,-0.45), -- Offset of bone
        ropeDistanceTake = 1.5 -- Distance to take the winch
  },
  [`insurge,t`] =  {
        ropeBone = "engine", -- Bone where winch will be attach
        ropeOffset = vector3(0.0,0.8,-0.45), -- Offset of bone
        ropeDistanceTake = 1.5 -- Distance to take the winch
  },
}
```
## 4. For developer
You can turn off the script for a specific player by using this client event
```lua
TriggerClientEvent('kd_winch:CanUse', source, false)
```
You can turn on the script again with the same client event
```lua
TriggerClientEvent('kd_winch:CanUse', source, true)
```