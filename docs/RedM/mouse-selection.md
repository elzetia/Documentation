# :computer_mouse: Mouse selection
Documentation relating to the kd_mouseselection.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/package/5257125)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/4lZfroGikCE?si=Nb9iJY4MAJFHTNfB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_mouseselection is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (VORP, RedEM:RP, QBCore, …).

- Drag and drop the resource in your resources folder
  - kd_mouseselection
- Add this ensure in your server.cfg
  - `ensure kd_mouseselection`
- Congratulation, the Mouse selection script is ready to be use !

## 2. Usage
Press the key `Dead Eye Tag Enemies (by default Q)` to display the mouse. Move your mouse to entity, if you can interact with him, he will glow.

If it glow, just press the `right click` to open the menu.

## 3. Add Entity interaction
Because I don't like modify the main script to add options for other scripts. I created a simple functions to add item to the right click menu (client side).

Init your script : 
```lua
local CMenu = {}

TriggerEvent('CMenu:Get', function (_menu)
    CMenu = _menu
end)
```
When you will move the cursor and hover entity, use this event to glow or not the entity :
```lua
AddEventHandler('mouse-selection:CanInteract', function(_entityHover, callback)
    -- if you want to glow the entity return true value
    callback(true)
    -- if the entity is not valid, return false or nothing
    callback(false)
end)
```
If the entity glow and user press the right click, use this event to add items :
```lua
AddEventHandler("mouse-selection:ClickEntity", function(_entityHover)
  if _entityHover is valid then 
    CMenu.AddItem({
      title="label",
      id="id",
      callback="EventToFireWhenUserClick"
    })
  end
end)
```

