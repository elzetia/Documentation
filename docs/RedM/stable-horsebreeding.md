# :horse: Horse breeding
Documentation relating to the **jo_stable_breeding** add-on for [Stable script](stable).

:::tabs
== BUY
[Buy the add-on](https://jumpon-studios.com/redm/horse-breeding)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/04A0kd0a8xg?si=n7lf5Dd5czIXD_A_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
::: warning
[Stable script](stable) is required to use this add-on
:::

To install jo_stable_breeding:
- Drag and drop the resource into your resources folder
  - jo_stable_breeding 
- Add this ensure in your server.cfg after `ensure kd_stable`
  - `ensure jo_stable_breeding`

Congratulation, the **Horse breeding** add-on is ready to be used!

## 2. Usage

Go in the stable to start the breeding.
You can select parents between your own horses. 

## 3. Config.lua file
:::details Config.lua
```lua
Config = {}

Config.chanceToKeepMaleBreed = 50         -- Chance to use the same breed than male
Config.chanceToBeMale = 50                -- Chance to create a male foal
Config.maxBellySize = 1.5                 -- Max size of belly when female is pregnant
Config.breedingTime = 5 * 60 * 1000       -- Duration of pregnancy in ms
Config.gapBetweenBreeding = 5 * 60 * 1000 -- Duration between two breeding of the same horse
Config.averageStats = {                   -- the foal stats will be between min and max of the parents average stats
    max = 110,                            -- in percent: 110 = 10% more than the average of the parents
    min = 90                              -- in percent: 90 = 10% less than the average of the parents
}
Config.previews = {
    valentine = {
        male = vec4(-373.653, 785.386, 116.178, 273.751),
        female = vec4(-373.665, 787.145, 116.170, 271.054),
    },
    blackwater = {
        male = vec4(-861.050, -1365.625, 43.548, 90.004),
        female = vec4(-860.964, -1367.177, 43.548, 89.874),
    },
    saintDenis = {
        male = vec4(2504.182, -1439.932, 46.315, 180.180),
        female = vec4(2502.509, -1439.840, 46.314, 179.753)
    },
    strawberry = {
        male = vec4(-1822.980, -559.944, 156.061, 256.246),
        female = vec4(-1823.328, -561.532, 156.055, 258.251),
    },
    tumbleweed = {
        male = vec4(-5522.213, -3042.691, -2.388, 269.215),
        female = vec4(-5522.228, -3044.422, -2.388, 268.564),
    },
    emerald = {
        male = vec4(1211.878, -196.030, 101.380, 18.145),
        female = vec4(1210.174, -196.514, 101.386, 18.331),
    },
}

Config.randomCoatColor = true --Use random coat color for the foal
Config.noRandomTint = {       --Disable random tint color for tint number X
    A_C_Horse_Appaloosa_Leopard = {
        horse_heads = { 1 },
        horse_bodies = { 1 },
    },
    A_C_Horse_AmericanPaint_SplashedWhite = {
        horse_heads = {},
        horse_bodies = { 3 }
    },
}
Config.wrongRandomColor = { --forbidden color values from horse color palette (-1 from the preview)
    [34] = false,
    [70] = false,
    [87] = false,
    [157] = false,
    [194] = false,
    [195] = false,
    [196] = false,
    [197] = false
}
```
:::

## 4. For developers

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
exports.jo_stable_breeding:registerFilter(<actionName>, function(variable)
  -- Add your new data here
	return variable -- Don't forget to return the value
end)
```
#### <Badge type="client" text="Client" /> Restrict the breeding
Use it to restrict who can see the "Breeding" button in the stable menu
```lua
-- @param canBreed - boolean
exports.jo_stable_breeding:registerFilter('canOpenBreedingMenu', function(canBreed)
	return canBreed
end)
```
:::details Example of job lock for VORP
```lua
AllowedJobs = {
    rhdHorsetrainer = true,
    blwHorsetrainer = true,
    valHorsetrainer = true,
}

exports.jo_stable_breeding:registerFilter('canOpenBreedingMenu', function(canBreed)
    local job = LocalPlayer.state.Character.Job
    if AllowedJobs[job] then
      return canBreed
    else
      jo.notif.rightError("You don't have the right job to tame wild horses")
      return false
    end
end)
```
:::