// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'
import events from '@/events'
import feed from '@/feed'
import groups from '@/groups'
import index from '@/index'
import posts from '@/posts'
import profile from '@/profile'
import relationships from '@/relationships'
import Person from '@/modules/Person'

Vue.use(VueRouter)
Vue.config.productionTip = false

const person = new Person()
person.authorize()

const routes = [
  { path: '/', component: index },
  { path: '/events', component: events },
  { path: '/feed', component: feed },
  { path: '/groups', component: groups },
  { path: '/posts', component: posts },
  { path: '/profile', component: profile },
  { path: '/relationships', component: relationships }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#social_network',
  router,
  render: h => h(App)
})

// new Vue({
//   el: '#social_network',
//   router
//   template: '<App/>',
//   components: { App }
// })
