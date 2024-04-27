---
outline: 2
---
# Utils functions

A library with utils function to create a script

## jo.deleteEntity()
A function to delete an entity only if exist
### Syntax
```lua
jo.deleteEntity(entity)
```
#### Parameters
`entity` : *integer*
> The entity ID

### Example
```lua
local entity = 23494
jo.deleteEntity(entity)
```

## jo.loadGameData()
A function to load a game file
### Syntax
```lua
jo.loadGameData(name,waitLoading)
```
#### Parameters
`name` : *string/integer*
> The name of the file.  
> Compatible with :  
> * Animation dictionnary
> * Model (hashed or string)
> * Texture dictionnary
  
`waitLoading` : *boolean*
> If the function has to wait after the loading to be completed
  

### Example
```lua
local model = 'A_C_Horse_Morgan_Bay'
jo.loadGameData(model,true)
```

## jo.releaseGameData()
A function to release a game file
### Syntax
```lua
jo.releaseGameData(name)
```
#### Parameters
`name` : *string*
> The name of the file.  

### Example
```lua
local model = 'A_C_Horse_Morgan_Bay'
jo.releaseGameData(model)
```

## jo.requestControl()
A function to request the control of entity and wait after it
### Syntax
```lua
jo.requestControl(entity)
```
#### Parameters
`entity` : *integer*
> The entity ID
  
### Example
```lua
local entity = 23494
jo.requestControl(entity)
```
