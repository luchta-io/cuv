<script setup lang="ts">
import {computed} from 'vue';
import CTable from '@/components/dataDisplay/CTable.vue';

interface headersType {
    key: string
    title: string
    // colspan?: number
    // rowspan?: number
    // fixed?: boolean
    align?: 'start' | 'end' 
}

const props = withDefaults(defineProps<{
    density?:'default' | 'comfortable' | 'compact'
    headers: headersType[]
    hover?: boolean
    items: any[]
    itemValue?: any
    itemsPerPage?: string|number

}>(), {
    density: 'default',
    hover: false,
    itemValue: 'id',
    itemsPerPage: 10,
})

const headerAlign = (align?: 'start' | 'end') => {
    if(align === 'start') return 'text-left'
    if(align === 'end') return 'text-right'
    return 'text-center'
}

</script>

<template>
<CTable
    :density="density"
    :hover="hover"
>
    <thead>
        <tr>
            <th v-for="(header, index) in headers" :key="index" :class="headerAlign(header.align)">
                {{ header.title }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in items" :key="index">
            <td v-for="(header, index) in headers" :key="index" :class="headerAlign(header.align)">
                {{ item[header.key] }}
            </td>
        </tr>
    </tbody>
</CTable>
</template>
