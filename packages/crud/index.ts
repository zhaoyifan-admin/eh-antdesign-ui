import type { App } from 'vue'
import EhCrud from './EhCrud.vue'

// 使用install方法，在app.use挂载
EhCrud.install = (app: App): void => {
  app.component(EhCrud.__name as string, EhCrud)
}

export default EhCrud
