RegisterCommand('menu', function()
  CreateMenu()
end)

function CreateMenu()
  local menu = jo.menu.create('menu1',{
    title = "My title",
    subtitle = "The subtitle",
    onEnter = function()
      print('onEnter menu1')
    end,
    onBack = function()
      print('onBack menu1')
      jo.menu.show(false)
    end,
    onExit = function()
      print('onExit menu1')
    end,
  })

  menu:addItem({
    title = "Statistic Item",
    statistics = {
      {label = "The label", value = "The value"},
      {label = "The label", type="bar-style", value = {"active","active fgold","active fred","possible fred",'possible',''}},
      {label = "The label", type = "bar", value = {3,8}},
      {label = "The label", type="icon", value = {{icon = "player_health", opacity = 1},{icon = "player_health", opacity = 0.75},{icon = "player_health", opacity = 0.3}}},
      {label = "The label", type="weapon-bar", value = {60,100}},
    },
    onActive = function(data)
      print('onActive item 1')
    end,
    onClick = function(data)
      print('onClick item 1')
    end,
    onExit = function(data)
      print('onExit item 1')
    end
  })

  menu:send()

  local subMenu = jo.menu.create('subMenu', {
    title = "SubMenu",
    onEnter = function()
      print('enter subMenu')
    end,
    onBack = function()
      print('pressed BACK subMenu')
    end,
    onExit = function()
      print('exit subMenu')
    end,
  })
  subMenu:addItem({
    title="My Submenu",
    onActive = function(data)
      print('onActive sub')
    end,
    onClick = function(data)
      print('click sub')
    end,
    onExit = function(data)
      print('onExit sub')
    end
  })
  subMenu:send()


  jo.menu.setCurrentMenu('menu1',false,true)

  jo.menu.show(true)
end