import { UserLayout } from '@/layouts'

/**
 * 首页
 */
export const indexRouterMap = [
  {
    path: '/index',
    name: 'index',
    component: 'Index',
    meta: { title: '首页', keepAlive: true, icon: 'dashboard' }
  },
  {
    path: '/monitor/job/log',
    name: 'JobLog',
    component: 'JobLog',
    meta: { title: '调度日志', keepAlive: true },
    hidden: true
  },
  {
    path: '/system/notice/form',
    name: 'NoticeForm',
    component: 'NoticeForm',
    meta: { title: '公告编辑', keepAlive: true },
    hidden: true
  },
  {
    path: '/gen/edit',
    name: 'GenEdit',
    component: 'GenEdit',
    meta: { title: '修改生成配置', keepAlive: true },
    hidden: true
  }
]
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/select',
    name: 'select',
    component: () => import('@/views/select')
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/Login')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  }
]
