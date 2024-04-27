---
outline: 2
---
# Me
A library to save in the client cache the value of PlayerPedId() and his location. These values are updated every 1000ms by default.
Very helpfull to optimize the resource

## jo.forceUpdateMe()
Force the update of values
### Syntax
```lua
jo.forceUpdateMe()
```

### Example
```lua
print(jo.meCoords)
jo.forceUpdateMe()
print(jo.meCoords)
```

## jo.me
Return the last cached PlayerPedId() value
### Example
```lua
print(jo.me,PlayerPedId())
```

## jo.meCoords
Return the last cached location of the player
### Example
```lua
print(jo.meCoords,GetEntityCoords(PlayerPedId()))
```

## jo.updateMeTimer()
Change the speed of the updater
### Syntax
```lua
jo.updateMeTimer(value)
```
#### Parameters
`value` : *integer*
> Duration in ms between each update of values
  

### Example
```lua
--update less often jo.me & jo.meCoords : from 1s to 2s
jo.updateMeTimer(2000)
```
