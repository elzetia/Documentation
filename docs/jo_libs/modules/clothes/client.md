---
outline: [2,3]
---

# Clothes

Clothes is a very usefull module to manage ped clothes. The module is designed to create a persistence of clothes colors if you defined a custom colorway.

## Variables

### jo.clothes.categoryName
Type : *table*  
> Links between the hash and name of a category.  
>> key: category hash  
>> value: category name

### jo.clothes.order
Type : *table*  
> The order to apply the clothes  
>> key: order to apply the clothes  
>> value: category name

### jo.clothes.wearableStates
Type : *table*  
> The list of available wearable state by category  
>> key: category name  
>> value: table of wearable states

## Functions

### jo.clothes.apply()
A function to apply a clothes component on the ped
#### Syntax
```lua
jo.clothes.apply(ped,category,data)
```
#### Parameters
`ped` : *integer*
> The entity ID  

`category` : *string/integer*
> The category of the component
  
`data` : *object*
> The component data  
> `data.hash` : *integer* - The component hash  
> You can customize component colors with these four keys:  
> `data.palette` : *string/integer* - The color palette of the component <BadgeOptional />  
> `data.tint0` : *integer* - The first color number <BadgeOptional />  
> `data.tint1` : *integer* - The second color number <BadgeOptional />  
> `data.tint2` : *integer* - The third color number <BadgeOptional />  
> You can apply a component defined by his drawable value:  
> `data.drawable` : *integer* - The drawable value <BadgeOptional />  
> `data.albedo` : *integer* - The albedo value <BadgeOptional />  
> `data.normal` : *integer* - The normal value <BadgeOptional />  
> `data.material` : *integer* - The material value <BadgeOptional />  
> 
  

#### Example
```lua
local ped = PlayerPedId()
local category = "hats"
local data = {hash = "CLOTHING_ITEM_F_HAT_241_PANTHER_VAR_001"}
jo.clothes.apply(ped,category,data)
```

