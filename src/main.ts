// register vue composition api globally
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
import { ViteSSG } from 'vite-ssg'
// @ts-ignore
import App from './App.vue'
// your custom styles here
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
