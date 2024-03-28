<script setup lang="ts">
import { ref } from 'vue'
import { Empty } from 'ant-design-vue'

const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE
const open = ref<boolean>(false)
const activeKey = ref<string>('1')
const handleOpen = () => {
  open.value = true
}
defineExpose({
  handleOpen,
})
</script>

<template>
  <a-modal v-model:open="open" title="帮助文档" @ok="handleOpen" width="50%">
    <a-alert class="mb10" message="注意：本组件内使用了`postcss-pxtorem`插件【px转rem】，请酌情使用其他转换插件。" banner />
    <a-tabs v-model:activeKey="activeKey" tabPosition="left">
      <a-tab-pane key="1" tab="Tab 1">
        <a-empty :image="simpleImage" description="暂无描述" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        <a-empty :image="simpleImage" description="暂无描述" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        <a-empty :image="simpleImage" description="暂无描述" />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<style scoped lang="less">

</style>