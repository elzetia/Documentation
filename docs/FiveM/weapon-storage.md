# <img src="/images/gunrack.webp" /> Weapon storage
Documentation relating to the jo_gunrack.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/fivem/weapon-storage)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/wN7W2RE8r4M?si=o_3URKrSNJNL9wKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
Be sure you installed the required dependencies :
- For ESX : [ox_target](https://github.com/KadDarem/ox_target/tree/isactive-export)
- For QBCore : qb_target

To install jo_gunrack:
- Drag and drop the resource into your resources folder
  - jo_gunrack 
- Add this ensure in your server.cfg
  - `ensure jo_gunrack`
Congratulation, the **Weapon storage** script is ready to be used!

## 2. Usage
Go to one of the locations to see the weapon storage. Press the 3rd eye key to interact with it.

## 3. Script configuration

:::details Config.lua
```lua
Config = {}
Config.equipWeaponWhenTook = true
Config.distanceSpawnGunrack = 50.0

Config.gunrackModels = {
  ["xm_prop_xm_gunlocker_01a"] = {
    racks = {
      [1] = {offset = vec3(-0.32, -0.22, 0.36), rotation = vec3(-90, 0.0, 0.0), size = "small", autoAdjustDimension = "y"},
      [2] = {offset = vec3(-0.03, -0.220, 0.36), rotation = vec3(-90, 0.0, 0.0), size = "small", autoAdjustDimension = "y"},
      [3] = {offset = vec3(-0.396, 0.04, 0.796), rotation = vec3(0.0, -70, 90), size = "big", autoAdjustDimension = false},
      [4] = {offset = vec3(-0.286, 0.04, 0.796), rotation = vec3(0.0, -70, 90), size = "big", autoAdjustDimension = false},
      [5] = {offset = vec3(-0.175, 0.04, 0.796), rotation = vec3(0.0, -70, 90), size = "big", autoAdjustDimension = false},
      [6] = {offset = vec3(-0.055, 0.04, 0.796), rotation = vec3(0.0, -70, 90), size = "big", autoAdjustDimension = false},
      [7] = {offset = vec3(0.055, 0.04, 0.796), rotation = vec3(0.0, -70, 90), size = "big", autoAdjustDimension = false},
      [8] = {offset = vec3(-0.25, 0.0, 1.325), rotation = vec3(-90,0,25), size = "small", autoAdjustDimension = "y"},
      [9] = {offset = vec3(0.0, 0.0, 1.325), rotation = vec3(-90,0,25), size = "small", autoAdjustDimension = "y"},
      [10] = {offset = vec3(0.25, 0.0, 1.325), rotation = vec3(-90,0,25), size = "small", autoAdjustDimension = "y"},
    },
    sizeLimits = {
      {size='small',max = 0.4},
      {size='big',max = 9999},
    }
  },
  ['prop_cs_gunrack'] = {
    racks = {
      [1] = {offset = vec3(-0.58,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [2] = {offset = vec3(-0.45,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [3] = {offset = vec3(-0.32,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [4] = {offset = vec3(-0.19,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [5] = {offset = vec3(-0.07,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [6] = {offset = vec3(0.06,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [7] = {offset = vec3(0.195,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [8] = {offset = vec3(0.325,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [9] = {offset = vec3(0.455,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
      [10] = {offset = vec3(0.58,0.05,-0.3), rotation = vec3(0.0,-90,90), size="all", autoAdjustDimension = "x"},
    },
    sizeLimits = {
      {size="all",max=9999}
    }
  }
}

Config.gunracks = {
  {
    model = "xm_prop_xm_gunlocker_01a", --"xm_prop_xm_gunlocker_01a"/"prop_cs_gunrack"
    id = "police1", --must be unique
    location = vec3(461.9, -981.1, 29.69),
    rotation = vec3(0,0,-90),
  },
  {
    model = "prop_cs_gunrack", --"xm_prop_xm_gunlocker_01a"/"prop_cs_gunrack"
    id = "police2", --must be unique
    location = vec3(462.0, -982.677, 30.05),
    rotation = vec3(0,0,-90),
  }
}
```
:::

## 4. Know issues
:::details No such export isActive in resource ox_target
My update of ox_target is in waiting of approval by the OX team. To wait the integration in the main script, you can use my edit : [ox_target](https://github.com/KadDarem/ox_target/tree/isactive-export).<br>
You can find the 3 lines I added here : [the pull request](https://github.com/overextended/ox_target/pull/133/commits/6573d595b86fc41d9bc815795f6ae4ab3bcc3852)
:::

## 5. For developers

### Exports

#### <Badge type="shared" text="Shared" /> Get script configuration
exports to get the script configuration
```lua
exports.jo_gunrack:getConfig()
```

### Filters

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
exports.jo_gunrack:RegisterFilter(<actionName>, function(variable)
  -- Add your new data here
	return variable -- Don't forget to return the value
end)
```

#### <Badge type="client" text="Client" /> Limits gun adding
Fires before the player add a weapon into the weapon storage
```lua
-- @param canAdd - boolean : true if can add a weapon
-- @param gunrackId - int : unique identifier of the weapon storage
-- @param rackId - int : number of the rack where the weapon is
exports.jo_gunrack:RegisterFilter('canAddWeapon', function(canAdd, gunrackId, rackId)
	return canAdd
end)
```
#### <Badge type="client" text="Client" /> Limits gun grabbing
Fires before the player takes a weapon stored in the weapon storage
```lua
-- @param isOwner - boolean : true if the player is the owner of the weapon
-- @param gunrackId - int : unique identifier of the weapon storage
-- @param rackId - int : number of the rack where the weapon is
exports.jo_gunrack:RegisterFilter('canTakeWeapon', function(isOwner, gunrackId, rackId)
	return isOwner
end)
```