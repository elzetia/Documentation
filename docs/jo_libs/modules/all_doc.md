---
outline: [2,3]
---

# Animation

Animation is a powerfull module to play animations in your script.

## Variables

### jo.animation.easeIn
Type : *float*:  
> A variable to set the ease **in** speed of animations  
> Default: 4.0

### jo.animation.easeOut
Type : *float*  
> A variable to set the ease **out** speed of animations  
> Default: -4.0

## Functions

### jo.animation.goToCoords()
Function to move a ped to a destination
#### Syntax
```lua
jo.animation.goToCoords(ped, destination, speed, waiter, distanceToStop)
```
#### Parameters
`ped` : *integer*
> The ped to move
  
`destination` : *vector3/vector4*
> The coordinate of the destination  
> If vector4 is used, the ped will stop at the end and turn to the desired heading
  
`speed` : *float* <BadgeOptional />
> The speed of the walk  
> Default: 1.0
  
`waiter` : *boolean* <BadgeOptional />
> If need to wait the reach of location to end the function  
> Default: false
  
`distanceToStop` : *float* <BadgeOptional />
> The distance between the ped and the destination to stop it  
> Default: 0.0
  

#### Example
```lua
local ped = PlayerPedId()
local destination = vec4(1324.0,234.0,50.0,180.0)
local speed = 2.0
local waiter = true
local distanceToStop = 3.0
jo.animation.goToCoords(ped, destination, speed, waiter, distanceToStop)
```

### jo.animation.load()
Load the dictionnary of animation
#### Syntax
```lua
jo.animation.load(dict,waiter)
```
#### Parameters
`dict` : *string*
> The dictionnary of the animation
  
`waiter` : *boolean* <BadgeOptional />
> If need to wait the loading to end the function  
> default: false
  
#### Example
```lua
local dict = "cnv_camp@rchso@cnv@ccdtc33@player_karen"
local waiter = true
jo.animation.load(dict,waiter)
```

### jo.animation.play()
Play animation. The function load automatically necessary resources.
#### Syntax
```lua
jo.animation.play(ped, dict, name, duration, flag, offset)
```
#### Parameters
`ped` : *integer*
> The entity where the animation will be played
  
`dict` : *string*
> The dictionnary of the animation

`name` : *string*
> The name of the animation
  
`duration` : *integer* <BadgeOptional />
> Duration of the animation in ms.  
> default: -1
  

`flag` : *integer* <BadgeOptional />
> The flag of the animation  
> default: 0
  
`offset` : *float* <BadgeOptional />
> The offset of the animation
> 0.0 <> 1.0
> default: 0.0
  

#### Example
```lua
local ped = PlayerPedId()
local dict = "cnv_camp@rchso@cnv@ccdtc33@player_karen"
local name = "arthur_dance_loop"
local duration = -1
local flag = 1
jo.animation.play(ped, dict, name, duration, flag)
```

### jo.animation.setDesiredHeading()
Turn the ped to the desired heading
#### Syntax
```lua
jo.animation.setDesiredHeading(ped, heading, waiter)
```
#### Parameters
`ped` : *integer*
> The ped to turn
  
`heading` : *float*
> The desired heading
  
`waiter` : *boolean* <BadgeOptional />
> If need to reach the heading to end the function  
> Default: true
  

#### Example
```lua
local ped = PlayerPedId()
local heading = 180.0
local waiter = true
jo.animation.setDesiredHeading(ped, heading, waiter)
```
# Animation

Animation is a module to play animations in your script.

## Include Animation in your script

1. To use the Animation library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the animation module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'animation',
}
```
You can now use the library inside of your resource with the `jo.animation` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
---
outline: 2
---

# Blip

## jo.blip.create()
Create a new blip
### Syntax
```lua
jo.blip.create(location,name,sprite,blipHash,color)
```
#### Parameters
`location` : *vector3*
> The blip location
  
`name` : *string*
> The blip name
  
`sprite` : *string/hash*
> The name of the sprite
  
`blipHash` : *integer* <BadgeOptional />
> The blip type  
> default: 1664425300
  
`color` : *type* <BadgeOptional />
> The color of the blip
  

#### Return value
Type: *integer*
> Return the blip ID 
  
### Example
```lua
local location = vec3(1000.0,1000.0,1000.0)
local blip = jo.blip.create(location,"My blip","BLIP_AMBIENT_HORSE")
print(blip)
```
# Blip

Blip is a module to add blips in your map. Blips are automatically removed if you stop the script.

## Include Blip in your script

1. To use the Blip library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the blip module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'blip',
}
```
You can now use the library inside of your resource with the `jo.blip` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
---
outline: 2
---
# Callback

A module to use callback module client side.

## jo.callback.register()
A function to register a client callback
### Syntax
```lua
jo.callback.register(name,cb)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> The function executed when the callback is triggered  
  

### Example
```lua
jo.callback.register('testClientCallback', function(value1,value2)
  print(value1, value2)
  return value1 + value2
end)
```

## jo.callback.triggerClient()
A function to trigger a client callback
### Syntax
```lua
jo.callback.triggerClient(name, cb, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> A function to receive the result of the event

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event  

#### Return value

### Example
```lua
local value1 = 10
local value2 = 5
jo.callback.triggerClient('testClientCallback', function(newValue)
  print(newValue)
end, value1,value2)
```

## jo.callback.triggerServer()
A function to trigger a server callback

### Syntax
```lua
jo.callback.triggerServer(name, cb, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> A function to receive the result of the event

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event


### Example
```lua
local value1 = 10
local value2 = 5
jo.callback.triggerServer('testServerCallback', function(newValue)
  print(newValue)
end, value1,value2)
```
# Callback

Callback module is a module to create easy links between your client and server sides in your script.

## Include Callback in your script

1. To use the Callback library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the callback module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'callback',
}
```
You can now use the library inside of your resource with the `jo.callback` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
Documentation for the [Server](./server.md) side  
---
outline: 2
---
# Callback

A module to use callback module server side

## jo.callback.register()

### Syntax
```lua
jo.callback.register(name, cb)
```
#### Parameters
`name` : *string*
> The name of the callback event

`cb` : *function*
> The function executed when the callback is triggered  
> :warning: `source` is **always** the first argument

### Example
```lua
jo.callback.register('testServerCallback', function(source,value1,value2)
  print(source,value1,value2)
  return value1 + value2
end)
```

## jo.callback.triggerClient()
A function to trigger a client callback

### Syntax
```lua
jo.callback.triggerClient(name, source, cb, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event

`source` : *integer*
> The source of the client to trigger
  
`cb` : *function*
> A function to receive the result of the event

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event


### Example
```lua
local value1 = 5
local value2 = 10
local source =  1
jo.callback.triggerClient('testClientCallback', source, function(returnValue)
  print(returnValue)
end, value1, value2)
```

## jo.callback.triggerServer()
A function to trigger a server callback

### Syntax
```lua
jo.callback.triggerServer(name, cb, source, ...)
```
#### Parameters
`name` : *string*
> The name of the callback event
  
`cb` : *function*
> A function to receive the result of the event

`source` : *integer*
> The source of the client to trigger
  

`...` : *mixed* <BadgeOptional />
> The list of the parameter to send to the callback event


### Example
```lua
local value1 = 5
local value2 = 10
local source =  1
jo.callback.triggerServer('testServerCallback', function(returnValue)
  print(returnValue)
end, source, value1, value2)
```
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
# Component

Component is a very usefull module to manage ped component.

## Include Component in your script

1. To use the Component library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the component module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'component',
}
```
You can now use the library inside of your resource with the `jo.component` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
# Database

Database module is a module to interact with your database.

## Include Database in your script

1. To use the Database library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Database module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'database',
}
```
You can now use the library inside of your resource with the `jo.database` global variable.

## Functions

Documentation for the [Server](./server.md) side  
---
outline: 2
---
# Database

A library to made more optimize the link with your Database

## jo.database.addColumn()

A function to create a column in a specific table if not exist

### Syntax
```lua
jo.database.addColumn(tableName,name,definition)
```
#### Parameters
`tableName` : *string*
> The name of the table  

`name` : *string*
> The name of the column  

`definition` : *string*
> The definition of the column  
  
#### Return value
Type: *boolean*
> Return `true` if the column is successfully created
  

### Example
```lua
local isColumnAdded = jo.addColumn('table_name','column_name','INT NOT NULL DEFAULT "0" AFTER TABLE table_name')
```

## jo.database.addTable()
A function to create a table if not exist

### Syntax
```lua
jo.database.addTable(tableName, tableStructure)
```
#### Parameters
`tableName` : *string*
> The name of the table

`tableStructure` : *string*
> The structure of the table  
  
#### Return value
Type: *boolean*
> Return `true` if the table successfully created  
  

### Example
```lua
local isTableCreated = jo.database.addTable(
  'your_table_name',
  [[id INT NOT NULL AUTO_INCREMENT,
  first_column VARCHAR(50) NOT NULL DEFAULT '',
  second_column VARCHAR(50) NOT NULL DEFAULT '',]]
)
```

## jo.database.addTrigger()

A function to create a trigger if not exist

### Syntax
```lua
jo.database.addTrigger(triggerName,definition)
```
#### Parameters
`triggerName` : *string*
> The name of the trigger  
  
`definition` : *string*
> The definition of the trigger  
  

#### Return value
Type: *boolean*
> Return `true` if the trigger is successfully created
  

### Example
```lua
local isTriggerCreated = jo.addTriggerDB(
  'the_name_of_the_trigger',
  "AFTER DELETE ON `table` FOR EACH ROW UPDATE `table2` SET column = 0 WHERE equiped_on = OLD.id"
)
```
---
outline: 2
---
# Dataview

The dataview file from [Gottfriedleibniz](https://raw.githubusercontent.com/femga/rdr3_discoveries/a63669efcfea34915c53dbd29724a2a7103f822f/AI/EVENTS/dataview_by_Gottfriedleibniz.lua)

### Example
```lua
local view = DataView.ArrayBuffer(512)
if Citizen.InvokeNative(0x79923CD21BECE14E, 1, view:Buffer(), Citizen.ReturnResultAnyway()) then
    local dlc = {
        validCheck = view:GetInt64(0),
        weaponHash = view:GetInt32(8),
        val3 = view:GetInt64(16),
        weaponCost = view:GetInt64(24),
        ammoCost = view:GetInt64(32),
        ammoType = view:GetInt64(40),
        defaultClipSize = view:GetInt64(48),
        nameLabel = view:GetFixedString(56, 64),
        descLabel = view:GetFixedString(120, 64),
        simpleDesc = view:GetFixedString(184, 64),
        upperCaseName = view:GetFixedString(248, 64),
    }
end
```
# Dataview

Dataview module is a module to use dataview in your scripts.

## Include Dataview in your script

1. To use the Dataview library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Dataview module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'dataview',
}
```
You can now use the library inside of your resource with the `Dataview` global variable.

## Functions

Documentation for the [Client](./client.md) side  
# Date

Date is a module to improve the management of date in your scripts.

## Include Date in your script

