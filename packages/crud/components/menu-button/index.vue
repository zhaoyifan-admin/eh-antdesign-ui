<script setup lang="ts">
interface paramsType {
  columns?: Record<any, string>
  loading?: boolean
  showHelpModal?: boolean
  size?: string
  dataSource?: object[]
  options?: Record<string, any>
}

const Modal = defineAsyncComponent(() => import('../modal/index.vue'))
const ModalRef = ref<any>()
const props = withDefaults(defineProps<paramsType>(), {
  columns: () => {
    return {}
  },
  size: 'small',
  dataSource: () => [],
  options: () => {
    return {
      showMenu: true,
      showLeftMenu: true,
      showRightMenu: true,
    }
  },
})
const emit = defineEmits(['handleRefresh'])
const handleAdd = () => {
  ModalRef.value.showModal('add')
}
const handleRefresh = () => {
  emit('handleRefresh')
}
</script>

<template>
  <a-row class="mb10" v-if="options.showMenu || true">
    <a-col class="eh-menu-left" :span="12" v-if="options.showLeftMenu || true">
      <a-button type="primary" @click="handleAdd">
        <template #icon>
          <i class="plugins icon-xinzeng"></i>
        </template>
        新增
      </a-button>
      <slot name="menuLeft"></slot>
    </a-col>
    <a-col class="eh-menu-right t-right" :span="12" v-if="options.showRightMenu || true">
      <slot name="menuRight"></slot>
      <a-space size="small">
        <a-tooltip>
          <template #title>刷新</template>
          <a-button shape="circle" @click="handleRefresh">
            <template #icon>
              <i class="plugins icon-shuaxin"></i>
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip>
          <template #title>打印</template>
          <a-button shape="circle">
            <template #icon>
              <i class="plugins icon-dayin"></i>
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip>
          <template #title>下载</template>
          <a-button shape="circle">
            <template #icon>
              <i class="plugins icon-xiazai"></i>
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip>
          <template #title>设置</template>
          <a-button shape="circle">
            <template #icon>
              <i class="plugins icon-shezhi"></i>
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip>
          <template #title>更多</template>
          <a-button shape="circle">
            <template #icon>
              <i class="plugins icon-gengduogongneng"></i>
            </template>
          </a-button>
        </a-tooltip>
      </a-space>
    </a-col>
  </a-row>
  <component :is="Modal" ref="ModalRef" :columns="columns" :options="options" :size="size"></component>
</template>

<style scoped lang="less">
.eh-menu-right {
  .plugins {
    font-weight: 300;
  }
}
</style>