---
outline: 2
---
# Table expand

A library to add new table functions

## table.copy()
A function to deep copy a table. Unlike "=", it doesn't keep the link between both table
### Syntax
```lua
table.copy(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table you want copy
  

#### Return value
Type: *table/object*
> Return the copy of the table
  
### Example
```lua
local tbl = {
  value = 5,
  children = {
    value = 6
  }
}
local tbl2 = table.copy(tbl)
```

## table.count()
Return the number of value inside a table
### Syntax
```lua
table.count(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table you want copy
  

#### Return value
Type: *integer*
> Return the number of value inside tbl 
  
### Example
```lua
local tbl = {a=3, b=4}
local count = table.count(tbl)
-- Expected output : 2
```

## table.isEmpty()
A function to know if a table/object is empty
### Syntax
```lua
table.isEmpty(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table you want copy
  

#### Return value
Type: *boolean*
> Return `true` if the table/object is empty
  

### Example
```lua
local tbl = { a = 10}
print(table.isEmpty(tbl))
-- Expected output : false
```

## table.merge()
A function to merge two table.
### Syntax
```lua
table.merge(tbl1,tbl2)
```
#### Parameters
`tbl1` : *table/object*
> The main table
  
`tbl2` : *type*
> The table to merge. 
  
#### Return value
Type: *table*
> Return the merged table  
> If the same key are in both table, only the value of tbl2 is keept
  

### Example
```lua
local tbl1 = {
  a = 5,
  b = 2
}
local tbl2 = {
  a = 10,
  c = 3
}
local tbl3 = table.merge(tbl1,tbl2)
-- Expected output: tbl3 = { a=10, b=2, c=3 }
```