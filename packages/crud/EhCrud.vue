<script setup lang="ts">
interface paramsType {
  columns?: Record<any, string>
  loading?: boolean
  showHelpModal?: boolean
  size?: string
  tableDate?: object[]
  options?: Record<string, any>
}

const tipsModal = defineAsyncComponent(() => import('./components/tipsModal.vue'))
const tipsModalRef = ref<any>()
const props = withDefaults(defineProps<paramsType>(), {
  columns: () => {
    return {}
  },
  loading: false,
  showHelpModal: true,
  size: 'small',
  tableDate: () => [],
  options: () => {
    return {
      showMenu: true,
      showLeftMenu: true,
      showRightMenu: true,
    }
  },
})
const handleClick = () => {
  tipsModalRef.value.handleOpen()
}
</script>

<template>
  <div>
    <a-row class="mb10" v-if="options.showMenu || true">
      <a-col :span="12" v-if="options.showLeftMenu || true">
        <a-button type="primary">
          <template #icon>
            <i class="plugins icon-xinzeng"></i>
          </template>
          新增
        </a-button>
      </a-col>
      <a-col class="eh-menu-right t-right" :span="12" v-if="options.showRightMenu || true">
        <a-space size="small">
          <i class="plugins icon-shuaxin font-23"></i>
          <i class="plugins icon-dayin font-23"></i>
          <i class="plugins icon-xiazai font-23"></i>
          <i class="plugins icon-shezhi font-23"></i>
          <i class="plugins icon-gengduogongneng font-23"></i>
        </a-space>
      </a-col>
    </a-row>
    <a-table
      :columns="columns"
      :data-source="tableDate"
      :loading="loading"
      :size="size"
      :bordered="options.bordered"
    >

    </a-table>
    <a-float-button v-if="showHelpModal" tooltip="使用帮助" @click="handleClick" />
    <component :is="tipsModal" ref="tipsModalRef"></component>
  </div>
</template>

<style scoped lang="less">
.eh-menu-right {
  .plugins {
    font-weight: 300;
  }
}

</style>