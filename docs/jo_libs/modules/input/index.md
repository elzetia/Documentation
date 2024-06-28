# Input

Input module is a module to create an input box to let user enter value.

## Include Input in your script

1. To use the Input library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Input module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'input',
}
```
You can now use the library inside of your resource with the `jo.input` global variable.

## Functions

Documentation for the [Client](./client.md) side.  