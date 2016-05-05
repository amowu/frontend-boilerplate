import Vue from 'vue'
import store from './vuex/store'
import Todos from './containers/Todos'

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { Todos }
})
