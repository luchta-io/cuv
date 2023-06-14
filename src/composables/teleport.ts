import { computed } from "vue"

export const teleportTarget = computed(() => {
    if (typeof window === 'undefined') return undefined
    const targetElement = document.body
    return targetElement
})