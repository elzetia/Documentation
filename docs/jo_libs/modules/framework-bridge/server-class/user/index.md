---
outline: [1,3]
---

# User class
A class to get all the user information.

::: tip
If you have a custom framework, you can overwrite methods by added them in the overwrite-functions.lua file
#### Syntax
```lua
function OWFramework.<MethodName>()
```
#### Example
```lua
--Overwrite the getUser method
function OWFramework.addMoney(source)
  return yourFramework:addMoney(source)
end
```
:::

## Constructor

#### Syntax
```lua
jo.User:get(source)
```
#### Parameters
`source` : *integer*
> The source ID of the player  
  

#### Return value
Type: *User*
> Return a User class   
  
#### Example
```lua
local user = jo.User:get(source)
print(user:getJob())
```

## Instance Methods

### [`user:addMoney()`](./addMoney.md)
Add money to player

### [`user:canBuy()`](./canBuy)
Return if the user has enough money

### [`user:getIdentifiers()`](./getIdentifiers.md)
Return the user identifier and character ID

### [`user:getJob()`](./getJob.md)
Return the user's job

### [`user:getMoney()`](./getMoney)
Return the user's money.

### [`user:getRPName`](./getRPName.md)
Return the user's name

### [`user:removeMoney()`](./removeMoney)
Remove money from player



