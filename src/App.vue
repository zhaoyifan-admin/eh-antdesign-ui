<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
const theme = ref({
  token: {
    // colorPrimary: '#00b96b'
  }
})
const locale = ref(zhCN)
const route = useRoute()
const routeName = computed(() => {
  return route.name
})
</script>
<template>
  <a-config-provider :theme="theme" :locale="locale">
    <Watermark content="Eh Antdesign UI" v-if="routeName === 'Watermark'">
      <RouterView />
    </Watermark>
    <RouterView v-else />
  </a-config-provider>
</template>
