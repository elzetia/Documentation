# Timeout

Timeout is a module to manage thread easier.

## Include Timeout in your script

1. To use the Timeout library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Timeout module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'timeout',
}
```
You can now use the library inside of your resource with the `timeout` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  