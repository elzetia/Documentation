---
outline: 2
---
# Entity

A library with usefull function to manage entity

## jo.entity.delete()
A function to delete an entity only if exist
### Syntax
```lua
jo.entity.deletey(entity)
```
#### Parameters
`entity` : *integer*
> The entity ID

### Example
```lua
local entity = 23494
jo.entity.delete(entity)
```

## jo.entity.fadeAndDelete()
A function to fade entity before delete it
### Syntax
```lua
jo.entity.fadeAndDelete(entity,duration)
```
#### Parameters
`entity` : *integer*
> The entity ID
  
`duration` : *integer* <BadgeOptional />
> The fade duration in ms  
> default: 1000
  

### Example
```lua
local entity = 32454
local duraiton = 1000
jo.entity.fadeAndDelete(entity,duration)
```

## jo.entity.requestControl()
A function to request the control of entity and wait after it
### Syntax
```lua
jo.entity.requestControl(entity)
```
#### Parameters
`entity` : *integer*
> The entity ID
  
### Example
```lua
local entity = 23494
jo.entity.requestControl(entity)
```
