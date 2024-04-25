<script setup lang="ts" name="eh-compontent-search-form">
const formItems = defineAsyncComponent(() => import('../form-items/index.vue'))

interface paramsType {
  columns?: Record<any, string>
  dataSource?: object[]
  options?: Record<string, any>
  search?: object
  size?: string
}

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
const emit = defineEmits(['searchChange', 'searchReset'])
const formItemsRef = ref<any>()
const formRef = ref()
const state = reactive({
  validateLoading: false,
})
const done = () => {
  state.validateLoading = false
}
const handleValidate = () => {
  formRef.value
    .validate()
    .then((res: any) => {
      state.validateLoading = true
      emit('searchChange', res, done)
    })
    .catch((error: any) => {
      console.log('error', error)
    })
}
const resetForm = () => {
  formRef.value.resetFields()
  state.validateLoading = false
  emit('searchReset')
}
</script>

<template>
  <a-form v-if="props.options.showSearch || true" :disabled="props.options.disabled || false" :model="search"
          :size="size" ref="formRef">
    <a-row :gutter="16">
      <component :is="formItems" ref="formItemsRef" :columns="columns" :options="options" :size="size" :search="search"
                 :formType="'search'"></component>
      <a-col :span="6" :style="{textAlign: props.options.searchMenuPosition || 'center'}">
        <a-button type="primary" :size="size" :loading="state.validateLoading" @click="handleValidate">
          <template #icon>
            <i class="plugins icon-chazhao mr-5"></i>
          </template>
          Submit
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm">
          <template #icon>
            <i class="plugins icon-qingkong mr-5"></i>
          </template>
          Reset
        </a-button>
      </a-col>
    </a-row>
  </a-form>
</template>

<style scoped lang="less">

</style>