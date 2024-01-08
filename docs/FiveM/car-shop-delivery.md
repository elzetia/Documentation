# :truck: Car shop delivery
Documentation relating to the kd_carshop

:::tabs
== BUY
[Buy the script](https://store.jumpon-studios.com/package/5214712)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/s9H4rvXFCgI?si=-fbB2TWaTklhIugh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
kd_carshop is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).

- Drag and drop the resource in your resources folder
  - kd_carshop
- Add this ensure in your server.cfg
  - `ensure kd_carshop``
- Congratulation, the Car Shop Delivery script is ready to be use !
## 2. Usage
Start the job with the client event
```lua
TriggerEvent('StartFarmConcess')
```
You can also use the command. This command can be remove in the config.lua file.
```lua
/farm
```
## 3. Config.lua
```lua
-- Price for 1km
PrixKilometre = 90

-- Position of the hanger where car spawn
Base = {
    -- Location of car spawn
  VehSpawn = {
      vector4(144.262,-3108.514,4.896,90.0),
      vector4(132.541,-3102.325,4.896,93.338),
      vector4(133.361,-3108.286,4.896,94.641)
  },
  -- Location of the ped who give you mission and car keys
  PedSpawn = vector4(132.913,-3112.457,4.896,355.428),
  -- Model of the ped
  PedPortModel = `s_m_y_dwservice_02`,
  -- Model of available cars
  models = {'Brioso','Issi2','F620','Oracle2','Sentinel2','Zion2','Blade','Dominator','Hotknife','Faction2','SabreGT2','Picador','Tampa','Virgo2','Bifta','Mesa2','Baller','Cavalcade2','Gresley','Dubsta2','Rocoto','Serrano',
    'Asterope','Intruder','Emperor','Fugitive','Stratum','Washington','Banshee','Comet2','Coquette','Fusilade','Infernus2','Massacro','Khamelion','RapidGT2','Tropos',
    'Seven70','BType3','Coquette3','Stinger','Monroe','Stinger','Casco','Monroe','Surano','Lynx','Omnis','Alpha','Premier'
  },
  -- Model of available ped for the client ped
  pedmodels = {'a_f_m_ktown_01','a_f_o_ktown_01','a_f_y_bevhills_02','a_f_y_eastsa_03','a_f_y_hipster_01','a_f_y_vinewood_01','a_f_y_vinewood_03',
    'a_m_m_genfat_02','a_m_m_mexlabor_01','a_m_m_skidrow_01','a_m_m_stlat_02','a_m_y_bevhills_01','a_m_y_epsilon_01','a_m_y_genstreet_01','a_m_y_ktown_01','a_m_y_mexthug_01','a_m_y_polynesian_01',
    'a_m_y_stwhi_01','a_m_y_vinewood_02','a_m_y_vinewood_03','a_m_y_vinewood_04','a_m_y_yoga_01','cs_debra','cs_fabien','cs_patricia','cs_paper','cs_prolsec_02','cs_taocheng','csb_anita','csb_chin_goon','csb_dix','csb_fos_rep','csb_hao','csb_sol','csb_reporter','csb_tonya','csb_vagspeak','g_f_importexport_01','g_m_m_armlieut_01','g_m_m_mexboss_02','g_m_y_korlieut_01',
    'g_m_y_korean_01','g_m_y_salvagoon_02','mp_f_boatstaff_01','mp_g_m_pros_01','mp_m_execpa_01'
  },
  -- Location of delivery
  livraison = {
      {
          ped=vector4(-863.477,-1094.633,1.163,342.562), -- Location of the ped
          park=vector4(-864.455,-1090.372,1.162,297.686) -- Location of the parking
      },
      {park = vector4(-950.781,-899.574,1.163,298.061),ped = vector4(-949.808,-905.098,1.159,302.413)},
      {park = vector4(-921.903,-952.036,1.162,297.394),ped = vector4(-926.291,-948.876,1.242,297.55)},
      {park = vector4(-1081.52,-1046.714,1.149,299.316),ped = vector4(-1075.785,-1045.896,1.15,62.177)},
      {park = vector4(-1037.133,-1008.812,1.15,127.858),ped = vector4(-1043.463,-1010.013,1.15,223.298)},
      {park = vector4(-1027.796,-1513.596,4.594,210.641),ped = vector4(-1015.454,-1514.472,5.514,131.5)},
      {park = vector4(-1086.176,-1499.449,3.99,305.625),ped = vector4(-1086.975,-1502.207,3.978,36.145)},
      {park = vector4(-1273.04,-609.72,25.729,220.758),ped = vector4(-1278.755,-607.718,25.086,238.066)},
      {park = vector4(-1563.674,-295.564,47.275,234.328),ped = vector4(-1564.517,-300.301,47.232,312.273)},
      {park = vector4(-1937.821,362.048,92.68,155.237),ped = vector4(-1931.33,362.546,92.969,96.803)},
      {park = vector4(-1412.56,559.536,123.62,270.526),ped = vector4(-1404.506,561.498,124.406,128.756)},
      {park = vector4(-526.594,528.681,110.956,44.005),ped = vector4(-527.036,517.613,111.94,42.098)},
      {park = vector4(-575.197,496.67,105.555,8.231),ped = vector4(-580.537,492.853,107.831,13.342)},
      {park = vector4(76.677,-29.147,67.657,342.465),ped = vector4(72.031,-31.518,67.811,338.397)},
      {park = vector4(239.709,26.916,82.664,342.039),ped = vector4(246.572,29.289,83.127,70.309)},
      {park = vector4(858.071,-521.327,56.298,228.439),ped = vector4(853.767,-516.529,56.328,223.237)},
      {park = vector4(875.532,-596.282,57.133,312.454),ped = vector4(875.911,-601.98,57.442,43.442)},
      {park = vector4(1308.029,-534.656,70.312,160.364),ped = vector4(1303.256,-527.552,70.46,156.522)},
  },
  duree_chargement = 2000,
}

-- Give key to player if you have a key script
function GiveItem(plate)
    --Add your function to give the key item to player here
end

-- Lock the car if you have a key script
function LookCar(veh)
    -- Lock the car when it spawn
    -- SetVehicleDoorsLockedForAllPlayers(veh, true)
end

-- Remove the key from inventory if you have a key script
function RemoveItem(plate)
    --Add your function to remove the key item to player here
end

-- Check if user have key in his inventory
function CheckIfUserHaveKey(plate)
    local HaveKey = true
    --Add your function to check if user have the key here
    return HaveKey
end

-- Add event to give money to player at the end of the delivery
function GiveMoney(price, vehicle)
    --Add your function to give money to user here
end

-- Event to start the job
RegisterNetEvent("StartFarmConcess")
AddEventHandler("StartFarmConcess", function()
    StartFarmConcess()
end)

-- Command to start the job (can be remove)
RegisterCommand('farm', function()
    StartFarmConcess()
end)
```