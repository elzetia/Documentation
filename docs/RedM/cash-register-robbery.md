# <img src='/images/cashregister.webp' /> Cash register Robbery
Documentation relating to the kd_robberyshop.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/package/5335554)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/SFVCH-31S4A?si=hdSfSBlOr3uCDuRr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_robberyshop is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (VORP, RedEM:RP, QBCore, …).

- Drag and drop the resource in your resources folder
  - kd_robberyshop
- Add this ensure in your server.cfg
  - `ensure kd_robberyshop`
- Congratulation, the Cash register Robbery script is ready to be use !
## 2. Usage
Go near a cash register (need to be setup in the config file) and press R to rob it.
## 3. Config.lua
```lua
Config = {}

Config.displayPrompt = true -- Display the prompt in right bottom of the screen
Config.CommandName = "StartRobbery" -- put false to disable the command

Config.shops = {
  {
    name = "Charles De Coursey", --Name of the shop
    coords = vector3(2555.0,-1166.0,53.0), --coordinate of the shop
    distance = 2.0, --distance around the cash register to display the prompt
    minigame = true, --false to disable the lockpick minigame and use the shakeNumber
    shakeNumber = 1, --number of time player have to shake the picklock to open the cashregister (only if minigame = false)
    money = {500,1000}, --{min, max}
    cooldown = 10000 --ms
  }
}
-----------------
--Client Side
-----------------
-- Function to display message client side
Config.displayTip = function(text,duration)

end

----------------
--ServerSide
----------------
Config.canStartRobbery = function(source,shopID)
  --Fire when player start to rob the cash register
  
  --Examples :
  --Add your item check here
  --Add your sheriff alert here
  return true
end

--Function when the player fails the robbery minigame
Config.fail= function(source, shopID)
end

--Function when the robbery is started
Config.startRobbery= function(source,shopID)
  --Fire when player start to rob the cash register
end



Config.giveMoney = function(source,money, shopID)
  --Fire when player open the cash register
end
```