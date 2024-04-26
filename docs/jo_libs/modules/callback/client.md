# Trigger Server Callback

The trigger server callback is usefull to get server data from the client side

## jo.triggerServerCallback()

### Syntax
```lua
jo.triggerServerCallback(name, cb, ...)
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
local job = "sheriff"
jo.triggerServerCallback('yourResource:server:getExperience', function(experience)
  print(experience)
end, job)
```