# :car: Car door Icon
**Documentation relating to the kd_ath_car_door.**

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/fivem/car-door-icon)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/KLwc9zr9L1Q?si=Zw0ID9gUyu1TtgQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
CAR DOOR ICON is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).

Drag and drop this folder in your resources folder
- kd_ath_car_door
Add this 3 ensures in your server.cfg
- `ensure kd_ath_car_door`

Congratulation, the CAR DOOR ICON script is ready to be use !

## 2. Usage
You have nothing to do. Just be near car to see the icon. If you enter the car, your player will choose the seat where the icon here.

## 3. Config.lua
```lua
CommandSwitchSeat = {
    command = "seat", --use false to disable it
    description = "Switch to a new seat",
    argKey = "number",
    argDescription = "number of the seat. 0 - Driver, 1 - Passenger, ..."
}

function cprint(text)
    print(text)
end

-- Fix the position of icon
-- "All" for all car door
-- "[number]" for the specitifc seat number 0: driver, 1: front passenger, ...
DebugPorte = {
  ['dinghy'] = {["All"] = {HautCor = 0.3,RotG = 0,RotD = 0}},
  ['jetmax'] = {["All"] = {HautCor = 0.3,distanceG = 2.0,RotG = 70,distanceD = 2.0,RotD = -70}},
  ['marquis'] = {
      [0] = {HautCor = 1.0,AngleCor = 0,distanceG=3.0,RotG = 110},
      [1] = {HautCor = 1.0,AngleCor = 0,distanceD=-3.0,RotD = -100},
      [2] = {HautCor = 1.0,AngleCor = 0,distanceG=5.0,RotG = 100},
      [3] = {HautCor = 1.0,AngleCor = 0,distanceD=-5.0,RotD = -100},
  },
  ...
}

-- Hide icon for specitic model 
CacherPorte = {
  ['jetmax'] = {2,3},
  ['seashark'] = {2,3},
  ['seashark2'] = {2,3},
  ['seashark3'] = {2,3},
  ['rcbandito'] = {0,1,2,3,4},
}

DebugEntree = {
  ["cargoplane"] = 16,
}

-- Fix the mlodel name of vehicle
DebugModel = {
  ["dilettan"] = "dilettante",
  ...
}
```
