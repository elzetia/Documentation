import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './custom.scss'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import MyLayout from './MyLayout.vue'

const modules = import.meta.glob('./components/**/*.vue',{eager:true})
const components = []

for (const path in modules) {
  const name = path.replace(/^\.\/components\/(.*)\.\w+$/, '$1');
  modules[path].default.name = name
  components.push(modules[path].default)
}


export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  async enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    if (!import.meta.env.SSR) {
      const Breadcrumb = await import('primevue/breadcrumb')
      app.component('Breadcrumb',Breadcrumb.default)
    }
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}