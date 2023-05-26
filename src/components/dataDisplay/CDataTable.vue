<script setup lang="ts">
import { computed, reactive, watchEffect } from 'vue';
import { mdiPageFirst, mdiChevronLeft, mdiChevronRight, mdiPageLast } from '@mdi/js';
import CProgress from '@/components/feedback/CProgress.vue';
import CCluster from '@/components/layout/CCluster.vue';
import CSelect from '@/components/form/CSelect.vue';
import CSvgIcon from '@/components/images/CSvgIcon.vue';
import CTable from '@/components/dataDisplay/CTable.vue';
import CCheckbox from '@/components/form/CCheckbox.vue';
import COverlay from '@/components/containment/COverlay.vue';

interface headersType {
    key: string
    title: string
    align?: 'start' | 'end' 
}

const props = withDefaults(defineProps<{
    density?:'default' | 'comfortable' | 'compact'
    fixedFooter?: boolean
    fixedHeader?: boolean
    headers: headersType[]
    height?: string
    hover?: boolean
    items: any[]
    itemsLength?: number
    itemsPerPage?: number
    itemsPerPageOptions?: Array<string|number>
    itemValue?: any
    loading?: boolean
    modelValue?: any[]
    noDataText?: string
    page?: string|number
    showSelect?: boolean
}>(), {
    density: 'default',
    fixedFooter: false,
    fixedHeader: false,
    height: 'auto',
    hover: false,
    itemsPerPage: 10,
    itemValue: 'value',
    loading: false,
    noDataText: 'データがありません。',
    page: 1,
    showSelect: false,
})

const emits = defineEmits<{
    (e: 'click:row', itemKey: string|number): void,
    (e: 'update:modelValue', value: string[]): void,
    (e: 'update:itemsPerPage', value: number): void,
    (e: 'update:loading', value: boolean): void,
    (e: 'update:options', page: number, itemsPerPage: number): void,
}>()

const data: {
    isAllChecked: boolean
    selectItems: string[]
    currentPage: number
    currentPerPage: number|string
} = reactive({
    isAllChecked: false,
    selectItems: [],
    currentPage: Number(props.page),
    currentPerPage: props.itemsPerPage,
})

const displayItems = computed(() => {
    if( typeof data.currentPerPage === 'string' ) return props.items
    if( props.itemsLength ) return props.items
    return props.items.slice(startRecord.value-1, endRecord.value)
})

const startRecord = computed(() => {
    if( typeof data.currentPerPage === 'string' ) return 1
    if( !totalRecord.value ) return 0
    if( data.currentPerPage * data.currentPage - (data.currentPerPage-1 ) < 0 ) return 0
    return data.currentPerPage * data.currentPage - (data.currentPerPage-1)
})

const endRecord = computed(() => {
    if( typeof data.currentPerPage === 'string' ) return totalRecord.value
    if( data.currentPerPage * data.currentPage >= totalRecord.value ) return totalRecord.value
    return data.currentPerPage * data.currentPage
})

const totalRecord = computed(() => {
    if( props.itemsLength ) return props.itemsLength
    return props.items.length
})

const lastPage = computed(() => {
    if( typeof data.currentPerPage === 'string' ) return 1
    if( !totalRecord.value ) return 1
    return Math.ceil(totalRecord.value / data.currentPerPage)
})

const perPageArray = computed(() => {
    if( props.itemsPerPageOptions ) return props.itemsPerPageOptions
    const Array = []
    if( totalRecord.value >= 10) Array.push(10)
    if( totalRecord.value >= 25) Array.push(25)
    if( totalRecord.value >= 50) Array.push(50)
    if( totalRecord.value >= 100) Array.push(100)
    Array.push('ALL')
    return Array
})

const paginationButtonClass = computed(() => {
    return [
        'disabled:text-gray-400 disabled:cursor-not-allowed'
    ]
})

const isloading = computed({
    get: () => props.loading,
    set: value => {
        emits('update:loading', value)
    }
})

const headerCheckboxIndeterminate = computed({
    get: () => !data.isAllChecked ? data.selectItems.length>0 : false,
    set: value => {
        return value
    }
})

const headerAlign = (align?: 'start' | 'end') => {
    if(align === 'start') return 'text-left'
    if(align === 'end') return 'text-right'
    return 'text-center'
}

const changeAllSelect = () => {
    data.selectItems = []
    if(data.isAllChecked) data.selectItems.push(...props.items.map(x => x[props.itemValue]))
    changeCheckbox()
    return
}

const changeCheckbox = () => {
    emits('update:modelValue', data.selectItems)
}

const changePage = (direction: 'first'|'back'|'go'|'last') => {
    if (direction === 'first') data.currentPage = 1
    if (direction === 'back') data.currentPage --
    if (direction === 'go') data.currentPage ++
    if (direction === 'last') data.currentPage = lastPage.value
    if( typeof data.currentPerPage === 'string' ) {
        emits('update:itemsPerPage', totalRecord.value)
        emits('update:options', data.currentPage, totalRecord.value)
        return
    }
    emits('update:itemsPerPage', data.currentPerPage)
    emits('update:options', data.currentPage, data.currentPerPage)
    return    
}

