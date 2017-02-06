import Home from './components/home.vue'
import User from './components/user.vue'
import userDetails from './components/user.vue'
import userEdit from './components/user.vue'
export const vueRoutes = [
  {
    path: '/',
    component: Home
  }, {
  	path: '/user',
  	component: User
  }, {
  	path: '/userdetails',
  	component: userDetails
  }, {
  	path: '/useredit',
  	component: userEdit
  }]
