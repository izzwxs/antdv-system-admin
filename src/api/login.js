import request from '@/utils/request'
import storage from 'store'
import { SYSTEM_TYPE } from '@/store/mutation-types'
import { APIURL } from '@/config/api.config'

export function login(parameter) {
  return request({
    url: `${APIURL[storage.get(SYSTEM_TYPE)].AUTH_URL}/login`,
    method: 'post',
    data: parameter
  })
}

export function logout() {
  return request({
    url: `${APIURL[storage.get(SYSTEM_TYPE)].AUTH_URL}/logout`,
    method: 'post'
  })
}

export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

export function getRouters() {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}
