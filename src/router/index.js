import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ShowBook from '@/components/ShowBook'
import CreateBook from '@/components/CreateBook'
import EditBook from '@/components/EditBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },	
    {
      path: '/show-book/:id',
      name: 'ShowBook',
      component: ShowBook
    },
    {
      path: '/add-book',
      name: 'CreateBook',
      component: CreateBook
    },
    {
      path: '/edit-book/:id',
      name: 'EditBook',
      component: EditBook
    }
  ]
})

