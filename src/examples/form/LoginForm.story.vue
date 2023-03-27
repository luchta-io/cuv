<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import {mdiEye, mdiEyeOff} from "@mdi/js";
import CBox from "@/components/layout/CBox.vue";
import CStack from "@/components/layout/CStack.vue";
import CTextField from "@/components/form/CTextField.vue";
import CButton from "@/components/form/CButton.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CCenter from "@/components/layout/CCenter.vue";
import CCover from "@/components/layout/CCover.vue";
import CSheet from "@/components/surface/CSheet.vue";
import COverlay from "@/components/overlay/COverlay.vue";
import CProgress from "@/components/feedback/CProgress.vue";

const input = reactive({
  email: '',
  password: '',
})

const errors: {
  email: string[],
  password: string[]
} = reactive({
  email: [],
  password: [],
})

const invalid = computed(() => {
  return !!errors.email.length
      || !!errors.password.length
})

const passwordShowing = ref(false)

const failed = ref<string[]>([])

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
    errors.email = []
    const empty = rules.required(input.email)
    if (empty) {
      errors.email.push(empty)
      return
    }
    const invalidPattern = rules.email(input.email)
    if (invalidPattern) errors.email.push(invalidPattern)
  },
  password() {
    errors.password = []
    const empty = rules.required(input.password)
    if (empty) errors.password.push(empty)
  },
  all() {
    this.email()
    this.password()
  },
}

const doLogin = async () => {
  if (processing.value) return
  validator.all()
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
  if (!response.ok) {
    failed.value = []
    failed.value.push('メールアドレスまたはパスワードが間違っています')
  }
  processing.value = false
}
</script>

<template>
  <Story title="Form / LoginForm" auto-props-disabled>
    <c-sheet color="light">
      <CCover>
          <h1>ex. Login Form</h1>
          <CCenter>
            <c-sheet color="white" elevation="medium">
              <CBox>
                <form novalidate
                      @submit.prevent="doLogin">
                  <CStack>
                    <c-sheet v-if="failed.length" color="danger">
                      <c-box padding="small">
                        <div v-for="(msg, index) of failed" :key="index" class="text-white">
                          {{ msg }}
                        </div>
                      </c-box>
                    </c-sheet>
                    <c-cluster justify="center">
                      <img src="https://placehold.jp/100x100.png"/>
                    </c-cluster>
                    <CTextField type="email"
                                v-model="input.email"
                                label="email"
                                placeholder="example@example.com"
                                :error="!!errors.email.length || !!failed.length"
                                :error-message="errors.email"
                                @blur="validator.email"
                    />
                    <CTextField :type="passwordShowing ? 'text' : 'password'"
                                v-model="input.password"
                                label="password"
                                :append-icon="passwordShowing ? mdiEye : mdiEyeOff"
                                :error="!!errors.password.length || !!failed.length"
                                :error-message="errors.password"
                                @click:append="passwordShowing = !passwordShowing"
                                @blur="validator.password"
                    />
                    <CCluster justify="space-between"
                              align="center">
                      <CButton color="primary" :disabled="processing">
                        ログイン
                        <c-overlay v-model="processing" contained disabled>
                          <template v-if="processing">
                            <c-progress size="small" width="thin" color="link"/>
                          </template>
                        </c-overlay>
                      </CButton>
                      <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
                        パスワードを忘れた方はこちら
                      </a>
                    </CCluster>
                  </CStack>
                </form>
              </CBox>
            </c-sheet>
          </CCenter>
          <p class="mx-auto">Copyright ©︎ Sample Login Form</p>
      </CCover>
    </c-sheet>
    <template #source>
      <textarea v-pre>
      </textarea>
    </template>
  </Story>
</template>
