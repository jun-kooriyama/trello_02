import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import user from '../components/user.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: user },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
  ],
})
