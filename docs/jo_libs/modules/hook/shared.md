---
outline: 2
---
# Hook

[Hooks](/DeveloperResources/hooks) are a powerfull way for one script to interact/modify another script at specific, pre-defined spots. In contrast to events, hooks are **synchronous**.
Two kinds of hook exist :
* [Filters](/DeveloperResources/filters) are a way to edit data used by the script. Filters are fired at a specific point in time during the execution of the script and a value has to be returned.
* [Actions](/DeveloperResources/actions) are a way to add new features in a script. Actions are functions that occurs at a specific point in time during the execution of the script. No value need to be return.

## Actions

## jo.doActions()
Calls the functions that have been added to an action hook
### Syntax
```lua
jo.doActions(name,...)
```
#### Parameters
`name` : *string*
> The name of the action to be executed
  
`...` : *mixed* <BadgeOptional />
> Additional arguments which are passed on the functions hooked.
  
### Example
```lua
local distance = 10
local price = 500
jo.doActions('action_name', 10, 50)
```

## jo.registerAction()
Register a function to an action hook
### Syntax
```lua
jo.registerAction(name,cb,prority)
```
#### Parameters
`name` : *string*
> The name of the action to add the callback to
  
`cb` : *function*
> The function to be run when the action is called
  
`priority` : *integer* <BadgeOptional />
> Used to specify the order in which the functions are executed.  
> Lower numbers correspond with earlier execution.  
> default: 10
  

### Example
From the same resource:
```lua
jo.registerAction('action_name', function(distance,price)
  print(distance,price)
end,10)
```
From another resource:
```lua
exports.resource_name:registerAction('action_name', function(distance,price)
  print(distance,price)
end,10)
```

## Filters

## jo.applyFilters()
Calls the functions that have been added to a filter hook
### Syntax
```lua
jo.applyFilters(name,value,...)
```
#### Parameters
`name` : *string*
> The name of the filter hook

`value` : *mixed*
> The value to filter  
  
`...` : *mixed* <BadgeOptional />
> Additional arguments which are passed on the functions hooked.
  
### Example
```lua
local distance = 500
local price = 10
print(price)
price = jo.applyFilters('filter_name', price, distance)
print(price)
```

## jo.registerFilter()
Register a function to a filter hook
### Syntax
```lua
jo.registerFilter(name,cb,prority)
```
#### Parameters
`name` : *string*
> The name of the action to add the callback to
  
`cb` : *function*
> The function to be run when the action is called
  
`priority` : *integer* <BadgeOptional />
> Used to specify the order in which the functions are executed.  
> Lower numbers correspond with earlier execution.  
> default: 10
  

### Example
From the same resource:
```lua
jo.registerFilter('filter_name', function(price,distance)
  if distance > 100 then
    price = price/2
  end
  return price
end,10)
```
From another resource:
```lua
exports.resource_name:registerFilter('filter_name', function(price,distance)
  if distance > 100 then
    price = price/2
  end
  return price
end,10)
```
