# :crossed_swords: Duel Gun
Documentation relating to the kd_gun_duel.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/package/5217046)
== PREVIEW

| <iframe width="560" height="315" src="https://www.youtube.com/embed/DezsrBqHb2g?si=flkm6OHmcw9pXAC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> | <iframe width="560" height="315" src="https://www.youtube.com/embed/5wicXmBjlXQ?si=l0dj4UUvFV3Me1IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> |
|-|-|
:::

## 1. Installation
kd_gun_duel works with VORPcore and RedEM:RP. Be sure you installed one of this two frameworks.

- Drag and drop this 2 resources in your resources folder
  - InteractSound
  - kd_gun_duel
- Add this 2 ensures in your server.cfg
  - `ensure InteractSound`
  - `ensure kd_gun_duel`
- Congratulation, the Duel gun script is ready to be use !

## 2. Usage
Two types of duel are available on the script. Both work the same way but the execution is a bit different.

- First type
  
Use the command `/duel [ID]` to challenge another player (ID is the server ID of the other player). He will have 10s (can be edited) to answer at this request.

If he accepts, both player have to nearby and stand back to back. Next, they have to walk until the **rang of the bells**. At this moment, the first player who hit his opponent wins the duel !
- Second type

Use the command `/duel2 [ID]` to challenge player with this second scenario. In this scenario, both players have to move away from other. When they are far enough, the duel will start with a little cinematic. After a random duration, the bells will ring. The first guy who hit his opponent wins the duel ! 

## 3. Config.lua
```lua
Config = {}

Config.CommandDuel1 = "duel"
Config.CommandDuel2 = "duel2"

Config.Debug = false
Config.DurationRequest = 10000
Config.MinTimeGong = 2000
Config.MaxTimeGong = 4000
Config.MaxDistance = 10.0 --Max distance between player to start the duel
Config.CanDamage = false
Config.GongAudio = {
  ref = "TOWN_SECRET_SOUNDS",
  name = "SECRET_FOUND"
}
Config.Music = {
  Name = "duel",
  Volume = 0.5,
  StartFocusTarget = false,
  SwitchPlanTimer = {5500,11300},
  Duration = 11000
}
Config.DefaultWeapon = "WEAPON_REVOLVER_CATTLEMAN" -- turn it to false to not give weapon
Config.DrawWithPrompt = true
Config.Keys = {
  Accept = "INPUT_INTERACT_ANIMAL",
  Draw = "INPUT_INTERACT_OPTION1"
}
Config.ForceRagdoll = true

--------------
-- CLIENT SIDE
--------------

-- Function to test if player have weapon to the duel
Config.HaveWeapon = function()
  return true
end

Config.Notifications = {}

Config.Notifications.Tip = function(text,duration)
  TriggerEvent("vorp:Tip",text,duration)
  TriggerEvent("redem_roleplay:Tip",text,duration)
end

Config.Notifications.Left = function(text,subtitle,dict,icon,duration,color)
  TriggerEvent('vorp:NotifyLeft',text,subtitle,dict,icon,duration,color)
  TriggerEvent('redem_roleplay:NotifyLeft',text,subtitle,dict,icon,duration)
end

-- Notification server side


-------------
--SERVER SIDE
-------------

Config.SNotifications = {}

Config.SNotifications.Tip = function(source,text,duration)
  TriggerClientEvent("vorp:Tip",source,text,duration)
  TriggerEvent("redem_roleplay:Tip",source,text,duration)
end

Config.SNotifications.TopNotif = function(source,text,subtitle,duration)
  TriggerClientEvent('vorp:ShowTopNotification', source, text,subtitle,duration)
  TriggerClientEvent('redem_roleplay:ShowTopNotification', source,text,subtitle,duration)
end

-- Function fire when the duel is over
--@params winner is the server ID of the winner
--@params loser is the server ID of the loser
Config.DuelResult = function(winner,loser)

end
```