import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import FooterToolBar from '@/components/FooterToolbar'
import FileUpload from '@/components/FileUpload'

import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style
import config from '@/config/defaultSettings'
import { getDicts } from '@/api/system/dict/data'
import { getConfigKey } from '@/api/system/config'
import {
  parseTime,
  resetForm,
  addDateRange,
  selectDictLabel,
  selectDictLabels,
  download,
  handleTree
} from '@/utils/ruoyi'

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree
Vue.prototype.tableSize = config.tableSize
Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)
Vue.component('footer-tool-bar', FooterToolBar)
Vue.component('file-upload', FileUpload)

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
