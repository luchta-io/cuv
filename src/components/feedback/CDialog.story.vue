<script setup lang="ts">
import { reactive } from 'vue';
import CDialog from '@/components/feedback/CDialog.vue';
import CButton from '@/components/form/CButton.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    type: 'alert'|'confirm';
    isActive: boolean;
    cancelText: string;
    confirmText: string;
    alertConfirmColor: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    confirmColor: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
} = reactive({
    type: 'confirm',
    isActive: false,
    cancelText: 'キャンセル',
    confirmText: '確認',
    alertConfirmColor: 'danger',
    confirmColor: 'success',
})
</script>
<template>
<Story title="Feedback / Dialog">
    <Variant title="Alert">
        <c-button @click="data.isActive=true" color="danger">Alertダイアログを表示</c-button>
        <c-dialog 
        type="alert" 
        :is-active="data.isActive" 
        :cancel-text="data.cancelText"
        :confirm-text="data.confirmText"
        :confirm-color="data.alertConfirmColor"
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
            <HstText
                v-model="data.confirmText"
                title="confirmText"
            />
            <HstText
                v-model="data.cancelText"
                title="cancelText"
            />
            <HstSelect 
                v-model="data.alertConfirmColor"
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
        <c-dialog :is-active="data.isActive" @close="data.isActive=false">
            <c-box>
                ダイアログの見本です。
            </c-box>
        </c-dialog>
        <template #controls>
            <HstCheckbox 
                v-model="data.isActive"
                title="isActive"
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
| cancelText  | string              | "キャンセル" | 取り消す、無効にするボタンのテキスト                                                  
| confirmText | string              | "確認"      | 承諾、確認のためのボタンのテキスト                                            
| confirmColor| string              | "success"  | 通知に対する承諾ボタンの色                                                   
</docs>