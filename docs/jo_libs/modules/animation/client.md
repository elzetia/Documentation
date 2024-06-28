---
outline: 2
---

# Animation

Animation is a powerfull module to play animations in your script.

## jo.animation.play()
Play animation. The function load automatically necessary resources.
### Syntax
```lua
jo.animation.play(ped,dict,name,duration,flag,offset)
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
  

### Example
```lua
local ped = PlayerPedId()
local dict = "cnv_camp@rchso@cnv@ccdtc33@player_karen"
local name = "arthur_dance_loop"
local duration = -1
local flag = 1
jo.animation.play(ped,dict,name,duration,flag)
```