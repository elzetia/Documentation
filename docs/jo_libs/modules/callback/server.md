# Register Server Callback

## jo.registerServerCallback()

### Syntax
```lua
jo.registerServerCallback(name, cb)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> The function executed when the callback is triggered  
> :warning: `source` is **always** the first argument

### Example
```lua
jo.registerServerCallback('yourResource:server:getExperience', function(source,job)
  local experience = GetExperience(source,job)
  return experience
end)
```