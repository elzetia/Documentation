<style>
  
</style>
# :horse: Horse aging
Documentation relating to the **kd_stable_horse-age** add-on for [Stable script](stable).

:::tabs
== BUY
[Buy the add-on](https://store.kaddarem.com/package/5992570)
== PREVIEW
<div class="preview-img">
  <img src="https://dunb17ur4ymx4.cloudfront.net/wysiwyg/1169448/b684e7238bffefd1cfc20cd6571c4e65e0ad4766.jpg">
  <img src="https://dunb17ur4ymx4.cloudfront.net/wysiwyg/1169448/fe59dfa63bd16505be98ace1c60ea882871390dc.jpg">
</div>
:::

## 1. Installation
::: warning
[Stable script](stable) is required to use this add-on
:::

To install kd_stable_horse-age:
- Drag and drop the resource into your resources folder
  - kd_stable_horse-age 
- Add this ensure in your server.cfg after `ensure kd_stable`
  - `ensure kd_stable_horse-age`
Congratulation, the **Horse aging** add-on is ready to be used!

## 2. Usage

Go on stable to see horses age.

## 3. Config.lua file
```lua
Config = {}

Config.timeRate = 365 -- the rate between the real time and the ingame time. example : 365.0 = the ingame time is 365x faster than real time (1 real day = 1 year ingame)
--Config.timeRate = 30 -- 1 real day = 1 month ingame

Config.deathAgeMin = 25 -- The minimum age the horse can die (in year).
Config.deathAgeMax = 30 -- The maximum age the horse can die (in year).
Config.buyAtAge = 3 -- The age of horse when you buy him (in year)

Config.visualHorseGrowth = true -- use true to change the horse size depending of his age
Config.HorseGrowthMin = 0.65 -- percentage of the normal size
Config.HorseGrowthMax = 1.0 -- percentage of the normal size
Config.AgeForGrowthMax = 5 -- horse's age when he reachs the max size (in year)
```