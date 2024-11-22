# Component

Component is a very usefull module to manage ped component.

## Include Component in your script

1. To use the Component library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the component module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'component',
}
```
You can now use the library inside of your resource with the `jo.component` global variable.

## Functions

Documentation for the [Client](./client.md) side.  