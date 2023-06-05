<script setup lang="ts">
import CCluster from '@/components/layout/CCluster.vue'
import CStack from '@/components/layout/CStack.vue'
import CBox from '@/components/layout/CBox.vue'
import CSheet from '@/components/containment/CSheet.vue'
import CGrid from '@/components/layout/CGrid.vue'

const colorList = [
    {
        name: 'Gray',
        palette: {
            '--cuv-grey': 'var(--cuv-grey)',
            '--cuv-grey-lighten-5': 'var(--cuv-grey-lighten-5)',
            '--cuv-grey-lighten-4': 'var(--cuv-grey-lighten-4)',
            '--cuv-grey-lighten-3': 'var(--cuv-grey-lighten-3)',
            '--cuv-grey-lighten-2': 'var(--cuv-grey-lighten-2)',
            '--cuv-grey-lighten-1': 'var(--cuv-grey-lighten-1)',
            '--cuv-grey-darken-1': 'var(--cuv-grey-darken-1)',
            '--cuv-grey-darken-2': 'var(--cuv-grey-darken-2)',
            '--cuv-grey-darken-3': 'var(--cuv-grey-darken-3)',
            '--cuv-grey-darken-4': 'var(--cuv-grey-darken-4)',
        }
    },
    {
        name: 'Red',
        palette: {
            '--cuv-red': 'var(--cuv-red)',
            '--cuv-red-lighten-5': 'var(--cuv-red-lighten-5)',
            '--cuv-red-lighten-4': 'var(--cuv-red-lighten-4)',
            '--cuv-red-lighten-3': 'var(--cuv-red-lighten-3)',
            '--cuv-red-lighten-2': 'var(--cuv-red-lighten-2)',
            '--cuv-red-lighten-1': 'var(--cuv-red-lighten-1)',
            '--cuv-red-darken-1': 'var(--cuv-red-darken-1)',
            '--cuv-red-darken-2': 'var(--cuv-red-darken-2)',
            '--cuv-red-darken-3': 'var(--cuv-red-darken-3)',
            '--cuv-red-darken-4': 'var(--cuv-red-darken-4)',
        }
    },
    {
        name: 'Purple',
        palette: {
            '--cuv-purple': 'var(--cuv-purple)',
            '--cuv-purple-lighten-5': 'var(--cuv-purple-lighten-5)',
            '--cuv-purple-lighten-4': 'var(--cuv-purple-lighten-4)',
            '--cuv-purple-lighten-3': 'var(--cuv-purple-lighten-3)',
            '--cuv-purple-lighten-2': 'var(--cuv-purple-lighten-2)',
            '--cuv-purple-lighten-1': 'var(--cuv-purple-lighten-1)',
            '--cuv-purple-darken-1': 'var(--cuv-purple-darken-1)',
            '--cuv-purple-darken-2': 'var(--cuv-purple-darken-2)',
            '--cuv-purple-darken-3': 'var(--cuv-purple-darken-3)',
            '--cuv-purple-darken-4': 'var(--cuv-purple-darken-4)',
        }
    },
    {
        name: 'Indigo',
        palette: {
            '--cuv-indigo': 'var(--cuv-indigo)',
            '--cuv-indigo-lighten-5': 'var(--cuv-indigo-lighten-5)',
            '--cuv-indigo-lighten-4': 'var(--cuv-indigo-lighten-4)',
            '--cuv-indigo-lighten-3': 'var(--cuv-indigo-lighten-3)',
            '--cuv-indigo-lighten-2': 'var(--cuv-indigo-lighten-2)',
            '--cuv-indigo-lighten-1': 'var(--cuv-indigo-lighten-1)',
            '--cuv-indigo-darken-1': 'var(--cuv-indigo-darken-1)',
            '--cuv-indigo-darken-2': 'var(--cuv-indigo-darken-2)',
            '--cuv-indigo-darken-3': 'var(--cuv-indigo-darken-3)',
            '--cuv-indigo-darken-4': 'var(--cuv-indigo-darken-4)',
        }
    },
    {
        name: 'Blue',
        palette: {
            '--cuv-blue': 'var(--cuv-blue)',
            '--cuv-blue-lighten-5': 'var(--cuv-blue-lighten-5)',
            '--cuv-blue-lighten-4': 'var(--cuv-blue-lighten-4)',
            '--cuv-blue-lighten-3': 'var(--cuv-blue-lighten-3)',
            '--cuv-blue-lighten-2': 'var(--cuv-blue-lighten-2)',
            '--cuv-blue-lighten-1': 'var(--cuv-blue-lighten-1)',
            '--cuv-blue-darken-1': 'var(--cuv-blue-darken-1)',
            '--cuv-blue-darken-2': 'var(--cuv-blue-darken-2)',
            '--cuv-blue-darken-3': 'var(--cuv-blue-darken-3)',
            '--cuv-blue-darken-4': 'var(--cuv-blue-darken-4)',
        }
    },
    {
        name: 'Green',
        palette: {
            '--cuv-green': 'var(--cuv-green)',
            '--cuv-green-lighten-5': 'var(--cuv-green-lighten-5)',
            '--cuv-green-lighten-4': 'var(--cuv-green-lighten-4)',
            '--cuv-green-lighten-3': 'var(--cuv-green-lighten-3)',
            '--cuv-green-lighten-2': 'var(--cuv-green-lighten-2)',
            '--cuv-green-lighten-1': 'var(--cuv-green-lighten-1)',
            '--cuv-green-darken-1': 'var(--cuv-green-darken-1)',
            '--cuv-green-darken-2': 'var(--cuv-green-darken-2)',
            '--cuv-green-darken-3': 'var(--cuv-green-darken-3)',
            '--cuv-green-darken-4': 'var(--cuv-green-darken-4)',
        }
    },
    {
        name: 'Yellow',
        palette: {
            '--cuv-yellow': 'var(--cuv-yellow)',
            '--cuv-yellow-lighten-5': 'var(--cuv-yellow-lighten-5)',
            '--cuv-yellow-lighten-4': 'var(--cuv-yellow-lighten-4)',
            '--cuv-yellow-lighten-3': 'var(--cuv-yellow-lighten-3)',
            '--cuv-yellow-lighten-2': 'var(--cuv-yellow-lighten-2)',
            '--cuv-yellow-lighten-1': 'var(--cuv-yellow-lighten-1)',
            '--cuv-yellow-darken-1': 'var(--cuv-yellow-darken-1)',
            '--cuv-yellow-darken-2': 'var(--cuv-yellow-darken-2)',
            '--cuv-yellow-darken-3': 'var(--cuv-yellow-darken-3)',
            '--cuv-yellow-darken-4': 'var(--cuv-yellow-darken-4)',
        }
    },
    {
        name: 'shades',
        palette: {
            '--cuv-white': '#ffffff',
            '--cuv-black': '#000000',
        }
    },

]