const changePerPage = () => {
    data.currentPage = 1
    if( typeof data.currentPerPage === 'string' ) {
        emits('update:itemsPerPage', totalRecord.value)
        emits('update:options', data.currentPage, totalRecord.value)
        return
    }
    emits('update:itemsPerPage', data.currentPerPage)
    emits('update:options', data.currentPage, data.currentPerPage)
    return
}

watchEffect(() => {
    if(data.selectItems.length !== props.items.length) data.isAllChecked = false
})

</script>

<template>
<CTable
    :density="density"
    :hover="hover"
    :fixed-header="fixedHeader"
    :fixed-footer="fixedFooter"
    :height="height"
>
    <template #top>
        <slot name="top" :page="data.currentPage" :itemsPerPage="data.currentPerPage" :allSelected="data.isAllChecked" :select="data.selectItems" :items="displayItems" :headers="headers">
        </slot>
    </template>
    <slot name="default" :page="data.currentPage" :itemsPerPage="data.currentPerPage" :allSelected="data.isAllChecked" :select="data.selectItems" :items="displayItems" :headers="headers">
        <thead>
            <slot name="thead" :page="data.currentPage" :itemsPerPage="data.currentPerPage" :allSelected="data.isAllChecked" :select="data.selectItems" :items="displayItems" :headers="headers">
                <tr>
                    <th v-show="showSelect" class="text-center">
                        <CCheckbox v-model="data.isAllChecked" :indeterminate="headerCheckboxIndeterminate" @change="changeAllSelect"/>
                    </th>
                    <th v-for="(header, index) in headers" :key="index" :class="headerAlign(header.align)">
                        {{ header.title }}
                    </th>
                </tr>
            </slot>
        </thead>
        <tbody>
            <slot name="tbody" :page="data.currentPage" :itemsPerPage="data.currentPerPage" :allSelected="data.isAllChecked" :select="data.selectItems" :items="displayItems" :headers="headers">
                <tr v-for="(item, index) in  displayItems" :key="index">
                    <td v-show="showSelect" class="text-center">
                        <CCheckbox v-model="data.selectItems" :value="item[itemValue]" @change="changeCheckbox" />
                    </td>
                    <td v-for="(header, index) in headers" :key="index" @click="emits('click:row', item[itemValue])" :class="headerAlign(header.align)">
                        <slot :name="[`item.${header.key}`]" :item="item[header.key]" :index="index">
                            {{ item[header.key] }}
                        </slot>
                    </td>
                </tr>
                <tr v-if="!displayItems.length">
                    <slot name="no-data">
                        <td :colspan="showSelect? headers.length+1:headers.length" class="text-center">
                            {{ props.noDataText }}
                        </td>
                    </slot>
                </tr>
            </slot>
        </tbody>
        <tfoot>
            <slot name="tfoot" :page="data.currentPage" :itemsPerPage="data.currentPerPage" :allSelected="data.isAllChecked" :select="data.selectItems" :items="displayItems" :headers="headers">
            </slot>
        </tfoot>
    </slot>
    <template #bottom>
        <slot name="bottom" :page="data.currentPage" :itemsPerPage="data.currentPerPage" :allSelected="data.isAllChecked" :select="data.selectItems" :items="displayItems" :headers="headers">
            <CCluster justify="flex-end" align="center">
                <CCluster space="0.2rem" align="center">
                    Items per page:
                    <CSelect v-model="data.currentPerPage" @update:model-value="changePerPage" :items="perPageArray" variant="outlined" :disabled="!items.length" :class="$style.perpage"/>
                </CCluster>
                <div>{{ startRecord }}-{{ endRecord }} of {{ totalRecord }}</div>
                <CCluster>
                    <button @click="changePage('first')" :disabled="data.currentPage<=1" :class="paginationButtonClass">
                        <CSvgIcon :icon="mdiPageFirst"/>
                    </button>
                    <button @click="changePage('back')" :disabled="data.currentPage<=1" :class="paginationButtonClass">
                        <CSvgIcon :icon="mdiChevronLeft"/>
                    </button>
                    <button @click="changePage('go')" :disabled="data.currentPage>=lastPage" :class="paginationButtonClass">
                        <CSvgIcon :icon="mdiChevronRight"/>
                    </button>
                    <button @click="changePage('last')" :disabled="data.currentPage===lastPage" :class="paginationButtonClass">
                        <CSvgIcon :icon="mdiPageLast"/>
                    </button>
                </CCluster>
            </CCluster>
        </slot>
    </template>
    <COverlay v-model="isloading" contained disabled>
        <slot name="loading">
            <CProgress color="link"/>
        </slot>
    </COverlay>
</CTable>
</template>

<style module>
.perpage input {
    width: 0;
}
</style>