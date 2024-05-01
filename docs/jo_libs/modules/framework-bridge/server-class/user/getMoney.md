# User:getMoney()

Return the user money

### Syntax
```lua
User:getMoney(moneyType)
```
#### Parameters
`moneyType` : *integer*
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  
  

#### Return value
Type: *float*
> Return the amount for this kind of money   
  

### Example
```lua
local source = 1
local user = jo.User:get(source)
local dollar = user:getMoney(1)
local gold = user:getMoney(2)
print(dollar,gold)
```
