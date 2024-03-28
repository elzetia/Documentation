<style>
  
</style>
# :horse: Horse taming
Documentation relating to the **kd_stable_taming** add-on for [Stable script](stable).

:::tabs
== BUY
[Buy the add-on](https://shop.jumpon-studios.com/redm/horse-taming)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/QthVc5bYAhg?si=i6YuwlZLQy8m0oqe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
::: warning
[Stable script](stable) is required to use this add-on
:::

To install kd_stable_taming:
- Drag and drop the resource into your resources folder
  - kd_stable_taming 
- Add this ensure in your server.cfg after `ensure kd_stable`
  - `ensure kd_stable_taming`

Congratulation, the **Horse taming** add-on is ready to be used!

## 2. Usage

Find a wild horse, calm it and go on stable to tame/sell it.

## 3. Config.lua file
:::details Config.lua
```lua
Config.keys.taming = "INPUT_FRONTEND_ACCEPT"
Config.keys.sellWildHorse = "INPUT_FRONTEND_RS"

Config.tamingHorses = {
  [`A_C_Horse_AmericanPaint_Greyovero`] = {money = 5, gold = 1},
  [`A_C_Horse_AmericanPaint_Overo`] = {money = 5, gold = 1},
  [`A_C_Horse_AmericanPaint_SplashedWhite`] = {money = 5, gold = 1},
  [`a_c_horse_eagleflies`] = {money = 5, gold = 1},
  [`A_C_Horse_AmericanPaint_Tobiano`] = {money = 5, gold = 1},
  [`A_C_Horse_AmericanStandardbred_Black`] = {money = 5, gold = 1},
  [`A_C_Horse_AmericanStandardbred_Buckskin`] = {money = 5, gold = 1},
  [`A_C_Horse_AmericanStandardbred_PalominoDapple`] = {money = 5, gold = 1},
  [`A_C_Horse_Andalusian_DarkBay`] = {money = 5, gold = 1},
  [`A_C_Horse_Andalusian_Perlino`] = {money = 5, gold = 1},
  [`A_C_Horse_Andalusian_RoseGray`] = {money = 5, gold = 1},
  [`A_C_Horse_Appaloosa_BlackSnowflake`] = {money = 5, gold = 1},
  [`A_C_Horse_Appaloosa_Blanket`] = {money = 5, gold = 1},
  [`A_C_Horse_Appaloosa_BrownLeopard`] = {money = 5, gold = 1},
  [`A_C_Horse_Appaloosa_FewSpotted_PC`] = {money = 5, gold = 1},
  [`A_C_Horse_Appaloosa_Leopard`] = {money = 5, gold = 1},
  [`A_C_Horse_Appaloosa_LeopardBlanket`] = {money = 5, gold = 1},
  [`a_c_horse_gang_charles`] = {money = 5, gold = 1},
  [`a_c_horse_gang_uncle_endlesssummer`] = {money = 5, gold = 1},
  [`A_C_Horse_Arabian_Black`] = {money = 5, gold = 1},
  [`A_C_Horse_Arabian_Grey`] = {money = 5, gold = 1},
  [`A_C_Horse_Arabian_RedChestnut`] = {money = 5, gold = 1},
  [`a_c_horse_arabian_redchestnut_pc`] = {money = 5, gold = 1},
  [`A_C_Horse_Arabian_RoseGreyBay`] = {money = 5, gold = 1},
  [`A_C_Horse_Arabian_WarpedBrindle_PC`] = {money = 5, gold = 1},
  [`A_C_Horse_Arabian_White`] = {money = 5, gold = 1},
  [`a_c_horse_gang_dutch`] = {money = 5, gold = 1},
  [`A_C_Horse_Ardennes_BayRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_Ardennes_IronGreyRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_Ardennes_StrawberryRoan`] = {money = 5, gold = 1},
  [`a_c_horse_gang_bill`] = {money = 5, gold = 1},
  [`A_C_Horse_Belgian_BlondChestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_Belgian_MealyChestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_DutchWarmblood_ChocolateRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_DutchWarmblood_SealBrown`] = {money = 5, gold = 1},
  [`A_C_Horse_DutchWarmblood_SootyBuckskin`] = {money = 5, gold = 1},
  [`A_C_Horse_HungarianHalfbred_DarkDappleGrey`] = {money = 5, gold = 1},
  [`A_C_Horse_HungarianHalfbred_FlaxenChestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_HungarianHalfbred_LiverChestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_HungarianHalfbred_PiebaldTobiano`] = {money = 5, gold = 1},
  [`a_c_horse_gang_john`] = {money = 5, gold = 1},
  [`A_C_Horse_KentuckySaddle_Black`] = {money = 5, gold = 1},
  [`A_C_Horse_KentuckySaddle_ButterMilkBuckskin_PC`] = {money = 5, gold = 1},
  [`A_C_Horse_KentuckySaddle_ChestnutPinto`] = {money = 5, gold = 1},
  [`A_C_Horse_KentuckySaddle_Grey`] = {money = 5, gold = 1},
  [`A_C_Horse_KentuckySaddle_SilverBay`] = {money = 5, gold = 1},
  [`a_c_horse_gang_uncle`] = {money = 5, gold = 1},
  [`A_C_Horse_Kladruber_Black`] = {money = 5, gold = 1},
  [`A_C_Horse_Kladruber_Silver`] = {money = 5, gold = 1},
  [`A_C_Horse_Kladruber_Cremello`] = {money = 5, gold = 1},
  [`A_C_Horse_Kladruber_Grey`] = {money = 5, gold = 1},
  [`A_C_Horse_Kladruber_DappleRoseGrey`] = {money = 5, gold = 1},
  [`A_C_Horse_Kladruber_White`] = {money = 5, gold = 1},
  [`A_C_Horse_MissouriFoxTrotter_AmberChampagne`] = {money = 5, gold = 1},
  [`A_C_Horse_MissouriFoxTrotter_SableChampagne`] = {money = 5, gold = 1},
  [`A_C_Horse_MissouriFoxTrotter_SilverDapplePinto`] = {money = 5, gold = 1},
  [`a_c_horse_missourifoxtrotter_blueroan`] = {money = 5, gold = 1},
  [`a_c_horse_missourifoxtrotter_buckskinbrindle`] = {money = 5, gold = 1},
  [`a_c_horse_missourifoxtrotter_dapplegrey`] = {money = 5, gold = 1},
  [`a_c_horse_gang_micah`] = {money = 5, gold = 1},
  [`A_C_Horse_Morgan_Bay`] = {money = 5, gold = 1},
  [`A_C_Horse_Morgan_BayRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_Morgan_FlaxenChestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_Morgan_LiverChestnut_PC`] = {money = 5, gold = 1},
  [`A_C_Horse_Morgan_Palomino`] = {money = 5, gold = 1},
  [`A_C_Horse_MP_Mangy_Backup`] = {money = 5, gold = 1},
  [`A_C_Horse_Mustang_GoldenDun`] = {money = 5, gold = 1},
  [`A_C_Horse_Mustang_GrulloDun`] = {money = 5, gold = 1},
  [`A_C_Horse_Mustang_TigerStripedBay`] = {money = 5, gold = 1},
  [`A_C_Horse_Mustang_WildBay`] = {money = 5, gold = 1},
  [`a_c_horse_mustang_buckskin`] = {money = 5, gold = 1},
  [`a_c_horse_mustang_chestnuttovero`] = {money = 5, gold = 1},
  [`a_c_horse_mustang_reddunovero`] = {money = 5, gold = 1},
  [`a_c_horse_gang_lenny`] = {money = 5, gold = 1},
  [`a_c_horse_gang_sadie_endlesssummer`] = {money = 5, gold = 1},
  [`A_C_Horse_Nokota_BlueRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_Nokota_ReverseDappleRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_Nokota_WhiteRoan`] = {money = 5, gold = 1},
  [`a_c_horse_gang_charles_endlesssummer`] = {money = 5, gold = 1},
  [`a_c_horse_gang_karen`] = {money = 5, gold = 1},
  [`A_C_Horse_Shire_DarkBay`] = {money = 5, gold = 1},
  [`A_C_Horse_Shire_LightGrey`] = {money = 5, gold = 1},
  [`A_C_Horse_Shire_RavenBlack`] = {money = 5, gold = 1},
  [`A_C_Horse_SuffolkPunch_RedChestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_SuffolkPunch_Sorrel`] = {money = 5, gold = 1},
  [`A_C_Horse_TennesseeWalker_BlackRabicano`] = {money = 5, gold = 1},
  [`A_C_Horse_TennesseeWalker_Chestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_TennesseeWalker_DappleBay`] = {money = 5, gold = 1},
  [`A_C_Horse_TennesseeWalker_FlaxenRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_TennesseeWalker_MahoganyBay`] = {money = 5, gold = 1},
  [`A_C_Horse_TennesseeWalker_RedRoan`] = {money = 5, gold = 1},
  [`A_C_Horse_TennesseeWalker_GoldPalomino_PC`] = {money = 5, gold = 1},
  [`A_C_Horse_Thoroughbred_BlackChestnut`] = {money = 5, gold = 1},
  [`A_C_Horse_Thoroughbred_BloodBay`] = {money = 5, gold = 1},
  [`A_C_Horse_Thoroughbred_Brindle`] = {money = 5, gold = 1},
  [`A_C_Horse_Thoroughbred_DappleGrey`] = {money = 5, gold = 1},
  [`A_C_Horse_Thoroughbred_ReverseDappleBlack`] = {money = 5, gold = 1},
  [`A_C_Horse_Turkoman_DarkBay`] = {money = 5, gold = 1},
  [`A_C_Horse_Turkoman_Gold`] = {money = 5, gold = 1},
  [`A_C_Horse_Turkoman_Silver`] = {money = 5, gold = 1},
  [`a_c_horse_turkoman_chestnut`] = {money = 5, gold = 1},
  [`a_c_horse_turkoman_grey`] = {money = 5, gold = 1},
  [`a_c_horse_turkoman_perlino`] = {money = 5, gold = 1},
  [`a_c_horse_gang_sadie`] = {money = 5, gold = 1},
  [`A_C_Horse_Criollo_Dun`] = {money = 5, gold = 1},
  [`A_C_Horse_Criollo_MarbleSabino`] = {money = 5, gold = 1},
  [`A_C_Horse_Criollo_BayFrameOvero`] = {money = 5, gold = 1},
  [`A_C_Horse_Criollo_BayBrindle`] = {money = 5, gold = 1},
  [`A_C_Horse_Criollo_SorrelOvero`] = {money = 5, gold = 1},
  [`A_C_Horse_Criollo_BlueRoanOvero`] = {money = 5, gold = 1},
  [`A_C_Horse_Breton_SteelGrey`] = {money = 5, gold = 1},
  [`A_C_Horse_Breton_MealyDappleBay`] = {money = 5, gold = 1},
  [`A_C_Horse_Breton_SealBrown`] = {money = 5, gold = 1},
  [`A_C_Horse_Breton_GrulloDun`] = {money = 5, gold = 1},
  [`A_C_Horse_Breton_Sorrel`] = {money = 5, gold = 1},
  [`A_C_Horse_Breton_RedRoan`] = {money = 5, gold = 1},
  [`A_C_HORSE_NORFOLKROADSTER_BLACK`] = {money = 5, gold = 1},
  [`A_C_HORSE_NORFOLKROADSTER_SPECKLEDGREY`] = {money = 5, gold = 1},
  [`A_C_HORSE_NORFOLKROADSTER_PIEBALDROAN`] = {money = 5, gold = 1},
  [`A_C_HORSE_NORFOLKROADSTER_ROSEGREY`] = {money = 5, gold = 1},
  [`A_C_HORSE_NORFOLKROADSTER_DAPPLEDBUCKSKIN`] = {money = 5, gold = 1},
  [`A_C_HORSE_NORFOLKROADSTER_SPOTTEDTRICOLOR`] = {money = 5, gold = 1},
  [`A_C_HorseMulePainted_01`] = {money = 5, gold = 1},
  [`A_C_HorseMule_01`] = {money = 5, gold = 1},
  [`A_C_Donkey_01`] = {money = 5, gold = 1},
  [`a_c_horse_gypsycob_piebald`] = {money = 5, gold = 1},
  [`a_c_horse_gypsycob_skewbald`] = {money = 5, gold = 1},
  [`a_c_horse_gypsycob_splashedbay`] = {money = 5, gold = 1},
  [`a_c_horse_gypsycob_splashedpiebald`] = {money = 5, gold = 1},
  [`a_c_horse_gypsycob_whiteblagdon`] = {money = 5, gold = 1},
  [`a_c_horse_buell_warvets`] = {money = 5, gold = 1},
}
```
:::

## 4. For developers

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

- Syntax: 
```lua
-- @param <actionName> - name of the action
-- @param <argumentList> - list of arguments which are passed
exports.kd_stable:RegisterFilter(<actionName>, function(variable)
  -- Add your new data here
	return variable -- Don't forget to return the value
end)
```
#### <Badge type="client" text="Client" /> Restrict the selling
Fires after completed the selling prompt
```lua
-- @param canSell - boolean
exports.kd_stable_taming:RegisterFilter('canSellWildHorse', function(canSell)
	return canSell
end)
```
#### <Badge type="client" text="Client" /> Restrict the taming
Fires after completed the taming prompt
```lua
-- @param canTame - boolean
exports.kd_stable_taming:RegisterFilter('canTameWildHorse', function(canTame)
	return canTame
end)
```