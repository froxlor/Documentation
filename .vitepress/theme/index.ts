// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import FRXFooter from "../../components/FRXFooter.vue";
import DeveloperNotice from '../../components/DeveloperNotice.vue';

// @ts-ignore
const modules = import.meta.glob('../../components/*.vue', { eager: true })
const components = []

for (const path in modules) {
    components.push(modules[path].default)
}

export default {
    ...DefaultTheme,
    Layout() {
        const layoutChildren = {
            'doc-after': () => h(FRXFooter)
        }
        if (import.meta.env.VITE_DEV) {
            layoutChildren['doc-before'] = () => h(DeveloperNotice)
        }
        return h(DefaultTheme.Layout, null, layoutChildren)
    },
    enhanceApp({app, router, siteData}) {
        // ...
        components.forEach(component => {
            app.component(component.name, component)
        })
    }
}
