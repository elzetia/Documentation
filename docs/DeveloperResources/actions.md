# Actions

**Actions** are one of the two types of [Hooks](hooks). They provide a way for running a function at a specific point in the execution of scripts. Callback functions for an Action do not return anything back to the calling Action hook. They are the counterpart to [Filters](filters). Here is a refresher of the [difference between actions and filters](hooks#actions-vs-filters).

## Adding an Action
The process of adding a action includes two steps.

First, you need to create a Callback function which will be called when the action is run. Second, you need to add your Callback function to a hook which will perform the calling of the function.

You will use the RegisterAction() function, passing at least two parameters:

1. `string $hook_name` which is the name of the action you’re hooking to, and
2. `callable $callback` the name of your callback function.

The example below will run when the `kd_stable:client:stableHorse` action is executed in *kd_stable* script.

```lua
function action_stable_horse()
  -- Do something
end
exports.kd_stable:RegisterAction('kd_stable:client:stableHorse',action_stable_horse)
```
The `action_stable_horse` will be executed each time when the player stable his horse.

You can refer to the script docs for a list of available hooks.

As you gain more experience, looking through Open Source code will allow you to find the most appropriate hook.