const roleColors = [
    {
        name: 'light',
        role: {
            '--cuv-light-background': 'var(--cuv-light-background)',
            '--cuv-light-background-hover': 'var(--cuv-light-background-hover)',
            '--cuv-light-background-focus': 'var(--cuv-light-background-focus)',
            '--cuv-light-border': 'var(--cuv-light-border)',
            '--cuv-light-text': 'var(--cuv-light-text)',
            '--cuv-light-outline': 'var(--cuv-light-outline)',
            '--cuv-light-outline-hover': 'var(--cuv-light-outline-hover)',
            '--cuv-light-outline-focus': 'var(--cuv-light-outline-focus)',
        },
    },
    {
        name: 'dark',
        role: {
            '--cuv-dark-background': 'var(--cuv-dark-background)',
            '--cuv-dark-background-hover': 'var(--cuv-dark-background-hover)',
            '--cuv-dark-background-focus': 'var(--cuv-dark-background-focus)',
            '--cuv-dark-border': 'var(--cuv-dark-border)',
            '--cuv-dark-text': 'var(--cuv-dark-text)',
            '--cuv-dark-outline': 'var(--cuv-dark-outline)',
            '--cuv-dark-outline-hover': 'var(--cuv-dark-outline-hover)',
            '--cuv-dark-outline-focus': 'var(--cuv-dark-outline-focus)',
        },
    },
    {
        name: 'primary',
        role: {
            '--cuv-primary-background': 'var(--cuv-primary-background)',
            '--cuv-primary-background-hover': 'var(--cuv-primary-background-hover)',
            '--cuv-primary-background-focus': 'var(--cuv-primary-background-focus)',
            '--cuv-primary-border': 'var(--cuv-primary-border)',
            '--cuv-primary-text': 'var(--cuv-primary-text)',
            '--cuv-primary-outline': 'var(--cuv-primary-outline)',
            '--cuv-primary-outline-hover': 'var(--cuv-primary-outline-hover)',
            '--cuv-primary-outline-focus': 'var(--cuv-primary-outline-focus)',
        },
    },
    {
        name: 'link',
        role: {
            '--cuv-link-background': 'var(--cuv-link-background)',
            '--cuv-link-background-hover': 'var(--cuv-link-background-hover)',
            '--cuv-link-background-focus': 'var(--cuv-link-background-focus)',
            '--cuv-link-border': 'var(--cuv-link-border)',
            '--cuv-link-text': 'var(--cuv-link-text)',
            '--cuv-link-outline': 'var(--cuv-link-outline)',
            '--cuv-link-outline-hover': 'var(--cuv-link-outline-hover)',
            '--cuv-link-outline-focus': 'var(--cuv-link-outline-focus)',
        },
    },
    {
        name: 'success',
        role: {
            '--cuv-success-background': 'var(--cuv-success-background)',
            '--cuv-success-background-hover': 'var(--cuv-success-background-hover)',
            '--cuv-success-background-focus': 'var(--cuv-success-background-focus)',
            '--cuv-success-border': 'var(--cuv-success-border)',
            '--cuv-success-text': 'var(--cuv-success-text)',
            '--cuv-success-outline': 'var(--cuv-success-outline)',
            '--cuv-success-outline-hover': 'var(--cuv-success-outline-hover)',
            '--cuv-success-outline-focus': 'var(--cuv-success-outline-focus)',
        },
    },
    {
        name: 'danger',
        role: {
            '--cuv-danger-background': 'var(--cuv-danger-background)',
            '--cuv-danger-background-hover': 'var(--cuv-danger-background-hover)',
            '--cuv-danger-background-focus': 'var(--cuv-danger-background-focus)',
            '--cuv-danger-border': 'var(--cuv-danger-border)',
            '--cuv-danger-text': 'var(--cuv-danger-text)',
            '--cuv-danger-outline': 'var(--cuv-danger-outline)',
            '--cuv-danger-outline-hover': 'var(--cuv-danger-outline-hover)',
            '--cuv-danger-outline-focus': 'var(--cuv-danger-outline-focus)',
        },
    },
    {
        name: 'warning',
        role: {
            '--cuv-warning-background': 'var(--cuv-warning-background)',
            '--cuv-warning-background-hover': 'var(--cuv-warning-background-hover)',
            '--cuv-warning-background-focus': 'var(--cuv-warning-background-focus)',
            '--cuv-warning-border': 'var(--cuv-warning-border)',
            '--cuv-warning-text': 'var(--cuv-warning-text)',
            '--cuv-warning-outline': 'var(--cuv-warning-outline)',
            '--cuv-warning-outline-hover': 'var(--cuv-warning-outline-hover)',
            '--cuv-warning-outline-focus': 'var(--cuv-warning-outline-focus)',
        },
    },
    {
        name: 'info',
        role: {
            '--cuv-info-background': 'var(--cuv-info-background)',
            '--cuv-info-background-hover': 'var(--cuv-info-background-hover)',
            '--cuv-info-background-focus': 'var(--cuv-info-background-focus)',
            '--cuv-info-border': 'var(--cuv-info-border)',
            '--cuv-info-text': 'var(--cuv-info-text)',
            '--cuv-info-outline': 'var(--cuv-info-outline)',
            '--cuv-info-outline-hover': 'var(--cuv-info-outline-hover)',
            '--cuv-info-outline-focus': 'var(--cuv-info-outline-focus)',
        },
    },
]

