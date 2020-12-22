import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import Egresos from './components/Egresos'
import App from './App'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: "user",
      component: User
    },
    {
      path: '/ingresos/',
      name: "user_balance",
      component: UserBalance
    },
    {
      path: '/egresos/',
      name: 'user_egresos',
      component: Egresos
    }
  ]
})
export default router