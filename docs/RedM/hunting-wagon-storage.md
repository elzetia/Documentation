# :deer: Hunting wagon Storage
Documentation relating to the kd_huntingwagon.

:::tabs
== BUY
[Buy the script](https://store.kaddarem.com/package/5302950)
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

-- Size of zone at the back of wagon where the prompt is display
Config.SizeDropzone = 2.0
-- Max carcass in wagon
Config.MaxCarcass = 5
-- Function to display tip message
Config.DisplayTip = function(text,duration)
  TriggerEvent('redem_roleplay:Tip', text, duration)
end

--------------
--SERVER SIDE
--------------

--@param wagonId is the networkID of the wagon
--@param carcass is an array of carcass datas
--carcass data structure :
  -- carcass[1] = {model, outfit, damageCleanliness, fulloLooted, pedDamage}
Config.updateWagonCarcass = function(wagonId, carcass)

end
```