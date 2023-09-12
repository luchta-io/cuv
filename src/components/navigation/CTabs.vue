<script lang="ts">
export default {
    name: 'CTabs',
}
</script>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, useCssModule, watch } from 'vue';
import { useVariant } from '../../composables/variant';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import CTab from '../../components/navigation/CTab.vue';
import CSvgIcon from '../../components/images/CSvgIcon.vue';

interface HTMLEvent<T extends EventTarget> extends Event {
    target: T;
}

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const $style = useCssModule();

const props = withDefaults(defineProps<{
    alignTabs?: 'end' | 'start' | 'center' | 'title'
    bgColor?: ColorType
    color?: ColorType
    density?:'default' | 'comfortable' | 'compact'
    disabled?: boolean
    grow?: boolean
    items?: Array<string>
    modelValue?: string
    nextIcon?: string
    prevIcon?: string
    showArrows?: boolean
}>(), {
    alignTabs: 'start',
    bgColor: 'white',
    color: 'black',
    density: 'default',
    disabled: false,
    grow: false,
    modelValue: '',
    showArrows: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const tabs = ref<HTMLElement>()
const tabList = ref<HTMLElement>()

const data: {
    tabFocus: number
    tabs: any[]
    tabsParent: HTMLElement | null
    translateX: number
} = reactive({
    tabFocus: 0,
    tabs: [],
    tabsParent: null,
    translateX: 0,
})

const activeTabName = computed({
    get:() => String(props.modelValue),
    set: value => {
        return emits('update:modelValue', value)
    }
})

const tabsClass = computed(() => {
    const base = [
        'flex overflow-hidden',
        'border-b border-gray-300',
        useVariant({variant: 'flat', color: props.bgColor}),
        props.alignTabs === 'end' ? $style['c-tabs__align-tabs-end'] : '',
        props.alignTabs === 'center' ? $style['c-tabs__align-tabs-center'] : '',
        props.alignTabs === 'title' ? $style['c-tabs__align-tabs-title'] : '',
        props.grow ? $style['c-tabs__grow'] : '',
    ]
    return base
})

const tabListClass = computed(() => {
    const base = [
        'flex relative gap-[2px]',
        props.showArrows ? 'flex-[1_0_auto] whitespace-nowrap' : 'flex-wrap',
    ]
    return base
})

const prevIconClass = computed(() => {
    return [
        'flex flex-[0_1_52px] items-center justify-center min-w-[3.25rem] cursor-pointer',
        'border-b border-gray-300 -m-[1px]',
        noPrevIcon.value ? 'cursor-default opacity-20' : ''
    ]
})

const nextIconClass = computed(() => {
    return [
        'flex flex-[0_1_52px] items-center justify-center min-w-[3.25rem] cursor-pointer',
        'border-b border-gray-300 -m-[1px]',
        noNextIcon.value ? 'cursor-default opacity-20' : ''
    ]
})

const fixedHeight = computed(() => {
    let height = 3
    if ( props.density == 'compact' ) height -= 0.75
    if ( props.density == 'comfortable' ) height -= 0.25

    return height + 'rem'
})

const fixedTranslateX = computed(() => `translateX(-${data.translateX}px)`)

const prevIcon = computed(() => props.prevIcon ? props.prevIcon : mdiChevronLeft)

const nextIcon = computed(() => props.nextIcon ? props.nextIcon : mdiChevronRight)

const noPrevIcon = computed(() => {
    if (!tabs.value) return
    return data.translateX === 0
})

const noNextIcon = computed(() => {
    if (!tabList.value || !tabs.value) return
    return data.translateX === tabList.value.clientWidth - (tabs.value.clientWidth - 104)
})

const prev = () => {
    if (noPrevIcon.value) return 
    if (!tabs.value) return
    const containerWidth = tabs.value.clientWidth - 104
    if (data.translateX - (tabs.value.clientWidth - 104) <= 0) return data.translateX = 0
    return data.translateX = data.translateX - containerWidth
}

const next = () => {
    if (noNextIcon.value) return
    if (!tabs.value || !tabList.value) return
    const containerWidth = tabs.value.clientWidth - 104
    const contentWidth = tabList.value.clientWidth
    if (data.translateX + (tabs.value.clientWidth - 104)*2 >= tabList.value.clientWidth) return data.translateX = contentWidth - containerWidth
    return data.translateX = data.translateX + containerWidth
}

const getButtonElement = (el: HTMLElement) => {
    while (el) {
        if (el.tagName === 'BUTTON') return el as HTMLButtonElement
        el = el.parentElement!
    }
}

const changeTabs = (e: HTMLEvent<HTMLElement>) => {
    let target = e.target;
    const buttonTarget = getButtonElement(target)
    if (!buttonTarget) return

    const parent = buttonTarget.parentNode;
    if (!parent) return
    parent
        .querySelectorAll('[aria-selected="true"]')
        .forEach((t:any) => t.setAttribute("aria-selected", false));

    buttonTarget.setAttribute("aria-selected", 'true');
    data.tabFocus = data.tabs.map(tab => tab.value).indexOf(activeTabName.value)
    activeTabName.value = buttonTarget.value
}

watch(() => props.density, () => {
    data.tabs.forEach((tab:any) => {
        tab.style.height = fixedHeight.value
    });
})

onMounted(() => {
    if ( !tabList.value ) return
    const tabs = tabList.value.querySelectorAll('[role="tab"]')
    data.tabs = []
    data.tabs = data.tabs.concat(Array.from(tabs))
    tabs.forEach((tab:any, index:number) => {
        tab.addEventListener("click", changeTabs);
        tab.style.height = fixedHeight.value
        tab.setAttribute("aria-selected", false)
        tab.setAttribute("tabindex", '-1')
        if (activeTabName.value && activeTabName.value == tab.value) { 
            tab.setAttribute("tabindex", 0)
            tab.setAttribute("aria-selected", true);
            data.tabFocus = index
        }
        if (!activeTabName.value) { 
            tabs[0].setAttribute("tabindex", '0')
            tabs[0].setAttribute("aria-selected", 'true')
            data.tabFocus = 0
        }
    });
    if ( tabList.value === null ) return
    tabList.value.addEventListener("keydown", (e) => {
        if (e.code === '39' || e.code === '37') {
            tabs[data.tabFocus].setAttribute("tabindex", '-1');
            if (e.code === '39') {
                data.tabFocus++;
                if (data.tabFocus >= tabs.length) {
                    data.tabFocus = 0;
                }
            } else if (e.code === '37') {
                data.tabFocus--;
                if (data.tabFocus < 0) {
                    data.tabFocus = tabs.length - 1;
                }
            }
            const tab = tabs[data.tabFocus] as HTMLElement
            tab.setAttribute("tabindex", '0');
            tab.focus();
        }
    });
})

</script>

<template>
<div 
ref="tabs"
:class="tabsClass" 
>
    <div v-if="showArrows" @click="prev" :class="prevIconClass">
        <CSvgIcon :icon="prevIcon"/>
    </div>
    <div class="flex overflow-hidden flex-[1_1_auto]">
        <div
        ref="tabList" 
        role="tablist" 
        :style="{transform:fixedTranslateX}"
        :class="tabListClass">
            <slot>
                <CTab v-for="(item, index) in items" :key="index" :color="color" :value="item" :disabled="disabled">
                    {{ item }}
                </CTab>
            </slot>
        </div>
    </div>
    <div v-if="showArrows" @click="next" :class="nextIconClass">
        <CSvgIcon :icon="nextIcon"/>
    </div>
</div>
</template>

<style module>
.c-tabs__align-tabs-center *:first-child{
    margin-inline-start: auto;
}
.c-tabs__align-tabs-center *:last-child{
    margin-inline-end: auto;
}
.c-tabs__align-tabs-end *:first-child{
    margin-inline-start: auto;
}
.c-tabs__align-tabs-end *:last-child{
    margin-inline-end: 0;
}
.c-tabs__align-tabs-title [role="tab"]:first-child{
    margin-inline-start: 2.625rem;
}
.c-tabs__grow button{
    flex: 1 0 auto;
}

</style>