1. To use the Date library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Date module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'date',
}
```
You can now use the library inside of your resource with the `jo.Date` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  

---
outline: [2,3]
---

# Date

Date is a powerfull module to manage date in your scripts.

## jo.date.convertMsToInterval()
A function to convert a time in ms to a readable string
### Syntax
```lua
jo.date.convertMsToInterval(ms, lang)
```
#### Parameters
`ms` : *integer*
> The duration in ms
  
`lang` : *table* <BadgeOptional />
> The list of translatable strings  
> Use `false` to disable
>> lang.ms : *string* - "ms"  
>> lang.s : *string* - "s"  
>> lang.h : *string* - "h"  
>> lang.d : *string* - "d"  
>> lang.ds : *string* - "ds"  
  

#### Return value
Type: *string*
> Return the interval in a readable value 
  

### Example
```lua
local gap = 10000003
local forHumain = jo.date.convertMsToInterval(gap)
print(forHumain)
--Expected output: '2h, 46min, 40s, 3ms'
```
---
outline: 2
---
# Entity

A library with usefull function to manage entity

## jo.entity.create()
a function to create a new entity
### Syntax
```lua
jo.entity.create(model,coords,heading,networked)
```
#### Parameters
`model` : *string*
> The model of the entity
  
`coords` : *vector3*
> The coordinate of the entity
  
`heading` : *float*
> The heading of the entity
  
`networked` : *boolean*
> If the entity needs to be networked
  

#### Return value
Type: *integer*
> Return ID of the entity 
  

### Example
```lua
local entity = jo.entity.create('re_kidnappedvictim_females_01',vec3(1294.0,-512.3, 30.0),90.0,true)
print(entity)
```

## jo.entity.delete()
A function to delete an entity only if exist
### Syntax
```lua
jo.entity.deletey(entity)
```
#### Parameters
`entity` : *integer*
> The entity ID

### Example
```lua
local entity = 23494
jo.entity.delete(entity)
```

## jo.entity.fadeAndDelete()
A function to fade entity before delete it
### Syntax
```lua
jo.entity.fadeAndDelete(entity,duration)
```
#### Parameters
`entity` : *integer*
> The entity ID
  
`duration` : *integer* <BadgeOptional />
> The fade duration in ms  
> default: 1000
  

### Example
```lua
local entity = 32454
local duraiton = 1000
jo.entity.fadeAndDelete(entity,duration)
```

## jo.entity.requestControl()
A function to request the control of entity and wait after it
### Syntax
```lua
jo.entity.requestControl(entity)
```
#### Parameters
`entity` : *integer*
> The entity ID
  
### Example
```lua
local entity = 23494
jo.entity.requestControl(entity)
```
# Entity

Entity module is a module to manage easier the entities.

## Include Entity in your script

1. To use the Entity library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Entity module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'entity',
}
```
You can now use the library inside of your resource with the `jo.entity` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
Documentation for the [Server](./server.md) side  
---
outline: 2
---
# Entity

A library with usefull function to manage entity

## jo.entity.delete()
A function to delete an entity only if exist
### Syntax
```lua
jo.entity.deletey(entity)
```
#### Parameters
`entity` : *integer*
> The entity ID

### Example
```lua
local entity = 23494
jo.entity.delete(entity)
```
# Framework

Framework module is a very powerfull module to build a multi-framework script.

## Include Framework in your script

1. To use the Framework library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Framework module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'framework',
}
```
You can now use the library inside of your resource with the `jo.framework` global variable.

## Compatible Frameworks
The **framework bridge** module is compatible with these frameworks:
* VORP  
* RedEM:RP (old/new)  
* RSG  
* QBR  
* QR  
  
## Functions

Documentation for the [Server](./server-class/framework.md) side  

---
outline: [1,2]
---
# Framework Class

A powerfull library to build a script compatible with all Frameworks.  
::: info
The class is automatically initiated when you load the library under the `jo.framework` global variable.
:::
::: tip
If you have a custom framework, you can overwrite methods by added them in the overwrite-functions.lua file.  
Read more about [OWFramework](./OWFramework.md).
#### Syntax
```lua
function OWFramework.<MethodName>()
```
#### Example
```lua
--Overwrite the getUser method
function OWFramework.getUser(source)
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

## jo.framework:canUserBuy()
A function to know if a specific user has enough money
### Syntax
```lua
jo.framework:canUserBuy(source,amount,moneyType)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`amount` : *float*
> The amount of money the player need to have
  
`moneyType` : *integer* <BadgeOptional />
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  
> default : 1

#### Return value
Type: *boolean*
> Return `true` if the player has more money than `amount`
  
### Example
```lua
local price = 103
local source = 1
print(jo.framework:canUserBuy(source,103))
-- Expected output : true if the player has more than $103
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

## jo.framework:getJob()
Return the playe rjob
### Syntax
```lua
jo.framework:getJob(source)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  

#### Return value
Type: *string*
> Return the job name
  

### Example
```lua
local source = 1
print(jo.framework:getJob(source))
```


## jo.framework:getRPName()
Return the first & last name of tha player
### Syntax
```lua
jo.framework:getRPName(source)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  

#### Return value
Type: *string*
> Return the first & last name of a player 
  
### Example
```lua
local source = 1
print(jo.framework:getRPName(source))
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


## jo.framework:getUserClothes()
Return the list of user's clothes with formated category names
### Syntax
```lua
jo.framework:getUserClothes(source)
```
#### Parameters
`source` : *integer*
> The source ID of the player

#### Return value
Type: *object*
> return the list of clothes
  

### Example
```lua
local source = 1
local clothes = jo.framework:getUserClothes(source)
print(json.encode(clothes))
```

## jo.framework:getUserIdentifiers()
Shortcut for [User:getIdentifiers()](./user/getIdentifiers.md) method
### Syntax
```lua
jo.framework:getUserIdentifiers(source)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  

#### Return value
Type: *table*
> Return the same value than [User:getIdentifiers()](./user/getIdentifiers.md) method
  

### Example
```lua
local source = 1
local identifiers = jo.framework:getUserIdentifiers(source)
print(identifiers.charid)
```


## jo.framework:getUserSkin()
Return the user's skin data with formated key name
### Syntax
```lua
jo.framework:getUserSkin(source)
```
#### Parameters
`source` : *integer*
> The source ID of the player

#### Return value
Type: *object*
> Return the skin data
  
### Example
```lua
local source = 1
local skin =  jo.framework:getUserSkin(source)
print(json.encode(skin))
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

## jo.framework:updateUserClothes()
Save new clothes.  
The function has two ways to works:
* With 2 argument to save multiples clothes
* With 3 argument to save one clothes
### Syntax
```lua
jo.framework:updateUserClothes(source,clothesArray)
-- OR --
jo.framework:updateUserClothes(source,category,clothes)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`clothesArray` : *object*
> The list of clothes to apply. The key is the category name and the value is the clothes data
  
`category` : *string*
> The category name of the clothes
  
`clothes` : *table*
> The clothes data
  

### Example
```lua
local source = 1
local clothes = {
  pants = {hash = 2450348132},
  boots = {hash = 3596743543}
}
jo.framework:updateUserClothes(source,clothes)
-- OR  --
local source = 1
local category = pants
local clothes = {hash = 2450348132}
jo.framework:updateUserClothes(source,category,clothes)
```


## jo.framework:updateUserSkin()
Save new skin values.
The function has two ways to works:
* With 3 arguments to save multiple skin datas
* With 4 argument to save only one skin data
### Syntax
```lua
jo.framework:updateUserSkin(source, skinData, overwrite)
-- OR --
jo.framework:updateUserSkin(source,category, data, overwrite)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`skinData` : *object*
> The list of skin datas with category for key skin data for value
  
`category` : *string*
> The category of the skin data
  
`data` : *table*
> The skin data
  
`overwrite` : *boolean*
> If `true`, the new value overwrites the previous skin. Else, it's merged.
  

### Example
```lua
local source = 1
local skin = {
  head = 394785690,
  torso = 345823423
}
local overwrite = false
jo.framework:updateUserSkin(source,skin,overwrite)
-- OR --
local source = 1
local category = "head"
local data = 394785690
local overwrite = false
jo.framework:updateUserSkin(source,category,data,overwrite)
```

# User class
Go to the User class documentation : [link](./user/)
---
outline: 2
---
# OWFramework

OWFramework is an object to allow you to overwrite all framework functions.  
You can overwrite all method from Framework & User class.

:::tip
If you have an **unmodified version** of your framework that is supported **natively** by the library. You don't need to read this page.
:::

## How it works ?

Because some server customize their framework to add/edit features. The framework-bridge library was build to allow the link with these custom frameworks.  
You can also add the link to your fully custom framework with these functions.  
By overwrite the framework function in this file, all scripts that used the framework-bridge library will be compatible with your framework.

To overwrite a framework function, create the OWFramework in the `@jo_libs/modules/framework-bridge/overwrite-functions.lua` file. 

### Syntax
```lua
function OWFramework.<NameOfTheMethod>(...)
end
```
#### Arguments
`NameOfTheMethod` : *string*
> Name of the native method from framework-bridge library
  
`...` : *mixed*
> Same argument list than the native method
  

#### Return value
You have to return the same type of value than the native method to keep the scripts compatibility. 
  

## OWFramework.addItemInInventory
Add a specific item in a custom inventory
### Syntax
```lua
function OWFramework.addItemInInventory(source,id,item,quantity,metadata,needWait)
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
  

## OWFramework.canUseItem()
If the user has enough quantity of a specific item in his inventory
### Syntax
```lua
function OWFramework.canUseItem(source,item,amount,meta,remove)
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
  

## OWFramework.createInventory()
Function to create an inventory
### Syntax
```lua
function OWFramework.createInventory(id,label,definition)
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

## OWFramework.get()
Get the framework name
### Syntax
```lua
function OWFramework.get()
end
```
#### Return value
Type: *string*
> Return the name of the framework   
  

## OWFramework.getItemsFromInventory()
Get the list of items included in a custom inventory
### Syntax
```lua
function OWFramework.getItemsFromInventory(source,id)
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

## OWFramework.giveItem()
Give an item to the user
### Syntax
```lua
function OWFramework.giveItem(source,item,amount,meta)
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
  

## OWFramework.initFramework()
A function fired to initialize the framework.
You can initialize the Core value here.
### Syntax
```lua
function OWFramework.initFramework()
end
```
#### Arguments
None.

## OWFramework.openInventory()
Open a specific inventory
### Syntax
```lua
function OWFramework.openInventory(source,id, name, definition)
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

## OWFramework.registerUseItem()
Register an item has usable and attach a function to it
### Syntax
```lua
function OWFramework.registerUseItem(item,closeAfterUsed,cb)
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
  

## OWFramework.removeInventory()
Remove the inventory from the **server cache**. Usefull to reload the inventory from the database
### Syntax
```lua
function OWFramework.removeInventory(id)
end
```
#### Arguments
`id` : *string*
> Unique id of the inventory

  
## OWFramework.User.getJob()
Get the user job
### Syntax
```lua
function OWFramework.User.getJob(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player

#### Return value
Type: *string*
> Return the job name of the player  
  

## OWFramework.User.getMoney()
Get the user money
### Syntax
```lua
function OWFramework.User.getMoney(source,moneyType)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`moneyType` : *integer*
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  
  
