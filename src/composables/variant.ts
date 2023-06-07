import { computed } from "vue"

type VarianType = 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

export const useVariant = ({variant, color}:{variant:VarianType; color:ColorType;}) => {

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
    
    const backgroundLightColor = computed(() => {
        if ( color === 'white' ) return 'bg-[var(--cuv-white)]'
        if ( color === 'black' ) return 'bg-[var( --cuv-grey-lighten-2)]'
        if ( color === 'light' ) return 'bg-[var(--cuv-light-background)]'
        if ( color === 'dark' )  return 'bg-[var(--cuv-grey-lighten-3)]'
        if ( color === 'primary' ) return 'bg-[var(--cuv-purple-lighten-5)]'
        if ( color === 'link' ) return 'bg-[var(--cuv-indigo-lighten-5)]'
        if ( color === 'success' ) return 'bg-[var(--cuv-green-lighten-5)]'
        if ( color === 'danger' ) return 'bg-[var(--cuv-red-lighten-5)]'
        if ( color === 'warning' ) return 'bg-[var(--cuv-yellow-lighten-5)]'
        if ( color === 'info' ) return 'bg-[var(--cuv-blue-lighten-5)]'
        return 'bg-inherit'
    })
    
    const outlineColor = computed(() => {
        if ( color === 'white' ) return 'outline outline-[var(--cuv-white)]'
        if ( color === 'black' ) return 'outline outline-[var(--cuv-black)]'
        if ( color === 'light' ) return 'outline outline-[var(--cuv-light-outline)]'
        if ( color === 'dark' )  return 'outline outline-[var(--cuv-dark-outline)]'
        if ( color === 'primary' ) return 'outline outline-[var(--cuv-primary-outline)]'
        if ( color === 'link' ) return 'outline outline-[var(--cuv-link-outline)]'
        if ( color === 'success' ) return 'outline outline-[var(--cuv-success-outline)]'
        if ( color === 'danger' ) return 'outline outline-[var(--cuv-danger-outline)]'
        if ( color === 'warning' ) return 'outline outline-[var(--cuv-warning-outline)]'
        if ( color === 'info' ) return 'outline outline-[var(--cuv-info-outline)]'
        return 'outline-inherit'
    })
    
    const textColor = computed(() => {
        if ( color === 'white' ) return '!text-[var(--cuv-white)]'
        if ( color === 'black' ) return '!text-[var(--cuv-black)]'
        if ( color === 'light' ) return '!text-[var(--cuv-light-text)]'
        if ( color === 'dark' )  return '!text-[var(--cuv-dark-text)]'
        if ( color === 'primary' ) return '!text-[var(--cuv-primary-text)]'
        if ( color === 'link' ) return '!text-[var(--cuv-link-text)]'
        if ( color === 'success' ) return '!text-[var(--cuv-success-text)]'
        if ( color === 'danger' ) return '!text-[var(--cuv-danger-text)]'
        if ( color === 'warning' ) return '!text-[var(--cuv-warning-text)]'
        if ( color === 'info' ) return '!text-[var(--cuv-info-text)]'
        return 'text-inherit'
    })

    const textWhiteOrBlack = computed(() => {
        if ( color === 'black' ) return 'text-white'
        if ( color === 'dark' )  return 'text-white'
        if ( color === 'primary' ) return 'text-white'
        if ( color === 'link' ) return 'text-white'
        if ( color === 'success' ) return 'text-white'
        if ( color === 'danger' ) return 'text-white'
        if ( color === 'info' ) return 'text-white'
        return 'text-inherit'
    })

    if ( variant === 'text' ) return ['bg-transparent', textColor.value]
    if ( variant === 'flat' ) return [backgroundColor.value, textWhiteOrBlack.value]
    if ( variant === 'elevated' ) return ['shadow-md',backgroundColor.value, textWhiteOrBlack.value]
    if ( variant === 'tonal' ) return [backgroundLightColor.value, textColor.value]
    if ( variant === 'outlined' ) return [outlineColor.value, textColor.value]
    if ( variant === 'plain' ) return ['opacity-60 hover:opacity-100 duration-300', textColor.value]

    return []
}


