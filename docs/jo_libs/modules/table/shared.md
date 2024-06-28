---
outline: 2
---
# Table expand

A library to add new table functions

## table.clearForNui()
Return an object without function values
### Syntax
```lua
table.clearForNui(tbl)
```
#### Parameters
`tbl` : *table/object*
> The table/object to  filter
  
#### Return value
Type: *table/object*
> Return the filtered table 
  
### Example
```lua
local tbl = {
  a = 4,
  b = function()
    print('go')
  end,
  c = 10
}
local tbl2 = table.clearForNui(tbl)
print(json.encode(tbl2))
--Expected output: tbl2 = {a = 4, c = 10}
```

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

## table.filter()
Return a filtered table
### Syntax
```lua
table.filter(tbl,filter)
```
#### Parameters
`tble` : *table/object*
> The table to filter
  
`filter` : *function*
> A function to execute for each element in the table. It should return `true` to keep the element in the resulting array, and `false` to oterhwise. The function is called with the following arguments:  
> `element` : *any*  - The current element being processed in the table  
> `index/key` : *any* - The index/key of the current element being processed in the table  
> `tbl` : *table* - The original value of the table
  

#### Return value
Type: *table*
> Return the filtered table 
  
### Example
```lua
local tbl = {
  a = 1,
  b = 2,
  c = 3
}
local filter = function(element,key,tble)
  if element < 2 then
    return false --remove tbl.a
  end
  if key == "c" then
    return false --remove tbl.c
  end
  return true
end
local tbl2 = table.filter(tbl,filter)
print(json.encode(tbl2))
--Expected output : tbl = {b=2}
```

## table.find()
A function to return the first element in the table that satisfies the function. if no value is found, return `false`
### Syntax
```lua
table.find(tbl,cb)
```
#### Parameters
`tbl` : *table*
> The table to look in
  
`cb` : *function*
> A function to execute for each element in the table. It should return `true` indicate a matching element has been found, and `false` otherwise. The function is called with the following arguments:  
> `element` : *any*  - The current element being processed in the table  
> `index/key` : *any* - The index/key of the current element being processed in the table  
> `tbl` : *table* - The original value of the table
  

#### Return value
Type: *table*
> Return the first element found or `false` 
  

### Example
```lua
local tbl = [5, 12, 8, 130, 44];
local cb = function(element)
  return element > 10
end
local found = table.find(tbl,cb)
print(found)
--Expected output : 12
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

## table.map()
A function to create a new table populated with the results of the function.
### Syntax
```lua
table.map(tbl,cb)
```
#### Parameters
`tbl` : *table/object*
> The table/object to copy
`cb` : *function*
> A function to execute for each element in the table. Its return value is added as a single element in the new array. The function is called with the following arguments:  
> `element` : *any*  - The current element being processed in the table  
> `index/key` : *any* - The index/key of the current element being processed in the table  
> `tbl` : *table* - The original value of the table  
  
#### Return value
Type: *table*
> Return the new table  
  

### Example
```lua
local tbl = {1,4,9,16}
local cb = function(element)
  return element*2
end
local tbl2 = table.map(tbl,cb)
print(json.encode(tbl2))
--Expected output : tbl2 = {2,8,18,32}
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