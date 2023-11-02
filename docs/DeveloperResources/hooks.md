# Hooks
Hooks are a way for one piece of code to interact/modify another piece of code at specific, pre-defined spots. These hooks are not native from FiveM/RedM. They was created from scratch by Kad Darem and implemented only on his scripts.

There are two types of hooks: [Actions](actions) and [Filters](filters). To use either, you need to write a custom function known as a **Callback**, and then register it with an export for a specific action or filter.

[Actions](actions) allow you to add actions during the process of the script. Actions will run at a specific point in the execution of scripts. Callback functions for Actions can perform some kind of a task, like printing output to the user or inserting something into the database. Callback functions for an Action do not return anything back to the calling Action hook.

[Filters](filters) give you the ability to change data during the execution of scripts. Callback functions for Filters will accept a variable, modify it, and return it. They are meant to work in an isolated manner, and should never have side effects such as affecting global variables and output. Filters expect to have something returned back to them.

The list of script hooks is available on the documentation of each scripts. You can also ask for new hooks on my [discord](https://discord.com/invite/8rqVHnSb2K)

## Actions vs. Filters
The main difference between an action and a filter can be summed up like this:
* an action takes the info it receives, does something with it, and returns nothing. In other words: it acts on something and then exits, returning nothing back to the calling hook.
* a filter takes the info it receives, modifies it somehow, and returns it. In other words: it _filters_ something and passes it back to the hook for further use.

Said another way:
* an action interrupts the code flow to do something, and then returns back to the normal flow without modifying anything;
* a filter is used to modify something in a specific way so that the modification is then used by code later on.
The something referred to is the parameter list sent via the hook definition. More on this in later sections.

