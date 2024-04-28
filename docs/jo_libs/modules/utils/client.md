---
outline: 2
---
# Utils functions

A library with util functions to create a script

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
