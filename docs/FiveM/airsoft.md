# :gun: Airsoft
Documentation relating to the kd_airsoft.

:::tabs
== BUY
[Buy the script](https://store.kaddarem.com/package/5205771)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/qNjlH7Z-9ek?si=dAgoUv36ZaZqiRts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation

AIRSOFT is a standalone script. So you don't need a specific framework to use it. It's also mean it works with all framework (Esx, QBCore, VRP, DRP, …).
- Drag and drop this 3 resources in your resources folder
  - kd_appmenu
  - kd_hud-event
  - kd_airsoft
- Add this 3 ensures in your server.cfg
  - `ensure kd_appmenu`
  - `ensure kd_hud-event`
  - `ensure kd_airsoft`
- Congratulation, the AIRSOFT script is ready to be use !

## 2. Usage

Airsoft script is very friendly. Just go in the maker visible on the map and create a new lobby to start game.

A few options are available to custom the lobby :
- Different maps
- Duration of the game in minute
- Number of player
- Number of life by player (team life = Number of player * Number of life/player)

When the lobby is created, other players can join it by finding it in the list of lobbies. Players can switch between teams A and B. If necessary, the lobby creator can change the game options after creating it.

The game will be over in once of this two conditions :
- One of team lost all those lives : Other team wins !
- The duration of the game is over : the team with the most of live wins !

## 3. Config.lua
```lua
-- Location of marker in the maps
Location = {
  Marker = vec3(452.675,-3072.087, 5.099)
}

-- Configuration of maps
Maps = {
  {   nom = "Hangar", -- Name of the map
      Sortie = vec3(452.675,-3072.087,5.099), -- Location where player will be teleported after the end of the game
      PlayZone = { -- Area of the map
        vec3(459.4, -3079.326, 6.070),
        vec3(459.620, -3066.508, 6.071),
        vec3(470.45, -3066.597, 6.070),
        vec3(470.631, -3116.16, 6.070),
        vec3(447.483, -3115.986, 6.070),
        vec3(446.931, -3078.583, 6.070),
      },
      -- Teams gear configurations
      EquipeA = {
          Casque = {id = 125,couleur = 6}, -- Helmet
          Gilet = {idH = 22,idF=20,couleur = 2}, -- Bulletproof
          Veste = {idH = 34,idF=3,couleurH = 0, couleurF = 1 }, -- Vest 
          Haut = {idH = 15,idF=4,couleurH = 0, couleurF = 0 }, -- Shirt
          Pantalon = {idH = 130,idF=30,couleurH = 1, couleurF = 0}, -- Pant
          Chaussure = {idH = 24,idF=25,couleurH = 0, couleurF = 0}, -- Shoes
          Main = {idH = 171,idF=212,couleurH = 0, couleurF = 0}, -- Gloves
          Marker = {r=100,g=100,b=255}, -- Marker color
          Spawn = {x = 464.645, y = -3069.921, z = 5.1,a= 208.241}, -- Spawn position
      },
      EquipeB = {
          Casque = {id = 125,couleur = 4}, -- Helmet
          Gilet = {idH = 22,idF=20,couleur = 0}, -- Bulletproof
          Veste = {idH = 34,idF=3,couleurH = 0, couleurF = 1 }, -- Vest 
          Haut = {idH = 15,idF=4,couleurH = 0, couleurF = 0 }, -- Shirt
          Pantalon = {idH = 130,idF=30,couleurH = 1, couleurF = 0}, -- Pant
          Chaussure = {idH = 24,idF=25,couleurH = 0, couleurF = 0}, -- Shoes
          Main = {idH = 171,idF=212,couleurH = 0, couleurF = 0}, -- Gloves
          Marker = {r=0,g=255,b=0}, -- Marker color
          Spawn = {x = 450.338, y = -3110.851, z = 5.1,a= 185.616}, -- Spawn position
      },
      WeaponChoisi = GetHashKey("WEAPON_ADVANCEDRIFLE") -- Weapon for the game
  },
  -- Same for other maps
  {
      nom = "Aircraft carrier",
      Sortie = vec3(452.675,-3072.087,5.099),
      PlayZone = {
        vec3(3039.842, -4487.968, 2.077),
        vec3(3142.873, -4812.613, 2.077),
        vec3(3058.991, -4849.718, 2.077),
        vec3(2959.916, -4514.913, 2.077)
      },
      EquipeA = {
          Casque = {id = 125,couleur = 6},
          Gilet = {idH = 22,idF=20,couleur = 2},
          Veste = {idH = 34,idF=3,couleurH = 0, couleurF = 1 }, 
          Haut = {idH = 15,idF=4,couleurH = 0, couleurF = 0 }, 
          Pantalon = {idH = 130,idF=30,couleurH = 1, couleurF = 0}, 
          Chaussure = {idH = 24,idF=25,couleurH = 0, couleurF = 0}, 
          Main = {idH = 171,idF=212,couleurH = 0, couleurF = 0},   
          Marker = {r=100,g=100,b=255},
          Spawn = { x = 3076.443, y = -4647.22, z = 5.076, a= 136.154},
      },
      EquipeB = {
          Casque = {id = 125,couleur = 4},
          Gilet = {idH = 22,idF=20,couleur = 0},
          Veste = {idH = 34,idF=3,couleurH = 0, couleurF = 1 }, 
          Haut = {idH = 15,idF=4,couleurH = 0, couleurF = 0 }, 
          Pantalon = {idH = 130,idF=30,couleurH = 1, couleurF = 0}, 
          Chaussure = {idH = 24,idF=25,couleurH = 0, couleurF = 0}, 
          Main = {idH = 171,idF=212,couleurH = 0, couleurF = 0},  
          Marker = {r=0,g=255,b=0},
          Spawn = {x = 3100.021, y = -4802.58, z = 1.036, a= 11.352},
      },
      WeaponChoisi = GetHashKey("WEAPON_ADVANCEDRIFLE")
  }
}
```
## 4. Add a new map
You can add as many maps as you want. Copy a default map and edit the configuration.
Example :
```lua
{
      nom = "Quarry",
      Sortie = vec3(1452.675,-122.087,15.099),
      PlayZone = {
          vec3(1240.,-1819.,30.),
          vec3(1240.,-4502.,50.),
          vec3(1911.,-4502.,30.),
          vec3(1911.,-1819.,30.)
      EquipeA = {
          Casque = {id = 125,couleur = 6},
          Gilet = {idH = 22,idF=20,couleur = 2},
          Veste = {idH = 34,idF=3,couleurH = 0, couleurF = 1 }, 
          Haut = {idH = 15,idF=4,couleurH = 0, couleurF = 0 }, 
          Pantalon = {idH = 130,idF=30,couleurH = 1, couleurF = 0}, 
          Chaussure = {idH = 24,idF=25,couleurH = 0, couleurF = 0}, 
          Main = {idH = 171,idF=212,couleurH = 0, couleurF = 0},   
          Marker = {r=100,g=100,b=255},
          Spawn = { x = 3076.443, y = -4647.22, z = 5.076, a= 136.154},
      },
      EquipeB = {
          Casque = {id = 125,couleur = 4},
          Gilet = {idH = 22,idF=20,couleur = 0},
          Veste = {idH = 34,idF=3,couleurH = 0, couleurF = 1 }, 
          Haut = {idH = 15,idF=4,couleurH = 0, couleurF = 0 }, 
          Pantalon = {idH = 130,idF=30,couleurH = 1, couleurF = 0}, 
          Chaussure = {idH = 24,idF=25,couleurH = 0, couleurF = 0}, 
          Main = {idH = 171,idF=212,couleurH = 0, couleurF = 0},  
          Marker = {r=0,g=255,b=0},
          Spawn = {x = 3100.021, y = -4802.58, z = 1.036, a= 11.352},
      },
      WeaponChoisi = GetHashKey("WEAPON_ADVANCEDRIFLE")
  }
```