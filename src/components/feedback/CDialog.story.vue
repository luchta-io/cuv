<script setup lang="ts">
import { reactive } from 'vue';
import CDialog from '@/components/feedback/CDialog.vue';
import CButton from '@/components/form/CButton.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    type: 'alert'|'confirm';
    isActive: boolean;
    overscroll: boolean;
    cancelText: string;
    confirmText: string;
    confirmColor: string;
} = reactive({
    type: 'confirm',
    isActive: false,
    overscroll: false,
    cancelText: 'キャンセル',
    confirmText: '確認',
    confirmColor: '',
})
</script>
<template>
<Story title="Feedback / Dialog">
    <Variant title="Alert">
        <c-button @click="data.isActive=true" color="danger">Alertダイアログを表示</c-button>
        <c-dialog 
        type="alert" 
        v-model="data.isActive" 
        :overscroll="data.overscroll"
        :cancel-text="data.cancelText"
        :confirm-text="data.confirmText"
        :confirm-color="data.confirmColor"
        @close="data.isActive=false"
        >
            <c-box>
                Alert
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
                ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。ダイアログの見本です。
            </c-box>
        </c-dialog>
        <template #controls>
            <HstCheckbox 
                v-model="data.isActive"
                title="isActive"
            />
            <HstCheckbox 
                v-model="data.overscroll"
                title="overscroll"
            />
            <HstText
                v-model="data.confirmText"
                title="confirmText"
            />
            <HstText
                v-model="data.cancelText"
                title="cancelText"
            />
            <HstSelect 
                v-model="data.confirmColor"
                title="confirmColor"
                :options="[
                    {value: 'white', label: 'white'},
                    {value: 'black', label: 'black'},
                    {value: 'light', label: 'light'},
                    {value: 'dark', label: 'dark'},
                    {value: 'primary', label: 'primary'},
                    {value: 'link', label: 'link'},
                    {value: 'success', label: 'success'},
                    {value: 'danger', label: 'danger'},
                    {value: 'warning', label: 'warning'},
                    {value: 'info', label: 'info'},
                ]"
            />
        </template>
    </Variant>
    <Variant title="Confirm">
        <c-button @click="data.isActive=true" color="success">Confirmダイアログを表示</c-button>
        <c-dialog v-model="data.isActive" @close="data.isActive=false">
            <c-box>
                ダイアログの見本です。
            </c-box>
        </c-dialog>
        <template #controls>
            <HstCheckbox 
                v-model="data.isActive"
                title="isActive"
            />
            <HstCheckbox 
                v-model="data.overscroll"
                title="overscroll"
            />
            <HstText
                v-model="data.confirmText"
                title="confirmText"
            />
            <HstText
                v-model="data.cancelText"
                title="cancelText"
            />
            <HstSelect 
                v-model="data.confirmColor"
                title="confirmColor"
                :options="[
                    {value: 'white', label: 'white'},
                    {value: 'black', label: 'black'},
                    {value: 'light', label: 'light'},
                    {value: 'dark', label: 'dark'},
                    {value: 'primary', label: 'primary'},
                    {value: 'link', label: 'link'},
                    {value: 'success', label: 'success'},
                    {value: 'danger', label: 'danger'},
                    {value: 'warning', label: 'warning'},
                    {value: 'info', label: 'info'},
                ]"
            />
        </template>

    </Variant>
</Story>
</template>
<docs lang="md">
# Dialog

ユーザーに重要な情報、応答が必要となる通知をします。

## Props

| Name        | Type                | Default    | Description                                        
| ----------  | ------------------- | ---------  | -------------------------------------------------- 
| modelValue  | boolean             | false      | ダイアログを表示するかどうか                            
| type        | "alert" / "confirm" | "confirm"  | ダイアログのタイプを選ぶ                               
| overscroll  | boolean             | false      | モーダル内の表示が多い時にスクロールをするかどうか         
| cancelText  | string              | "キャンセル" | 取り消す、無効にするボタンの表記                                                  
| confirmText | string              | "確認"      | 承諾、確認のためのボタンの表記                                                   
| confirmColor| string              | "success"  | 通知に対する承諾ボタンの色                                                   
</docs>