const textColor = (key: string) => {
    if ( key.includes('dark') || key.includes('black') ) return 'text-white'
    return 'text-black'
}

const paletteClass = (key: string, index: number) => {
    console.log(key, index, index === 0)
    const base = [
        'p-2',
        textColor(key),
    ]
    return base
}

const getColorHEX = (name: string) => {
    const boxElement = document.querySelector('.box');
    if (!boxElement) return ''
    const cssStyle = getComputedStyle(boxElement);
    const cssValue = String(cssStyle.getPropertyValue(name))
    return cssValue
}

const getRoleColorHEX = (name: string) => {
    const boxElement = document.querySelector('.roleBox');
    if (!boxElement) return ''
    const cssStyle = getComputedStyle(boxElement);
    const cssValue = String(cssStyle.getPropertyValue(name))
    return cssValue
}
</script>
<template>
    <Story title="Colors" group="design-system">
        <Variant title="カラーパレット">  
            <CCluster>
                <div  v-for="(item, key) of colorList" :key="key" class="p-2 m-2 w-full max-w-[30%]">
                    <div :style="{backgroundColor: Object.values(item.palette).shift()}">
                        <div class="text-lg font-semibold p-2">{{ item.name }}</div>
                    </div>
                    <template v-for="(color, key, index) in item.palette" :key="index">
                        <CCluster :style="{backgroundColor: color}" justify="space-between" class="p-2 box" :class="paletteClass(key,index)">
                            <div class="text-xs">{{ key }}</div>
                            <div class="text-sm">{{ getColorHEX(key) }}</div>
                        </CCluster>
                    </template>
                </div>
            </CCluster>
        </Variant>
        <Variant title="役割ごとのカラーパレット">  
            <CBox>
                <CStack>
                    <template v-for="(item, index) of roleColors" :key="index">
                        <CSheet elevation="large" color="white">
                            <div class="px-4 text-lg font-semibold" :style="{color: `var(--cuv-${item.name}-text)`}">{{ item.name }}</div>
                            <CBox>
                                <CGrid min="200px">
                                    <template v-for="(color, key, index) in item.role" :key="index">
                                        <div>
                                            <CCluster :style="{backgroundColor: color}" justify="flex-end" class="px-4 rounded-full roleBox" :class="paletteClass(key,index)">
                                                <div class="text-sm">{{ getRoleColorHEX(key) }}</div>
                                            </CCluster>
                                            <div class="text-sm text-gray-500 px-4">{{ key }}</div>
                                        </div>
                                    </template>    
                                </CGrid>
                            </CBox>
                        </CSheet>
                    </template>
                </CStack>
            </CBox>
        </Variant>
    </Story>
</template>
<docs lang="md">
# Color Palette

CSSで変数を設定して、独自のテーマの色にカスタマイズができます。

</docs> 