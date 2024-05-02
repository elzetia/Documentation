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

