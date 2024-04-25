<script setup lang="ts">
import { reactive } from 'vue'
import { deepClone } from '../../../utils'

interface paramsType {
  columns?: Record<any, string>
  dataSource?: object[]
  options?: Record<string, any>
  search?: object
  size?: string
}

const formItems = defineAsyncComponent(() => import('../form-items/index.vue'))
const props = withDefaults(defineProps<paramsType>(), {
  columns: () => {
    return {}
  },
  dataSource: () => [],
  options: () => {
    return {
      showMenu: true,
      showLeftMenu: true,
      showRightMenu: true,
    }
  },
  search: () => {
    return {}
  },
  size: 'middle',
})
const formItemsRef = ref<any>()
const state = reactive({
  open: false,
  loading: false,
  disabled: false,
  form: {},
  title: '',
})
const showModal = (modalType: string, dataSource: any) => {
  state.disabled = false
  if (modalType === 'add') {
    state.form = {}
    state.title = '新增'
  } else if (modalType === 'edit') {
    state.form = deepClone(dataSource)
    state.title = '编辑'
  } else if (modalType === 'view') {
    state.disabled = true
    state.form = deepClone(dataSource)
    state.title = '查看'
  }
  state.open = true
}
const handleOk = () => {
  state.loading = true
  setTimeout(() => {
    state.open = false
    state.loading = false
  }, 2000)
}
const handleCancel = () => {
  state.open = false
}
const afterClose = () => {
  state.form = {}
}
defineExpose({
  showModal,
  handleOk,
})
</script>

<template>
  <a-modal v-model:open="state.open" :title="state.title" width="55%" :afterClose="afterClose" :destroyOnClose="true">
    <a-form ref="formRef" :disabled="props.options.disabled || false" :model="state.form" :size="size"
            v-bind="{labelCol: { span: 5 }}">
      <a-row>
        <component :is="formItems" ref="formItemsRef" :columns="columns" :disabled="state.disabled" :options="options"
                   :size="size"
                   :search="state.form" :formType="'modal'"></component>
      </a-row>
    </a-form>
    <template #footer>
      <a-button key="back" @click="handleCancel">Cancel</a-button>
      <a-button key="submit" type="primary" :loading="state.loading" @click="handleOk">Submit</a-button>
    </template>
  </a-modal>
</template>

<style scoped lang="less">

</style>