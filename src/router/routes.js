const Hello = () =>
  import('@/views/hello/index.vue')
const Mocks = () =>
  import('@/views/mock')
const elementUI = () =>
  import('@/views/elementUI')
const newElement = () =>
  import('@/views/newElement/newIndex')
const NewMock = () =>
  import('@/views/newMock')
const ES6Demo = () =>
  import('@/views/function/es6-demo/es6.vue')
const Validate = () => import('@/views/validate/index')
const RouterCom = () => import('@/views/routerCom/index')
const RouterComA = () => import('@/views/routerCom/child/a')
const RouterComB = () => import('@/views/routerCom/child/b')
const Infinite = () => import('@/views/infinite')
const Sort = () => import('@/views/sortData')

const routes = [{
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
},
{
  path: '/es6Demo',
  name: 'es6Demo',
  component: ES6Demo
},
{
  path: '/validate',
  name: 'validate',
  component: Validate
},
{
  path: '/infinite',
  name: 'infinite',
  component: Infinite
},
{
  path: '/router',
  name: 'router',
  component: RouterCom,
  children: [
    {
      path: '/router/a',
      name: 'a',
      component: RouterComA
    },
    {
      path: '/router/b',
      name: 'b',
      component: RouterComB
    }
  ]
},
{
  path: '/sort',
  name: 'sort',
  component: Sort
}
]

export default routes
