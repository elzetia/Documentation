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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store', link: 'https://store.jumpon-studios.com',target: '_target',rel: 'external' }
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
          { text: "<img src='/images/gunrack-16.webp'/> Gun rack", link:'/FiveM/gunrack'},
          { text: "⛏️ Mining job", link:'/FiveM/mining-job'},
          { text: "📦 Movable chest", link:'/FiveM/movable-chest'},
          { text: "<img src='/images/towtruck.webp'/> Tow Truck with WINCH", link:'/FiveM/tow-truck-with-winch'},
          { text: "<img src='/images/winch.webp'/> Vehicle WINCH", link:'/FiveM/vehicle-winch'},
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
      copyright: 'Copyright © 2024 Jump On'
    },
    docFooter: {
      prev: false,
      next: false
    }
  }
})
