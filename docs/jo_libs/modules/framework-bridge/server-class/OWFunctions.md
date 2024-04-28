---
outline: 2
---
# OWFunctions

OWFunctions is an object to allow you to overwrite all framework functions.  
You can overwrite all method from Framework & User class.

:::tip
If you have an **unmodified version** of your framework that is supported **natively** by the library. You don't need to read this page.
:::

## How it works ?

Because some server customize their framework to add/edit features. The framework-bridge library was build to allow the link with these custom frameworks.  
You can also add the link to your fully custom framework with these functions.  
By overwrite the framework function in this file, all scripts that used the framework-bridge library will be compatible with your framework.

To overwrite a framework function, create the OWFunctions in the `@jo_libs/modules/framework-bridge/overwrite-functions.lua` file. 

### Syntax
```lua
function OWFunctions.<NameOfTheMethod>(...)
end
```
#### Arguments
`NameOfTheMethod` : *string*
> Name of the native method from framework-bridge library
  
`...` : *mixed*
> Same argument list than the native method
  

#### Return value
You have to return the same type of value than the native method to keep the scripts compatibility. 
  

## OWFunctions.addItemInInventory
Add a specific item in a custom inventory
### Syntax
```lua
function OWFunctions.addItemInInventory(source,id,item,quantity,metadata,needWait)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`id` : *string*
> The unique ID of the inventory
  
`item` : *string*
> The name of the item
  
`quantity` : *integer*
> The quantity of the item
  
`metadata` : *table*
> The metadata of the item
  
`needWait` : *boolean* <BadgeOptional />
> If the function need to wait the MySQL injected to ending  
> default: false
  

## OWFunctions.addMoney()
Add money from player
### Syntax
```lua
function OWFunctions.addMoney(source,amount,moneyType)
```
#### Arguments
`amount` : *float*
> The amount of money added
  
`moneyType` : *integer*
> moneyType = 1 > dollar  
> moneyType = 2 > gold  
> moneyType = 3 > rol  

## OWFunctions.addSecondMoney()
Add the user second money (gold in many framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFunctions.addSecondMoney(source, amount)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player  

`amount` : *float*
> The amount of money added
  

## OWFunctions.addThirdMoney()
Add the user third money (rol in VORP framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFunctions.addThirdMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`amount` : *float*
> The amount of money added

## OWFunctions.canUseItem()
If the user has enough quantity of a specific item in his inventory
### Syntax
```lua
function OWFunctions.canUseItem(source,item,amount,meta,remove)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`item` : *string*
> The name of the item need to use
  
`amount` : *integer*
> The quantity of the item
  
`meta` : *table*  <BadgeOptional />
> The metadata of the item
  
`remove` : *boolean* <BadgeOptional />
> If the item has to be removed  
> default: false
  

#### Return value
Type: *boolean*
> Return `true` if the player has enough quantity of the item
  

## OWFunctions.createInventory()
Function to create an inventory
### Syntax
```lua
function OWFunctions.createInventory(id,label,definition)
end
```
#### Arguments
`id` : *string*
> Unique id of the inventory
  
`label` : *string*
> Label of the inventory
  
`definition` : *table*
> `definition.maxSlots` : *integer* - Max slot of the inventory  
> `definition.maxWeight` : *float* - Max weight of the inventory  
> `definition.acceptWeapons` : *boolean* (default: false) - If the inventory accept weapons <BadgeOptional />  
> `definition.shared` : *boolean* (default: true) - If the inventory is shared between players <BadgeOptional />  
> `definition.ignoreStackLimit` : *boolean* (default: true) - If the inventory can overcoming stack limits <BadgeOptional />  
> `definition.whitelist` : *table* - Restrict the list of item can be put in the inventory <BadgeOptional />  
>> `definition.whitelist[..].item` : *string* - name of the whitelisted item  
>> `definition.whitelist[..].limit` : *string* - stack limit of this item  
>
> Configuration of the inventory  

## OWFunctions.get()
Get the framework name
### Syntax
```lua
function OWFunctions.get()
end
```
#### Return value
Type: *string*
> Return the name of the framework   
  

## OWFunctions.getUserIdentifiers()
Get the user's identifers
### Syntax
```lua
function OWFunctions.getUserIdentifiers(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
#### Return value
Type: *table*  
`identifiers.identifier`  
> Unique identifier of the player  

`identifiers.charid`
> Unique id of the player  

## OWFunctions.getItemsFromInventory()
Get the list of items included in a custom inventory
### Syntax
```lua
function OWFunctions.getItemsFromInventory(source,id)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`id` : *string*
> The unique ID of the inventory
  

