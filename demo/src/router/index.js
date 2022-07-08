import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Sign from '../views/Sign.vue'
import PubUser from '../views/pubuser.vue'
import Books from '../views/Books.vue'
import AddBooks from '../views/AddBooks.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }, {
    path: '/Sign',
    name: 'Sign',
    component: Sign
  }, {
    path: '/PubUser',
    name: 'PubUser',
    component: PubUser
  }
  , {
    path: '/Books',
    name: 'Books',
    component: Books
  }
  , {
    path: '/AddBooks',
    name: 'AddBooks',
    component: AddBooks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
