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
      { text: '男', value: '男' },
    ],
    filterSearch: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]
const dataSource = [{
  name: '蔡徐坤',
  gender: '男',
  email: '2312312321@qq.com',
}, {
  name: '蔡徐坤',
  gender: '男s',
  email: '2312312321@qq.com',
}, {
  name: '蔡徐坤',
  gender: 's男s',
  email: '2312312321@qq.com',
}, {
  name: '蔡徐坤',
  gender: '女',
  email: '2312312321@qq.com',
}]
const options = reactive({
  bordered: true,
})
const searchForm = reactive({})
const searchChange = (form: object, done: any) => {
  console.log(form)
  setTimeout(() => {
    done()
  }, 2000)

}
const searchReset = () => {
  console.log('searchReset')
}
const handleRefresh = () => {
  console.log('handleRefresh')
}
</script>

<template>
  <eh-Crud :columns="columns" :options="options" :dataSource="dataSource" :search="searchForm"
           @handle-refresh="handleRefresh"
           @search-change="searchChange"
           @search-reset="searchReset"></eh-Crud>
</template>

<style scoped lang="less">

</style>