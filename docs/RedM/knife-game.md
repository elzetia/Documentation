# :knife: Knife game
Documentation relating to the kd_fivefingerfillet.

:::tabs
== BUY
[Buy the script](https://jumpon-studios.com/redm/knife-game)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/qdmJtWG-e-M?si=MZxhRbY13OigZpJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_fivefingerfillet is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (VORP, RedEM:RP, QBCore, …).

- Drag and drop the resource in your resources folder
  - kd_fivefingerfillet
- Add this ensure in your server.cfg
  - `ensure kd_fivefingerfillet`
- Congratulation, the Knife game, aka Five finger filler script is ready to be use !

## 2. Usage
Go near a table and enter the command `/fff` to start the game.<br>
By default, all table are not available but you can add them in the config file.

## 3. Config.lua file
```lua
Config = {}

-- Turn it to true to display some marker
Config.debug = false
-- Command to start the five finger fillet
Config.commandName = "fff"

-- Duration of One round
Config.roundDuration = 20000 --ms

-- Model of the knife
Config.modelKnife = `w_melee_knife03`

-- List of keys
Config.keys = {
  start = "INPUT_JUMP",
  stop = "INPUT_FRONTEND_CANCEL",
  crossArm = "INPUT_FRONTEND_UP",

  -- List of keys available for the Quick Time Event
  QTE = {"INPUT_GAME_MENU_UP","INPUT_GAME_MENU_DOWN","INPUT_GAME_MENU_LEFT","INPUT_GAME_MENU_RIGHT"}
}

--Valid table models for five finger fillet
Config.modelsTable = {
  `p_table01x`,
  `p_table02x`,
  `p_table03x`,
  `p_table04x`,
  `p_table05x`,
  `p_table06x`,
  `p_table_cs34_sml`,
}

--Valid chair models
Config.modelsChair = {
  `p_windsorchair03x`
}
```