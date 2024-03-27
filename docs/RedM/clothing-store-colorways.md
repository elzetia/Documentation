# :necktie: Colorways
Documentation relating to the **kd_clothingstore_colorways** add-on for [Clothing store script](clothing-store).

:::tabs
== BUY
[Buy the add-on](https://shop.jumpon-studios.com/redm/clothes-colorways)
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/GR9xSUI8GC4?si=Lrqr9_NxGr0R86RB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## 1. Installation
::: warning
[Clothing store script](clothing-store) is required to use this add-on
:::

To install kd_clothingstore_colorways:
- Drag and drop the resource into your resources folder
  - kd_clothingstore_colorways 
- Add this ensure in your server.cfg after `ensure kd_clothingstore`
  - `ensure kd_clothingstore_colorways`

Congratulation, the **Colorways** add-on is ready to be used!

## 2. Usage

Go in clothing stores to customize the colorways of clothes.

## 3. Config.lua file
```lua
Config = {}

Config.keys = {
  colorways = 'INPUT_CREATOR_RS'
}

Config.palettes = {
	tint_generic_clean = true,
	tint_hair = true,
	tint_horse = true,
	tint_horse_leather = true,
	tint_leather = true,
	tint_makeup = true
}
```

### Filters

#### <Badge type="client" text="Client" /> canOpenColorPalette
Manage who can open the custom color menu
```lua
-- @param canAccess - boolean
exports.kd_clothingstore_colorways:RegisterFilter('canOpenColorPalette', function(canAccess)
  --return false to disable the access of the menu
	return canAccess
end)
```