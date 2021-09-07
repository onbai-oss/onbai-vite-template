<template>
  <div class="text-center">
    <p class="mt-8">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div>
      <button class="m-3 text-sm btn" @click="go">
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()

const go = () => {
  router.push('/about')
}
</script>

<route lang="yaml">
meta:
  layout: home
</route>
