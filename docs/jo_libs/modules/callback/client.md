---
outline: 2
---
# Callback

A module to use callback module client side.

## jo.callback.register()
A function to register a client callback
### Syntax
```lua
jo.callback.register(name,cb)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> The function executed when the callback is triggered  
  

### Example
```lua
jo.callback.register('testClientCallback', function(value1,value2)
  print(value1, value2)
  return value1 + value2
end)
```

## jo.callback.triggerClient()
A function to trigger a client callback
### Syntax
```lua
jo.callback.triggerClient(name, cb, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> A function to receive the result of the event

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event  

#### Return value

### Example
```lua
local value1 = 10
local value2 = 5
jo.callback.triggerClient('testClientCallback', function(newValue)
  print(newValue)
end, value1,value2)
```

## jo.callback.triggerServer()
A function to trigger a server callback

### Syntax
```lua
jo.callback.triggerServer(name, cb, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> A function to receive the result of the event

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event


### Example
```lua
local value1 = 10
local value2 = 5
jo.callback.triggerServer('testServerCallback', function(newValue)
  print(newValue)
end, value1,value2)
```