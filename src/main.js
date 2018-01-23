import Vue from 'vue'
import App from './App'
import moment from 'moment'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.prototype['$moment'] = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
