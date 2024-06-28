# Utils

Utils module is a module with some interesting fonction to create script for RedM.

## Include Utils in your script

1. To use the Utils library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Utils module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'utils',
}
```
You can now use the library inside of your resource with the `utils` global variable.

## Functions

Documentation for the [Client](./client.md) side.  