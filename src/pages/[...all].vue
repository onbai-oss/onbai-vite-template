<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <div class="mt-4">
      {{ t('not-found') }}
    </div>
    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.push('/')">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<style scoped>
.btn {
    @apply px-4 py-1 rounded inline-block
    bg-teal-500 text-white cursor-pointer
    hover:bg-teal-600
    disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50;
}

</style>

<route lang="yaml">
meta:
  layout: default
</route>
