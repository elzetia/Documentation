# Notification

Notification module to display notification on the player screen.

## Include Notification in your script

1. To use the Notification library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Notification module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'notification',
}
```
You can now use the library inside of your resource with the `jo.notification` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
Documentation for the [Server](./server.md) side.  