#### Return value
Type: *float*
> Return the amount for this kind of money   

## OWFramework.User.getRPName()
Get the first & last name
### Syntax
```lua
function OWFramework.User.getRPName(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player

#### Return value
Type: *string*
> Return the name of the player  

## OWFramework.User.getSecondMoney()
Get the user second money (gold in many framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFramework.User.getSecondMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
#### Return value
Type: *float*
> Return the amount of money for the second currency  

## OWFramework.User.getThirdMoney()
Get the user third money (rol in VORP framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFramework.User.getThirdMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
#### Return value
Type: *float*
> Return the amount of money for the third currency  

## OWFramework.User.getUser()
Get the user data
### Syntax
```lua
function OWFramework.User.getUser(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player  
  

#### Return value
type: *User*
> Return a [User](./user/) class
  

## OWFramework.User.addMoney()
Add money from player
### Syntax
```lua
function OWFramework.User.addMoney(source,amount,moneyType)
```
#### Arguments
`amount` : *float*
> The amount of money added
  
`moneyType` : *integer*
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  

## OWFramework.User.addSecondMoney()
Add the user second money (gold in many framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFramework.User.addSecondMoney(source, amount)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player  

`amount` : *float*
> The amount of money added
  

## OWFramework.User.addThirdMoney()
Add the user third money (rol in VORP framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFramework.User.addThirdMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`amount` : *float*
> The amount of money added

  
## OWFramework.User.removeMoney()
Remove money from player
### Syntax
```lua
function OWFramework.User.removeMoney(source,amount,moneyType)
```
#### Arguments
`amount` : *float*
> The amount of money removed
  
`moneyType` : *integer*
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  

## OWFramework.User.removeSecondMoney()
Remove the user second money (gold in many framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFramework.User.removeSecondMoney(source, amount)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player  

`amount` : *float*
> The amount of money removed
  

## OWFramework.User.removeThirdMoney()
Remove the user third money (rol in VORP framework)
Only for : RedEM:RP, QBR, RSG, QR framework
### Syntax
```lua
function OWFramework.User.removeThirdMoney(source)
end
```
#### Arguments
`source` : *integer*
> The source ID of the player
  
`amount` : *float*
> The amount of money removed
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
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  


### Example
```lua
local source = 1
local amount = 100.0
local moneyType = 1
local user = jo.User:get(source)
user:addMoney(amount,moneyType)
```

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
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  

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
# User:getIdentifiers()

### Syntax
```lua
User:getIdentifiers()
```
#### Parameters
None.

#### Return value
Type: *table*  
`identifiers.identifier`  
> Unique identifier of the player  

`identifiers.charid`
> Unique id of the player  

### Example
```lua
local source = 1
local user = jo.User:get(source)
local identifiers = user:getIdentifiers()
print(identifiers.identifier)
print(identifiers.charid)
```
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



# User:removeMoney()

Remove money from player

### Syntax
```lua
User:removeMoney(amount, moneyType)
```
#### Parameters
`amount` : *float*
> The amount of money removed
  
`moneyType` : *integer*
> moneyType = 0 > dollar  
> moneyType = 1 > gold  
> moneyType = 2 > rol  

### Example
```lua
local source = 1
local amount = 100.0
local moneyType = 1
local user = jo.User:get(source)
user:removeMoney(amount,moneyType)
```
# Hook

[Hooks](/DeveloperResources/hooks) are a powerfull module for one script to interact/modify another script at specific, pre-defined spots. In contrast to events, hooks are **synchronous**.
Two kinds of hook exist :
* [Filters](/DeveloperResources/filters) are a way to edit data used by the script. Filters are fired at a specific point in time during the execution of the script and a value has to be returned.
* [Actions](/DeveloperResources/actions) are a way to add new features in a script. Actions are functions that occurs at a specific point in time during the execution of the script. No value need to be return.

## Include Hook in your script

1. To use the Hook library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Hook module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'hook',
}
```
You can now use the library inside of your resource with the `jo.hook` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  
---
outline: 2
---
# Hook

[Hooks](/DeveloperResources/hooks) are a powerfull way for one script to interact/modify another script at specific, pre-defined spots. In contrast to events, hooks are **synchronous**.
Two kinds of hook exist :
* [Filters](/DeveloperResources/filters) are a way to edit data used by the script. Filters are fired at a specific point in time during the execution of the script and a value has to be returned.
* [Actions](/DeveloperResources/actions) are a way to add new features in a script. Actions are functions that occurs at a specific point in time during the execution of the script. No value need to be return.

## Actions

## jo.hook.doActions()
Calls the functions that have been added to an action hook
### Syntax
```lua
jo.hook.doActions(name,...)
```
#### Parameters
`name` : *string*
> The name of the action to be executed
  
`...` : *mixed* <BadgeOptional />
> Additional arguments which are passed on the functions hooked.
  
### Example
```lua
local distance = 10
local price = 500
jo.hook.doActions('action_name', 10, 50)
```

## jo.hook.registerAction()
Register a function to an action hook
### Syntax
```lua
jo.hook.registerAction(name,cb,prority)
```
#### Parameters
`name` : *string*
> The name of the action to add the callback to
  
`cb` : *function*
> The function to be run when the action is called
  
`priority` : *integer* <BadgeOptional />
> Used to specify the order in which the functions are executed.  
> Lower numbers correspond with earlier execution.  
> default: 10
  

### Example
From the same resource:
```lua
jo.hook.registerAction('action_name', function(distance,price)
  print(distance,price)
end,10)
```
From another resource:
```lua
exports.resource_name:registerAction('action_name', function(distance,price)
  print(distance,price)
end,10)
```

## Filters

## jo.hook.applyFilters()
Calls the functions that have been added to a filter hook
### Syntax
```lua
jo.hook.applyFilters(name,value,...)
```
#### Parameters
`name` : *string*
> The name of the filter hook

`value` : *mixed*
> The value to filter  
  
`...` : *mixed* <BadgeOptional />
> Additional arguments which are passed on the functions hooked.
  
### Example
```lua
local distance = 500
local price = 10
print(price)
price = jo.hook.applyFilters('filter_name', price, distance)
print(price)
```

## jo.hook.registerFilter()
Register a function to a filter hook
### Syntax
```lua
jo.hook.registerFilter(name,cb,prority)
```
#### Parameters
`name` : *string*
> The name of the action to add the callback to
  
`cb` : *function*
> The function to be run when the action is called
  
`priority` : *integer* <BadgeOptional />
> Used to specify the order in which the functions are executed.  
> Lower numbers correspond with earlier execution.  
> default: 10
  

### Example
From the same resource:
```lua
jo.hook.registerFilter('filter_name', function(price,distance)
  if distance > 100 then
    price = price/2
  end
  return price
end,10)
```
From another resource:
```lua
exports.resource_name:registerFilter('filter_name', function(price,distance)
  if distance > 100 then
    price = price/2
  end
  return price
end,10)
```
---
outline: 2
---
# Input

A library to manage the input box

## jo.input.native()
A function to open the native input
### Syntax
```lua
jo.input.native(label, placeholder, maxStringLenght)
```
#### Parameters
`label` : *string*
> The Text above the typing field in the black square
  
`placeholder` : *string*
> An Example Text, what it should say in the typing field
  
`maxStringLenght` : *integer* <BadgeOptional />
> Maximum String Lenght  
> default: 60
  
#### Return value
Type: *string*
> Return the input 
  

### Example
```lua
local input = jo.input.native('The label: ', 'the placeholder')
print(input)
```
# Input

Input module is a module to create an input box to let user enter value.

## Include Input in your script

1. To use the Input library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Input module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'input',
}
```
You can now use the library inside of your resource with the `jo.input` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
---
outline: 2
---
# Me
A library to save in the client cache the value of PlayerPedId() and his location. These values are updated every 1000ms by default.
Very helpfull to optimize the resource

## jo.forceUpdateMe()
Force the update of values
### Syntax
```lua
jo.forceUpdateMe()
```

### Example
```lua
print(jo.meCoords)
jo.forceUpdateMe()
print(jo.meCoords)
```

## jo.me
Return the last cached PlayerPedId() value
### Example
```lua
print(jo.me,PlayerPedId())
```

## jo.meCoords
Return the last cached location of the player
### Example
```lua
print(jo.meCoords,GetEntityCoords(PlayerPedId()))
```

## jo.meIsMale
Return if the player is a male or a female
#### Example
```lua
print(jo.meIsMale,IsPedMale(PlayerPedId()))
```

## jo.mePlayerId
Return the last cached PlayerId() of the player
### Example
```lua
print(jo.mePlayerId,PlayerId())
```
## jo.meServerId
Return the last cached GetPlayerServerId(PlayerId()) of the player
### Example
```lua
print(jo.meServerId,GetPlayerServerId(PlayerId()))
```

## jo.updateMeTimer()
Change the speed of the updater
### Syntax
```lua
jo.updateMeTimer(value)
```
#### Parameters
`value` : *integer*
> Duration in ms between each update of values
  

### Example
```lua
--update less often jo.me & jo.meCoords : from 1s to 2s
jo.updateMeTimer(2000)
```
# Me

Me module is a fully optimize way to get the classic data from the player, list PlayerPedId(), coordinates, ...

## Include Me in your script

1. To use the Me library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Me module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'me',
}
```
You can now use the library inside of your resource with the `jo.me` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
---
outline: [1,3]
---
# JO Menu
A client side library to use the JO Menu in your scripts.  
JO Menu is a NUI menu fully optimized and mouse and keyboard ready.

**Introducing The Jump On Menu: Revolutionizing Menu Creation for Your RedM Script!**

The Jump On Menu offers a new way to build menus for your RedM script, seamlessly blending with the authentic design of Red Dead Redemption II. This new menu system is significantly more flexible and user-friendly compared to the MenuAPI in your current framework. Actions are now directly linked to individual buttons instead of the global menu, simplifying both setup and usage.  
  
Your players will love the innovative features, including the grid layout, color picker, and smooth menu animations. Enhance their gaming experience and rediscover the joy of development with The Jump On Menu.  

# Previews
<br>
<img src="/images/previews/menu/menu_preview_1.jpg" class="data-zoomable preview" data-zoomable/>
<br>
<img src="/images/previews/menu/menu_preview_2.jpg" class="data-zoomable preview" data-zoomable/>

# Usage

[Download an example of menu resource](https://raw.githubusercontent.com/Jump-On-Studios/Documentation/main/docs/public/snippets/menu/snippet_menu.zip)

## Constructor
##### Syntax
```lua
jo.menu.create(id,data)
```
#### Parameters
`id` : *string*
> The unique ID of the menu
  
`data` : *table*
> `data.title` : *string* - The big title of the menu  
![The menu title](/images/previews/menu/bigTitle.jpg){data-zoomable}
> `data.subtitle` : *string* - The subtitle of the menu  
![The subtitle](/images/previews/menu/subtitle.jpg){data-zoomable}
> `data.numberOnScreen` : *integer (default: 8)* - The subtitle of the menu <BadgeOptional />  
> `data.onEnter` : *function* - Fired when the menu is opened <BadgeOptional />  
> `data.onBack` : *function* - Fired when the backspace/Escape is pressed <BadgeOptional />  
> `data.onExit` : *function* - Fired when the menu is exited <BadgeOptional />  
  

#### Return value
Type: *Menu*
> Return a Menu class 
  

##### Example
```lua
--The unique ID of the menu
local id = 'UniqueId1'
--The menu data
local data = {
  title = 'Menu', --The big title of the menu
  subtitle = 'Elements', --The subtitle of the menu
  numberOnScreen = 8, --The number of item display before add a scroll
  onEnter = function(currentData)
    print('Enter in menu '..id)
  end,
  onBack = function(currentData)
    print('Backspace/Esc pressed in menu '..id)
  end,
  onExit = function(currentData)
    print('Exit menu '..id)
  end,
}
local menu = jo.menu.create(id,data)
```

## Instance Methods
### menu:addItem()
A method to add an item to the menu
#### Syntax
```lua
menu:addItem({
  definition
})
```
#### Keys for the item definition
`title` : *string*
> The item label
  
`child` : *string*  <BadgeOptional />  
> the menu to open when Enter is pressed  
> default: false  

`visible` : *boolean (default: true)* <BadgeOptional />  
> if the item is visible (hide in the menu)  
> default: true

`data` : *table*  <BadgeOptional />  
> variable to store datas in the item

`description` : *string*  <BadgeOptional />  
> the description  

`prefix` : *string* <BadgeOptional />
> the little icon before the title from `nui\menu\assets\images\icons` folder
![prefix Icon](/images/previews/menu/prefixIcon.jpg){data-zoomable}

`icon` : *string*  <BadgeOptional />
> the left icon filename from `nui\menu\assets\images\icons` folder
![Icon](/images/previews/menu/leftIcon.jpg){data-zoomable}

`iconRight` : *string*  <BadgeOptional />
> the right icon filename from `nui\menu\assets\images\icons` folder
![icon right](/images/previews/menu/iconRight.jpg){data-zoomable}

`iconClass` : *string*  <BadgeOptional />
> CSS class for the icon  

`price` : *table (default: false)*<BadgeOptional />  
> the price of the item. Use O to display "free"
> default : false  
> `price.money` : *float* - the price in $  <BadgeOptional />  
> `price.gold` : *float* - the price in gold  <BadgeOptional />   
![preview price](/images/previews/menu/price.jpg){data-zoomable}

`priceTitle` : *string  <BadgeOptional />  
> replace the "Price" label  

`priceRight` : *boolean*  <BadgeOptional />  
> display the price at the right of the item title  
![price to the right](/images/previews/menu/priceRight.jpg){data-zoomable}

`statistics` : *table*  <BadgeOptional />
> the list of [statistics](#statistics)  

`disabled` : *boolean*  <BadgeOptional />  
> if the item is disabled (grey in the menu)  
![disable item](/images/previews/menu/disableItem.jpg){data-zoomable}

`textRight` : *string*  <BadgeOptional />
> the label displayed at the right of the item  
![Right text](/images/previews/menu/rightText.jpg){data-zoomable}

`previewPalette` : *boolean*  <BadgeOptional />  
> display a color square at the right of the item  
> default: true  
![preview palette](/images/previews/menu/previewPalette.jpg){data-zoomable}
  
`sliders` : *table*
> The list of [sliders](#sliders)
  
`onActive` : *function*
> Fire when the item is enter
  
`onClick` : *function*
> Fire when Enter is pressed
  
`onChange` : *function*
> Fire when a slider value change
  
`onExit` : *function*
> Fire when the item is exit
  

#### Example
```lua
local menu = jo.menu.create('menu',{})
menu:addItem({
  title = "Item 1",
  price = {money = 10.2},
  onActive = function(currentData)
    print('Item 1 active')
  end,
  onClick = function(currentData)
    print('Clicked on item 1')
  end,
  onChange = function(currentData)
    print('Something change in the item 1')
  end,
  onExit = function(currentData)
    print('Exit the item 1')
  end
})
menu:addItem({
  title = "Item 2",
  price = {money = 10.2},
  onActive = function(currentData)
    print('Item 2 active')
  end,
  onClick = function(currentData)
    print('Clicked on item 2')
  end,
  onChange = function(currentData)
    print('Something change in the item 2')
  end,
  onExit = function(currentData)
    print('Exit the item 2')
  end
})
menu:send()
jo.menu.setCurrentMenu('menu')
jo.menu.show(true)
```

### menu:addItems()
A method to add multiples items
#### Syntax
```lua
menu:addItems(items)
```
#### Parameters
`items` : *table*
> List of items (see [item definition](#keys-for-the-item-definition))
  

#### Example
```lua
local items = {
  {title = "Item 1"},
  {title = "Item 2"}
}
local menu = jo.menu.create('menu',{})
menu:addItems(items)
menu:send()
jo.menu.setCurrentMenu('menu')
jo.menu.show(true)
```


### menu:refresh()
A method to send the new data to the NUI
#### Syntax
```lua
menu:refresh()
```

#### Example
```lua
local menu = jo.menu.create(id,data)
menu:addItem({title="Item 1"})
menu:send()
menu:addItem({title="Item 2"})
menu:refresh()
```

### menu:reset()
A method to put back the cursor on the first item
#### Syntax
```lua
menu:reset()
```
#### Example
```lua
menu:reset()
```

### menu:send()
A method to send the menu to the NUI
#### Syntax
```lua
menu:send()
```
#### Example
```lua
local menu = jo.menu.create(id,data)
menu:send()
```

# Functions

## jo.menu.setCurrentMenu()
A function to define a menu like the current menuu
#### Syntax
```lua
jo.menu.setCurrentMenu(id, keepHistoric, resetMenu)
```
#### Parameters
`id` : *string*
> The unique ID of the menu
  
`keepHistoric` : *boolean*
> If you want keep the menu historic to open the previous menu when backspace/esc is pressed  
> default: true
  
`resetMenu` : *boolean*
> If you want reset the cursor to the first item of the menu  
> default: true
  

#### Example
```lua
local id = "UniqueId1"
local keepHistoric = true
local resetMenu = true
jo.menu.setCurrentMenu(id, keepHistoric, resetMenu)
```

## jo.menu.delete()
A function to delete a menu
#### Syntax
```lua
jo.menu.delete(id)
```
#### Parameters
`id` : *string*
> The unique ID of the menu
  

#### Example
```lua
local id = "UniqueId1"
jo.menu.delete(id)
```

## jo.menu.isOpen()
A function to know if a menu is opened
#### Syntax
```lua
jo.menu.isOpen()
```
#### Return value
Type: *boolean*
> Return `true` if a menu is opened
  

#### Example
```lua
local isOpen = jo.menu.isOpen()
print(isOpen)
```

## jo.menu.show()
The function to show/toggle a menu
##### Syntax
```lua
jo.menu.show(visible, keepInput, hideRadar)
```
#### Parameters
`visible` : *boolean*
> If the menu is visible or not
  
`keepInput` : *boolean*
> If you want keep the control on the game  
> default: true
  
`hideRadar` : *boolean*
> If you want hide the radar  
> default: true
  

##### Example
```lua
local visible = true
local keepInput = true
local hideRadar = true
jo.menu.show(visible,keepInput,hideRadar)
```

# Variables

## CurrentData
The argument pass on each function
#### keys
`CurrentData.menu` : *string*
> The unique ID of the menu
  
`CurrentData.item` : *table*
> The item active in the menu

# Replace your old menu

By default, the library is released with resource to replace the old framework menu.  

### VORP
Replace the `vorp_menu` resource by the one delivered with the library  
  
### RSG
Replace the `rsg-menubase` resource by the one delivered with the library  
  
### RedEM:RP
Replace the `redemrp_menu_base` resource by the one delivered with the library  

# New assets

## Add a new icon
Add you .png file in the `nui\menu\assets\images\icons` folder

# Item variations

## Sliders
4 types of sliders are available on the menu: [Default](#default), [Grid](#grid), [Palette](#palette) & [Switch](#switch).  
You can use multiples sliders on the same item.  
Use `currentData.item.sliders[X].value` to get the current value of the slider.  
Here is an example of an item with sliders of the 4 types:  
<img src="/images/previews/menu/preview_sliders.jpg" class="data-zoomable" data-zoomable style="height:20em"/>

### Default
The default slider based on the original game design. Usefull to choose between item variations like clothes.
![The default slider](/images/previews/menu/slider_default.jpg){data-zoomable}
#### Syntax
```lua
{title = "", current = 1, values = {item1,item2,..}}
```
#### Keys
`title` : *string*
> The label on the top of variations
  
`current` : *integer*
> The current item selected
  
`values` : *table*
> The table of item variations. 1 entry = 1 rectangle
  
#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  sliders = {
     {
      title = 'Variations',
      current = 2,
      values = {
        "value1",
        {var = 4},
        {yourKey = "your Value"},
        'value2',
        5,
        10,
      } 
    },
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```

### Grid
The grid slider is usefull to define a value between a min and max value.  
You can use one or two dimensions of slider.  
One dimension:
![The grid slider one dimension](/images/previews/menu/slider_grid.jpg){data-zoomable}
Two dimensions:
![The grid slider two dimensions](/images/previews/menu/slider_grid2.jpg){data-zoomable}

:::tip
To get the values of the slider, `.value` is a table with two arguments:  
`currentData.item.sliders[X].value[1]` for the horizontal axe (or for one dimension slider)  
`currentData.item.sliders[X].value[2]` for the vertical axe
:::
#### Syntax
```lua
{type = "grid", labels = {'left','right','up','down'}, values = {
  {current = 0.5,max = 1.0, min = -1.0, gap = 0.01},
  {current = 0.5,max = 10.0, min = 0.0, gap = 0.01}, --for two dimensions
}}
```
#### Keys
`type` : *string*
> The type of slider
  
`labels` : *table*
> The 4 labels in the order : left, right, top, bottom
  
`values` : *table*
> The slider definitions.  
> 1 entry = 1 dimension slider  
> 2 entries = 2 dimensions sliders
> `values[x].current` : *float* - the current value of the slider
> `values[x].min` : *float* - the minimal value (cursor on the full left/top)
> `values[x].max` : *float* - the minimal value (cursor on the full right/bottom)
  
#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  sliders = {
    {
      type = "grid",
      labels = {'left','right','up','down'},
      values = {
        {current = 0.5,max = 1.0, min = -1.0},
        {current = 0.5,max = 10.0, min = 0.0}, --for two dimensions
      }
    },
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```

### Palette
The palette slider is usefull to select a color.  
![The palette slider](/images/previews/menu/slider_palette.jpg){data-zoomable}
#### Syntax
```lua
{type = "palette", title = "tint", tint = "tint_makeup", max = 63, current = 14}
```
#### Keys
`type` : *string*
> The type of slider
  
`title` : *table*
> The top label on the slider
  
`tint` : *string*
> The name of the gradient :  
> "tint_generic_clean", "tint_hair", "tint_horse", "tint_horse_leather", "tint_leather" & "tint_makeup"
  
`max` : *integer*
> The number of varations
  
`current` : *integer*
> The current variation
  
#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  sliders = {
    {type = "palette", title = "tint", tint = "tint_makeup", max = 63, current = 14}
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```

### Switch
The switch slider is display on the right of the item label.  
![The switch slider](/images/previews/menu/slider_switch.jpg){data-zoomable}
#### Syntax
```lua
{type = "switch", current = 1, values = {
  {label = "", data = {}},
  {label = "", data = {}}
}}
```
#### Keys
`type` : *string*
> The type of slider

`current` : *integer*
> The current variation
  
`values` : *table*
> The list of variations  
> `values[x].label` is the label displayed
  

#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  sliders = {
    { type = "switch", current = 1, values = {
      {label = "value 1", myKey = 4},
      {label = "value 2", data = "what you want"}
    }
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```

## Statistics
Statistics table is displayed at the bottom of the menu. 5 types of statistics are available:
[Bar](#bar), [Bar-style](#bar-style), [Icon](#icon), [Texts](#texts) and [Weapon-bar](#weapon-bar)  
Multiple statistics can be use for the same item.  
Here is an example of an item with 5 statistics of the 5 types:
<img src="/images/previews/menu/preview_statistics.jpg" class="data-zoomable" data-zoomable style="height:20em"/>

### Bar
A statistic with **10 bars**
![Statistic bar preview](/images/previews/menu/preview_statistics_bar.jpg){data-zoomable}
#### Syntax
```lua
{label = "", type = "bar", value = {current,max}}
```
#### Keys
`label` : *string*
> the left label
  
`type` : *string*
  
`value` : *table*
> For the left to the right, `current` are white, `max` are grey, all the rest is dark grey  
> `value.current` : *integer (0<>10* - the number of white bar  
> `value.max` : *integer (0<>10* - the number of grey bar
  

#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  statistics = {
    {label = "The label", type = "bar", value = {3,8}}
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```
### Bar-style
A statistic with unlimted bar defined with CSS classes
![Statistic bar preview with CSS classes](/images/previews/menu/preview_statistics_bar-style.jpg){data-zoomable}
#### Syntax
```lua
{label = "", type = "bar-style", value = {'','',''}}
```
#### Keys
`label` : *string*
> the left label
  
`type` : *string*
  
`value` : *table*
> A list of string to define the CSS classes of bar, 1 string = 1 bar  
> If the string is empty, the bar is dark grey.
> CSS classes:  
> * `active` : Opacity = 1 
> * `fgold` : Gold  
> * `fred` : Red  
> * `possible` : Opacity = 0.5  
>  
> *CSS classes can be combinated*  
  

#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  statistics = {
    {label = "The label", type="bar-style", value = {
      "active",       --the 1st bar: opacity = 1
      "active fgold", --the 2nd bar: opacity = 1 + gold
      "active fred",  --the 3rd bar: opacity = 1 + red
      "possible fred",--the 4th bar: opacity = 0.5 + red
      "possible",     --the 4th bar: opacity = 0.5
      "",             --the 5th bar: opacity = 0.2
    }},
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```

### Icon
A statistic with icons on the right
![Statistics with icons](/images/previews/menu/preview_statistics_icon.jpg){data-zoomable}
#### Syntax
```lua
{label = "", type = "icon", value = {{icon = '', opacity = 1.0}}}
```
#### Keys
`label` : *string*
> the left label
  
`type` : *string*
  
`value` : *table*
> A list of table to define the icon from left to right, 1 table = 1 icon  
> `icon` : *string* - Icon filename from `nui\menu\assets\images\icons\` folder  
> `opacity` : *float (0.0<>1.0)* - The opacity of the icon  
  

#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  statistics = {
    {label = "The label", type="icon", value = {
      {icon = "player_health", opacity = 1},    --the 1st icon
      {icon = "player_health", opacity = 0.75}, --the 2nd icon
      {icon = "player_health", opacity = 0.3}   --the 3rd icon
    }},
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```

### Texts
Basic statistic with two labels
![Basic statistics](/images/previews/menu/preview_statistics_text.jpg){data-zoomable}
#### Syntax
```lua
{label = "", value = ""}
```
#### Keys
`label` : *string*
> The left label
  
`value` : *string*
> The right label
  
#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  statistics = {
    {label = "The label", value = "The value"}
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```

### Weapon-bar
A statistic with the weapon bar design. Useful to display a percent of completion
![Statistics with weapon bar design](/images/previews/menu/preview_statistics_weapon-bar.jpg){data-zoomable}
#### Syntax
```lua
{label = "", type="weapon-bar", value = {current,max}}
```
#### Keys
`label` : *string*
> The left label
  
`type` : *string*
  
`value` : *table*
> The percent of completion is calculated by `value.current\value.max`  
> `value.current` : *float* - the current value of the statistic  
> `value.max` : *float* - the max value the statistic can reach  
  
#### Example
```lua
local menu = jo.menu.create('menu1',{})
menu:addItem({
  title = "Item",
  statistics = {
    {label = "The label", type="weapon-bar", value = {60,100}}
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```
# Menu

A client side library to use the JO Menu in your scripts.  
JO Menu is a NUI menu fully optimized and mouse and keyboard ready.

**Introducing The Jump On Menu: Revolutionizing Menu Creation for Your RedM Script!**

The Jump On Menu offers a new way to build menus for your RedM script, seamlessly blending with the authentic design of Red Dead Redemption II. This new menu system is significantly more flexible and user-friendly compared to the MenuAPI in your current framework. Actions are now directly linked to individual buttons instead of the global menu, simplifying both setup and usage.  
  
Your players will love the innovative features, including the grid layout, color picker, and smooth menu animations. Enhance their gaming experience and rediscover the joy of development with The Jump On Menu.  

# Previews
<br>
<img src="/images/previews/menu/menu_preview_1.jpg" class="data-zoomable preview" data-zoomable/>
<br>
<img src="/images/previews/menu/menu_preview_2.jpg" class="data-zoomable preview" data-zoomable/>

## Include Menu in your script

1. To use the Menu library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Menu module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'menu',
}
```
3. Add the Menu UI inside the `fxmanifest.lua`
```lua
ui_page "nui://jo_libs/nui/menu/index.html"
```
You can now use the library inside of your resource with the `jo.menu` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
---
outline: 2
---
# Notification

A library to display notification on the player screen

## jo.notif.left()
Notification on the left with title, icon, color and sound
### Syntax
```lua
jo.notif.left(title, text, dict, icon, color, duration,soundset_ref,soundset_name)
```
#### Parameters
`title` : *string*
> The title of the notification
  
`text` : *string*
> The text of the notification
  
`dict` : *string*
> The dictonnary of the icon
  
`icon` : *string*
> The name of the icon
  
`color` : *string* <BadgeOptional />
> The [color](https://github.com/femga/rdr3_discoveries/blob/a63669efcfea34915c53dbd29724a2a7103f822f/useful_info_from_rpfs/colours/README.md) of the text  
> default : "COLOR_WHITE"
  
`duration` : *integer* <BadgeOptional />
> The duration of the notification in ms  
> default: 3000
  
`soundset_ref` : *string* <BadgeOptional />
> The dictionnary of the soundset  
> default : "Transaction_Feed_Sounds"
  
`soundset_name` : *string* <BadgeOptional />
> The name of the soundset  
> default : "Transaction_Positive"
  

### Example
```lua
local title = 'Title'
local text = 'The text'
local dict = "hud_textures"
local icon = "check"
local color = "COLOR_GREEN"
local duration = 5000
jo.notif.left(title,text, dict, icon, color,duration)
```
:::details Preview
<img src="/images/notifLeft.jpg" />
:::

## jo.notif.right()
Notification on the right with icon, color and sound
### Syntax
```lua
jo.notif.right(text, dict, icon, color, duration,soundset_ref,soundset_name)
```
#### Parameters
`text` : *string*
> The text of the notification
  
`dict` : *string*
> The dictonnary of the icon
  
`icon` : *string*
> The name of the icon
  
`color` : *string* <BadgeOptional />
> The [color](https://github.com/femga/rdr3_discoveries/blob/a63669efcfea34915c53dbd29724a2a7103f822f/useful_info_from_rpfs/colours/README.md) of the text  
> default : "COLOR_WHITE"
  
`duration` : *integer* <BadgeOptional />
> The duration of the notification in ms  
> default: 3000
  
`soundset_ref` : *string* <BadgeOptional />
> The dictionnary of the soundset  
> default : "Transaction_Feed_Sounds"
  
`soundset_name` : *string* <BadgeOptional />
> The name of the soundset  
> default : "Transaction_Positive"
  
### Example
```lua
local text = 'Success notification'
local dict = "hud_textures"
local icon = "check"
local color = "COLOR_GREEN"
local duration = 5000
jo.notif.right(text, dict, icon, color, duration)
```
:::details Preview
<img src="/images/notifRight.jpg" />
:::

## jo.notif.rightError()
A shortcut to display an error notification
### Syntax
```lua
jo.notif.rightError(text)
```
#### Parameters
`text` : *string*
> The text of the notification
  

### Example
```lua
jo.notif.rightError("Error !")
```
:::details Preview
<img src="/images/notifError.jpg" />
:::


## jo.notif.rightSuccess()
A shortcut to display a successfull notification
### Syntax
```lua
jo.notif.rightSuccess(text)
```
#### Parameters
`text` : *string*
> The text of the notification
  

### Example
```lua
jo.notif.rightSuccess("Success notification")
```
:::details Preview
<img src="/images/notifRight.jpg" />
:::


## jo.notif.simpleTop()
Notification on the top with big title and subtitle (native mission start/end)
### Syntax
```lua
jo.notif.simpleTop(title, subtitle, duration)
```
#### Parameters
`title` : *string*
> the title of the notification
  
`subtitle` : *string*
> The text of the notification

`duration` : *integer* <BadgeOptional />
> The duration of the notification in ms  
> default: 3000
  
### Example
```lua
local title = 'Mission Started'
local subtitle = "You just start a great mission !"
local duration = 5000
jo.notif.simpleTop(title, subtitle, duration)
```
:::details Preview
<img src="/images/notifSimpleTop.gif" />
:::
# Notification

Notification module to display notification on the player screen.

## Include Notification in your script

1. To use the Notification library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Notification module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'notification',
}
```
You can now use the library inside of your resource with the `jo.notification` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
Documentation for the [Server](./server.md) side.  
---
outline: 2
---
# Notification

A library to display notification on the player screen

## jo.notif.left()
Notification on the left with title, icon, color and sound
### Syntax
```lua
jo.notif.left(source,title, text, dict, icon, color, duration,soundset_ref,soundset_name)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`title` : *string*
> The title of the notification
  
`text` : *string*
> The text of the notification
  
`dict` : *string*
> The dictonnary of the icon
  
`icon` : *string*
> The name of the icon
  
`color` : *string* <BadgeOptional />
> The [color](https://github.com/femga/rdr3_discoveries/blob/a63669efcfea34915c53dbd29724a2a7103f822f/useful_info_from_rpfs/colours/README.md) of the text  
> default : "COLOR_WHITE"
  
`duration` : *integer* <BadgeOptional />
> The duration of the notification in ms  
> default: 3000
  
`soundset_ref` : *string* <BadgeOptional />
> The dictionnary of the soundset  
> default : "Transaction_Feed_Sounds"
  
`soundset_name` : *string* <BadgeOptional />
> The name of the soundset  
> default : "Transaction_Positive"
  

### Example
```lua
local source = 1
local title = 'Title'
local text = 'The text'
local dict = "hud_textures"
local icon = "check"
local color = "COLOR_GREEN"
local duration = 5000
jo.notif.left(source,title,text, dict, icon, color,duration)
```
:::details Preview
<img src="/images/notifLeft.jpg" />
:::

## jo.notif.right()
Notification on the right with icon, color and sound
### Syntax
```lua
jo.notif.right(source,text, dict, icon, color, duration,soundset_ref,soundset_name)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`text` : *string*
> The text of the notification
  
`dict` : *string*
> The dictonnary of the icon
  
`icon` : *string*
> The name of the icon
  
`color` : *string* <BadgeOptional />
> The [color](https://github.com/femga/rdr3_discoveries/blob/a63669efcfea34915c53dbd29724a2a7103f822f/useful_info_from_rpfs/colours/README.md) of the text  
> default : "COLOR_WHITE"
  
`duration` : *integer* <BadgeOptional />
> The duration of the notification in ms  
> default: 3000
  
`soundset_ref` : *string* <BadgeOptional />
> The dictionnary of the soundset  
> default : "Transaction_Feed_Sounds"
  
`soundset_name` : *string* <BadgeOptional />
> The name of the soundset  
> default : "Transaction_Positive"
  
### Example
```lua
local source = 1
local text = 'Success notification'
local dict = "hud_textures"
local icon = "check"
local color = "COLOR_GREEN"
local duration = 5000
jo.notif.right(source,text, dict, icon, color, duration)
```
:::details Preview
<img src="/images/notifRight.jpg" />
:::

## jo.notif.rightError()
A shortcut to display an error notification
### Syntax
```lua
jo.notif.rightError(source,text)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`text` : *string*
> The text of the notification
  

### Example
```lua
local source = 1
jo.notif.rightError(source,"Error !")
```
:::details Preview
<img src="/images/notifError.jpg" />
:::


## jo.notif.rightSuccess()
A shortcut to display a successfull notification
### Syntax
```lua
jo.notif.rightSuccess(source,text)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`text` : *string*
> The text of the notification
  

### Example
```lua
local source = 1
jo.notif.rightSuccess(source,"Success notification")
```
:::details Preview
<img src="/images/notifRight.jpg" />
:::


## jo.notif.simpleTop()
Notification on the top with big title and subtitle (native mission start/end)
### Syntax
```lua
jo.notif.simpleTop(source, title, subtitle, duration)
```
#### Parameters
`source` : *integer*
> The source ID of the player
  
`title` : *string*
> the title of the notification
  
`subtitle` : *string*
> The text of the notification

`duration` : *integer* <BadgeOptional />
> The duration of the notification in ms  
> default: 3000
  
### Example
```lua
local title = 'Mission Started'
local subtitle = "You just start a great mission !"
local duration = 5000
jo.notif.simpleTop(source,title, subtitle, duration)
```
:::details Preview
<img src="/images/notifSimpleTop.gif" />
:::
---
outline: [2,3]
---
# Ped Texture

A powerfull module to manage the ped texture like makeup/tatoo/...

:::warning
Textures can only be apply on **networked** ped. If you want use it in a script with ped only visible by one player, like character selector, you have to move the player in solo routing bucket and spawn the ped as networked.
:::

## Functions

### jo.pedTexture.apply()
A function to apply texture on a specific ped
#### Syntax
```lua
jo.pedTexture.apply(ped,layername,data)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`layername` : *string*
> The layername of the texture
  
`data` : *object*
> The data of the texture  
  
> `data.id` : *integer* - The ID of the texture  
> OR  
> `data.albedo` : *string* - The albedo of the texture  
> <br>
> `data.sheetGrid` : *integer* - the sheet grid of the texture. default: 0 <BadgeOptional />  
> `data.opacity` : *float 0.0<>1.0* - the opacity of the texture. default: 1.0 <BadgeOptional />  
> `data.blendType` : *integer* - the blend type of the texture. default: 1 <BadgeOptional />  
> `data.palette` : *string/integer* - The palette of the colors. default: "metaped_tint_makeup" <BadgeOptional />  
> `data.tint0` : *string/integer* - The first color <BadgeOptional />  
> `data.tint1` : *string/integer* - The second color <BadgeOptional />  
> `data.tint2` : *string/integer* - The third color <BadgeOptional />  
  

#### Example
```lua
local ped = PlayerPedId()
local layername = "eyeshadow"
local data = jo.pedTexture.variations.eyeshadow[3].value
data.palette = "metaped_tint_makeup"
data.tint0 = 5
data.tint1 = 10
data.tint2 = 40
jo.pedTexture.apply(ped,layername,data)
```

### jo.pedTexture.getAll()
Return the list of layers in all categories
#### Syntax
```lua
jo.pedTexture.getAll()
```
#### Parameters
`ped` : *integer*
> The entity ID
> 
#### Return value
Type: *object*
> Return the list of layer apply on the ped  
  
#### Example
```lua
local ped = PlayerPedId()
local textures = jo.pedTexture.getAll(ped)
print(json.encode(textures))
--Expected output: {heads = {eyeshdow = {...}, foundation = {...}}}
```

### jo.pedTexture.getOverlayAssetFromId()
A function to get the hashname of a texture
#### Syntax
```lua
jo.pedTexture.getOverlayAssetFromId(isMale,layername,id)
```
#### Parameters
`isMale` : *boolean*
> `true` if the texture is for a male, `false` otherwise
  
`layername` : *string*
> The layername of the texture
  
`id` : *integer*
> The ID of the texture
  

#### Return value
Type: *string*
> Return the hashname of the texture for this ID
  

#### Example
```lua
local isMale = true
local layername = "eyebrow"
local id = 5
local texture = jo.pedTexture.getOverlayAssetFromId(isMale,layername,id)
print(texture)
--Expected output: mp_u_faov_eyebrow_005
```

### jo.pedTexture.overwriteCategory()
A function to overwrite all the layers of category
#### Syntax
```lua
jo.pedTexture.overwriteCategory(ped,category,overlays)
```
#### Parameters
`ped` : *integer*
> The entity ID

`category` : *string*
> The category of the texture
  
`overlays` : *object*
> The list of layers
  

#### Example
```lua
local ped = PlayerPedId()
local category = "heads"
local overlays = {
    eyeshadow = {sheetGrid = 3, tint0 = 1, tint1 = 45, tint2 = 56},
    foundation = {id = 0, palette = "metaped_tint_makeup", tint0 = 78}
}
jo.pedTexture.overwriteCategory(ped,category,overlays)
```

### jo.pedTexture.refreshAll()
A function to refresh the ped texture
#### Syntax
```lua
jo.pedTexture.refreshAll(ped)
```
#### Parameters
`ped` : *integer*
> The entity ID

#### Example
```lua
local ped = PlayerPedId()
jo.pedTexture.refreshAll(ped)
```

### jo.pedTexture.remove()
A function to remove a texture
#### Syntax
```lua
jo.pedTexture.remove(ped,layername)
```
#### Parameters
`ped` : *integer*
> The entity ID
  
`layername` : *string*
> The layer name of the texture
  
#### Example
```lua
local ped = PlayerPedId()
local layername = "eyeshadow"
jo.pedTexture.remove(ped,layername)
```

## Variables

### jo.pedTexture.categories
An object to know the on each part of the ped the layername has to be apply
#### Syntax
```lua
jo.pedTexture.categories[layername]
```
#### Parameters
`layername` : *string*
> The layer name of the texture

#### Example
```lua
local part = jo.pedTexture.categories.eyeshadow
print(part)
--Expected output: heads
```

### jo.pedTexture.variations
A variable with the list of existing texture for peds. The key is the layername and value the list of variations
#### Syntax
```lua
jo.pedTexture.variations[layername] = variations
```
#### Parameters
`layername` : *string*
> The layername of the texture
  
`variations` : *table*
> the list of variations  
> `variations[x].label` : *string* - the label of the variations  
> `variations[x].value` : *table* - the definition of the variations
  

#### Example
```lua
local listEyeshadow = jo.pedTexture.variations.eyeshadow
for _,variation in pairs (listEyeshadow) do
    print(variable.label)
    print(json.encode(variation.value))
end
```
# Ped Texture

Ped Texture is a powerfull module to manage ped texture like makeup/tatoo...

## Include Ped Texture in your script

1. To use the Ped Texture library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Ped Texture module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'pedTexture',
}
```
You can now use the library inside of your resource with the `jo.pedTexture` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
# Print

Print is a module to print different types of message.

## Include Ped Texture in your script

1. Print module is included by default in the jo_libs. You just have to add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
You can now use the print functions inside of your resource.

## Functions

Documentation for the [Both](./shared.md) side.  
---
outline: 2
---
# Print

Print module is a list of functions to print messages. This module is included by default in the jo_libs loader.

## bprint
Print a blue message
### Syntax
```lua
bprint(text)
```
#### Parameters
`text` : *string*
> Your message
  
### Example
```lua
bprint('This is a blue message')
```

## dprint
Print a debug message, only if `Config.debug = true`
### Syntax
```lua
dprint(text)
```
#### Parameters
`text` : *string*
> Your message
  
### Example
```lua
dprint('This is a debug message')
```

## eprint
Print a red message
### Syntax
```lua
eprint(text)
```
#### Parameters
`text` : *string*
> Your message
  
### Example
```lua
eprint('This is a red message')
```

## gprint
Print a green message
### Syntax
```lua
gprint(text)
```
#### Parameters
`text` : *string*
> Your message
  
### Example
```lua
gprint('This is a green message')
```

## oprint
Print an orange message
### Syntax
```lua
oprint(text)
```
#### Parameters
`text` : *string*
> Your message
  
### Example
```lua
oprint('This is an orange message')
```

## sprint
Print a red message
### Syntax
```lua
sprint(text)
```
#### Parameters
`text` : *string*
> Your message
  
### Example
```lua
sprint('This is a red message')
```
---
outline: 2
---
# Prompt

A library to manage prompts in the game.  
:::tip
The list of the input HashName for keys is available in the [rdr3 discoveries github](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls)
:::

## jo.prompt.create()
A function to create a new prompt
### Syntax
```lua
jo.prompt.create(group,label,key,holdTime,page)
```
#### Parameters
`group` : *string*
> The name of the group.  
> Use "interaction" for display the prompt without need to call jo.prompt.displayGroup every frame.
  
`label` : *string*
> The label of the key
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
`holdTime` : *integer* <BadgeOptional />
> Duration to complete the prompt in ms. Use `false` for classic prompt without holding timer  
> default : false
  
`page` : *integer* <BadgeOptional />
> The page of the prompt  
> default: 0
  

### Example
```lua
local group = "interaction"
local keyLabel = "The key"
local key = "INPUT_JUMP"
local duration = 1000
jo.prompt.create(group,keyLabel,key, duration)
```

## jo.prompt.deleteAllGroups()
A function to delete all prompts created in the script
### Syntax
```lua
jo.prompt.deleteAllGroups()
```
#### Parameters
None.
### Example
```lua
local group = "interaction"
local keyLabel = "The key"
local key = "INPUT_JUMP"
local duration = 1000
jo.prompt.create(group,keyLabel,key, duration)
jo.prompt.deleteAllGroups()
print(jo.prompt.isGroupExist('interaction'))
-- Expected output : false
```

## jo.prompt.deleteGroup()
A function to delete a group and all its prompts
### Syntax
```lua
jo.prompt.deleteGroup(group)
```
#### Parameters
`group` : *string*
> The name of the group.  
> Use "interaction" for display the prompt without need to call jo.prompt.displayGroup every frame.
  

### Example
```lua
local group = "shop"
jo.prompt.deleteGroup(group)
```

## jo.prompt.delete()
A function to delete a prompt
### Syntax
```lua
jo.prompt.deletePrompt(group,key)
```
#### Parameters
`group` : *string*
> The name of the group.  
> Use "interaction" for display the prompt without need to call jo.prompt.displayGroup every frame.
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  

### Example
```lua
local group = "interaction"
local key = "INPUT_JUMP"
jo.prompt.deletePrompt(group,key)
```

## jo.prompt.displayGroup()
Display the group of prompt during.
Need to be call each frame.
### Syntax
```lua
jo.prompt.displayGroup(group,title)
```
#### Parameters
`group` : *string*
> The name of the prompt group to display this frame
  
`title` : *string*
> The title to display for this prompt group
  

### Example
```lua
CreateThread(function()
  local group = "shop"
  local title = "Stable shop"
  local keyLabel = "The key"
  local key = "INPUT_JUMP"
  jo.prompt.create(group,keyLabel,key)
  while true do
    jo.displayGroup(group,title)
    Wait(0)
  end
end)
```

## jo.prompt.doesLastCompletedIs()
Return true if it's the last prompt completed
### Syntax
```lua
jo.prompt.doesLastCompletedIs(group,key)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
#### Return value
Type: *boolean*
> Return `true` if key is the last input completed
  

### Example
```lua
local group = "shop"
local key = "INPUT_ENTER"
print(jo.prompt.doesLastCompletedIs(group,key))
```

## jo.prompt.editKeyLabel()
A function to edit the label of a key
### Syntax
```lua
jo.prompt.editKeyLabel(group,key,label)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
`label` : *string*
> The label of the key
  

### Example
```lua
local group = "shop"
local key = "INPUT_JUMP"
local label = "The new label"
jo.prompt.editKeyLabel(group,key,label)
```

## jo.prompt.get()
Return the prompt ID
### Syntax
```lua
jo.prompt.get(group,key)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
#### Return value
Type: *integer*
> Return the prompt ID 
  
### Example
```lua
local group = "shop"
local key = "INPUT_JUMP"
print(jo.prompt.get(group,key))
```

## jo.prompt.getProgress()
A function to return the progress of a prompt
### Syntax
```lua
jo.prompt.getPromptProgress(group,key)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
#### Return value
Type: *float*
> Return the percent of the prompt progress
  
### Example
```lua
local group = "interaction"
local keyLabel = "The key"
local key = "INPUT_JUMP"
jo.prompt.create(group,keyLabel,key)
CreateThread(function()
  while true do
    print(jo.prompt.getPromptProgress(group,key))
    Wait(0)
  end
end)
```

## jo.prompt.isActive()
A function to know if a prompt is active or not
### Syntax
```lua
jo.prompt.isActive(group,key)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
#### Return value
Type: *boolean*
> Return `true` if the prompt is active
  
### Example
```lua
local group = "interaction"
local keyLabel = "The key"
jo.prompt.isActive(group,key)
-- Expected output : false
```

## jo.prompt.isCompleted()
A function to test if the prompt is pressed and completed
### Syntax
```lua
jo.prompt.isCompleted(group,key,fireMultipleTimes)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
`fireMultipleTimes` : *boolean* <BadgeOptional />
> Fire true if the prompt is completed and until another prompt is completed
> default : false
  

#### Return value
Type: *boolean*
> Return `true` if the key is pressed and completed
  

### Example
```lua
CreateThread(function()
  local group = "interaction"
  local keyLabel = "The key"
  local key = "INPUT_JUMP"
  local duration = 1000
  jo.prompt.create(group,keyLabel,key, duration)
  while true do
    if jo.prompt.isCompleted(group,key) then
      print('Key completed !')
    end
    jo.prompt.displayGroup(group,title)
    Wait(0)
  end
end)
```

## jo.prompt.isEnabled()
A function to know if the prompt is enabled
### Syntax
```lua
jo.prompt.isEnabled(group,key)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
#### Return value
Type: *boolean*
> Return `true` if the prompt is enabled
  
### Example
```lua
local group = "interaction"
local keyLabel = "The key"
jo.prompt.isEnabled(group,key)
-- Expected output : false
```

## jo.prompt.isExist()
A function to know if a prompt group exist
### Syntax
```lua
jo.prompt.isPromptExist(group,key)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
#### Return value
Type: *boolean*
> Return `true` if the prompt exist
  
### Example
```lua
local group = "interaction"
local keyLabel = "The key"
local key = "INPUT_JUMP"
jo.prompt.create(group,keyLabel,key)
print(jo.prompt.isPromptExist('interaction','INPUT_JUMP'))
-- Expected output : true
print(jo.prompt.isGroupExist('new_group','INPUT_RELOAD'))
-- Expected output : false
```

## jo.prompt.isGroupExist()
A function to know if a prompt group exist
### Syntax
```lua
jo.prompt.isGroupExist(group)
```
#### Parameters
`group` : *string*
> The name of the group
  

#### Return value
Type: *boolean*
> Return `true` if the group exist
  
### Example
```lua
local group = "interaction"
local keyLabel = "The key"
local key = "INPUT_JUMP"
jo.prompt.create(group,keyLabel,key)
print(jo.prompt.isGroupExist('interaction'))
-- Expected output : true
print(jo.prompt.isGroupExist('new_group'))
-- Expected output : false
```

## jo.prompt.isPressed()
A function to know if a key is pressed
### Syntax
```lua
jo.prompt.isPressed(key)
```
#### Parameters
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  

#### Return value
Type: *boolean*
> Return `true` if the key is pressed
  
### Example
```lua
local key =  "INPUT_FRONTEND_ACCEPT"
print(jo.prompt.isPressed(key))
```

## jo.prompt.setEnabled()
A function to define if the prompt is enabled or not
### Syntax
```lua
jo.prompt.setEnabled(group,key,value)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
`isVisible` : *boolean*
> If the prompt is enabled or not
  
### Example
```lua
local group = "shop"
local key = "INPUT_JUMP"
jo.prompt.setEnabled(group,key,false)
```

## jo.prompt.setGroups()
A function to overwrite the prompt groups value
### Syntax
```lua
jo.prompt.setGroups(groups)
```
#### Parameters
`groups` : *table*
> The prompt group value from other script get with jo.prompt.getAll()
  

### Example
```lua
local groups = exports.resourceName:getPrompt()
jo.prompt.setGroups(groups)
```

## jo.prompt.setVisible()
Turn on/off a prompt
### Syntax
```lua
jo.prompt.setVisible(group,key,isVisible)
```
#### Parameters
`group` : *string*
> The name of the group
  
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
`isVisible` : *boolean*
> If the prompt is visible or not
  

### Example
```lua
local group = "shop"
local key = "INPUT_JUMP"
local isVisible = false
jo.prompt.setVisible(group,key,isVisible)
```

## jo.prompt.waitRelease()
A function to wait the release of pressed key
### Syntax
```lua
jo.prompt.waitRelease(key)
```
#### Parameters
`key` : *string*
> The [input](https://github.com/femga/rdr3_discoveries/tree/a63669efcfea34915c53dbd29724a2a7103f822f/Controls) of the key
  
### Example
```lua
CreateThread(function()
  local group = "interaction"
  local keyLabel = "The key"
  local key = "INPUT_JUMP"
  local duration = 1000
  jo.prompt.create(group,keyLabel,key, duration)
  while true do
    if jo.prompt.isCompleted(group,key) then
      print('Key completed !')
      jo.prompt.waitRelease(key)
      print('Key released !')
    end
    jo.prompt.displayGroup(group,title)
    Wait(0)
  end
end)

```
# Prompt

Prompt module is a module to manage prompts.

## Include Prompt in your script

1. To use the Prompt library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Prompt module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'prompt',
}
```
You can now use the library inside of your resource with the `jo.prompt` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
# String

String module is a module to add new function in the string variable.

## Include String in your script

1. To use the String library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the String module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'string',
}
```
You can now use the library inside of your resource with the `string` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  
---
outline: 2
---
# String

String module is an upgrader of string LUA module to add more functions.

## string.firstToUpper()
Return the string with the first letter in uppercase
### Syntax
```lua
string.firstToUpper(str)
```
#### Parameters
`str` : *srtring*
> The sentence you want edit
  

#### Return value
Type: *string*
> Return the string with the first letter in uppercase
  
### Example
```lua
local first = string.firstToUpper('test')
print(first)
--Expected output: Test
```
# Table

Table module is a module to add new function in the table variable.

## Include Table in your script

1. To use the Table library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Table module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'table',
}
```
You can now use the library inside of your resource with the `table` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  
---
outline: 2
---
# Table expand

A library to add new table functions

## table.clearForNui()
Return an object without function values
### Syntax
```lua
table.clearForNui(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table/object to  filter
  
#### Return value
Type: *table/object*
> Return the filtered table 
  
### Example
```lua
local tbl = {
  a = 4,
  b = function()
    print('go')
  end,
  c = 10
}
local tbl2 = table.clearForNui(tbl)
print(json.encode(tbl2))
--Expected output: tbl2 = {a = 4, c = 10}
```

## table.copy()
A function to deep copy a table. Unlike "=", it doesn't keep the link between both table
### Syntax
```lua
table.copy(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table you want copy
  

#### Return value
Type: *table/object*
> Return the copy of the table
  
### Example
```lua
local tbl = {
  value = 5,
  children = {
    value = 6
  }
}
local tbl2 = table.copy(tbl)
```

## table.count()
Return the number of value inside a table
### Syntax
```lua
table.count(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table you want copy
  

#### Return value
Type: *integer*
> Return the number of value inside tbl 
  
### Example
```lua
local tbl = {a=3, b=4}
local count = table.count(tbl)
-- Expected output : 2
```

## table.filter()
Return a filtered table
### Syntax
```lua
table.filter(tbl,filter)
```
#### Parameters
`tble` : *table/object*
> The table to filter
  
`filter` : *function*
> A function to execute for each element in the table. It should return `true` to keep the element in the resulting array, and `false` to oterhwise. The function is called with the following arguments:  
> `element` : *any*  - The current element being processed in the table  
> `index/key` : *any* - The index/key of the current element being processed in the table  
> `tbl` : *table* - The original value of the table
  

#### Return value
Type: *table*
> Return the filtered table 
  
### Example
```lua
local tbl = {
  a = 1,
  b = 2,
  c = 3
}
local filter = function(element,key,tble)
  if element < 2 then
    return false --remove tbl.a
  end
  if key == "c" then
    return false --remove tbl.c
  end
  return true
end
local tbl2 = table.filter(tbl,filter)
print(json.encode(tbl2))
--Expected output : tbl = {b=2}
```

## table.find()
A function to return the first element in the table that satisfies the function. if no value is found, return `false`
### Syntax
```lua
table.find(tbl,cb)
```
#### Parameters
`tbl` : *table*
> The table to look in
  
`cb` : *function*
> A function to execute for each element in the table. It should return `true` indicate a matching element has been found, and `false` otherwise. The function is called with the following arguments:  
> `element` : *any*  - The current element being processed in the table  
> `index/key` : *any* - The index/key of the current element being processed in the table  
> `tbl` : *table* - The original value of the table
  

#### Return value
Type: *table*
> Return the first element found or `false` 
  

### Example
```lua
local tbl = [5, 12, 8, 130, 44];
local cb = function(element)
  return element > 10
end
local found = table.find(tbl,cb)
print(found)
--Expected output : 12
```

## table.isEmpty()
A function to know if a table/object is empty
### Syntax
```lua
table.isEmpty(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table you want copy
  

#### Return value
Type: *boolean*
> Return `true` if the table/object is empty
  

### Example
```lua
local tbl = { a = 10}
print(table.isEmpty(tbl))
-- Expected output : false
```

## table.map()
A function to create a new table populated with the results of the function.
### Syntax
```lua
table.map(tbl,cb)
```
#### Parameters
`tbl` : *table/object*
> The table/object to copy
`cb` : *function*
> A function to execute for each element in the table. Its return value is added as a single element in the new array. The function is called with the following arguments:  
> `element` : *any*  - The current element being processed in the table  
> `index/key` : *any* - The index/key of the current element being processed in the table  
> `tbl` : *table* - The original value of the table  
  
#### Return value
Type: *table*
> Return the new table  
  

### Example
```lua
local tbl = {1,4,9,16}
local cb = function(element)
  return element*2
end
local tbl2 = table.map(tbl,cb)
print(json.encode(tbl2))
--Expected output : tbl2 = {2,8,18,32}
```

## table.merge()
A function to merge two table.
### Syntax
```lua
table.merge(tbl1,tbl2)
```
#### Parameters
`tbl1` : *table/object*
> The main table
  
`tbl2` : *type*
> The table to merge. 
  
#### Return value
Type: *table*
> Return the merged table  
> If the same key are in both table, only the value of tbl2 is keept
  

### Example
```lua
local tbl1 = {
  a = 5,
  b = 2
}
local tbl2 = {
  a = 10,
  c = 3
}
local tbl3 = table.merge(tbl1,tbl2)
-- Expected output: tbl3 = { a=10, b=2, c=3 }
```
# Timeout

Timeout is a module to manage thread easier.

## Include Timeout in your script

1. To use the Timeout library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Timeout module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'timeout',
}
```
You can now use the library inside of your resource with the `timeout` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  
---
outline: [2,3]
---
# Timeout

Timeout is a module to manage easier the Thread on RedM. 

## Functions

### jo.timeout.delay()
A function to delayhis execution. If another delay is created with the same id, the previous one will be canceled
#### Syntax
```lua
jo.timeout.delay(id,msec,cb)
```
#### Parameters
`id` : *string*
> The unique ID of the delay
  
`msec` : *integer*
> The duration before execute `cb`
  
`cb` : *function*
> The function executed after `msec`
  

#### Return value
Type: *TimeoutClass*
  
#### Example
```lua
local id = "TheUniqueID"
local delay = jo.timeout.delay(id, 1000, function() print('Done') end)
Wait(500)
local delay2 = jo.timeout.delay(id,1000, function() print('Done 2') end)
--Expected output : "Done 2" printed after 1500ms (500 + 1000). delay function was canceled by delay2 because it's the same id
```

### jo.timeout.loop()
Create a loop to execute the function at regular interval
#### Syntax
```lua
jo.timeout.loop(msec,cb)
```
#### Parameters
`msec` : *integer*
> The duration between two executions of `cb`
  
`cb` : *function*
> The function executed every `msec` ms
  

#### Return value
Type: *TimeoutClass*
  
#### Example
```lua
jo.timeout.loop(1000, function()
    print(GetGameTimer())
end)
--Expected output: The GetGameTimer() will be printed every 1000 msec
```

### jo.timeout.set()
A function to set a timeout
#### Syntax
```lua
jo.timeout.set(waiter,cb)
```
#### Parameters
`waiter` : *integer/function*
> If integer: wait duration in ms.  
> If function: the function will be execute before `cb`  
  
`cb` : *function*
> The function executed when waiter is done
  
#### Return
Type: *TimeoutClass*
> Return the timeout 
  
#### Example
```lua
local waiter = 1000
local cb = function()
    print('Fired')
end
jo.timeout.set(waiter,cb)
--Expected output: 'Fired' after 1000 ms
```

## TimeoutClass class

### TimeoutClass:clear()
Cancel a timeout
#### Syntax
```lua
TimeoutClass:clear()
```
#### Example
```lua
local timeout = jo.timeout.set(1000,function() print("Done") end)
timeout:clear()
--Expected output : Nothing because the function was canceled
```

### TimeoutClass:exec()
Start the waiter and execute the function after it
#### Syntax
```lua
TimeoutClass:exec()
```

#### Example
```lua
local timeout = TimeoutClass:set(1000, function() print('Done') end)
timeout:exec()
--Expected output: 'Done' after 1000 ms
```

### TimeoutClass:set()
Initialize a new timeout
#### Syntax
```lua
TimeoutClass:set(waiter,cb)
```
#### Parameters
`waiter` : *integer/function*
> The waiter of the function
  
`cb` : *function*
> The function fired afer waiter
  

#### Return value
Type: *TimeoutClass*
  

### TimeoutClass:setCb()
A method to edit the `cb` function of the timeout
#### Syntax
```lua
TimeoutClass:setCb(cb)
```
#### Parameters
`cb` : *function*
  
#### Example
```lua
local timeout = jo.timeout.set(1000, function() print('Done') end)
timeout:setCb(function()
    print('Done overwrited')
end)
--Expected output: "Done overwrited" printed after 1000ms
```

### TimeoutClass:setMsec()
A method to overwrite the waiter
#### Syntax
```lua
TimeoutClass:setMsec(waiter)
```
#### Parameters
`Waiter` : *integer/waiter*
  
#### Example
```lua
local timeout = jo.timeout.set(1000, function(), print('Done') end)
timeout:setMsec(2000)
--Executed output: 'Done' printed after 2000ms
```
---
outline: 2
---
# UI

A module to manage UI elements from the game.

# RANK

## jo.ui.updateRank()
A function to update the rank element on the top left of weapon wheel

<img src="/images/previews/ui/updateRank.png" />

### Syntax
```lua
jo.ui.updateRank(level,xp,xpRequired)
```
#### Parameters
`level` : *string*
> The level printed in the left of the element

`xp` : *integer*
> The current xp amount
  
`xpRequired` : *integer*
> The amount of XP required to level up
  

### Example
```lua
local level = 325
local xp = 215
local xpRequired = 17400
jo.ui.updateRank(level,xp,xpRequired)
```

# TIMER

## jo.ui.initTimer()
A function to initialize the timer's UI

### Syntax
```lua
jo.ui.initTimer()
```

## jo.ui.startTimer()
A function to start the timer's UI.

<img src="/images/previews/ui/startTimer.png" />

### Syntax
```lua
jo.ui.startTimer(time, low)
```
#### Parameters
`time ` : *integer*
> The time in seconds for the timer.

`low` : *integer* (optional)
> The threshold in seconds at which the timer color will turn red.

  ### Example
```lua
local time = 60 -- 1 minute
local low = 10 -- Turn red at 10 seconds
jo.ui.initTimer()
jo.ui.startTimer(time, low)
```

## jo.ui.stopTimer()
A function to stop the Timer's UI before it finishes naturally.

### Syntax
```lua
jo.ui.stopTimer()
```

## jo.ui.finishTimer()
A function to stop the Timer's UI before it finishes naturally by the library.

### Syntax
```lua
jo.ui.finishTimer()
```

## Internal Variables and Structures
The following variables and structures are used internally by the TimerUI functions and should not be modified directly:
 - `jo.ui.TimerUI.data.uiFlowblock`
 - `jo.ui.TimerUI.data.container`
 - `jo.ui.TimerUI.data.timer`
 - `jo.ui.TimerUI.data.show`
 - `jo.ui.TimerUI.data.stateMachine`
 - `jo.ui.TimerUI.data.time`
These ensure proper functioning and state management of the TimerUI.
# UI

UI is a module to manage the UI element of the game.

## Include UI in your script

1. To use the UI library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the UI module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'ui',
}
```
You can now use the library inside of your resource with the `ui` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
---
outline: 2
---
# Utils functions

A library with util functions to create a script

## jo.utils.loadGameData()
A function to load a game file
### Syntax
```lua
jo.utils.loadGameData(name,waitLoading)
```
#### Parameters
`name` : *string/integer*
> The name of the file.  
> Compatible with :  
> * Animation dictionnary
> * Model (hashed or string)
> * Texture dictionnary
  
`waitLoading` : *boolean*
> If the function has to wait after the loading to be completed
  

### Example
```lua
local model = 'A_C_Horse_Morgan_Bay'
jo.utils.loadGameData(model,true)
```

## jo.utils.releaseGameData()
A function to release a game file
### Syntax
```lua
jo.utils.releaseGameData(name)
```
#### Parameters
`name` : *string*
> The name of the file.  

### Example
```lua
local model = 'A_C_Horse_Morgan_Bay'
jo.utils.releaseGameData(model)
```

## jo.utils.waiter()
  
A function to wait after a satisfing condition with a waiting duration.  

### Syntax
```lua
jo.utils.waiter(cb,maxDuration,timer)
```
#### Parameters
`cb` : *function*
> If the function return `true` a new timer value is waited
  
`maxDuration` : *integer* <BadgeOptional />
> The maximum duration the function will wait  
> default: 1000
  
`timer` : *integer* <BadgeOptional />
> The delay between test of cb function in ms  
> default: 0
  
#### Return value
Type: *Boolean*
> Return `true` if the function is satisfied, `false` if the waiter was killed by the maxDuration value
  

### Example
```lua
local value = 0
local cb = function()
  value = math.random(1,10)
  return value == 5
end
local maxDuration = 2000
local timer = 10

local startWait = GetGamerTimer()
print killer = jo.utils.waiter(cb,maxDuration,timer)
print("Killer: ",killer,"Value: ",value,"Duration: ",GetGamerTimer() - startWait)
--Expected output: Killer: true, Value : 5, Duration: (duration < 2000)
--OR
--Expected output: Killer: false, Value : (<> 5), Duration: 2000
```
# Utils

Utils module is a module with some interesting fonction to create script for RedM.

## Include Utils in your script

1. To use the Utils library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Utils module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'utils',
}
```
You can now use the library inside of your resource with the `utils` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
