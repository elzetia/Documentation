import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import fs from 'node:fs/promises';

function isFile(filename) {
  return filename.split('.').length > 1;
}

function buildFileTree(paths) {
  const fileTree = { files: [], children: {} };

  paths.forEach(path => {
    const parts = path.split('\\'); // Utilisation de split('\\') pour les chemins Windows
    let currentLevel = fileTree;

    parts.forEach(part => {
      if (part !== '' && !isFile(part)) { // Ignorer la partie vide (pour les chemins commençant par '\\')
        if (!currentLevel.children[part]) {
          currentLevel.children[part] = { files: [], children: {} };
        }
        currentLevel = currentLevel.children[part];
      }
    });

    // Dernière partie de chaque chemin est le nom du fichier
    const fileName = parts[parts.length - 1];
    if (fileName !== '') { // Ignorer les noms de fichier vides
      // Vérifier si le fichier se termine par l'extension ".md"
      if (isFile(fileName)) {
        currentLevel.files.push(fileName.replace('.md',''));
      }
    }
  });
  return fileTree;
}

const libModulesFiles = await fs.readdir('docs/jo_libs/Modules',{ recursive: true })
let libModules = buildFileTree(libModulesFiles)

function firtToUpperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function GenerateMenu(fileTree,key,parent) {
  key = (key || '')
  parent = (parent || '') + "/"
  const menu = {
    text: firtToUpperCase(key),
    collapsed: true,
    base: ('/jo_libs/modules'+parent+key).replace('//','/'),
    link: undefined,
    items: []
  }

  if (fileTree.files && fileTree.files.length > 0) {
    for (let index = 0; index < fileTree.files.length; index++) {
      const file = fileTree.files[index];
      if (file.endsWith('.label'))
        menu.text = file.replace('.label','')
      else if (file == "index")
        menu.link = "/"
      else
        menu.items.push({text: firtToUpperCase(file), link: '/'+file})
    }
  }
  if (fileTree.children) {
    for (const child in fileTree.children) {
      menu.items.push(GenerateMenu(fileTree.children[child],child,parent+key))
    }
  }
  return menu
}

let sideBarModules = GenerateMenu(libModules)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  resolve: {
    alias: {
      '@vitepress': 'vitepress',
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocOutlineItem\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPDocOutlineItem.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/outline$/,
          replacement: fileURLToPath(
            new URL('./composables/outline.ts', import.meta.url)
          )
        },
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  base: "/",
  title: "Jump On Docs",
  description: "Documentation's Jump On scripts",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", href: "https://raw.githubusercontent.com/kaddarem-tebex/Documentation/main/docs/public/logo.png" },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: 'deep',
      label: 'On this page',
    },
    outlineBadges: true,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search in the documentation...'
          }
        }
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store', link: 'https://shop.jumpon-studios.com',target: '_target',rel: 'external' }
    ],
    sidebar: [
      {
        text: 'FiveM',
        collapsed: true,
        items: [
          { text: "🔫 Airsoft", link:'/FiveM/airsoft'},
          { text: "🚗 Car door Icon", link:'/FiveM/car-door-icon'},
          { text: "🚚 Car shop delivery", link:'/FiveM/car-shop-delivery'},
          { text: "🎣 Fishing", link:'/FiveM/fishing'},
          { text: "⛏️ Mining job", link:'/FiveM/mining-job'},
          { text: "📦 Movable chest", link:'/FiveM/movable-chest'},
          { text: "<img src='/images/towtruck.webp'/> Tow Truck with WINCH", link:'/FiveM/tow-truck-with-winch'},
          { text: "<img src='/images/winch.webp'/> Vehicle WINCH", link:'/FiveM/vehicle-winch'},
          { text: "<img src='/images/gunrack-16.webp'/> Weapon storage", link:'/FiveM/weapon-storage'},
          { text: "<img src='/images/wheelclamp.webp'/> Wheel lock", link:'/FiveM/wheel-lock'},
        ]
      },
      {
        text: 'RedM',
        collapsed: true,
        items: [
          { text: "⛺ Camp builder", link:'/RedM/camp-builder'},
          { text: "<img src='/images/cashregister.webp' /> Cash register Robbery", link:'/RedM/cash-register-robbery'},
          { text: "🎩 Clothes Wheel", link:'/RedM/clothes-wheel'},
          { text: "👔 Clothing Store", link:'/RedM/clothing-store', items: [
            { text: 'Main script', link:'/RedM/clothing-store'},
            { text: 'Colorways', link:'/RedM/clothing-store-colorways'},
          ]},
          { text: "<img src='/images/gunduel.webp' /> Duel Gun", link:'/RedM/duel-gun'},
          { text: "✂️ Hairdresser", link:'/RedM/hairdresser', items: [
            { text: 'Main script', link:'/RedM/hairdresser'},
            { text: 'Coloring', link:'/RedM/hairdresser-coloring'},
          ]},
          { text: "🐎 Horse and Wagon sharing", link:'/RedM/horse-and-wagon-sharing'},
          { text: "🦌 Hunting wagon Storage", link:'/RedM/hunting-wagon-storage'},
          { text: "🔪 Knife game", link:'/RedM/knife-game'},
          { text: "🗒 MDT", link:'/RedM/mdt'},
          { text: "🖱️ Mouse selection", link:'/RedM/mouse-selection'},
          { text: "🐴 Stable", link:'/RedM/stable', items: [
            { text: 'Main script', link: '/RedM/stable'},
            { text: 'Horse Aging', link: '/RedM/stable-horseaging'},
            { text: 'Horse Taming', link: '/RedM/stable-horsetaming'}
          ]},
        ]
      },
      {
        text: 'Developer Resources',
        collapsed: true,
        items: [
          { text: 'Jo Libs',
            link: '/',
            base: '/jo_libs',
            collapsed: true,
            items: [
              { text: 'Modules',
                base: '/jo_libs/modules',
                collapsed: true,
                items: sideBarModules.items
              }
            ]
          },
          { text: 'Hooks',
            link: '/DeveloperResources/hooks',
            items: [
              { text: 'Actions', link: '/DeveloperResources/actions' },
              { text: 'Filters', link: '/DeveloperResources/filters' },
            ]
          }
        ]
      },
      {
        text: 'Get unencrypted updates',
        link: 'https://dashboard.jumpon-studios.com/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaddarem-tebex' },
      { icon: 'discord', link: 'https://discord.com/invite/8rqVHnSb2K' },
    ],
    footer : {
      copyright: 'Copyright © 2024 Jump On'
    },
    docFooter: {
      prev: false,
      next: false
    }
  }
})
