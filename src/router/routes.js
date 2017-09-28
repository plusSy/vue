const Hello = () => import('@/views/hello/index.vue')
const Mocks = () => import('@/views/mock')

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/mock',
    name: 'Mock',
    component: Mocks
  }
]

export default routes
