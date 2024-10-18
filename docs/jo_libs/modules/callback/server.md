---
outline: 2
---
# Callback

A module to use callback module server side

## jo.callback.register()

### Syntax
```lua
jo.callback.register(name, cb)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> The function executed when the callback is triggered  
> :warning: `source` is **always** the first argument

### Example
```lua
jo.callback.register('testServerCallback', function(source,value1,value2)
  print(source,value1,value2)
  return value1 + value2
end)
```

## jo.callback.triggerClient()
A function to trigger a client callback

### Syntax
```lua
jo.callback.triggerClient(name, source, cb, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event

`source` : *integer*
> The source of the client to trigger
  
`cb` : *function*
> A function to receive the result of the event

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event


### Example
```lua
local value1 = 5
local value2 = 10
local source =  1
jo.callback.triggerClient('testClientCallback', source, function(returnValue)
  print(returnValue)
end, value1, value2)
```

## jo.callback.triggerServer()
A function to trigger a server callback

### Syntax
```lua
jo.callback.triggerServer(name, cb, source, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event
  
`cb` : *function*
> A function to receive the result of the event

`source` : *integer*
> The source of the client to trigger
  

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event


### Example
```lua
local value1 = 5
local value2 = 10
local source =  1
jo.callback.triggerServer('testServerCallback', function(returnValue)
  print(returnValue)
end, source, value1, value2)
```