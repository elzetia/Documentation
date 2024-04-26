import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './custom.scss'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import MyLayout from './MyLayout.vue'

  // import Breadcrumb from 'primevue/breadcrumb';

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  async enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    // if (!import.meta.env.SSR) {
    //   const Breadcrumb = await import('primevue/breadcrumb')
    //   app.component('Breadcrumb',Breadcrumb.default)
    // }
  }
}