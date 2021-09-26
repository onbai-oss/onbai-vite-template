<template>
  <footer class="text-xl bg-green-500 dark:bg-gray-800 text-white px-2 py-4 border-t-4 border-solid border-green-400 dark:border-gray-700 ">
    <div class="*wrapper">
      <div class="px-2 py-1 mb-2">
        <h1 class="text-xl">
          Free online education tools
        </h1>
      </div>

      <div>
        <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
          <carbon-home />
        </router-link>

        <button
          class="icon-btn mx-2 !outline-none"
          :title="t('button.toggle_dark')"
          @click="toggleDark()"
        >
          <carbon-moon v-if="isDark" />
          <carbon-sun v-else />
        </button>

        <a
          class="icon-btn mx-2"
          :title="t('button.toggle_langs')"
          @click="toggleLocales"
        >
          <carbon-language />
        </a>

        <router-link
          class="icon-btn mx-2"
          to="/about"
          :title="t('button.about')"
        >
          <carbon-dicom-overlay />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<style scoped>
.icon-btn {
    @apply inline-block cursor-pointer select-none
    opacity-75 transition duration-200 ease-in-out
    hover:opacity-100 hover:text-teal-600;
    font-size: 0.9em;
}
</style>
