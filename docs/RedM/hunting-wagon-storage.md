# :deer: Hunting wagon Storage
Documentation relating to the kd_huntingwagon.

:::tabs
== BUY
[Buy the script](https://jumpon-studios.com/redm/hunting-wagon)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/CA1v7WScf_U?si=i_uMbhvL92IlO7Db" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_huntingwagon is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (VORP, RedEM:RP, QBCore, …).

- Drag and drop the resource in your resources folder
  - kd_huntingwagon
- Add this ensure in your server.cfg
  - `ensure kd_huntingwagon`
- Congratulation, the Hunting Wagon storage script is ready to be use !

## 2. Usage
Carry carcass and go at the back of the Hunting Wagon to store it. <br>
Go back at the back to get out it when you are arrived where you want.

## 3. Config.lua file
```lua
Config = {}

Config.Debug = false

Config.SizeDropzone = 2.0
Config.MaxCarcass = 10
Config.saveCarcassInDB = true --Need my stable script: https://shop.jumpon-studios.com/package/5705468

Config.wagons = {             --list of compatible wagon (⚠ tarp is only available on huntercart01 ⚠)
  [`huntercart01`] = true,
  [`cart03`] = true,
  [`supplywagon`] = true,
}
```