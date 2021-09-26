<template>
  <div class="text-center">
    <p class="mt-8">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<route lang="yaml">
meta:
  layout: default
</route>
