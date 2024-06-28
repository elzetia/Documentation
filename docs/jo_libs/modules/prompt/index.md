# Prompt

Prompt module is a module to manage prompts.

## Include Prompt in your script

1. To use the Prompt library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Prompt module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'prompt',
}
```
You can now use the library inside of your resource with the `jo.prompt` global variable.

## Functions

Documentation for the [Client](./client.md) side.  