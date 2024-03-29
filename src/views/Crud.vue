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
</script>

<template>
  <eh-Crud :columns="columns" :options="{
    bordered: true
  }"></eh-Crud>
</template>

<style scoped lang="less">

</style>