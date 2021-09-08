# Onbai Vite Template
## Features

-   ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

-   🗂 [File based routing](./src/pages)

-   📦 [Components auto importing](./src/components)

-   🍍 [State Management via Pinia](https://pinia.esm.dev/)

-   📑 [Layout system](./src/layouts)

-   📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

-   🎨 [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework

-   😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

-   🌍 [I18n ready](./locales)

-   🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)

-   🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

-   📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

-   🖨 Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

-   🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

-   🦾 TypeScript, of course

-   ☁️ Deploy on Netlify, zero-config

<br>

## Pre-packed

### UI Frameworks

-   [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of additional features!
    -   [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)

### Icons

-   [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
-   [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

### Plugins

-   [Vue Router](https://github.com/vuejs/vue-router)
    -   [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
    -   [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
-   [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
-   [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
-   [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
-   [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
-   [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - Windi CSS Integration
-   [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
    -   [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) for syntax highlighting
    -   [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - customizable Prism.js theme using CSS variables
-   [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
    -   [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
-   [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
-   [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

-   Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
-   [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

-   [TypeScript](https://www.typescriptlang.org/)
-   [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
-   [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
    -   [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
-   [Netlify](https://www.netlify.com/) - zero-config deployment
-   [VS Code Extensions](./.vscode/extensions.json)
    -   [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
    -   [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
    -   [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
    -   [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
    -   [Windi CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - IDE support for Windi CSS
    -   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Checklist

When you use this template, try follow the checklist to update your info properly

-   [ ] Rename `name` field in `package.json`
-   [ ] Change the author name in `LICENSE`
-   [ ] Change the title in `App.vue`
-   [ ] Change the favicon in `public`
-   [ ] Remove the `.github` folder which contains the funding info
-   [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.