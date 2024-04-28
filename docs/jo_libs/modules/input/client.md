---
outline: 2
---
# Input

A library to manage the input box

## jo.input.native()
A function to open the native input
### Syntax
```lua
jo.input.native(label, placeholder, maxStringLenght)
```
#### Parameters
`label` : *string*
> The Text above the typing field in the black square
  
`placeholder` : *string*
> An Example Text, what it should say in the typing field
  
`maxStringLenght` : *integer* <BadgeOptional />
> Maximum String Lenght  
> default: 60
  
#### Return value
Type: *string*
> Return the input 
  

### Example
```lua
local input = jo.input.native('The label: ', 'the placeholder')
print(input)
```
