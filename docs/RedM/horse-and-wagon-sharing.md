# :racehorse: Horse and Wagon sharing
Documentation relating to the kd_horse_sharing.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/redm/share-horse-wagon)
:::

## 1. Installation
kd_horse_sharing is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (VORP, RedEM:RP, QBCore, …).

- Drag and drop the resource in your resources folder
  - kd_horse_sharing
- Add this ensure in your server.cfg
  - `ensure kd_horse_sharing`
- Congratulation, the Horse and Wagon sharing WINCH script is ready to be use !
  
## 2. Usage
This script will overwrite the feature when you press E to ride horse or climb inside wagon. 
If nobody are on, it will works exactly like the native game : you will take the control of it. 
If someone already control it, you will climb in passager. 

## 3. Config.lua
```lua
Config = {}
-- Turn to false to disable the steal of horse/wagon from NPC
Config.CanStealToNPC = true
-- Turn to false to disable the steal of horse/wagon from Player. If false, you will climb in passenger.
Config.CanStealToPlayer = false
```