# :pick: Mining job
Documentation relating to the kd_realistic_mining.

:::tabs
== BUY
[Buy the script](https://shop.jumpon-studios.com/fivem/mining-job)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/1Tfnyto1sdQ?si=fIWIkDhi_nfuF8sr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation

kd_realistic_mining is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).

- Drag and drop the 4 resources in your resources folder
  - kd_realistic_mining
  - kd_custom-native (for optimization)
  - kd_hud-event (for display information)
  - InteractSound (for the sound of hit)
- Add this 4 ensures in your server.cfg
  - `ensure kd_realistic_mining`
  - `ensure kd_custom-native`
  - `ensure kd_hud-event`
  - `ensure InteractSound`
- Congratulation, the Mining script is ready to be use !

## 2. Usage
Start the job with the client event
```lua
TriggerEvent('StartMiningFarm')
```
Stop the job with the client event
```lua
TriggerEvent('StopMiningFarm')
```

## 3. Config.lua
```lua
FarmCoords = {
  -- DropZone location for rocks
  depot = vector3(2945.007,2773.99,38.244),
  -- Rocks spawn random locations
  RochePos = {
      vector4(2923.944,2799.029,40.261,97.85),
      vector4(2924.639,2809.91,42.497,3.247),
      vector4(2939.157,2816.008,42.329,98.808),
      vector4(2946.439,2817.478,41.534,292.448),
      vector4(2954.591,2818.096,41.412,262.348),
      vector4(2974.129,2794.987,39.879,228.509),
      vector4(2970.261,2777.113,37.421,154.085),
      vector4(2961.687,2775.053,38.745,105.347),
  }
}

----------------------------
-- Hash for the notification picture
----------------------------
ChefPictname = "CHAR_JIMMY_BOSTON"

----------------------------
-- Price earn by Rock
----------------------------
PrixCaillou = 50
----------------------------

----------------------------
-- Number Hit to break rocks
----------------------------
MinHit = 2
MaxHit = 10
----------------------------

-- Function when farm is completed
function FarmCompleted(price)
  --Give money to player here
end

RegisterNetEvent("StartMiningFarm")
AddEventHandler("StartMiningFarm", function()
    FarmInProgress = true
    FarmMineur()
end)    

RegisterNetEvent("StopMiningFarm")
AddEventHandler("StopMiningFarm", function()
    FarmInProgress = false
end)
```