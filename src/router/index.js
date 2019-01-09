import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '../components/PagesView'
import Home from '../components/Home'
import ListContentView from '../components/pageview/ListContentView'
import HotMovie from '../components/HotMovie'
import MovieView from '../components/pageview/MovieView'
import ActorView from '../components/pageview/ActorView'
import EuropeMusic from  '../components/EuropeMusic'
import Register from '../components/Register'
import Login from '../components/Login'
import MusicView from '../components/pageview/MusicView'
import Movies from '../components/HomeChildren/Movies'
import Book from '../components/HomeChildren/Book'
import BookView from '../components/pageview/BookView'
import Status from '../components/HomeChildren/Status'
import Group from '../components/HomeChildren/Group'
import SearchView from '../components/pageview/SearchView'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children:[
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'movies',
          name: 'Movies',
          component: Movies
        },
        {
          path: 'book',
          name: 'Book',
          component: Book
        },
        {
          path: 'status',
          name: 'Status',
          component: Status
        },
        {
          path: 'group',
          name: 'Group',
          component: Group
        }
      ]
    },
    {
      path: '/list/:evid',
      name: 'ListContentView',
      component: ListContentView
    },
    {
      path: '/hotmovie',
      name: 'HotMovie',
      component: HotMovie
    },
    {
      path: '/movie/:id',
      name: 'MovieView',
      component: MovieView
    },
    {
      path: '/actor/:acid',
      name: 'ActorView',
      component: ActorView
    },
    {
      path: '/europemusic',
      name: 'EuropeMusic',
      component: EuropeMusic
    },
    {
      path: '/music/:mcid',
      name: 'MusicView',
      component: MusicView
    },
    {
      path: '/book/:bkid',
      name: 'BookView',
      component: BookView
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/search?=:val',
      name: 'SearchView',
      component: SearchView
    }
  ]
})
