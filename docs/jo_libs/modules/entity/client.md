---
outline: 2
---
# Entity

A library with usefull function to manage entity

## jo.entity.create()
a function to create a new entity
### Syntax
```lua
jo.entity.create(model,coords,heading,networked)
```
#### Parameters
`model` : *string*
> The model of the entity
  
`coords` : *vector3*
> The coordinate of the entity
  
`heading` : *float*
> The heading of the entity
  
`networked` : *boolean*
> If the entity needs to be networked
  

#### Return value
Type: *integer*
> Return ID of the entity 
  

### Example
```lua
local entity = jo.entity.create('re_kidnappedvictim_females_01',vec3(1294.0,-512.3, 30.0),90.0,true)
print(entity)
```

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
