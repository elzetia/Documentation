---
outline: 2
---
# Utils functions

A library with util functions to create a script

## jo.utils.loadGameData()
A function to load a game file
### Syntax
```lua
jo.utils.loadGameData(name,waitLoading)
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
jo.utils.loadGameData(model,true)
```

## jo.utils.releaseGameData()
A function to release a game file
### Syntax
```lua
jo.utils.releaseGameData(name)
```
#### Parameters
`name` : *string*
> The name of the file.  

### Example
```lua
local model = 'A_C_Horse_Morgan_Bay'
jo.utils.releaseGameData(model)
```

## jo.utils.waiter()
  
A function to wait after a satisfing condition with a waiting duration.  

### Syntax
```lua
jo.utils.waiter(cb,maxDuration,timer)
```
#### Parameters
`cb` : *function*
> If the function return `true` a new timer value is waited
  
`maxDuration` : *integer* <BadgeOptional />
> The maximum duration the function will wait  
> default: 1000
  
`timer` : *integer* <BadgeOptional />
> The delay between test of cb function in ms  
> default: 0
  
#### Return value
Type: *Boolean*
> Return `true` if the function is satisfied, `false` if the waiter was killed by the maxDuration value
  

### Example
```lua
local value = 0
local cb = function()
  value = math.random(1,10)
  return value == 5
end
local maxDuration = 2000
local timer = 10

local startWait = GetGamerTimer()
print killer = jo.utils.waiter(cb,maxDuration,timer)
print("Killer: ",killer,"Value: ",value,"Duration: ",GetGamerTimer() - startWait)
--Expected output: Killer: true, Value : 5, Duration: (duration < 2000)
--OR
--Expected output: Killer: false, Value : (<> 5), Duration: 2000
```