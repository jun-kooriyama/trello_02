import Vue from 'vue/dist/vue.esm.js'
import router from './router/router'
import Header from './components/header.vue'
import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'



Vue.config.productionTip = false

// install the vue-momnet plugin
Vue.use(require('vue-moment'))
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
    cache: new InMemoryCache()
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  components: { Header },
  template: '<Header/>'
  // components: {
  //   'navbar': Header,
  // }

})
