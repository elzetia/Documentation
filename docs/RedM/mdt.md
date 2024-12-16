# 🗒 MDT
Documentation relating to the jo_mdt.

:::tabs
== BUY
[Buy the script](https://jumpon-studios.com/redm/sheriff-mdt)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/gmhL877LsVE?si=Db_h4KODVJHKKhda" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
jo_mdt works on all frameworks compatible with jo_libs ([the list](/jo_libs/)).

To install jo_mdt :
- Download the library: [jo_libs](https://github.com/Jump-On-Studios/RedM-jo_libs/releases/latest/download/jo_libs.zip)
- Unzip the folder and drop it in your resource folder
- Download jo_mdt from your [keymaster](https://keymaster.fivem.net/asset-grants?search=mdt)
- Unzip the folder and drop it in your resource folder
- Add this ensure in your server.cfg
  - `ensure jo_libs`
  - `ensure jo_mdt`

Congratulation, the **MDT** script is ready to be used!
:::warning
Be sure you have oxmysql ensure in your server.cfg
:::
:::tip
The script automatically creates all necessary database tables during its initial startup.
:::

:::details For RedEM:RP (old)
Add this Shared functions in `redemrp_inventory/server/sv_main.lua`
```lua:line-numbers=902
  end
  return data
end

function SharedInventoryFunctions.addItemLocker(name, amount, meta, lockerId) -- [!code ++]
  if not Locker[lockerId] then Locker[lockerId] = {} end -- [!code ++]
  addItemLocker(name, amount, meta, lockerId) -- [!code ++]
end -- [!code ++]
function SharedInventoryFunctions.getLocker(lockerId) -- [!code ++]
  return PrepareToOutput(Locker[lockerId]) -- [!code ++]
end -- [!code ++]

----=======================SHARED FUNCTIONS  ================================
```
:::
:::details For RedEM:RP (2023)
Add this Shared functions in `redemrp_inventory/server/main.lua`
```lua:line-numbers=1558
  end
  return data
end

function SharedInventoryFunctions.addItemStash(source, name, amount, meta, stashId) -- [!code ++]
    if not Stash[stashId] then Stash[stashId] = {} end -- [!code ++]
    addItemStash(source, name, amount, meta, stashId) -- [!code ++]
end -- [!code ++]
function SharedInventoryFunctions.getStash(stashId) -- [!code ++]
    return PrepareToOutput(Stash[stashId]) -- [!code ++]
end -- [!code ++]

RegisterServerEvent("redemrp_inventory:deleteInv",
```
:::

Congratulation, the **MDT** script is ready to be used!

## 2. Usage
- If you set `Config.openingMode = "item"`

Go to one of the sheriff station to get your MDT. Use the MDT item to open it. 

- If you set `Config.openingMode = "command"`

Use `/mdt`to open the MDT

## 3. Script configuration
### Config.lua file

:::details Config.lua
```lua
Config = {}

Config.openingMode = "item"
-- "item": use the item to open the MDT
-- "command": use the command to open the MDT

Config.citizensSyncMode = "station"
-- "station": sync between all MDT from the same station (only if Config.openingMode = "item")
-- "global": sync between all MDT

Config.reportSyncMode = "mdt"
-- "mdt": only display reports included in the mdt inventory
-- "station": sync between all MDT from the same station (only if Config.openingMode = "item")
-- "global": sync between all MDT

Config.distanceToSyncStationContent = 5.0 --distance max between the player and station to sync his content

Config.keys = {
  backToClipboard = "INPUT_FRONTEND_UP",
  fileLockerAccess = "INPUT_FRONTEND_ACCEPT",
  getMDT = "INPUT_INTERACT_OPTION1"
}

Config.commands = {
  openMDT = "mdt" --if (Config.openingMode == "command")
}

Config.items = {
  mdt = "mdt", -- MDT item name
  report = "mdt_report", -- report item name
}

Config.stations = {
  {
    id = "saintDenis", --has to be unique
    name = "Saint-Denis", --label of the station
    location = vec3(2509.532, -1304.805, 48.954), --location of the file cabinet
    distancePrompt = 1.0, --distance to access to the file cabinet
    jobs = {'sheriff'} --list of job restriction
  },
  ...
}
```
:::
## 4. For developers

### Actions

[Actions](/DeveloperResources/actions) are the new way to modify how the script works or add new features. These actions are event that occurs at a specific point in time during the execution of the script. But contrary to events, actions are **synchronous**. 

### Filters

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script added in the `v1.2.0`. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

#### <Badge type="client" text="Client" /> canOpenMDT
Fires before open the MDT
```lua
---@param canOpen - boolean
exports.jo_mdt:registerFilter('canOpenMDT', function(canOpen)
	return canOpen
end)
```
#### <Badge type="client" text="Client" /> updateLangForNUI
Fires before update the NUI Lang
```lua
---@param Lang - table: list of lang strings
exports.jo_mdt:registerFilter('updateLangForNUI', function(Lang)
	return Lang
end)
```
#### <Badge type="server" text="Server" /> canGetMDT
Fires before give the MDT to the player
```lua
---@param canGet - boolean
---@param source - integer: server ID of the player
---@param stationKey - integer: key of the station from Config.stations
exports.jo_mdt:registerFilter('canGetMDT', function(canGet,source,stationKey)
	return canGet
end)
```
#### <Badge type="server" text="Server" /> canManageFileLocker
Fires before open the file cabinet
```lua
---@param canManage - boolean
---@param source - integer: server ID of the player
exports.jo_mdt:registerFilter('canManageFileLocker', function(canManage,source)
	return canManage
end)
```
