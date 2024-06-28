# Animation

Animation is a module to play animations in your script.

## Include Animation in your script

1. To use the nimation library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the animation module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'animation',
}
```
You can now use the library inside of your resource with the `jo.animation` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
Documentation for the [Server](./server.md) side  