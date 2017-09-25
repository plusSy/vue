const Hello = () => import('@/components/hello/index.vue')

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
]

export default routes
