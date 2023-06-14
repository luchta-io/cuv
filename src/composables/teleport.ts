import { computed } from "vue"

export const teleportTarget = computed(() => {
    if (typeof window === 'undefined') return undefined
    const targetElement = document.body
    const container = document.createElement('div')
    container.className = 'c-overlay-container'
    targetElement.appendChild(container)
    return container
})