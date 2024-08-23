---
outline: 2
---
# Jo Libraries

A standalone libraries for providing reusable code to increase the compatibility between scrips.

<div class="flex-buttons">
<a class="box-button" href="https://github.com/Jump-On-Studios/RedM-jo_libs" target="_blank"><i class="pi pi-github" />Github</a>
<a class="box-button" href="https://github.com/Jump-On-Studios/RedM-jo_libs/releases/latest/download/jo_libs.zip" target="_blank"><i class="pi pi-download" />Download</a>
</div>

## Installation

1. Download the [last release](https://github.com/Jump-On-Studios/RedM-jo_libs/releases/latest/download/jo_libs.zip) of the library
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

### Compatible Frameworks
The **framework bridge** module is compatible with these frameworks:
* VORP  
* RedEM:RP (old/new)  
* RSG  
* QBR  
* QR  
  
*All other modules are standalone and have no dependencies on any framework.*