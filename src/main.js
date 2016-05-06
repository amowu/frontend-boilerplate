import { sync } from 'vuex-router-sync'

import App from './pages/App'
import store from './vuex/store'
import router from './router'

sync(store, router)

router.start(App, '#app')
