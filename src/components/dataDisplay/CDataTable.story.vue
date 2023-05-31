<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { logEvent } from 'histoire/client'
import { mdiMagnify } from '@mdi/js';
import CDataTable from '@/components/dataDisplay/CDataTable.vue';
import CSheet from '@/components/containment/CSheet.vue';
import CCluster from '@/components/layout/CCluster.vue';
import CTextField from '@/components/form/CTextField.vue';

type optionsType = {
    page: number,
    itemsPerPage: number,
    search?: string,
}

const data: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
    }[]
    headers: {
            key: string
            title: string
            align?: 'start' | 'end' 
        }[]
} = reactive({
    nameList:[
        {
            id:'001',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'002',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'003',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'004',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'005',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'006',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'007',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'008',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'009',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'010',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'011',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'012',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'013',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'014',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'015',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'016',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'017',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'018',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'019',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'020',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'021',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'022',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'023',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'024',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'025',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'026',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'027',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'028',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'029',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'030',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'031',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'032',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
    ],
    headers: [
        {key: 'id', title: 'ID'},
        {key: 'name', title: '氏名'},
        {key: 'gender', title: '性別'},
        {key: 'age', title: '年齢'},
    ],
})

const custom: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
    }[]
    headers: {
            key: string
            title: string
            align?: 'start' | 'end' 
        }[]
} = reactive({
    nameList:[
        {
            id:'001',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'002',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'003',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'004',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'005',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'006',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'007',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'008',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'009',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'010',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'011',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'012',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'013',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'014',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'015',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'016',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'017',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'018',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'019',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'020',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'021',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'022',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'023',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'024',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'025',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'026',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'027',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'028',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'029',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'030',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'031',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'032',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
    ],
    headers: [
        {key: 'id', title: 'ID'},
        {key: 'name', title: '氏名'},
        {key: 'gender', title: '性別'},
        {key: 'age', title: '年齢'},
    ],
})

const checked: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
    }[]
    headers: {
            key: string
            title: string
            align?: 'start' | 'end' 
        }[]
    selectItems: string[]
} = reactive({
    nameList:[
        {
            id:'001',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'002',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'003',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'004',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'005',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'006',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'007',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'008',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
    ],
    headers: [
        {key: 'id', title: 'ID'},
        {key: 'name', title: '氏名'},
        {key: 'gender', title: '性別'},
        {key: 'age', title: '年齢'},
    ],
    selectItems: [],
})

const search: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
    }[]
    headers: {
            key: string
            title: string
            align?: 'start' | 'end' 
        }[]
    search: string
} = reactive({
    nameList:[
        {
            id:'001',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'002',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'003',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'004',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'005',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'006',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'007',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'008',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'009',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'010',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'011',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'012',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'013',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'014',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'015',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'016',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'017',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'018',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'019',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'020',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'021',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'022',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'023',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'024',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'025',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'026',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'027',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'028',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'029',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'030',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'031',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'032',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
    ],
    headers: [
        {key: 'id', title: 'ID'},
        {key: 'name', title: '氏名'},
        {key: 'gender', title: '性別'},
        {key: 'age', title: '年齢'},
    ],
    search: '',
})

const searchCustom: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
    }[]
    headers: {
            key: string
            title: string
            align?: 'start' | 'end' 
        }[]
    search: string
} = reactive({
    nameList:[
        {
            id:'001',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'002',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'003',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'004',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'005',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'006',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'007',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'008',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'009',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'010',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'011',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'012',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'013',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'014',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'015',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'016',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'017',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'018',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'019',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'020',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'021',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'022',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'023',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'024',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
        {
            id:'025',
            name: '池袋五子',
            age: 59,
            gender: '女',
        },
        {
            id:'026',
            name: '新宿六郎',
            age: 30,
            gender: '男',
        },
        {
            id:'027',
            name: '大崎七子',
            age: 30,
            gender: '女',
        },
        {
            id:'028',
            name: '神田八子',
            age: 39,
            gender: '女',
        },
        {
            id:'029',
            name: '池袋九太郎',
            age: 29,
            gender: '男',
        },
        {
            id:'030',
            name: '大久保十蔵',
            age: 69,
            gender: '男',
        },
        {
            id:'031',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'032',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
    ],
    headers: [
        {key: 'id', title: 'ID'},
        {key: 'name', title: '氏名'},
        {key: 'gender', title: '性別'},
        {key: 'age', title: '年齢'},
    ],
    search: '',
})

const severSide: {
    itemsPerPage: number
    headers: {
            key: string
            title: string
            align?: 'start' | 'end' 
        }[]
    serverItems: any[]
    loading: boolean
    totalItems: number
    search: string
} = reactive({
    itemsPerPage: 5,
    headers: [
    {
        title: 'デザート (100g)',
        key: 'name',
        align: 'start',
    },
    { title: 'カロリー', key: 'calories', align: 'end' },
    { title: '脂質 (g)', key: 'fat', align: 'end' },
    { title: '炭水化物 (g)', key: 'carbs', align: 'end' },
    { title: 'タンパク質 (g)', key: 'protein', align: 'end' },
    { title: '鉄分 (%)', key: 'iron', align: 'end' },
    ],
    serverItems: [],
    loading: true,
    totalItems: 0,
    search: '',
})

const desserts = [
    {
        name: 'フローズンヨーグルト',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1',
    },
    {
        name: 'ゼリービーン',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0',
    },
    {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6',
    },
    {
        name: 'エクレア',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7',
    },
    {
        name: 'ジンジャーブレッド',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16',
    },
    {
        name: 'アイスクリームサンドイッチ',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1',
    },
    {
        name: 'ロリポップ',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2',
    },
    {
        name: 'カップケーキ',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8',
    },
    {
        name: 'ハニカム',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45',
    },
    {
        name: 'ドーナツ',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22',
    },
]

const FakeAPI = {
    async fetch ({page, itemsPerPage, search}:optionsType) {
        return new Promise(resolve => {
            setTimeout(() => {
                const start = (page - 1) * itemsPerPage
                const end = start + itemsPerPage
                const items = desserts.slice()
                if( search ) {
                    const headerKeys = severSide.headers.map(header=> header.key) 
                    const newArray = desserts.filter((itemRow:any) => {
                        const arr:boolean[] = headerKeys.map(key => {
                            return filterOnlyCapsText(itemRow[key], search)
                        })
                        return arr.includes(true)
                    })
                    const paginated = newArray.slice(start, end)
                    resolve({ items: paginated, total: newArray.length })
                    return
                }

                const paginated = items.slice(start, end)
                resolve({ items: paginated, total: items.length })
            }, 500)
        })
    }
}

const loadItems = async({ page, itemsPerPage, search }:optionsType) => {
    severSide.loading = true
    await FakeAPI.fetch({page, itemsPerPage, search}).then((response_json:any) => {
        severSide.serverItems = response_json.items
        severSide.totalItems = response_json.total
    })
    severSide.loading = false
}

const filterOnlyCapsText =  (value:string, query: string) => {
    //valueが名前とかidとか、queryはkeyword
    return value != null &&
        query != null &&
        value.toString().toLocaleUpperCase().indexOf(query) !== -1
}

onMounted(() => {
    loadItems({page:1, itemsPerPage:severSide.itemsPerPage})
})

</script>

<template>
<Story
    title="Data & Display / CDataTable"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CDataTable
        :headers="data.headers"
        :items="data.nameList"
        item-value="id"
        @click:row="logEvent('click:row', $event)"
        ></CDataTable>
        <template #controls>
            <HstJson v-model="data.nameList" title="items"/>
            <HstJson v-model="data.headers" title="headers"/>
        </template>
    </Variant>
    <Variant title="カスタム" auto-props-disabled>
        <CDataTable
        :headers="custom.headers"
        :items="custom.nameList"
        @click:row="logEvent('click:row', $event)"
        >
            <template v-slot:[`item.gender`]="{item}">
                <CCluster justify="center">
                    <CSheet :color="item==='男'?'link':'danger'" rounded="large" class="w-fit">
                        <p class="text-white px-2">{{ item }}</p>
                    </CSheet>
                </CCluster>
            </template>
        </CDataTable>
    </Variant>
    <Variant title="単数/複数選択" auto-props-disabled>
        <div>選択された行のID： {{ checked.selectItems }}</div>
        <CDataTable
        v-model="checked.selectItems"
        :headers="checked.headers"
        :items="checked.nameList"
        item-value="id"
        show-select
        @click:row="logEvent('click:row', $event)"
        ></CDataTable>
    </Variant>
    <Variant title="絞り込み" auto-props-disabled>
        <CDataTable
        :headers="search.headers"
        :items="search.nameList"
        :search="search.search"
        item-value="id"
        @click:row="logEvent('click:row', $event)"
        >
            <template #top>
                <CTextField v-model="search.search" :append-inner-icon="mdiMagnify" placeholder="Search" clearable/>
            </template>
        </CDataTable>
    </Variant>
    <Variant title="絞り込み(カスタム)" auto-props-disabled>
        <CDataTable
        :headers="searchCustom.headers"
        :items="searchCustom.nameList"
        :search="searchCustom.search"
        :custom-filter="filterOnlyCapsText"
        item-value="id"
        @click:row="logEvent('click:row', $event)"
        >
            <template #top>
                <CTextField v-model="searchCustom.search" :append-inner-icon="mdiMagnify" placeholder="Search" clearable/>
            </template>
        </CDataTable>
    </Variant>
    <Variant title="Server Side Table" auto-props-disabled>
        <CDataTable
        :headers="severSide.headers"
        :items="severSide.serverItems"
        :items-length="severSide.totalItems"
        :search="severSide.search"
        v-model:loading="severSide.loading"
        v-model:itemsPerPage="severSide.itemsPerPage"
        @update:options="loadItems"
        >
            <template #top>
                <CTextField v-model="severSide.search" :append-inner-icon="mdiMagnify" placeholder="Search" clearable/>
            </template>
        </CDataTable>
    </Variant>
</Story>
</template>

<docs lang="md">
# CDataTable
表形式でデータを表示する際に使用する、CTableコンポーネントの拡張部品です。
機能には、絞り込み、ページネーション、行の選択などがあります。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| customFilter | FilterFunction* | undefined | 項目の絞り込みをする関数 |
| customKeyFilter | `{[string]: FilterFunction*}` | undefined | 項目の特定のキーの絞り込みで使用される関数を指定 |
| density | 'default'/'comfortable'/'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| filterKeys | string/string[] | undefined | 項目をフィルターする特定のキーの文字列または配列を渡します |
| filterMode | 'every'/'some' | 'some' | 項目を照合するときに特定のフィルターを適用します。'some'はデフォルトで、項目の中のキーのどれかが検索語と一致している場合にtrueを返します。'every'は項目の全てのキーが検索語と一致している場合にtrueを返します。 |
| fixedFooter | boolean | false | コンポーネントのtheadの位置を固定します |
| fixedHeader | boolean | false | コンポーネントのtfootの位置を固定します |
| headers | {key:string, title:string, align?:'start'/'end'}[] | [] | 各ヘッダー列を記述するオブジェクトの配列 |
| height | string | 'auto' | table全体の高さを指定します |
| hover | boolean | false | trをhoverした時に背景色をつける際は指定します |
| items | any[] | [] | 子コンポーネントを自動生成するために使用される文字列またはオブジェクトの配列 |
| itemsLength | number | undefined | APIから一部の表示データを取得して表示する場合は、総件数を渡します |
| itemsPerPage | number | 10 | 最初に指定したい表示件数 |
| itemsPerPageOptions | Array<string/number> | [] | 表示件数の選択肢の配列 |
| itemValue | any | 'value' | 選択した場合に返されるプロパティを指定します |
| loading | boolean | false | コンポーネントの操作を制御する場合は指定します |
| modelValue | any[] | [] | checkboxで選択された項目の配列 |
| noDataText | string | 'データがありません。' | １件も表示されない場合に表示されるテキスト |
| page | string/number | 1 | 最初のページを指定します |
| showSelect | boolean | false | 左側にcheckboxを表示する場合は指定します |

* FilterFunction = `(value: string, query: string, item?: any) => boolean`

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| [`item.${header.key}`] | `{index: number, item: any}` | 動的slotを使用して特定の列の表示をカスタムできます。`header.key`はheader項目のキー`<key>`プロパティの名前を指定します |
| bottom | ItemProps* | tableの下部に表示するコンテンツを指定します |
| default | ItemProps* | tableに表示するコンテンツを指定します |
| tbody | ItemProps* | tbodyタグ内に表示するコンテンツを指定します |
| tfoot | ItemProps* | tfootタグ内に表示するコンテンツを指定します |
| thead | ItemProps* | theadタグ内に表示するコンテンツを指定します |
| top | ItemProps* | tableの上部に表示するコンテンツを指定します |
| loading |  | propsのloadingがtrueの時の表示内容を定義します |
| no-data |  | 表示するデータが一件もない場合のコンテンツを定義します |

* ItemProps*1 = `{page: number, itemsPerPage:string/number, allSelected:boolean, select:any[], items:any[], headers:any[]}`

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| click:row |  | テーブルの行がクリックされた時に発行されるイベントです |
| update:modelValue |  | 行の選択がされたときに発行されるイベントです。選択された行の`item[itemValue]`が返されます |
| update:itemsPerPage |  | テーブルの表示件数をセレクトボックス等で変更した場合に発行されるイベントです |
| update:loading |  | loadingが有効になった時に発行されるイベントです |
| update:options | `{page:number, itemPerPage:number, search?:string} `| 表示するデータを変更する場合(ページネーションや検索など)に、発行されるイベントです。 |

</docs>
