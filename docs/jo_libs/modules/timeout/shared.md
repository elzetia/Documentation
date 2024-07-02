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