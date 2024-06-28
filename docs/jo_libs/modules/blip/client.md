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