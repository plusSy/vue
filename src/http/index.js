import store from '../store'
import axios from 'axios'
import qs from 'qs'

const { interceptors } = axios

// axios.defaults.baseURL = config.baseUrl
// axios.defaults.baseURL = 'https://www.baidu.com/s?ie=UTF-8&wd=%E5%93%88%E5%93%88%E5%93%88'

let data = sessionStorage.getItem('authorInformation')
if (data) {
  const user = JSON.parse(data)
  axios.defaults.headers.common.Authorization = user.token
  axios.defaults.headers.common['User-Id'] = user.userId
}

axios.get('static/config.json', {}).then(res => {
  console.log('本地文件配置: ', res)
})

const interceptorUrl = (config, store) => {
  const { method, data } = config
  if (method === 'post') {
    config.data = qs.stringify(data)
  }
  // handleLoading(config.url, 'req', store)
  return config
}

/**
 *  @param { String } id The loading change the store loading id
 *  @param { String } type The type has two kinds, res, req
 *  @param { Object } store The store comes from vuex
 */

// const handleLoading = (id, type, store) => {
//   const { commit, state: { cms: { loading } } } = store
//   if ( type === 'req' && loading.show) {
//     commit('CMS_SET_LOADING', {loading: { id } })
//     return
//   }
//   if (type === 'res' && loading.show && loading.id === id) {
//     commit('CMS_SET_LOADING', {loading: { show: false, id: ''}})
//     return
//   }
//   commit('CMS_SET_LOADING', {loading: { show: false, id: ''}})
// }

interceptors.request.use(function (config) {
  return interceptorUrl(config, store)
}, function (error) {
  return Promise.reject(error)
})

interceptors.response.use(function (response) {
  if (Number(response.data.code) === 500) {
    window.location.href = '/login'
    return
  }
  // handleLoading(response.config.url, 'res', store)
  return response
}, function (error) {
  // handleLoading(error, 'err', store)
  console.log(error)
  return error
})

export default axios
