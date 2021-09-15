<template>
  <div class="home">
    <a-row :gutter="48">
      <a-col :span="12">
        <a-card title="智慧社区管理系统">
          <a-button type="primary" @click="goShequDev">测试环境</a-button>
          <a-button type="danger" @click="goShequPro">正式环境</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="共享单车管理系统">
          <a-button type="primary" @click="goDancheDev">测试环境</a-button>
          <a-button type="danger" @click="goDanchePro">正式环境</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="预付宝管理系统">
          <a-button type="primary" @click="goYufubaoDev">测试环境</a-button>
          <a-button type="danger" @click="goYufubaoPro">正式环境</a-button>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import storage from 'store'
import { SYSTEM_TYPE } from '@/store/mutation-types'

export default {
  name: 'Select',
  methods: {
    goShequDev () {
      storage.set(SYSTEM_TYPE, 'SHEQU_DEV')
      this.$router.push('/user/login')
    },
    goShequPro () {},
    goDancheDev () {
      storage.set(SYSTEM_TYPE, 'DANCHE_DEV')
      this.$router.push('/user/login')
    },
    goDanchePro () {},
    goYufubaoDev () {
      storage.set(SYSTEM_TYPE, 'YUFUBAO_DEV')
      this.$router.push('/user/login')
    },
    goYufubaoPro () {}
  }
}
</script>

<style lang="less" scoped>
.home {
  padding: 48px;
}
</style>
