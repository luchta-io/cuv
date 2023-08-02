import { computed } from "vue"

type VarianType = 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

export const useVariant = ({variant, color, hover, focus}:{variant:VarianType; color?:ColorType; hover?:boolean; focus?:boolean}) => {
    const base = []

    const backgroundColor = computed(() => {
        if ( color === 'white' ) return 'bg-[var(--cuv-white)]'
        if ( color === 'black' ) return 'bg-[var(--cuv-black)]'
        if ( color === 'light' ) return 'bg-[var(--cuv-light-background)]'
        if ( color === 'dark' )  return 'bg-[var(--cuv-dark-background)]'
        if ( color === 'primary' ) return 'bg-[var(--cuv-primary-background)]'
        if ( color === 'link' ) return 'bg-[var(--cuv-link-background)]'
        if ( color === 'success' ) return 'bg-[var(--cuv-success-background)]'
        if ( color === 'danger' ) return 'bg-[var(--cuv-danger-background)]'
        if ( color === 'warning' ) return 'bg-[var(--cuv-warning-background)] '
        if ( color === 'info' ) return 'bg-[var(--cuv-info-background)]'
        return 'bg-inherit'
    })
    
    const hoverBackgroundColor = computed(() => {
        if ( color === 'white' ) return 'hover:bg-[var(--cuv-grey-lighten-5)]'
        if ( color === 'black' ) return 'hover:bg-[var(--cuv-grey-darken-4)]'
        if ( color === 'light' ) return 'hover:bg-[var(--cuv-light-background-hover)]'
        if ( color === 'dark' )  return 'hover:bg-[var(--cuv-dark-background-hover)]'
        if ( color === 'primary' ) return 'hover:bg-[var(--cuv-primary-background-hover)]'
        if ( color === 'link' ) return 'hover:bg-[var(--cuv-link-background-hover)]'
        if ( color === 'success' ) return 'hover:bg-[var(--cuv-success-background-hover)]'
        if ( color === 'danger' ) return 'hover:bg-[var(--cuv-danger-background-hover)]'
        if ( color === 'warning' ) return 'hover:bg-[var(--cuv-warning-background-hover)] '
        if ( color === 'info' ) return 'hover:bg-[var(--cuv-info-background-hover)]'
        return 'hover:bg-inherit'
    })
    
    const focusBackgroundColor = computed(() => {
        if ( color === 'white' ) return 'focus:bg-[var(--cuv-grey-lighten-5)]'
        if ( color === 'black' ) return 'focus:bg-[var(--cuv-grey-darken-4)]'
        if ( color === 'light' ) return 'focus:bg-[var(--cuv-light-background-focus)]'
        if ( color === 'dark' )  return 'focus:bg-[var(--cuv-dark-background-focus)]'
        if ( color === 'primary' ) return 'focus:bg-[var(--cuv-primary-background-focus)]'
        if ( color === 'link' ) return 'focus:bg-[var(--cuv-link-background-focus)]'
        if ( color === 'success' ) return 'focus:bg-[var(--cuv-success-background-focus)]'
        if ( color === 'danger' ) return 'focus:bg-[var(--cuv-danger-background-focus)]'
        if ( color === 'warning' ) return 'focus:bg-[var(--cuv-warning-background-focus)] '
        if ( color === 'info' ) return 'focus:bg-[var(--cuv-info-background-focus)]'
        return 'focus:bg-inherit'
    })

    const backgroundLightColor = computed(() => {
        if ( color === 'white' ) return 'bg-[var(--cuv-white)]'
        if ( color === 'black' ) return 'bg-[var(--cuv-grey-lighten-2)]'
        if ( color === 'light' ) return 'bg-[var(--cuv-grey-lighten-5)]'
        if ( color === 'dark' )  return 'bg-[var(--cuv-grey-lighten-3)]'
        if ( color === 'primary' ) return 'bg-[var(--cuv-purple-lighten-5)]'
        if ( color === 'link' ) return 'bg-[var(--cuv-indigo-lighten-5)]'
        if ( color === 'success' ) return 'bg-[var(--cuv-green-lighten-5)]'
        if ( color === 'danger' ) return 'bg-[var(--cuv-red-lighten-5)]'
        if ( color === 'warning' ) return 'bg-[var(--cuv-yellow-lighten-5)]'
        if ( color === 'info' ) return 'bg-[var(--cuv-blue-lighten-5)]'
        return 'bg-inherit'
    })

    const hoverBackgroundLightColor = computed(() => {
        if ( color === 'white' ) return 'hover:bg-[var(--cuv-grey-lighten-5)]'
        if ( color === 'black' ) return 'hover:bg-[var(--cuv-grey-light-3)]'
        if ( color === 'light' ) return 'hover:bg-[var(--cuv-grey-lighten-4)]'
        if ( color === 'dark' )  return 'hover:bg-[var(--cuv-grey-lighten-2)]'
        if ( color === 'primary' ) return 'hover:bg-[var(--cuv-purple-lighten-4)]'
        if ( color === 'link' ) return 'hover:bg-[var(--cuv-indigo-lighten-4)]'
        if ( color === 'success' ) return 'hover:bg-[var(--cuv-green-lighten-4)]'
        if ( color === 'danger' ) return 'hover:bg-[var(--cuv-red-lighten-4)]'
        if ( color === 'warning' ) return 'hover:bg-[var(--cuv-yellow-lighten-4)] '
        if ( color === 'info' ) return 'hover:bg-[var(--cuv-blue-lighten-4)]'
        return 'hover:bg-inherit'
    })

    const focusBackgroundLightColor = computed(() => {
        if ( color === 'white' ) return 'focus:bg-[var(--cuv-white)]'
        if ( color === 'black' ) return 'focus:bg-[var(--cuv-grey-lighten-2)]'
        if ( color === 'light' ) return 'focus:bg-[var(--cuv-light-background)]'
        if ( color === 'dark' )  return 'focus:bg-[var(--cuv-grey-lighten-3)]'
        if ( color === 'primary' ) return 'focus:bg-[var(--cuv-purple-lighten-5)]'
        if ( color === 'link' ) return 'focus:bg-[var(--cuv-indigo-lighten-5)]'
        if ( color === 'success' ) return 'focus:bg-[var(--cuv-green-lighten-5)]'
        if ( color === 'danger' ) return 'focus:bg-[var(--cuv-red-lighten-5)]'
        if ( color === 'warning' ) return 'focus:bg-[var(--cuv-yellow-lighten-5)]'
        if ( color === 'info' ) return 'focus:bg-[var(--cuv-blue-lighten-5)]'
        return 'focus:bg-inherit'
    })

    const outlineColor = computed(() => {
        if ( color === 'white' ) return 'outline-[var(--cuv-white)]'
        if ( color === 'black' ) return 'outline-[var(--cuv-black)]'
        if ( color === 'light' ) return 'outline-[var(--cuv-light-outline)]'
        if ( color === 'dark' )  return 'outline-[var(--cuv-dark-outline)]'
        if ( color === 'primary' ) return 'outline-[var(--cuv-primary-outline)]'
        if ( color === 'link' ) return 'outline-[var(--cuv-link-outline)]'
        if ( color === 'success' ) return 'outline-[var(--cuv-success-outline)]'
        if ( color === 'danger' ) return 'outline-[var(--cuv-danger-outline)]'
        if ( color === 'warning' ) return 'outline-[var(--cuv-warning-outline)]'
        if ( color === 'info' ) return 'outline-[var(--cuv-info-outline)]'
        return 'outline-inherit'
    })
    
    const hoverOutlineColor = computed(() => {
        if ( color === 'white' ) return 'hover:outline-[var(--cuv-white)]'
        if ( color === 'black' ) return 'hover:outline-[var(--cuv-black)]'
        if ( color === 'light' ) return 'hover:outline-[var(--cuv-light-outline-hover)]'
        if ( color === 'dark' )  return 'hover:outline-[var(--cuv-dark-outline-hover)]'
        if ( color === 'primary' ) return 'hover:outline-[var(--cuv-primary-outline-hover)]'
        if ( color === 'link' ) return 'hover:outline-[var(--cuv-link-outline-hover)]'
        if ( color === 'success' ) return 'hover:outline-[var(--cuv-success-outline-hover)]'
        if ( color === 'danger' ) return 'hover:outline-[var(--cuv-danger-outline-hover)]'
        if ( color === 'warning' ) return 'hover:outline-[var(--cuv-warning-outline-hover)]'
        if ( color === 'info' ) return 'hover:outline-[var(--cuv-info-outline-hover)]'
        return 'hover:outline-inherit'
    })
    
    const focusOutlineColor = computed(() => {
        if ( color === 'white' ) return 'focus:outline-[var(--cuv-white)]'
        if ( color === 'black' ) return 'focus:outline-[var(--cuv-black)]'
        if ( color === 'light' ) return 'focus:outline-[var(--cuv-light-outline-focus)]'
        if ( color === 'dark' )  return 'focus:outline-[var(--cuv-dark-outline-focus)]'
        if ( color === 'primary' ) return 'focus:outline-[var(--cuv-primary-outline-focus)]'
        if ( color === 'link' ) return 'focus:outline-[var(--cuv-link-outline-focus)]'
        if ( color === 'success' ) return 'focus:outline-[var(--cuv-success-outline-focus)]'
        if ( color === 'danger' ) return 'focus:outline-[var(--cuv-danger-outline-focus)]'
        if ( color === 'warning' ) return 'focus:outline-[var(--cuv-warning-outline-focus)]'
        if ( color === 'info' ) return 'focus:outline-[var(--cuv-info-outline-focus)]'
        return 'focus:outline-inherit'
    })
    
    const textColor = computed(() => {
        if ( color === 'white' ) return 'text-[var(--cuv-white)]'
        if ( color === 'black' ) return 'text-[var(--cuv-black)]'
        if ( color === 'light' ) return 'text-[var(--cuv-light-text)]'
        if ( color === 'dark' )  return 'text-[var(--cuv-dark-text)]'
        if ( color === 'primary' ) return 'text-[var(--cuv-primary-text)]'
        if ( color === 'link' ) return 'text-[var(--cuv-link-text)]'
        if ( color === 'success' ) return 'text-[var(--cuv-success-text)]'
        if ( color === 'danger' ) return 'text-[var(--cuv-danger-text)]'
        if ( color === 'warning' ) return 'text-[var(--cuv-warning-text)]'
        if ( color === 'info' ) return 'text-[var(--cuv-info-text)]'
        return 'text-inherit'
    })

    const textWhiteOrBlack = computed(() => {
        if ( color === 'black' ) return 'text-white'
        if ( color === 'dark' )  return 'text-white'
        if ( color === 'primary' ) return 'text-white'
        if ( color === 'link' ) return 'text-white'
        if ( color === 'success' ) return 'text-white'
        if ( color === 'danger' ) return 'text-white'
        if ( color === 'warning' ) return 'text-white'
        if ( color === 'info' ) return 'text-white'
        return 'text-inherit'
    })

    if ( variant === 'text' ) base.push(
        'bg-transparent', 
        textColor.value,
        hover ? hoverBackgroundLightColor.value : '',
        focus ? focusBackgroundLightColor.value : '',
    )
    if ( variant === 'flat' ) base.push(
        backgroundColor.value, 
        textWhiteOrBlack.value,
        hover ? [hoverBackgroundColor.value, 'hover:shadow-lg'] : '',
        focus ? focusBackgroundColor.value : '',
    )
    if ( variant === 'elevated' ) base.push(
        'shadow-md',
        backgroundColor.value, 
        textWhiteOrBlack.value,
        hover ? [hoverBackgroundColor.value, 'hover:shadow-lg'] : '',
        focus ? focusBackgroundColor.value : '',
    )
    if ( variant === 'tonal' ) base.push(
        backgroundLightColor.value, 
        textColor.value,
        hover ? hoverBackgroundLightColor.value : '',
        focus ? focusBackgroundLightColor.value : '',
    )
    if ( variant === 'outlined' ) base.push(
        'outline outline-1',
        outlineColor.value, 
        textColor.value,
        hover ? [hoverBackgroundLightColor.value, hoverOutlineColor.value] : '',
        focus ? [focusBackgroundLightColor.value, focusOutlineColor.value] : '',
    )
    if ( variant === 'plain' ) base.push(
        'opacity-60 hover:opacity-100 duration-300', 
        textColor.value,
    )

    if ( hover || focus ) base.push('duration-300') 

    return base
}


