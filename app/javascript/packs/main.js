import Vue from 'vue/dist/vue.esm.js'
import Router from './router/router'
import Header from './components/header.vue'
import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'




Vue.use(require('vue-moment'))
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
    cache: new InMemoryCache()
  })
})






var app = new Vue({
  router: Router,
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  components: {
    'navbar': Header,
     template: '<App/>'

  }
});
