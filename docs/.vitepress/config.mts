import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
        }
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  base: "/",
  title: "KadDarem Docs",
  description: "KadDarem Documentation",
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store', link: 'https://store.kaddarem.com',target: '_target',rel: 'external' }
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
          { text: "⛓️ Tow Truck with WINCH", link:'/FiveM/tow-truck-with-winch'},
          { text: "🪝 Vehicle WINCH", link:'/FiveM/vehicle-winch'},
          { text: "🚙 Wheel lock", link:'/FiveM/wheel-lock'},
        ]
      },
      {
        text: 'RedM',
        collapsed: true,
        items: [
          { text: "⛺ Camp builder", link:'/RedM/camp-builder'},
          { text: "💰 Cash register Robbery", link:'/RedM/cash-register-robbery'},
          { text: "🎩 Clothes Wheel", link:'/RedM/clothes-wheel'},
          { text: "👔 Clothing Store", link:'/RedM/clothing-store'},
          { text: "⚔️ Duel Gun", link:'/RedM/duel-gun'},
          { text: "✂️ Hairdresser", link:'/RedM/hairdresser'},
          { text: "🐎 Horse and Wagon sharing", link:'/RedM/horse-and-wagon-sharing'},
          { text: "🦌 Hunting wagon Storage", link:'/RedM/hunting-wagon-storage'},
          { text: "🔪 Knife game", link:'/RedM/knife-game'},
          { text: "🖱️ Mouse selection", link:'/RedM/mouse-selection'},
          { text: "🐴 Stable", link:'/RedM/stable', items: [
            { text: 'Main script', link: '/RedM/stable'},
            { text: 'Horse Aging', link: '/RedM/stable-horseaging'}
          ]},
        ]
      },
      {
        text: 'Developer Resources',
        collapsed: true,
        items: [
          { text: 'Hooks',
            link: '/DeveloperResources/hooks',
            items: [
              { text: 'Actions', link: '/DeveloperResources/actions' },
              { text: 'Filters', link: '/DeveloperResources/filters' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaddarem-tebex' },
      { icon: 'discord', link: 'https://discord.com/invite/8rqVHnSb2K' },
    ],
    footer : {
      copyright: 'Copyright © 2023 Kad Darem'
    },
    docFooter: {
      prev: false,
      next: false
    }
  }
})
