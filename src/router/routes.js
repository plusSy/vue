const Hello = () => import('@/views/hello/index.vue')
const Mocks = () => import('@/views/mock')
const elementUI = () => import('@/views/elementUI')
const newElement = () => import('@/views/newElement/newIndex')
const NewMock = () => import('@/views/newMock')

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
  },
  {
    path: '/elementUI',
    name: 'elementUI',
    component: elementUI
  },
  {
    path: '/newElement',
    name: 'newElement',
    component: newElement
  },
  {
    path: '/mock2',
    name: 'mock2',
    component: NewMock
  }
]

export default routes
