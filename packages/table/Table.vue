<script setup lang="ts">
import Spin from '../spin'
import Empty from '../empty'
import Pagination from '../pagination'
interface Column {
  title?: string // 列头显示文字
  width: number|string // 列宽度
  dataIndex: string // 列数据字符索引
  slot?: string // 列插槽名称索引
}
interface Pagination {
  page: number // 当前页码
  pageSize: number // 每页条数
}
interface Props {
  columns?: Column[] // 表格列的配置项
  dataSource?: any[] // 表格数据数组
  pagination?: Pagination // 分页配置
  showPagination?: boolean // 是否显示分页
  hideOnSinglePage?: boolean // 只有一页时是否隐藏分页
  total?: number // 数据总数
  loading?: boolean // 是否加载中
}
withDefaults(defineProps<Props>(), {
  columns: () => [],
  dataSource: () => [],
  pagination: () => { return { page: 1, pageSize: 10 } },
  showPagination: true,
  hideOnSinglePage: false,
  total: 0,
  loading: false
})
const emit = defineEmits(['change'])
function changePage (pager: {page: number, pageSize: number}) { // 分页回调
  emit('change', pager)
}
</script>
<template>
  <div class="eh-table-wrap">
    <table class="eh-table">
      <thead>
      <tr class="eh-tr">
        <th class="eh-th" :style="`width: ${typeof item.width === 'number' ? item.width + 'px' : item.width};`"
            v-for="(item, index) in columns" :key="index">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody class="eh-body">
      <tr class="eh-tr-loading" v-show="loading">
        <Spin class="eh-loading" size="small" :colspan="columns.length" />
        </tr>
      <tr class="eh-tr-empty" v-show="!total">
        <td class="eh-td-empty" :colspan="columns.length">
            <Empty class="empty" image="2" />
          </td>
        </tr>
      <tr class="eh-tr" v-for="(data, index) in dataSource" :key="index">
        <td class="eh-td" v-for="(col, n) in columns" :key="n" :title="data[col.dataIndex as any]">
            <slot v-if="col.slot" v-bind="data" :name="col.slot" :index="index">{{ data[col.dataIndex as any] || '--' }}</slot>
            <span v-else>{{ data[col.dataIndex as any] || '--' }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      class="mt20"
      @change="changePage"
      :current="pagination.page"
      :pageSize="pagination.pageSize"
      :total="total"
      :hideOnSinglePage="hideOnSinglePage"
      :showQuickJumper="true"
      :showTotal="true"
      placement="right"
      v-if="showPagination && total" />
  </div>
</template>
<style lang="less" scoped>
.eh-table-wrap {
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  line-height: 1.5714285714285714;
  border-radius: 8px 8px 0 0;

  .eh-table {
    display: table;
    table-layout: fixed;
    width: 100%;
    text-align: left;
    border-radius: 8px 8px 0 0;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;

    .eh-th {
      padding: 16px;
      color: rgba(0, 0, 0, .85);
      font-weight: 500;
      text-align: left;
      background: #fafafa;
      border: none;
      border-bottom: 1px solid #f0f0f0;;
      transition: background .3s ease;
      &:first-child {
        border-top-left-radius: 8px;
      }
      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    .eh-body {
      position: relative;

      .eh-tr-loading {
        border: none;
        background-color: #FFF;

        .eh-loading {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }

      .eh-tr-empty {
        border: none;
        background-color: #FFF;
        &:hover {
          background: #FFF;
        }

        .eh-td-empty {
          padding: 16px;
          border: none;
          border-bottom: 1px solid #f0f0f0;;
          .empty {
            margin: 32px 0;
          }
        }
      }
    }

    .eh-tr {
      border: none;
      background-color: #FFF;
      transition: background-color .3s;

      .eh-td {
        padding: 16px;
        border: none;
        border-bottom: 1px solid #f0f0f0;;
        transition: background .3s;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &:hover {
        background-color: #fafafa;
      }
    }
  }
}
</style>
