---
outline: [2,3]
---

# Component

Component is a very usefull module to manage entity component. The module is designed to create a persistence of component colors if you defined a custom colorway.

## Variables

### jo.component.categoryName
Type : *table*  
> Links between the hash and name of a category.  
>> key: category hash  
>> value: category name

### jo.component.order
Type : *table*  
> The order to apply the component  
>> key: order to apply the component  
>> value: category name

### jo.component.wearableStates
Type : *table*  
> The list of available wearable state by category  
>> key: category name  
>> value: table of wearable states

## Functions

### jo.component.apply()
A function to apply a component component on the ped
#### Syntax
```lua
jo.component.apply(ped,category,data)
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
jo.component.apply(ped,category,data)
```

### jo.component.bootsAreUnderPant()
A function to know if the boots are under the pant
#### Syntax
```lua
jo.component.bootsAreUnderPant(ped)
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
local isUnder = jo.component.bootsAreUnderPant(ped)
print(isUnder)
```

### jo.component.collarClose()
A function to close the collar
#### Syntax
```lua
jo.component.collarClose(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The component data  
> see the structure in [jo.component.apply()](#jo-component-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
jo.component.collarClose(ped,data)
```


### jo.component.collarIsOpened()
Return if the collar is opened
#### Syntax
```lua
jo.component.collarIsOpened(ped)
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
local isOpened = jo.component.collarIsOpened(ped)
print(isOpened)
```

### jo.component.collarOpen()
A function to open the collar
#### Syntax
```lua
jo.component.collarOpen(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The component data  
> see the structure in [jo.component.apply()](#jo-component-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
jo.component.collarOpen(ped,data)
```

### jo.component.getCategoriesEquiped()
Return the list of component categories equiped on the ped
#### Syntax
```lua
jo.component.getCategoriesEquiped(ped)
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
local categories = jo.component.getCategoriesEquiped(ped)
print(json.encode(categories))
--Expected output: categories = { 539411565 = {index = 1, category = "shirts_full"}, 491541130 = { index = 2, category = "pants"} }
```

### jo.component.getCategoryTint()
A function to get the tints of a category
#### Syntax
```lua
jo.component.getCategoryTint(ped, category)
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
local palette, tint0, tint1, tint2 = jo.component.getCategoryTint(ped, category)
print(palette, tint0, tint1, tint2)
```

### jo.component.getComponentCategory()
Return the category hash of a component and if it's a MP component
#### Syntax
```lua
jo.component.getComponentCategory(ped,hash)
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
local catHash,isMp = jo.component.getComponentCategory(ped,hash)
print(catHash,isMp)
--Expected output: -1725579161, true
```

### jo.component.getComponentEquiped()
A function to get the hash of the component equiped in a category
#### Syntax
```lua
jo.component.getComponentEquiped(ped, category)
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
local component = jo.component.getComponentEquiped(ped, category)
print(component)
```

### jo.component.getComponentsEquiped()
A function to get all components equiped
#### Syntax
```lua
jo.component.getComponentsEquiped(ped)
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
local components = jo.component.getComponentsEquiped(ped)
print(json.encode(components))
```

### jo.component.getWearableState()
Get the wearable state of a category  
#### Syntax
```lua
jo.component.getWearableState(ped, category)
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
local wearableState = jo.component.getWearableState(ped, category)
print(wearableState)
```

### jo.component.hairIsPomade()
A function to know if the hair is pomaded
#### Syntax
```lua
jo.component.hairIsPomade(ped)
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
local isPomaded = jo.component.hairIsPomade(ped)
print(isPomaded)
```

### jo.component.isCategoryEquiped()
A function to know if a specific category is equiped on the ped
#### Syntax
```lua
jo.component.isCategoryEquiped(ped,category)
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
local isEquiped, index = jo.component.isCategoryEquiped(ped,category)
print(isEquiped, index)
```

### jo.component.loadoutIsOnRight()
A function to know if the loadout is on the right
#### Syntax
```lua
jo.component.loadoutIsOnRight(ped)
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
local isRight = jo.component.loadoutIsOnRight(ped)
print(isRight)
```

### jo.component.neckwearIsUp()
Return if the neckwear is on the face of the player or not
#### Syntax
```lua
jo.component.neckwearIsUp(ped)
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
local isUp = jo.component.neckwearIsUp(ped)
print(isUp)
```

### jo.component.refreshPed()
A function to refresh the component component
#### Syntax
```lua
jo.component.refresh(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
  

#### Example
```lua
local ped = PlayerPedId()
jo.component.refreshPed(ped)
```

### jo.component.remove()
A function to remove a component component
#### Syntax
```lua
jo.component.remove(ped,category)
```
#### Parameters
`ped` : *integer*
> The entity ID

`category` : *string/integer*
> The category of component to remove
  

#### Example
```lua
local ped = PlayerPedId()
local category = "hats"
jo.component.remove(ped,category)
```

### jo.component.setWearableState()

A function to edit the wearable state of a category
#### Syntax
```lua
jo.component.setWearableState(ped,category,data,state)
```
#### Parameters
`ped` : *integer*
> The entity ID

`category` : *string*
> The category of the component
  
`data` : *object*
> The component data  
> see the structure in [jo.component.apply()](#jo-component-apply)
  
`state` : *string/integer*
> The wearable state to apply on the component  
> The list of wearable state can be find in the `jo_libs>module>component>client.lua` file `line 76`
  

#### Example
```lua
local ped = PlayerPedId()
local category = "neckwear"
local data = {hash = joaat("CLOTHING_ITEM_F_NECKERCHIEF_000_TINT_001")}
local state = jo.component.wearableStates.neckwear[1] --neckwear UP
jo.component.setWearableState(ped,category,data,state)
```


### jo.component.sleeveIsRolled()
Return if the sleeve are rolled
#### Syntax
```lua
jo.component.sleeveIsRolled(ped)
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
local isRolled = jo.component.sleeveIsRolled(ped)
print(isRolled)
```

### jo.component.sleeveUnroll()
A function to unroll sleeve
#### Syntax
```lua
jo.component.sleeveUnroll(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The component data  
> see the structure in [jo.component.apply()](#jo-component-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
local jo.component.sleeveUnroll(ped,data)
```

### jo.component.sleeveRoll()
A function to roll sleeve
#### Syntax
```lua
jo.component.sleeveRoll(ped,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`data` : *object*
> The component data  
> see the structure in [jo.component.apply()](#jo-component-apply)

#### Example
```lua
local ped = PlayerPedId()
local data = {hash = joaat('CLOTHING_ITEM_M_SHIRT_209_TINT_005')}
local jo.component.sleeveRoll(ped,data)
```

### jo.component.vestIsUnderPant()
A function to know if the vest is under the pant
#### Syntax
```lua
jo.component.vestIsUnderPant(ped)
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
local isIn = jo.component.vestIsUnderPant(ped)
print(isIn)
```

### jo.component.waitPedLoaded()
A function to wait the refresh of ped
#### Syntax
```lua
jo.component.waitPedLoaded(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID
> 
#### Example
```lua
local ped = PlayerPedId()
local isIn = jo.component.waitPedLoaded(ped)
```