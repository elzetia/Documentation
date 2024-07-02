---
outline: 2
---
# String

String module is an upgrader of string LUA module to add more functions.

## string.firstToUpper()
Return the string with the first letter in uppercase
### Syntax
```lua
string.firstToUpper(str)
```
#### Parameters
`str` : *srtring*
> The sentence you want edit
  

#### Return value
Type: *string*
> Return the string with the first letter in uppercase
  
### Example
```lua
local first = string.firstToUpper('test')
print(first)
--Expected output: Test
```
