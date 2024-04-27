---
outline: 2
---
# Framework Class

A powerfull library to build a script compatible with all Frameworks.  
::: info
The class is automatically initiated when you load the library under the `jo.framework` global variable
:::
::: tip
If you have a custom framework, you can overwrite methods by added them in the overwrite-functions.lua file
#### Syntax
```lua
function OWFunctions.<MethodName>()
```
#### Example
```lua
--Overwrite the getUser method
function OWFunctions.getUser(source)
  return yourFramework:getUser(source)
end
```
:::
:::details List of compatible frameworks
* VORP
* RedEM:RP old
* RedEM:RP 2023 (reboot)
* QBR
* QR
* RSG
* RPX
:::

## jo.framework:addItemInInventory
Add a specific item in a custom inventory
### Syntax
```lua
jo.framework:addItemInInventory(source,id,item,quantity,metadata,needWait)
```
#### Parameters
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
  

### Example
```lua
local source = 1
local id = "locker:sheriff"
local item = "mdt_report"
local quantity = 1
local metadata = {id:321}
jo.framework:addItemInInventory(source,id,item,quantity,metadata)
```

## jo.framework:canUseItem()
If the user has enough quantity of a specific item in his inventory
### Syntax
```lua
jo.framework:canUseItem(source,item,amount,meta,remove)
```
#### Parameters
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
  

### Example
```lua
local source = 1
local item = "water"
local amount = 1
local canUseWater = jo.framework:canUseItem(source, item, amount, nil, nil)
print(canUseWater)
```

## jo.framework:createInventory()
Function to create an inventory
### Syntax
```lua
jo.framework:createInventory(id,label,definition)
```
#### Parameters
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

### Example
```lua
local id = "locker:sheriff"
local label = "Sheriff's locker"
local definition = {
  maxSlots = 100,
  maxWeight = 1000.0,
  acceptWeapons = false,
  shared = true,
  whitelist = {
    { item = "mdt_report", limit = 1000 }
  }
}
jo.framework:createInventory(id,label,definition)
```

## jo.framework:get()
Get the framework name
### Syntax
```lua
jo.framework:get()
```
#### Return value
Type: *string*
> Return the name of the framework   
  
### Example
```lua
local frameworkName = jo.framework:get()
print(frameworkName)
```

## jo.framework:getItemsFromInventory()
Get the list of items included in a custom inventory
### Syntax
```lua
jo.framework:getItemsFromInventory(source,id)
```
#### Parameters
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
  
### Example
```lua
local source = 1
local id = "locker:sheriff"
local items = jo.framework:getItemsFromInventory(source,id)
for key,item in pairs (items) do
  print(item.item)
end
```


## jo.framework:getUser()
Get the user data
### Syntax
```lua
jo.framework:getUser(source)
```
#### Parameters
`source` : *integer*
> The source ID of the player  
  

#### Return value
type: *User*
> Return a [User](./user/) class
  
### Example
```lua
local source = 1
local user = jo.framework:getUser(source)
print(user.data.firstname)
```

## jo.framework:giveItem()
Give an item to the user
### Syntax
```lua
jo.framework:giveItem(source,item,amount,meta)
```
#### Parameters
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
  

### Example
```lua
local source = 1
local item = "water"
local amount = 1
local itemGave = jo.framework:giveItem(source,item,amount)
print(itemGave)
```

## jo.framework:is()
Test if the framework is a specific framework
### Syntax
```lua
jo.framework:is(name)
```
#### Parameters
`name` : *string*
> The name of the framework  
  
#### Return value
type: *boolean*
> Return `true` if the framework is `name`  
  
### Example
```lua
local isVORP = jo.framework:is('VORP')
print(isVORP)
```

## jo.framework:openInventory()
Open a specific inventory
### Syntax
```lua
jo.framework:openInventory(source,id)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`id` : *string*
> The unique ID of the inventory
  

### Example
```lua
local source = 1
local id = "locker:sheriff"
jo.framework:openInventory(source,id)
```

## jo.framework:registerUseItem()
Register an item has usable and attach a function to it
### Syntax
```lua
jo.framework:registerUseItem(item,closeAfterUsed,cb)
```
#### Parameters
`item` : *string*
> The name of the item
  
`closeAfterUsed` : *boolean* <BadgeOptional />
> If the inventory needs to be closed after using the item
> default: true
  
`cb` : *function*
> The function fired after use the item  
> 1st argument: source  
> 2nd argument: metadata of the item
  

### Example
```lua
jo.framework:registerUseItem('water',true, function(source, metadata)
  TriggerServerEvent('drinkWater',source)
  jo.framework:removeItem(source,'water',1,metadata)
end)
```

## jo.framework:removeInventory()
Remove the inventory from the **server cache**. Usefull to reload the inventory from the database
### Syntax
```lua
jo.framework:removeInventory(id)
```
#### Parameters
`id` : *string*
> Unique id of the inventory
  

### Example
```lua
local id = "locker:sheriff"
jo.framework:removeInventory(id)
```

# User class
Go to the User class documentation : [link](./user/)