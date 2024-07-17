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
menu.addItem({
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
  {current = 0.5,max = 1.0, min = -1.0},
  {current = 0.5,max = 10.0, min = 0.0}, --for two dimensions
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
menu.addItem({
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
menu.addItem({
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
menu.addItem({
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
menu.addItem({
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
menu.addItem({
  title = "Item",
  statistics = {
    {label = "The label", type="weapon-bar", value = {60,100}}
  }
})
menu:send()
jo.menu.setCurrentMenu('menu1')
jo.menu.show(true)
```