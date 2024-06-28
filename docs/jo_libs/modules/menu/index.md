# Menu

A client side library to use the JO Menu in your scripts.  
JO Menu is a NUI menu fully optimized and mouse and keyboard ready.

**Introducing The Jump On Menu: Revolutionizing Menu Creation for Your RedM Script!**

The Jump On Menu offers a new way to build menus for your RedM script, seamlessly blending with the authentic design of Red Dead Redemption II. This new menu system is significantly more flexible and user-friendly compared to the MenuAPI in your current framework. Actions are now directly linked to individual buttons instead of the global menu, simplifying both setup and usage.  
  
Your players will love the innovative features, including the grid layout, color picker, and smooth menu animations. Enhance their gaming experience and rediscover the joy of development with The Jump On Menu.  

# Previews
<br>
<img src="/images/previews/menu/menu_preview_1.jpg" class="data-zoomable preview" data-zoomable/>
<br>
<img src="/images/previews/menu/menu_preview_2.jpg" class="data-zoomable preview" data-zoomable/>

## Include Menu in your script

1. To use the Menu library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@jo_libs/init.lua'
}
```
2. Add the Menu module inside the `fxmanifest.lua` (in lowercase)
```lua
jo_libs {
  'menu',
}
```
You can now use the library inside of your resource with the `jo.menu` global variable.

## Functions

Documentation for the [Client](./client.md) side.  