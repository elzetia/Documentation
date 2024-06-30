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