# Clothes

Clothes is a very usefull module to manage ped clothes.

## Include Clothes in your script

1. To use the Clothes library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the clothes module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'clothes',
}
```
You can now use the library inside of your resource with the `jo.clothes` global variable.

## Functions

Documentation for the [Client](./client.md) side.  