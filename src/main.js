import { sync } from 'vuex-router-sync'

import router from './vuex/router'
import store from './vuex/store'
import App from './pages/App'

sync(store, router)

router.start(App, '#app')
