<script lang="ts" setup name="eh-components-form-item">
const globalComponents = defineAsyncComponent(() => import('../global-components/index.vue'))

interface paramsType {
  columns?: any
  dataSource?: object[]
  disabled?: boolean
  formType?: string
  options?: Record<string, any>
  search?: object
  size?: string
}

const props = withDefaults(defineProps<paramsType>(), {
  columns: () => {
    return {}
  },
  dataSource: () => [],
  disabled: false,
  formType: '',
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
  size: 'middle', //search: 查询表单 | modal: 弹框表单
})
const globalComponentsRef = ref<any>()
</script>
<template>
  <template v-for="(colitem, index) in columns" :key="index">
    <a-col v-if="formType === 'search'" :span="colitem['span'] || options.searchSpan || 6">
      <a-form-item v-if="!colitem['children']" :has-feedback="colitem['feedback']" :name="colitem['dataIndex']"
                   :rules="[{ required: true, message: `请输入 ${colitem['title']}` }]">
        <template #label>
          <!--          查询表单-->
          <slot :name="colitem['dataIndex'] + 'searchLabel'"
                :ehscope="{row:colitem, size:size}">
            {{ colitem['title'] }}
          </slot>
        </template>
        <template #default>
          <slot :name="colitem['dataIndex'] + 'Edit'" :ehscope="{row:colitem, size:size}">
            <component :is="globalComponents" ref="globalComponentsRef" :colitem="colitem" :disabled="disabled"
                       :options="options" :size="size" :Form="search"></component>
          </slot>
        </template>
      </a-form-item>
    </a-col>
    <a-col v-if="formType === 'modal'" :span="colitem['span'] || options['span'] || 12">
      <a-form-item v-if="!colitem['children']" :has-feedback="colitem['feedback']" :name="colitem['dataIndex']"
                   :rules="[{ required: true, message: `请输入 ${colitem['title']}` }]">
        <template #label>
          <!--          弹框表单-->
          <slot :name="colitem['dataIndex'] + 'Label'" :ehscope="{row:colitem, size:size}">
            {{ colitem['title'] }}
          </slot>
        </template>
        <template #default>
          <slot :name="colitem['dataIndex'] + 'Edit'" :ehscope="{row:colitem, size:size}">
            <component :is="globalComponents" ref="globalComponentsRef" :colitem="colitem" :disabled="disabled"
                       :options="options" :size="size" :Form="search"></component>
          </slot>
        </template>
      </a-form-item>
    </a-col>
  </template>
</template>

<style lang="scss" scoped>

</style>