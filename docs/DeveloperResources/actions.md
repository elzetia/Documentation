# Actions

**Actions** are one of the two types of [Hooks](hooks). They provide a way for running a function at a specific point in the execution of scripts. Callback functions for an Action do not return anything back to the calling Action hook. They are the counterpart to [Filters](filters). Here is a refresher of the [difference between actions and filters](hooks#actions-vs-filters).

## Adding an Action
The process of adding a action includes two steps.

First, you need to create a Callback function which will be called when the action is run. Second, you need to add your Callback function to a hook which will perform the calling of the function.
The script determines the order that callback functions are run based on two things:
* By manually setting the priority.
* If two callback functions are registered for the same hook with the same priority, they will be run in the order that they were registered to the hook.

An action with a priority of 11 will run after an action with a priority of 10; and an action with a priority of 9 will run before an action with a priority of 10.

You will use the registerAction() function, passing at least two parameters:

1. `string $hook_name` which is the name of the action you’re hooking to, and
2. `callable $callback` the name of your callback function.
3. `(optional) int $priority` the priority of the action  (default value is 10)

The example below will run when the `kd_stable:client:stableHorse` action is executed in *kd_stable* script with priority = 10.

```lua
function action_stable_horse()
  -- Do something
end
exports.kd_stable:registerAction('kd_stable:client:stableHorse',action_stable_horse,10)
```
The `action_stable_horse` will be executed each time when the player stable his horse.

You can refer to the script docs for a list of available hooks.

As you gain more experience, looking through Open Source code will allow you to find the most appropriate hook.

