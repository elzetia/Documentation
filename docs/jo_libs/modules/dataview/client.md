---
outline: 2
---
# Dataview

The dataview file from [Gottfriedleibniz](https://raw.githubusercontent.com/femga/rdr3_discoveries/a63669efcfea34915c53dbd29724a2a7103f822f/AI/EVENTS/dataview_by_Gottfriedleibniz.lua)

### Example
```lua
local view = DataView.ArrayBuffer(512)
if Citizen.InvokeNative(0x79923CD21BECE14E, 1, view:Buffer(), Citizen.ReturnResultAnyway()) then
    local dlc = {
        validCheck = view:GetInt64(0),
        weaponHash = view:GetInt32(8),
        val3 = view:GetInt64(16),
        weaponCost = view:GetInt64(24),
        ammoCost = view:GetInt64(32),
        ammoType = view:GetInt64(40),
        defaultClipSize = view:GetInt64(48),
        nameLabel = view:GetFixedString(56, 64),
        descLabel = view:GetFixedString(120, 64),
        simpleDesc = view:GetFixedString(184, 64),
        upperCaseName = view:GetFixedString(248, 64),
    }
end
```