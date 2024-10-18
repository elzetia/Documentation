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