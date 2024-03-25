import DefaultTheme from 'vitepress/theme'
import './global.less' // global less
// import EhAntdesignUI from 'eh-antdesign-ui'
// import 'eh-antdesign-ui/css'
import EhAntdesignUI from '../../../dist/eh-antdesign-ui'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(EhAntdesignUI)
  }
}
