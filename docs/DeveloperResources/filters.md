# Filters

**Filters** are one of the two types of [Hooks](hooks).

They provide a way for functions to modify data during the execution of scripts. They are the counterpart to Actions.

Unlike [Actions](actions), filters are meant to work in an isolated manner, and should never have side effects such as affecting global variables and output. Filters expect to have something returned back to them.

## Add Filter
The process of adding a filter includes two steps.

First, you need to create a Callback function which will be called when the filter is run. Second, you need to add your Callback function to a hook which will perform the calling of the function.

You will use the RegisterFilter() function, passing at least two parameters:

1. `string $hook_name` which is the name of the filter you’re hooking to, and
2. `callable $callback` the name of your callback function.

The example below will run when the `kd_stable:client:menuTitle` filter is executed in *kd_stable* script.

```lua
function filter_menu_title(title)
  return "The "..title.." was filtered"
end
exports.kd_stable:RegisterFilter('kd_stable:client:menuTitle',filter_menu_title)
```
Lets say we have a menu title, “My horses”, the above example will modify it to be “The My horses was filtered”.

You can refer to the script docs for a list of available hooks.

As you gain more experience, looking through Open Source code will allow you to find the most appropriate hook.

