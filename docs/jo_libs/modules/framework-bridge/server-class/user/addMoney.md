# User:addMoney()

Add money to player

### Syntax
```lua
User:addMoney(amount,moneyType)
```
#### Parameters
`amount` : *float*
> The amount of money removed
  
`moneyType` : *integer*
> moneyType = 1 > dollar  
> moneyType = 2 > gold  
> moneyType = 3 > rol  


### Example
```lua
local source = 1
local amount = 100.0
local moneyType = 1
local user = jo.User:get(source)
user:addMoney(amount,moneyType)
```