#### Return value
Type: *table*
> Return the list of items  

> The item structure:  
> `item.amount` : *integer* - The amount of the item  
> `item.id` : *integer* - The id of the item  
> `item.item` : *string* - The name of the item  
> `item.metadata` : *table* - The metadata of the item  
  
## OWFunctions.getJob()

### Syntax
```lua
function OWFunctions.getJob(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player

#### Return value
Type: *string*
> Return the job name of the player  
  

## OWFunctions.getMoney()
Get the user money
### Syntax
```lua
function OWFunctions.getMoney(source,moneyType)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`moneyType` : *integer*
> moneyType = 1 > dollar  
> moneyType = 2 > gold  
> moneyType = 3 > rol  
  
#### Return value
Type: *float*
> Return the amount for this kind of money   

## OWFunctions.getRPName()

### Syntax
```lua
function OWFunctions.getRPName(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player

#### Return value
Type: *string*
> Return the name of the player  

## OWFunctions.getSecondMoney()
Get the user second money (gold in many framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFunctions.getSecondMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
#### Return value
Type: *float*
> Return the amount of money for the second currency  

## OWFunctions.getThirdMoney()
Get the user third money (rol in VORP framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFunctions.getThirdMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
#### Return value
Type: *float*
> Return the amount of money for the third currency  

## OWFunctions.getUser()
Get the user data
### Syntax
```lua
function OWFunctions.getUser(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player  
  

#### Return value
type: *User*
> Return a [User](./user/) class
  

## OWFunctions.giveItem()
Give an item to the user
### Syntax
```lua
function OWFunctions.giveItem(source,item,amount,meta)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player  

`item` : *string*
> The name of the item
  
`amount` : *integer*
> The amount of the item to give
  
`meta` : *table* <BadgeOptional />
> The metadata of the item
  

#### Return value
Type: *boolean*
> Return `true` if the item is successfully gave
  

## OWFunctions.initFramework()
A function fired to initialize the framework.
You can initialize the Core value here.
### Syntax
```lua
function OWFunctions.initFramework()
end
```
#### Arguments
None.

## OWFunctions.openInventory()
Open a specific inventory
### Syntax
```lua
function OWFunctions.openInventory(source,id, name, definition)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`id` : *string*
> The unique ID of the inventory
  
`name` : *string*
> The name of the inventory
  
`definition` : *table*
> `definition.maxSlots` : *integer* - Max slot of the inventory  
> `definition.maxWeight` : *float* - Max weight of the inventory  
> `definition.acceptWeapons` : *boolean* (default: false) - If the inventory accept weapons <BadgeOptional />  
> `definition.shared` : *boolean* (default: true) - If the inventory is shared between players <BadgeOptional />  
> `definition.ignoreStackLimit` : *boolean* (default: true) - If the inventory can overcoming stack limits <BadgeOptional />  
> `definition.whitelist` : *table* - Restrict the list of item can be put in the inventory <BadgeOptional />  
>> `definition.whitelist[..].item` : *string* - name of the whitelisted item  
>> `definition.whitelist[..].limit` : *string* - stack limit of this item  
>
> Configuration of the inventory  

## OWFunctions.registerUseItem()
Register an item has usable and attach a function to it
### Syntax
```lua
function OWFunctions.registerUseItem(item,closeAfterUsed,cb)
end
```
#### Arguments
`item` : *string*
> The name of the item
  
`closeAfterUsed` : *boolean* <BadgeOptional />
> If the inventory needs to be closed after using the item
> default: true
  
`cb` : *function*
> The function fired after use the item  
> 1st argument: source  
> 2nd argument: metadata of the item
  

## OWFunctions.removeInventory()
Remove the inventory from the **server cache**. Usefull to reload the inventory from the database
### Syntax
```lua
function OWFunctions.removeInventory(id)
end
```
#### Arguments
`id` : *string*
> Unique id of the inventory
  
## OWFunctions.removeMoney()
Remove money from player
### Syntax
```lua
function OWFunctions.removeMoney(source,amount,moneyType)
```
#### Arguments
`amount` : *float*
> The amount of money removed
  
`moneyType` : *integer*
> moneyType = 1 > dollar  
> moneyType = 2 > gold  
> moneyType = 3 > rol  

## OWFunctions.removeSecondMoney()
Remove the user second money (gold in many framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFunctions.removeSecondMoney(source, amount)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player  

`amount` : *float*
> The amount of money removed
  

## OWFunctions.removeThirdMoney()
Remove the user third money (rol in VORP framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFunctions.removeThirdMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`amount` : *float*
> The amount of money removed