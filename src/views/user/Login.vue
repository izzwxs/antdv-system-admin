<template>
  <div class="main">
    <a-form-model ref="form" :model="form" :rules="rules">
      <a-form-model-item prop="phone">
        <a-input v-model="form.phone" size="large" >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input-password v-model="form.password" size="large">
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input-password>
      </a-form-model-item>
      <a-form-item style="margin-top:24px">
        <a-button
          block
          size="large"
          type="primary"
          :loading="logining"
          @click="handleSubmit"
        >
          确定
        </a-button>
      </a-form-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'

export default {
  data () {
    return {
      form: {
        type: 1,
        phone: '',
        password: ''
      },
      rules: {
        phone: [{ required: true, message: '请输入帐户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      logining: false
    }
  },
  methods: {
    ...mapActions(['Login']),
    handleSubmit () {
      this.logining = true
      this.$refs.form.validate(valid => {
        if (!valid) return (this.logining = false)
          this.Login(this.form)
            .then((res) => this.loginSuccess(res))
            .catch((err) => this.loginFaild(err))
      })
    },
    loginSuccess (res) {
      this.$router.push({ path: '/' })
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
    },
    loginFaild (err) {
      console.log(err)
      this.logining = false
    }
  }
}
</script>
