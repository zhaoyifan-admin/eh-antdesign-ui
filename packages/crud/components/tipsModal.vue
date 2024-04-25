<script setup lang="ts">
import { reactive } from 'vue'
import { Empty } from 'ant-design-vue'

const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE
const state = reactive({
  activeKey: '1',
  open: false,
})
const handleOpen = () => {
  state.open = true
}
defineExpose({
  handleOpen,
})
</script>

<template>
  <a-modal v-model:open="state.open" title="帮助文档" @ok="handleOpen" width="50%">
    <a-alert class="mb10" message="注意：本组件内使用了`postcss-pxtorem`插件【px转rem】，请酌情使用其他转换插件。" banner />
    <a-tabs v-model:activeKey="state.activeKey" tabPosition="left" size="small">
      <a-tab-pane key="1" tab="表格说明">
        <a-empty :image="simpleImage" description="暂无描述" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="查询表单说明" force-render>
        <a-empty :image="simpleImage" description="暂无描述" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="操作栏说明">
        <a-empty :image="simpleImage" description="暂无描述" />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<style scoped lang="less">

</style>