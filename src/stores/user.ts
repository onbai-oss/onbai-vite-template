import { acceptHMRUpdate, defineStore } from 'pinia'

// TODO: add example store
export const useUserStore = defineStore('user', () => {
  return {
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
