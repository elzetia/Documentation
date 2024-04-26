# User:canBuy()

Return if the user has enough money

### Syntax
```lua
User:canBuy(price, moneyType)
```
#### Parameters
`price` : *float*
> The amount to compare with the user money

`moneyType` : *integer*
> moneyType = 1 > dollar  
> moneyType = 2 > gold  
> moneyType = 3 > rol  

#### Return value
Type: *boolean*
> Return `true` if the user has more money than `price`  

### Example
```lua
local source = 1
local price = 20.4
local moneyType = 2
local user = jo.User:get(source)
local hasEnoughGold = user:canBuy(price,moneyType)
print(hasEnoughGold)
```
