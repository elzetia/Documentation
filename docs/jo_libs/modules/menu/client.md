---
outline: [1,3]
---
# Menu
A client side library to use the Jump On Menu in your scripts. 

**Why you must switch to this new menu ?**

The Jump On Menu is a new way to build menu for your RedM Script. Its design match with the original design from Red Dead Redemption II. This new menu is way more flexible and easy to use than MenuAPI from your framework : action are linked to the button instead of to the global menu. Your players will love the new features like the grid, color picker and all the menu animations.

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
> `data.subtitle` : *string* - The subtitle of the menu  
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
  onEnter = function()
    print('Enter in menu '..id)
  end,
  onBack = function()
    print('Backspace/Esc pressed in menu '..id)
  end,
  onExit = function()
    print('Exit menu '..id)
  end,
}
local menu = jo.menu.create(id,data)
```

## Instance Methods
### menu:addItem
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
> the little icon before the title

`icon` : *string*  <BadgeOptional />
> the left icon  

`iconRight` : *string*  <BadgeOptional />
> the right icon  

`iconClass` : *string*  <BadgeOptional />
> CSS class for the icon  

`price` : *table (default: false)*<BadgeOptional />  
> the price of the item. Use O to display "free"
> default : false  
> `price.money` : *float* - the price in $  <BadgeOptional />  
> `price.gold` : *float* - the price in gold  <BadgeOptional />   

`priceTitle` : *string  <BadgeOptional />  
> replace the "Price" label  

`priceRight` : *boolean*  <BadgeOptional />  
> display the price at the right of the item title  

`statistics` : *table*  <BadgeOptional />
> the list of [statistics](./Statistic.md)  

`disabled` : *boolean*  <BadgeOptional />  
> if the item is disabled (grey in the menu)  

`textRight` : *string*  <BadgeOptional />
> the label displayed at the right of the item  

`previewPalette` : *boolean*  <BadgeOptional />  
> display a color square at the right of the item  
> default: true
  
`sliders` : *table*
> The list of sliders
  
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
  onActive = function()
    print('Item 1 active')
  end,
  onClick = function()
    print('Clicked on item 1')
  end,
  onChange = function()
    print('Something change in the item 1')
  end,
  onExit = function()
    print('Exit the item 1')
  end
})
menu:addItem({
  title = "Item 2",
  price = {money = 10.2},
  onActive = function()
    print('Item 2 active')
  end,
  onClick = function()
    print('Clicked on item 2')
  end,
  onChange = function()
    print('Something change in the item 2')
  end,
  onExit = function()
    print('Exit the item 2')
  end
})
menu:send()
jo.menu.setCurrentMenu('menu')
jo.menu.show(true)
```

### menu:addItems
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

# Definition variations

## Statistics
Statistics table is displayed at the bottom of the menu. 5 types of statistics are available:
[Bar](#bar), [Bar-style](#bar-style), [Icon](#icon), [Texts](#texts) and [Weapon-bar](#weapon-bar)  
There is an example of this 5 types:
<img src="/images/preview_statistics.jpg" class="data-zoomable" data-zoomable style="height:20em"/>

### Bar
A statistic with **10 bars**
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
![](/images/preview_statistics_bar.jpg){data-zoomable}
```lua
local menu = jo.menu.create('menu1',{})
menu.addItem({
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
![](/images/preview_statistics_bar-style.jpg){data-zoomable}
```lua
local menu = jo.menu.create('menu1',{})
menu.addItem({
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

### Texts
Basic statistic with two labels
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
![](/images/preview_statistics_text.jpg){data-zoomable}
```lua
local menu = jo.menu.create('menu1',{})
menu.addItem({
  title = "Item",
  statistics = {
    {label = "The label", value = "The value"}
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```