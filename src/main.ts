import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/global.less'


import EhAntdesignUI from '../packages'
// import EhAntdesignUI from '../dist/eh-antdesign-ui.js'
// import '../dist/style.css'

// import EhAntdesignUI from 'eh-antdesign-ui'
// import 'eh-antdesign-ui/css'

const app = createApp(App)
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(router).use(EhAntdesignUI).mount('#app')
