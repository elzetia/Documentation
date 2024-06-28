# Me

Me module is a fully optimize way to get the classic data from the player, list PlayerPedId(), coordinates, ...

## Include Me in your script

1. To use the Me library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Me module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'me',
}
```
You can now use the library inside of your resource with the `jo.me` global variable.

## Functions

Documentation for the [Client](./client.md) side.  