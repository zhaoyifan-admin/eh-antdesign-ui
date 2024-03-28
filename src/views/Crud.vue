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
  <EhCrud :columns="columns"></EhCrud>
</template>

<style scoped lang="less">

</style>