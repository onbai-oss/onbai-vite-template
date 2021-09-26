<template>
  <nav class="shadow dark:shadow-light-200">
    <div class="flex justify-between items-center px-2 py-1.5 *wrapper">
      <router-link to="/" class="text-2xl font-semibold text-gray-600 dark:text-gray-200 hover:underline">
        Onbai <emojione:four-leaf-clover class="inline-block w-5" />
      </router-link>
      <div class="flex items-center">
        <router-link
          class="flex items-center"
          to="/ui"
          title="UI"
        >
          <carbon-color-palette />
        </router-link>
        <!-- <button class="flex items-center ml-2">
          <eva:menu-outline class="text-xl dark:text-gray-200" />
        </button> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
