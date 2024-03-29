<script setup lang="ts">
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]
const options = reactive({
  bordered: true,
})
</script>

<template>
  <eh-Crud :columns="columns" :options="options"></eh-Crud>
</template>

<style scoped lang="less">

</style>