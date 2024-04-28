---
outline: 2
---
# Jump On Library

A standalone library for providing reusable code to increase the compatibility between scrips.

<div class="flex-buttons">
<a class="box-button" href="https://github.com/kaddarem-tebex/RedM-jo_libs" target="_blank"><i class="pi pi-github" />Github</a>
<a class="box-button" href="https://github.com/kaddarem-tebex/RedM-jo_libs/releases/latest" target="_blank"><i class="pi pi-download" />Download</a>
</div>

## Installation

1. Download the [last release](https://github.com/kaddarem-tebex/RedM-jo_libs/releases/latest) of the library
2. Add the resource `jo_libs` in your resources folder
3. Add `ensure jo_libs` in your server.cfg

## Usage

1. To use libraries, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. List modules you want use inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'print',
  'table',
}
```
You can now use the libraries inside of your resource with the `jo` global variable.

## jo.waitLibLoading()
A function to wait the full loading of all libraries
### Syntax
```lua
jo.waitLibLoading()
```
#### Parameters
None.

### Example
```lua
jo.waitLibLoading()
local source = 1
jo.framework:getUserIdentifiers(source)
```