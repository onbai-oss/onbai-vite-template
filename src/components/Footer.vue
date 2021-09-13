<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="my-4 border-t-2 border-dashed border-gray-200"></div>
  <footer class="text-xl mt-6 text-center">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
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

    <router-link
      class="icon-btn mx-2"
      to="/ui"
      title="UI"
    >
      <carbon-color-palette />
    </router-link>
  </footer>
</template>
