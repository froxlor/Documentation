// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import FRXFooter from "../../components/FRXFooter.vue";

// @ts-ignore
const modules = import.meta.glob('../../components/*.vue', { eager: true })
const components = []

for (const path in modules) {
    components.push(modules[path].default)
}

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-after': () => h(FRXFooter)
        })
    },
    enhanceApp({app, router, siteData}) {
        // ...
        components.forEach(component => {
            app.component(component.name, component)
        })
    }
}
