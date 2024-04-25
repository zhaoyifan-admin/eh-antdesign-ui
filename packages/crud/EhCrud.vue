<script setup lang="ts">
interface paramsType {
  columns?: Record<any, any>
  dataSource?: object[]
  loading?: boolean
  options?: Record<string, any>
  search?: object
  page?: any,
  showHelpModal?: boolean
  size?: string
}

const tipsModal = defineAsyncComponent(() => import('./components/tipsModal.vue'))
const menuButton = defineAsyncComponent(() => import('./components/menu-button/index.vue'))
const searchForm = defineAsyncComponent(() => import('./components/search-form/index.vue'))
const Modal = defineAsyncComponent(() => import('./components/modal/index.vue'))
const tipsModalRef = ref<any>()
const menuButtonRef = ref<any>()
const searchFormRef = ref<any>()
const ModalRef = ref<any>()
const props = withDefaults(defineProps<paramsType>(), {
  columns: () => {
    return {}
  },
  dataSource: () => [],
  loading: false,
  options: () => {
    return {
      showMenu: true,
      showLeftMenu: true,
      showRightMenu: true,
    }
  },
  page: () => {
    return { currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 }
  },
  search: () => {
    return {}
  },
  showHelpModal: true,
  size: 'middle',
})

const emit = defineEmits(['searchChange', 'searchReset', 'handleRefresh'])

const handleClick = () => {
  tipsModalRef.value.handleOpen()
}
const searchChange = (object: object, done: any) => {
  emit('searchChange', object, done)
}
const searchReset = () => {
  emit('searchReset')
}
const handleRefresh = () => {
  emit('handleRefresh')
}
const handleView = (row: any) => {
  console.log('handleView')
  ModalRef.value.showModal('view', row)
}
const handleEdit = (row: any) => {
  console.log('handleEdit')
  ModalRef.value.showModal('edit', row)
}
const handleDelete = (row: any) => {
  console.log('handleDelete')
}
</script>

<template>
  <div class="eh-plugins">
    <component :is="searchForm" ref="searchFormRef" :columns="columns" :options="options" :search="search" :size="size"
               @search-change="searchChange" @search-reset="searchReset"></component>
    <component :is="menuButton" ref="menuButtonRef" :columns="columns" :options="options" :size="size"
               @handle-refresh="handleRefresh"></component>
    <a-table
      :data-source="dataSource"
      :loading="loading"
      :size="size"
      :bordered="options.bordered"
    >
      <!--            序号-->
      <a-table-column :width="80" align="center" fixed="left" title="序号">
        <template #default="{renderIndex}">
          {{ (page.currentPage - 1) * page.pageSize + parseInt(renderIndex) + 1 }}
        </template>
      </a-table-column>
      <!--            columns-->
      <template v-for="(item, index) in columns">
        <a-table-column
          v-if="!item.hide"
          :key="index"
          :data-index="item.dataIndex"
          :ellipsis="item.ellipsis"
          :filterSearch="true"
          :filters="item.filters"
          :index="index"
          :onFilter="(value: string, record: any) => {
            if(record[item.dataIndex].split('').some((char:any) => value.includes(char))){
              return record
            }
          }"
          :sorter="item.sorter"
          :tooltip="item.tooltip"
          :width="item.width"
          filterMode="tree"
        >
          <template #title>
            <slot :name="item.dataIndex + 'title'"></slot>
            {{ item.title }}
          </template>
          <template #default="{ record, column, renderIndex }">
            <slot :column="column" :name="item.dataIndex + 'cell'" :record="record" :rowIndex="renderIndex">
              {{ record[item.dataIndex as any] }}
            </slot>
          </template>
        </a-table-column>
      </template>
      <!--            操作栏-->
      <a-table-column :width="200" align="center" fixed="right" title="操作栏">
        <template #default="{record}">
          <a-space warp>
            <a-tooltip title="view">
              <a-button :size="size" shape="circle" @click="handleView(record)">
                <template #icon>
                  <i class="plugins icon-chakan"></i>
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip title="edit">
              <a-button :size="size" shape="circle" type="primary" @click="handleEdit(record)">
                <template #icon>
                  <i class="plugins icon-bianji"></i>
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip title="delete">
              <a-button :size="size" danger shape="circle" type="primary" @click="handleDelete(record)">
                <template #icon>
                  <i class="plugins icon-qingkong"></i>
                </template>
              </a-button>
            </a-tooltip>
          </a-space>
        </template>
      </a-table-column>
    </a-table>
    <a-float-button v-if="showHelpModal" tooltip="使用帮助" @click="handleClick" />
    <component :is="tipsModal" ref="tipsModalRef"></component>
    <component :is="Modal" ref="ModalRef" :columns="columns" :options="options" :size="size"></component>
  </div>
</template>

<style scoped lang="less">
.eh-plugins {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 15px 10px;
}
</style>