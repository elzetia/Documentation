# Entity

Entity module is a module to manage easier the entities.

## Include Entity in your script

1. To use the Entity library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Entity module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'entity',
}
```
You can now use the library inside of your resource with the `jo.entity` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
Documentation for the [Server](./server.md) side  