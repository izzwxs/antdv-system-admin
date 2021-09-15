import router from './router'
import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN, SYSTEM_TYPE } from '@/store/mutation-types'
import { i18nRender } from '@/locales'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const allowList = ['select'] // no redirect allowList
const loginRoutePath = '/user/login'
const selectRoutePath = '/select'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)
  /* has token */
  if (storage.get(SYSTEM_TYPE)) {
    if (storage.get(ACCESS_TOKEN)) {
      // check login user.roles is null
      if (store.getters.roles.length === 0) {
        // request login userInfo
        store
          .dispatch('GetInfo')
          .then(res => {
            // const roles = res.result && res.result.role
            const roles = res.roles
            // generate dynamic router
            store.dispatch('GenerateRoutes', { roles })
              .then(() => {
                store.getters.addRouters.forEach(element => {
                  router.addRoute(element)
                })
                next({ ...to, replace: true })
            })
          })
          .catch(() => {
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
            // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
            store.dispatch('Logout').then(() => {
              location.href = '/index'
            })
          })
      } else {
        next()
      }
    } else {
      if (to.path === loginRoutePath) {
        // 在免登录名单，直接进入
        next()
      } else {
        next({ path: loginRoutePath })
        NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
      }
    }
  } else {
    if (to.path === selectRoutePath) {
      next()
    } else {
      next({ path: selectRoutePath })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
