---
outline: 2
---
# UI

A module to manage UI elements from the game.

## jo.ui.updateRank()
A function to update the rank element on the top left of weapon wheel

<img src="/images/previews/ui/updateRank.png" />

### Syntax
```lua
jo.ui.updateRank(level,xp,xpRequired)
```
#### Parameters
`level` : *string*
> The level printed in the left of the element

`xp` : *integer*
> The current xp amount
  
`xpRequired` : *integer*
> The amount of XP required to level up
  

### Example
```lua
local level = 325
local xp = 215
local xpRequired = 17400
jo.ui.updateRank(level,xp,xpRequired)
```