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