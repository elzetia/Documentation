import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

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
                items: [
                  { text: 'Callback',
                    collapsed: true,
                    base: '/jo_libs/modules/callback',
                    items: [
                      { text: 'Client', link: '/client' },
                      { text: 'Server', link: '/server' },
                    ]
                  }
                ]
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
