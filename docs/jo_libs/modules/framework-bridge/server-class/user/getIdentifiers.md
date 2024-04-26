# User:getIdentifiers()

### Syntax
```lua
User:getIdentifiers()
```
#### Parameters
None.

#### Return value
Type: *table*  
`identifiers.identifier`  
> Unique identifier of the player  

`identifiers.charid`
> Unique id of the player  

### Example
```lua
local source = 1
local user = jo.User:get(source)
local identifiers = user:getIdentifiers()
print(identifiers.identifier)
print(identifiers.charid)
```