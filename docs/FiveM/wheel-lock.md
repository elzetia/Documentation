# :blue_car: Wheel lock
Documentation relating to the kd_wheellock.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/package/5377055)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/rccp5TI9q6Y?si=E4muYL9-q__TX3os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_wheellock is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).

- Drag and drop the 2 resources in your resources folder
  - kd_custom-native
  - kd_wheellock
- Add this 4 ensures in your server.cfg
  - `ensure kd_custom-native`
  - `ensure kd_wheellock`
- Congratulation, the Wheel lock script is ready to be use !

## 2. Usage
You have two way to put/remove the wheel lock on the car in front of you :
- Use the command : wheellock

## 3. Config.lua
```lua
Config = {}

Config.command = "wheellock" --put false to disable it
Config.maxTimeToMove = 7000 --max duration to go near the vehicle
Config.debug = false --display debug message

-- Overwrite the default placement of the wheel lock
Config.offsets = {
  [GetHashKey('adder')] = {
    wheel_lr = vector4(-0.125,0.0,0.0,-180.0),
    wheel_rr = vector4(-0.125,0.0,0.0,-180.0),
    wheel_lf = vector4(-0.125,0.0,0.0,-180.0),
    wheel_lr = vector4(-0.125,0.0,0.0,-180.0),
  }
  default = {
    all = vector4(-0.125,0.0,0.0,-180.0)
  },
}

---------------------------------
-- CLIENT SIDE
---------------------------------

-- Function to display message
-- @param message The string message
Config.message = function(message)
  print(message)
end

-- Fire when player start taking the wheel lock
-- @param vehicle The vehicle ID where the wheellock was removed
-- @param wheellockObj The wheel lock object
-- @param bone The bone name where the wheellockObj is placed
Config.startTaking = function(vehicle, wheellockObj, bone)
  Config.message(Lang.takeWheellock)
end

-- Fire when wheellock is removed
-- @param vehicle The vehicle ID where the wheellock was removed
Config.takeWheellock = function(vehicle)
  Config.message(Lang.takeWheellock)

  --Make the vehicle driveable
  SetVehicleUndriveable(vehicle,false)
end

-- Fire when player start putting the wheel lock
-- @param vehicle The vehicle ID where the wheellock will be put
Config.startPutting = function(vehicle)
end

-- Fire when wheellock is put
-- @param vehicle The vehicle ID where the wheellock was put
-- @param wheellockObj The wheel lock object
-- @param bone The bone name where the wheellockObj was put
Config.putWheellock = function(vehicle,wheellockObj, bone)
  Config.message(Lang.putWheellock)

  --Make the vehicle undriveable
  SetVehicleUndriveable(vehicle,true)
end

----------------------------------
-- SERVER SIDE
----------------------------------

-- Use to restrick the script to specific players 
-- return true if player can use wheellock, else return false
Config.canUseWheellock = function(source)
  return true
end
```
## 4. For developer
Spawn the wheel lock on car without player animation :
```lua
-- @param vehNet : Server ID of the vehicle
-- @param boneName : Name of the bone where the wheel lock is
-- @side : Client side
TriggerEvent("kd_wheellock:addLockedCars", vehNet, 0, boneName)
```
Use event to put/remove the wheel lock :
```lua
-- @side : Client side
TriggerEvent('kd_wheellock:action') -- Put or remove the wheel lock
TriggerEvent('kd_wheellock:actionPut') -- Only Put the wheel lock
TriggerEvent('kd_wheellock:actionRemove') -- Only Remove the wheel lock
```

## 5. Snippets
### <Badge type="esx" text="ESX" /> Restrict the wheellock with job
Use this canUseWheellock function in the configuration
```lua
ESX = exports['es_extended']:getSharedObject()
Config.canUseWheellock = function(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    return (xPlayer.getJob().name == "police")
end
```
### <Badge type="qb" text="QBcore" /> Restrict the wheellock with job
Use this canUseWheellock function in the configuration
```lua
QBCore = exports['qb-core']:GetCoreObject()
Config.canUseWheellock = function(source)
    local Player = QBCore.Functions.GetPlayer(source)
    return (Player.PlayerData.job.type == "police" or Player.PlayerData.job.type == "mechanic")
end
```