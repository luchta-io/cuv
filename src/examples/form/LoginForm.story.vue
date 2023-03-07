<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import CBox from "@/components/layout/CBox.vue";
import CStack from "@/components/layout/CStack.vue";
import CTextField from "@/components/form/CTextField.vue";
import CButton from "@/components/form/CButton.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CCenter from "@/components/layout/CCenter.vue";
import CCover from "@/components/layout/CCover.vue";

const input = reactive({
  email: '',
  password: '',
})

const errors = reactive({
  email: '',
  password: '',
})

const invalid = computed(() => {
  return !!(errors.email || errors.password)
})

const failed = ref("")

const processing = ref(false)

const rules = {
  required: (value: any) => {
    return value ? '' : '必須項目です'
  },
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) ? '' : 'メールアドレスの形式が不正です'
  }
}

const validator = {
  email() {
    errors.email = ''
    errors.email = rules.required(input.email)
    if (errors.email) return
    errors.email = rules.email(input.email)
    if (errors.email) return
  },
  password() {
    errors.password = ''
    errors.password = rules.required(input.password)
    if (errors.password) return
  },
  all() {
    this.email()
    this.password()
  },
}

const doLogin = async () => {
  if (processing.value) return
  if (invalid.value) return

  processing.value = true
  const status = input.email == 'example@example.com' ? '200' : '401'
  const response = await fetch(`https://httpbin.org/status/${status}`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(input)
  })
  processing.value = false
  failed.value = response.ok ? '' : 'メールアドレスまたはパスワードが間違っています'
}
</script>

<template>
  <Story title="Form / LoginForm"
         auto-props-disabled>
    <CCover style="background: lightgray">
      <h1>ex. Login Form</h1>
      <CCenter>
        <!-- TODO backgroundの色指定はCardに任せる -->
        <CBox style="background: white;">
          <form novalidate
                @submit.prevent="doLogin">
            <CStack>
              <!-- TODO Alertへ差し替える -->
              <p v-if="failed" class="text-[var(--jupiter-danger-text)]">
                {{ failed }}
              </p>
              <CTextField type="email"
                          v-model="input.email"
                          label="email"
                          placeholder="example@example.com"
                          :is-error="!!errors.email || !!failed"
                          @blur="validator.email"
              >
                <template #errorMessage>
                  {{ errors.email }}
                </template>
              </CTextField>
              <CTextField type="password"
                          v-model="input.password"
                          label="password"
                          :is-error="!!errors.password || !!failed"
                          @blur="validator.password"
              ><!-- TODO Passwordの表示/非表示を切り替える処理を入れる -->
                <template #errorMessage>
                  {{ errors.password }}
                </template>
              </CTextField>
              <CCluster justify="space-between"
                        align="center">
                <!-- TODO Progressを使う  -->
                <CButton color="primary"
                         :disabled="processing">
                  {{ processing ? '処理中...' : 'ログイン' }}
                </CButton>
                <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
                  パスワードを忘れた方はこちら
                </a>
              </CCluster>
            </CStack>
          </form>
        </CBox>
      </CCenter>
    </CCover>
    <template #source>
      <textarea v-pre>
      </textarea>
    </template>
  </Story>
</template>
