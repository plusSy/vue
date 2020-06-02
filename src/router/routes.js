const Hello = () => import('@/views/hello/index.vue')
const Mocks = () => import('@/views/mock')
const elementUI = () => import('@/views/elementUI')
const newElement = () => import('@/views/newElement/newIndex')
const NewMock = () => import('@/views/newMock')
const ES6Demo = () => import('@/views/function/es6-demo/es6.vue')

const Validate = () => import('@/views/validate/index')
const RouterCom = () => import('@/views/routerCom/index')
const RouterComA = () => import('@/views/routerCom/child/a')
const RouterComB = () => import('@/views/routerCom/child/b')
const Infinite = () => import('@/views/infinite')
const Sort = () => import('@/views/sortData')
const TableFilter = () => import('@/views/tableFilter')
const TableMock = () => import('@/views/tableMock')
const Echarts = () => import('@/views/echarts')

const TemplateRender = () => import('@/views/templateRender')
const Nest = () => import('@/views/nest')
const PageDetail = () => import('@/views/pageDetail')
const TableCheck = () => import('@/views/tableCheck')

const Address = () => import('@/views/address/index.vue')
const TemplateTest = () => import('@/views/templateTest/templateTest.vue')

const FromExample = () => import('@/views/fromExample/index.vue')

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
},
{
  path: '/tableFilter',
  name: 'tableFilter',
  component: TableFilter
},
{
  path: '/tableMock',
  name: 'tableMock',
  component: TableMock
},
{
  path: '/templateRender',
  name: 'templateRender',
  component: TemplateRender
},
{
  path: '/echarts',
  name: 'echarts',
  component: Echarts
},
{
  path: '/nest',
  name: 'nest',
  component: Nest
},
{
  path: '/pageDetail',
  name: 'pageDetail',
  component: PageDetail
},
{
  path: '/tableCheck',
  name: 'tableCheck',
  component: TableCheck
},
{
  path: '/address',
  name: 'address',
  component: Address
},
{
  path: '/templateTest',
  name: 'templateTest',
  component: TemplateTest
},
{
  path: '/fromExample',
  name: 'fromExample',
  component: FromExample
}
]

export default routes
