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
