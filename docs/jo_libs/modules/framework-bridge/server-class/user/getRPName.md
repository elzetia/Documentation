# User:getRPName()

### Syntax
```lua
User:getRPName()
```
#### Parameters
None.

#### Return value
Type: *string*
> Return the user's name
  

### Example
```lua
local source = 1
local user = jo.User:get(source)
local name = user:getRPName()
print(name)
```