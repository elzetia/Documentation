# Dataview

Dataview module is a module to use dataview in your scripts.

## Include Dataview in your script

1. To use the Dataview library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Dataview module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'dataview',
}
```
You can now use the library inside of your resource with the `Dataview` global variable.

## Functions

Documentation for the [Client](./client.md) side  