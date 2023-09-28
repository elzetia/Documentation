# :package: Movable chest
Documentation relating to the kd_coffre-deplacable.

:::tabs
== BUY
[Buy the script](https://store.kaddarem.com/package/5203729)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/lblCfryVnno?si=sN-2T2f452qRpMd1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation

kd_coffre-deplacable is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).

- Drag and drop the resource in your resources folder
  - kd_coffre-deplacable
- Add this 4 ensures in your server.cfg
  - `ensure kd_coffre-deplacable`
- Run this SQL command on your database
```sql
CREATE TABLE IF NOT EXISTS `coffre_deplacable` (
  `autoinc_coffre` int NOT NULL AUTO_INCREMENT,
  `coords` text NOT NULL,
  `code` int NOT NULL,
  PRIMARY KEY (`autoinc_coffre`),
  KEY `autoinc_coffre` (`autoinc_coffre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
```
- Congratulation, the Movable chest script is ready to be use !

## 2. Usage
Put the chest on the ground with the client event
```lua
TriggerEvent('AddChest')
```
Use the decoder device with the client event
```lua
TriggerEvent('DecodeChest')
```

## 3. Config.lua
```lua
------------ Command to test the script
------------ Remove for production

RegisterCommand('DecodeChest', function()
  TriggerEvent("Digicode:AffDecoder")
end)

RegisterCommand('AddChest', function()
  TriggerEvent("CoffreMove:Poser")
end)

---------------------------------

-----------------------------
-- PARAMETERS
-----------------------------

--Model of the box
ModelCaisse = GetHashKey('prop_box_wood05a')

--Size of zone to detect the chest
ZoneDetection = 0.2
--Distance to spawn the chest
distanceSpawn = 50

-- Function when the chest is closed
function CloseChest(ChestId)
  print('Chest closed')
end

-- Function when the chest is open
function OpenChest(ChestId)
  print('Chest opened '..ChestId)
end

-- Function when decoder is dead
function DeadDecoder()
  --Remove the current decoder Item
  --Five the dead decoder Item
end

-- Function when chest is placed. Remove the chest item from the player inventory
function LooseChest()
end
```