### jo.clothes.bootsAreUnderPant()
A function to know if the boots are under the pant
#### Syntax
```lua
jo.clothes.bootsAreUnderPant(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID

#### Return value
Type: *booleant*
> Return `true` if boots are under the pant, `false` otherwise.
  
#### Example
```lua
local ped = PlayerPedId()
local isUnder = jo.clothes.bootsAreUnderPant(ped)
print(isUnder)
```

### jo.clothes.collarClose()
A function to close the collar
#### Syntax
```lua
jo.clothes.collarClose(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The clothes data  
> see the structure in [jo.clothes.apply()](#jo-clothes-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
jo.clothes.collarClose(ped,data)
```


### jo.clothes.collarIsOpened()
Return if the collar is opened
#### Syntax
```lua
jo.clothes.collarIsOpened(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
#### Return value
Type: *boolean*
> Return `true` if the collar is opened, `false` otherwise.
  
#### Example
```lua
local ped = PlayerPedId()
local isOpened = jo.clothes.collarIsOpened(ped)
print(isOpened)
```

### jo.clothes.collarOpen()
A function to open the collar
#### Syntax
```lua
jo.clothes.collarOpen(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The clothes data  
> see the structure in [jo.clothes.apply()](#jo-clothes-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
jo.clothes.collarOpen(ped,data)
```

### jo.clothes.getCategoriesEquiped()
Return the list of clothes categories equiped on the ped
#### Syntax
```lua
jo.clothes.getCategoriesEquiped(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
#### Return value
Type: *object*
> Return an object with the category in key and data in value  
> `categories[x].index` : *integer* - the index of the component on the ped
> `categories[x].category` : *string* - the category name if the hash is known
  
#### Example
```lua
local ped = PlayerPedId()
local categories = jo.clothes.getCategoriesEquiped(ped)
print(json.encode(categories))
--Expected output: categories = { 539411565 = {index = 1, category = "shirts_full"}, 491541130 = { index = 2, category = "pants"} }
```

### jo.clothes.getCategoryTint()
A function to get the tints of a category
#### Syntax
```lua
jo.clothes.getCategoryTint(ped, category)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`category` : *string*
> The category of the component
  
#### Return value
1st: *integer*
> Return the color palette  
  
2nd: *integer*
> Return the tint number 1
    
3rd: *integer*
> Return the tint number 2 
  
4th: *integer*
> Return the tint number 4 
  

#### Example
```lua
local ped = PlayerPedId()
local category = "shirts_full"
local palette, tint0, tint1, tint2 = jo.clothes.getCategoryTint(ped, category)
print(palette, tint0, tint1, tint2)
```

### jo.clothes.getComponentCategory()
Return the category hash of a component and if it's a MP component
#### Syntax
```lua
jo.clothes.getComponentCategory(ped,hash)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`hash` : *integer*
> The component hash
  

#### Return values
1st : *integer*
> Return hash value of the category 
  
2nd : *boolean*
> Return `true` if it's a MP component, `false` otherwise.
  

#### Example
```lua
local ped = PlayerPedId()
local hash = joaat("CLOTHING_ITEM_F_HAT_241_PANTHER_VAR_001")
local catHash,isMp = jo.clothes.getComponentCategory(ped,hash)
print(catHash,isMp)
--Expected output: -1725579161, true
```

### jo.clothes.getComponentEquiped()
A function to get the hash of the component equiped in a category
#### Syntax
```lua
jo.clothes.getComponentEquiped(ped, category)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`category` : *string*
> The category to get the component
  

#### Return value
Type : *integer*
> Return the hash of the component or `false` is not equiped

#### Example
```lua
local ped = PlayerPedId()
local category = "hats"
local component = jo.clothes.getComponentEquiped(ped, category)
print(component)
```

### jo.clothes.getComponentsEquiped()
A function to get all components equiped
#### Syntax
```lua
jo.clothes.getComponentsEquiped(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
  

#### Return value
Type : *table*
> Return the list of components equiped
#### Example
```lua
local ped = PlayerPedId()
local components = jo.clothes.getComponentsEquiped(ped)
print(json.encode(components))
```

### jo.clothes.getWearableState()
Get the wearable state of a category  
#### Syntax
```lua
jo.clothes.getWearableState(ped, category)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`category` : *string*
> The category name
  

#### Return value
Type: *string*
> Return the wearable state of the category

#### Example
```lua
local ped = PlayerPedId()
local category = "neckwear"
local wearableState = jo.clothes.getWearableState(ped, category)
print(wearableState)
```

### jo.clothes.hairIsPomade()
A function to know if the hair is pomaded
#### Syntax
```lua
jo.clothes.hairIsPomade(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
  

#### Return value
Type : *bolean*
> Return `true` if the hair is pomaded
#### Example
```lua
local ped = PlayerPedId()
local isPomaded = jo.clothes.hairIsPomade(ped)
print(isPomaded)
```

### jo.clothes.isCategoryEquiped()
A function to know if a specific category is equiped on the ped
#### Syntax
```lua
jo.clothes.isCategoryEquiped(ped,category)
```
#### Parameters
`ped` : *integer*
> The entity ID

`category` : *string/integer*
> The category name
  

#### Return values
1st: *boolean*
> Return `true` if the category is equiped, `false` otherwise.  
  
2nd: *integer*
> Return the index of the category
  
#### Example
```lua
local ped = PlayerPedId()
local category = "pants"
local isEquiped, index = jo.clothes.isCategoryEquiped(ped,category)
print(isEquiped, index)
```

### jo.clothes.loadoutIsOnRight()
A function to know if the loadout is on the right
#### Syntax
```lua
jo.clothes.loadoutIsOnRight(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID

#### Return value
Type: *boolean*
> Return `true` if the loadout in on the right, `false` otherwise
  
#### Example
```lua
local ped = PlayerPedId()
local isRight = jo.clothes.loadoutIsOnRight(ped)
print(isRight)
```

### jo.clothes.neckwearIsUp()
Return if the neckwear is on the face of the player or not
#### Syntax
```lua
jo.clothes.neckwearIsUp(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID

#### Return value
Type: *boolean*
> Return `true` if the neckwear is on the face, `false` otherwise.
  

#### Example
```lua
local ped = PlayerPedId()
local isUp = jo.clothes.neckwearIsUp(ped)
print(isUp)
```

### jo.clothes.refreshPed()
A function to refresh the clothes component
#### Syntax
```lua
jo.clothes.refresh(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
  

#### Example
```lua
local ped = PlayerPedId()
jo.clothes.refreshPed(ped)
```

### jo.clothes.remove()
A function to remove a clothes component
#### Syntax
```lua
jo.clothes.remove(ped,category)
```
#### Parameters
`ped` : *integer*
> The entity ID

`category` : *string/integer*
> The category of clothes to remove
  

#### Example
```lua
local ped = PlayerPedId()
local category = "hats"
jo.clothes.remove(ped,category)
```

### jo.clothes.setWearableState()

A function to edit the wearable state of a category
#### Syntax
```lua
jo.clothes.setWearableState(ped,category,data,state)
```
#### Parameters
`ped` : *integer*
> The entity ID

`category` : *string*
> The category of the component
  
`data` : *object*
> The clothes data  
> see the structure in [jo.clothes.apply()](#jo-clothes-apply)
  
`state` : *string/integer*
> The wearable state to apply on the component  
> The list of wearable state can be find in the `jo_libs>module>clothes>client.lua` file `line 76`
  

#### Example
```lua
local ped = PlayerPedId()
local category = "neckwear"
local data = {hash = joaat("CLOTHING_ITEM_F_NECKERCHIEF_000_TINT_001")}
local state = jo.clothes.wearableStates.neckwear[1] --neckwear UP
jo.clothes.setWearableState(ped,category,data,state)
```


### jo.clothes.sleeveIsRolled()
Return if the sleeve are rolled
#### Syntax
```lua
jo.clothes.sleeveIsRolled(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID

#### Return value
Type: *boolean*
> Return `true` if the sleeve are rolled, `false` otherwise.

#### Example
```lua
local ped = PlayerPedId()
local isRolled = jo.clothes.sleeveIsRolled(ped)
print(isRolled)
```

### jo.clothes.sleeveUnroll()
A function to unroll sleeve
#### Syntax
```lua
jo.clothes.sleeveUnroll(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The clothes data  
> see the structure in [jo.clothes.apply()](#jo-clothes-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
local jo.clothes.sleeveUnroll(ped,data)
```

### jo.clothes.sleeveRoll()
A function to roll sleeve
#### Syntax
```lua
jo.clothes.sleeveRoll(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The clothes data  
> see the structure in [jo.clothes.apply()](#jo-clothes-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
local jo.clothes.sleeveRoll(ped,data)
```

### jo.clothes.vestIsUnderPant()
A function to know if the vest is under the pant
#### Syntax
```lua
jo.clothes.vestIsUnderPant(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID

#### Return value
Type: *boolean*
> Return `true` if the vest is in the pant, `false` otherwise
  

#### Example
```lua
local ped = PlayerPedId()
local isIn = jo.clothes.vestIsUnderPant(ped)
print(isIn)
```

### jo.clothes.waitPedLoaded()
A function to wait the refresh of ped
#### Syntax
```lua
jo.clothes.waitPedLoaded(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
> 
#### Example
```lua
local ped = PlayerPedId()
local isIn = jo.clothes.waitPedLoaded(ped)
```