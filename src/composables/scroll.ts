export const getScrollParent = (el?: HTMLElement) => {
    while (el) {
        if (hasScrollbar(el)) return el
        el = el.parentElement!
    }

    return document.scrollingElement as HTMLElement
}

const hasScrollbar = (el?: Element | null) => {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false

    const style = window.getComputedStyle(el)
    return style.overflowY === 'scroll' || (style.overflowY === 'auto' && el.scrollHeight > el.clientHeight)
}
