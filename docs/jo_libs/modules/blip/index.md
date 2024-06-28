# Blip

Blip is a module to add blips in your map. Blips are automatically removed if you stop the script.

## Include Blip in your script

1. To use the nimation library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the blip module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'blip',
}
```
You can now use the library inside of your resource with the `jo.blip` global variable.

## Functions

Documentation for the [Client](./client.md) side.  