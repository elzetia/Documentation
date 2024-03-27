# :fishing_pole_and_fish: Fishing
Documentation relating to the kd_peche.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/fivem/fishing)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/d5lysom6yWI?si=_qPVqNxG_A8yErdS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::



## 1. Installation

kd_peche is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).

- Drag and drop the resource in your resources folder
  - kd_peche
- Add this ensure in your server.cfg
  - `ensure kd_peche`
- Congratulation, the Fishing script is ready to be use !

## 2. Usage

Start fishing with the client event. 3 level are availables by default
- 1 - Easy level : Easy to catch fish but less expensive
- 2 - Medium level : Hard to catch but better loot
- 3 - Hard level : Very hard to catch but exclusive loot
```lua
TriggerEvent('fish', <level> )
```
You can add custom level in the config file.

## 3. Config.lua
```lua
------------------------------------
--- COMMAND TO TEST THE SCRIPT
------------------------------------
RegisterCommand('fish', function(args)
    TriggerEvent("Peche:debut",2) --Fishing with rod level 2
end)

Keys = {
  ["stop"] = '~INPUT_DETONATE~',
  ['hook'] = '~INPUT_FRONTEND_ACCEPT~'
}

ItemFishable = {
  { -- rod level 0
      {nom = "Poisson commun",id = 66,chance = {0,5400}}, -- 5400 - 0 = 54%
      {nom = "Ecrevisse",id = 67,chance = {5401,6900}}, -- 6900 - 5401 = 14.99%
      {nom = "Anchois",id = 68,chance = {6901,8400}}, -- 8400 - 6901 = 14.99%
      {nom = "Algue revitalisante",id = 69,chance = {8401,9900}}, -- 9900 - 8401 = 14.99%
      {nom = "Chaussure",id = 70,chance = {9901,9910}}, -- 9910 - 9901 = 0.09%
      {nom = "Pneu",id = 71,chance = {9911,9950}}, -- 9950 - 9911 = 0.39%
      {nom = "Sac plastique",id = 72,chance = {9951,10000}}, -- 10000 - 9951 = 0.49%
  },
  { -- rod level 1
      {nom = "Poisson commun",id = 66,chance = {0,5400}},
      {nom = "Ecrevisse",id = 67,chance = {5401,6900}},
      {nom = "Anchois",id = 68,chance = {6901,8400}},
      {nom = "Algue revitalisante",id = 69,chance = {8401,9900}},
      {nom = "Chaussure",id = 70,chance = {9901,9910}},
      {nom = "Pneu",id = 71,chance = {9911,9950}},
      {nom = "Sac plastique",id = 72,chance = {9951,9998}},
      {nom = "Perle noire",id = 73,chance = {9999,10000}},
  },
  { -- rod level 2
      {nom = "Poisson commun",id = 66,chance = {0,5000}},
      {nom = "Ecrevisse",id = 67,chance = {5001,5900}},
      {nom = "Anchois",id = 68,chance = {5901,7500}},
      {nom = "Algue revitalisante",id = 69,chance = {7501,9997}},
      {nom = "Perle noire",id = 73,chance = {9998,10000}},
  },
}

BarAnimation = 0
LargeurBar = 0.08
HauteurBar = 0.01
TimerAnimation = LargeurBar
MaxTry = {
    [0] = 6, --Try for rod level 0
    [1] = 4, --Try for rod level 1
    [2] = 3 --Try for rod level 2
}
SuccessLimit = {
    [0] = 85/100*LargeurBar, -- % of win for rod level 0
    [1] = 92/100*LargeurBar, -- % of win for rod level 1
    [2] = 98/100*LargeurBar, -- % of win for rod level 2
}
AnimationSpeed = 0.001

-- Function when player hook successfully a fish
function GiveItemToPlayer(id)
  --Give item to player
end
```