# User:getJob()

### Syntax
```lua
User:getJob()
```
#### Parameters
None.

#### Return value
Type: *string*
> Return the job name of the player  
  

### Example
```lua
local source = 1
local user = jo.User:get(source)
local job = user:getJob()
print(job)
```