## 4. Available functions
- Clear the right click menu
```lua
CMenu.Clear()
```
- Add item
```
CMenu.AddItem({
  title= "label", -- label of the item
  id= "id", -- id of the item
  callback="GiveANameToTheEvent" -- Client event fire when user click on the item
  -- If you want submenu :
  children = {
      {
        title= "submenu 1", -- label of the first submenu item
        id = "submenuid", -- id of the first submenu item
        callback="GiveANameToTheEvent" -- Client event fire when user click on the item, if missing, the parent callback will be use
        argument = 1 -- argument passed in the callback event
      },
      {
        title= "submenu 2", -- label of the second submenu item
        id = "submenuid2", -- id of the second submenu item
        argument = 2 -- argument passed in the callback event
        -- If you want new submenu level : Reuse the same syntaxe than children
      },
  }
})

  -- Event call when user click on this new item client side
AddEventHandler('GiveANameToTheEvent', function (_entityHover, id, argument)
end)
```
- Close the menu
```lua
CMenu.Close()
```
- Display the menu
```lua
CMenu.Show(true)
```
## Examples
Two examples are availables on the script :
- Seat feature in `client > seat_cl.lua`
:::details seat_cl.lua
```lua
local SeatTarget = 0
local Anim

local Animations = {
  Seat = "GENERIC_SEAT_CHAIR_SCENARIO",
  Bench = "GENERIC_SEAT_BENCH_SCENARIO"
}

local SeatModels = {
  `p_chairironnbx01x`,
  `p_chairnbx02x`,
  `p_chairwicker03x`,
  `p_theaterchair01b01x`,
  `p_theaterchair02a01x`,
  `p_theaterchair02b01x`,
  `p_theaterchair02c01x`,
  `p_ambchair01x`,
  `p_ambchair02x`,
  `p_chairhob01x`,
  `p_chairhob02x`,
  `p_chairrusticsav01x`,
  `p_armchair01x`,
  `p_chestchair01x`,
  `p_diningchairs01x`,
  `p_toiletchair01x`,
  `p_windsorchair03x`,
  `p_chairrocking03x`,
  `p_woodendeskchair01x`,
  `p_barberchair01x`,
  `p_barberchair02x`,
  `p_barberchair03x`,
  `p_birthingchair01x`,
  `p_bistrochair01x`,
  `p_chair02x`,
  `p_chair02x_dmg`,
  `p_chair04x`,
  `p_chair05x`,
  `p_chair05x_sea`,
  `p_chair06x`,
  `p_chair06x_dmg`,
  `p_chair07x`,
  `p_chair09x`,
  `p_chair_10x`,
  `p_chair11x`,
  `p_chair12bx`,
  `p_chair12x`,
  `p_chair13x`,
  `p_chair14x`,
  `p_chair15x`,
  `p_chair16x`,
  `p_chair17x`,
  `p_chair18x`,
  `p_chair19x`,
  `p_chair20x`,
  `p_chair21x`,
  `p_chair21x_fussar`,
  `p_chair22x`,
  `p_chair23x`,
  `p_chair24x`,
  `p_chair25x`,
  `p_chair26x`,
  `p_chair27x`,
  `p_chair30x`,
  `p_chair31x`,
  `p_chair34x`,
  `p_chair37x`,
  `p_chair38x`,
  `p_chair_barrel04b`,
  `p_chairbroken01x`,
  `p_chairComfy01x`,
  `p_chaircomfy02`,
  `p_chaircomfy03x`,
  `p_chaircomfy04x`,
  `p_chaircomfy05x`,
  `p_chaircomfy06x`,
  `p_chaircomfy07x`,
  `p_chaircomfy08x`,
  `p_chaircomfy09x`,
  `p_chaircomfy10x`,
  `p_chaircomfy11x`,
  `p_chaircomfy12x`,
  `p_chaircomfy14x`,
  `p_chaircomfy16x`,
  `p_chaircomfy17x`,
  `p_chaircomfy18x`,
  `p_chaircomfy22x`,
  `p_chaircomfy23x`,
  `p_chairconvoround01x`,
  `p_chair_crate02x`,
  `p_chair_crate15x`,
  `p_chair_cs05x`,
  `p_chairdeck01x`,
  `p_chairdeckfolded01x`,
  `p_chairdesk01x`,
  `p_chairdesk02x`,
  `p_chairdining01x`,
  `p_chairdining02x`,
  `p_chairdining03x`,
  `p_chairdoctor01x`,
  `p_chairdoctor02x`,
  `p_chaireagle01x`,
  `p_chairfolding02x`,
  `p_chairmed01x`,
  `p_chairmed02x`,
  `p_chairoffice02x`,
  `p_chairpokerfancy01x`,
  `p_chairporch01x`,
  `p_chairrocking02x`,
  `p_chairrocking04x`,
  `p_chairrocking05x`,
  `p_chairrocking06x`,
  `p_chairrustic01x`,
  `p_chairrustic02x`,
  `p_chairrustic03x`,
  `p_chairrustic04x`,
  `p_chairrustic05x`,
  `p_chairsalon01x`,
  `p_chairtall01x`,
  `p_chairvictorian01x`,
  `p_chairwhite01x`,
  `p_chairwicker01b_static`,
  `p_chairwicker01x`,
  `p_chairwicker02x`,
  `p_medwheelchair01x`,
  `p_oldarmchair01x`,
  `p_pianochair01x`,
  `p_rockingchair01x`,
  `p_rockingchair02x`,
  `p_rockingchair03x`,
  `p_sit_chairwicker01a`,
  `p_sit_chairwicker01b`,
  `p_sit_chairwicker01c`,
  `p_sit_chairwicker01d`,
  `p_sit_chairwicker01e`,
  `p_windsorchair01x`,
  `p_windsorchair02x`,
  `p_woodenchair01x`,
  `p_group_chair05x`,
  `p_chaircomfycombo01x`,
  `mp005_s_posse_foldingchair_01x`,
  `mp005_s_posse_col_chair01x`,
  `mp005_s_posse_trad_chair01x`,
  `s_chair04x`,
  `p_chair21_leg01x`,
  `p_cs_electricchair01x`,
  `s_bfchair04x`,
  `s_electricchair01x`,
  `p_gen_chairpokerfancy01x`,
  `p_gen_chair06x`,
  `p_gen_chair07x`,
  `p_gen_chair08x`,
  `p_chair_privatedining01x`,
  `p_privatelounge_chair01x`,
  `mp007_p_mp_chairdesk01x`,
  `mp007_p_nat_chairfolding02x`
}

local BenchModels = {
  `p_benchironnbx01x`,
  `p_benchironnbx02x`,
  `p_benchnbx01x`,
  `p_benchnbx02x`,
  `p_benchnbx03x`,
  `p_new_stonebench02x`,
  `p_windsorbench01x`,
  `p_workbenchdesk01x`,
  `p_bench03x`,
  `p_bench06x`,
  `p_bench06x_dmg`,
  `p_bench08bx`,
  `p_bench09x`,
  `p_bench11x`,
  `p_bench15_mjr`,
  `p_bench15x`,
  `p_bench16x`,
  `p_bench17x`,
  `p_bench18x`,
  `p_bench20x`,
  `p_benchbear01x`,
  `p_benchbroken02x`,
  `p_benchch01x`,
  `p_benchch01x_dmg`,
  `p_bench_log01x`,
  `p_bench_log02x`,
  `p_bench_log03x`,
  `p_bench_log04x`,
  `p_bench_log05x`,
  `p_bench_log06x`,
  `p_bench_log07x`,
  `p_bench_logsnow07x`,
  `p_benchlong05x`,
  `p_benchpiano02x`,
  `p_hallbench01x`,
  `p_seatbench01x`,
  `p_woodbench02x`,
  `p_benchannsaloon01x`,
  `p_workbench02x`,
  `p_benchwork01x`,
  `p_workbench01x`,
  `s_bench01x`,
  `p_new_rich_bench2x`,
  `p_gen_benchpiano01x_tc01`,
}

AddEventHandler('mouse-selection:CanInteract', function(entity, callback)
  SeatTarget = 0
  local _model = GetEntityModel(entity)
  for _,validModel in pairs (SeatModels) do
    if _model == validModel then
      SeatTarget = entity
      Anim = "Seat"
      callback(true)
      return
    end
  end
  for _,validModel in pairs (BenchModels) do
    if _model == validModel then
      SeatTarget = entity
      Anim = "Bench"
      callback(true)
      return
    end
  end
end)

AddEventHandler("mouse-selection:ClickEntity", function()
  if (SeatTarget == 0) then return end
  
  CMenu.AddItem({
    title=Lang['seat'],
    id="seat",
    callback="mouse-selection:Seat"
  })
end)

AddEventHandler('mouse-selection:Seat', function()
  if (SeatTarget == 0) then return end

  local player = PlayerPedId()
  local chairpos = GetOffsetFromEntityInWorldCoords(SeatTarget,0.0,-0.05,0.5)
  if Anim == "Bench" then
    chairpos = GetOffsetFromEntityInWorldCoords(SeatTarget,0.0,-.1,0.5)
  end
  local chairheading = GetEntityHeading(SeatTarget)
  TaskStartScenarioAtPosition(player, GetHashKey(Animations[Anim]), chairpos.x, chairpos.y, chairpos.z, chairheading+180.0, 0, true, false)
  while not IsPedUsingAnyScenario(player) do
    Wait(1000)
  end
  Citizen.CreateThread(function()
    while IsPedUsingAnyScenario(player) do
      Wait(2)
      DisplayPrompt('seat_prompt')
      if IsPromptCompleted('seat_prompt','INPUT_FRONTEND_CANCEL') then
        ClearPedTasks(player)
        return
      end
    end
  end)
end)
Citizen.CreateThread(function()
  CreatePromptButton('seat_prompt',Lang['leave'], 'INPUT_FRONTEND_CANCEL', 1000)
end)
```
:::
- Sleep feature in `client > sleep_cl.lua`
:::details sleep_cl.lua
```lua
local bedTarget = 0

local Animations = {
  "PROP_HUMAN_SLEEP_BED_PILLOW_HIGH",
}

local bedModels = {
  `p_bedpanladies01x`,
  `p_bed01x`,
  `p_bed02bx`,
  `p_bed02x`,
  `p_bed03x`,
  `p_bed04x`,
  `p_bed05x`,
  `p_bed08x`,
  `p_bed09x`,
  `p_bed10x`,
  `p_bed12x`,
  `p_bed13x`,
  `p_bed14x`,
  `p_bed15brassx`,
  `p_bed17x`,
  `p_bed18x`,
  `p_bed20bloodyx`,
  `p_bed20madex`,
  `p_bed20x`,
  `p_bed21x`,
  `p_bed22x`,
  `p_bed_abigail3x`,
  `p_bedbunk03x`,
  `p_bedindian01x`,
  `p_bedking01x`,
  `p_bedking02x`,
  `p_bedlog01x`,
  `p_bedmosquitonet01x`,
  `p_bedsleptin01x`,
  `p_bedsleptinold04x`,
  `p_nightbedking01x`,
  `p_singlebrassbed01x`,
  `p_ambbed01x`,
  `p_gangbed01x`,
  `p_bedrollclosed01x`,
  `p_bedrollclosed03x`,
  `p_bedrollclosed_sml01x`,
  `p_bedrollclosed_sml02x`,
  `p_bedrollopen01x`,
  `p_bedrollopen03x`,
  `p_bedindian02x`,
  `p_bedindian04x`,
  `p_indianbedrollclosed01x`,
  `p_medbed01x`,
  `p_tablebedside01x`,
  `p_tablebedside02x`,
  `s_bedarthur01x`,
  `s_bedrollfurlined01x`,
  `s_bedrollopen01x`,
  `s_craftedbed01x`,
  `p_cs_ann_wrkr_bed01x`,
  `p_cs_bed20madex`,
  `p_cs_bedrollclsd01x`,
  `p_cs_bedsleptinbed08x`,
  `p_cs_pro_bed_unmade`,
  `p_cs_roc_hse_bed`,
  `s_bed17x`,
  `s_bed17x_blanket`,
  `p_re_bedrollopen01x`,
  `s_lootablebedchest`,
  `s_lootablebedchest_a`,
  `s_lootablebedchest_b`,
  `s_lootablebedchest_c`,
  `s_lootablebedchest_d`,
  `s_pro_bunkbeds01x`,
  `p_bedundone_trelawny01x`,
  `collision_bedroll`,
  `cs_obediahhinton`,
  `p_gen_bedrollopen01x`,
  `p_gen_bedrollopen02x`,
  `p_gen_bedsleptin02x`,
  `p_gen_bedsleptin01x_tc01`,
  `p_opensleeper_bed01x`,
  `p_opensleeper_tre2_bed01`,
  `des_utp2_rvrbed`,
  `des_utp2_rvrbed_01`,
  `des_utp2_rvrbed_02`,
  `mp007_p_bed_nat01x`,
  `proc_algae_lakebed_01`,
  `proc_algae_lakebed_02`,
  `proc_algae_lakebed_03`,
  `proc_algae_lakebed_04`,
  `proc_algae_lakebed_05`,
  `proc_bedrollclosed01x`,
  `proc_bedrollopen01x`,
  `proc_rock_lakebed_01`,
  `proc_rock_lakebed_02`,
  `proc_rock_lakebed_03`,
  `proc_trolley_lakebed`,
  `proc_tyre_lakebed`,
  `reg_bgv_rvrbed_end`,
  `reg_bgv_rvrbed_start`,
  `p_mattress03x`,
  `p_mattress04x`,
  `p_mattress07x`,
  `p_mattress08x`,
  `p_amb_mattress04x`,
  `p_oldmattress01x`,
  `p_mattresscombined01x`,
  `p_cs_mattress01x`,
  `mp007_p_mp_oldmattress01x`,

}

AddEventHandler('mouse-selection:CanInteract', function(entity, callback)
  bedTarget = 0
  local _model = GetEntityModel(entity)
  for cat,validModel in pairs (bedModels) do
    if _model == validModel then
      bedTarget = entity
      callback(true)
      return
    end
  end
end)

AddEventHandler("mouse-selection:ClickEntity", function()
  if (bedTarget == 0) then return end
  
  CMenu.AddItem({
    title=Lang['sleep'],
    id="slep",
    callback="mouse-selection:Sleep"
  })
end)

AddEventHandler('mouse-selection:Sleep', function()
  if (bedTarget == 0) then return end

  local player = PlayerPedId()
  local chairpos = GetOffsetFromEntityInWorldCoords(bedTarget,0.0,0.0,0.5)
  local chairheading = GetEntityHeading(bedTarget)
  TaskStartScenarioAtPosition(player, GetHashKey(Animations[1]), chairpos.x, chairpos.y, chairpos.z, chairheading+180.0, 0, true, false)
  while not IsPedUsingAnyScenario(player) do
    Wait(1000)
  end
  Citizen.CreateThread(function()
    while IsPedUsingAnyScenario(player) do
      Wait(2)
      DisplayPrompt('sleep_prompt')
      if IsPromptCompleted('sleep_prompt','INPUT_FRONTEND_CANCEL') then
        ClearPedTasks(player)
        return
      end
    end
  end)
end)
Citizen.CreateThread(function()
  CreatePromptButton('sleep_prompt',Lang['leave'], 'INPUT_FRONTEND_CANCEL', 1000)
end)
```
:::