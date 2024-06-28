# Framework

Framework module is a very powerfull module to build a multi-framework script.

## Include Framework in your script

1. To use the Framework library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Framework module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'framework',
}
```
You can now use the library inside of your resource with the `jo.framework` global variable.

## Functions

Documentation for the [Server](./server-class/framework.md) side  