export const useRipple = (target: HTMLElement) => {
    if ( !target ) return
    target.addEventListener('click', (e) => {
        let x = 0
        let y = 0
        if ( e.pageX==0 || e.pageY==0 ) {
            x = target.clientWidth / 2 - 8
            y = target.clientHeight / 2 - 10
        }
        else {
            const position = target.getBoundingClientRect()
            x = e.pageX - position.left
            y = e.pageY - position.top
        }
        const rippleSpan = document.createElement("span")
        rippleSpan.classList.add('c-ripple')
        rippleSpan.setAttribute("style","top:"+y+"px; left:"+x+"px; background-color:"+getRippleColor(window.getComputedStyle(target).backgroundColor))
        target.appendChild(rippleSpan)
        setTimeout(() => {
            rippleSpan.remove()
        }, 1200)
    })
}

export const getRippleColor = (color: any) => {
    const rgbValue = color.match(/\((.+)\)/)[1].split(',')
    const [red, green, blue] = rgbValue
    if ((red < 136 && green < 136) || (green < 136 && blue < 136) || (red < 136 && blue < 136)) return 'white' 
    return 'black'
}
