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