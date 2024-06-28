# Hook

[Hooks](/DeveloperResources/hooks) are a powerfull module for one script to interact/modify another script at specific, pre-defined spots. In contrast to events, hooks are **synchronous**.
Two kinds of hook exist :
* [Filters](/DeveloperResources/filters) are a way to edit data used by the script. Filters are fired at a specific point in time during the execution of the script and a value has to be returned.
* [Actions](/DeveloperResources/actions) are a way to add new features in a script. Actions are functions that occurs at a specific point in time during the execution of the script. No value need to be return.

## Include Hook in your script

1. To use the Hook library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Hook module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'hook',
}
```
You can now use the library inside of your resource with the `jo.hook` global variable.

## Functions

Documentation for the [Both side](./shared.md) side.  
