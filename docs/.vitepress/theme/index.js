import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './custom.scss'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import Breadcrumb from 'primevue/breadcrumb';
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('Stepper',Stepper)
    app.component('StepperPanel',StepperPanel)
    app.component('Breadcrumb',Breadcrumb)
  }
}