# Ped Texture

Ped Texture is a powerfull module to manage ped texture like makeup/tatoo...

## Include Ped Texture in your script

1. To use the Ped Texture library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Ped Texture module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'pedTexture',
}
```
You can now use the library inside of your resource with the `jo.pedTexture` global variable.

## Functions

Documentation for the [Client](./client.md) side.  