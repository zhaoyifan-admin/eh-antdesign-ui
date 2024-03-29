# 多功能表格 Crud

<BackTop />
<Watermark fullscreen content="Eh Antdesign UI" />

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

```vue

<script setup lang="ts">
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
    },
    ...
  ]
</script>
<template>
  <eh-Crud :columns="columns" :options="..."></eh-Crud>
</template>

```

## 基本使用

<script setup lang="ts">
  const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 200
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: 200
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 300
  },
]
</script>
<ClientOnly>
    <eh-Crud :columns="columns" :options="{
        bordered: true
        }">
    </eh-Crud>
</ClientOnly>

::: details Show Code

```vue

<script setup lang="ts">
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
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

```

:::

## API

### Table

| 参数      | 说明                           | 类型     | 默认值 | 必传   |
|---------|------------------------------|--------|-----|------|
| columns | 表格列的配置描述，具体项见[相关配置](#column) | array  | -   | true |
| options | 表格的配置描述，具体项见[相关配置](#options) | object | -   | true |

## Column

- 列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数                                | 说明                                                                                                                                                              | 类型                                                            | 默认值                   | 必传    |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|-----------------------|-------|
| align                             | 设置列的对齐方式                                                                                                                                                        | `'left' \| 'center' \| 'right'`                               | `left`                | false |
| colSpan                           | 表头列合并,设置为 0 时，不渲染                                                                                                                                               | `number`                                                      | -                     | false |
| customCell                        | 设置单元格属性                                                                                                                                                         | `Function(record, rowIndex, column)`                          | -                     | false |
| customFilterDropdown              | 启用 v-slot:customFilterDropdown，优先级低于 filterDropdown	                                                                                                            | `boolean`                                                     | `false`               | false |
| customHeaderCell                  | 设置头部单元格属性                                                                                                                                                       | `Function(column)`                                            | -                     | false |
| customRender                      | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引                                                                                                                                | `Function({text, record, index, column}) {}`                  | -                     | false |
| dataIndex                         | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径	                                                                                                                                     | `'string' \| 'string[]'`                                      | -                     | true  |
| defaultFilteredValue              | 默认筛选值	                                                                                                                                                          | `string[]`                                                    | -                     | false |
| filterResetToDefaultFilteredValue | 点击重置按钮的时候，是否恢复默认筛选值                                                                                                                                             | `boolean`                                                     | false                 | false |
| defaultSortOrder                  | 默认排序顺序                                                                                                                                                          | `'ascend' \| 'descend'`                                       | -                     | false |
| ellipsis                          | 超过宽度将自动省略，暂不支持和排序筛选一起使用。设置为 `true` 或  `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"`。                                                                | `'left' \| 'center' \| 'right'`                               | `left`                | false |
| filterDropdown                    | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互                                                                                                                                 | `'VNode' \| '(props: FilterDropdownProps) => VNode'`          | -                     | false |
| filterDropdownOpen                | 用于控制自定义筛选菜单是否可见                                                                                                                                                 | `boolean`                                                     | -                     | false |
| filtered                          | 标识数据是否经过过滤，筛选图标会高亮                                                                                                                                              | `boolean`                                                     | false                 | false |
| filterIcon                        | 自定义 filter 图标。                                                                                                                                                  | `'VNode' \| '({filtered: boolean, column: Column}) => vNode'` | false                 | false |
| filterMode                        | 指定筛选菜单的用户界面                                                                                                                                                     | `'menu' \| 'menu'`                                            | `menu`                | false |
| filterMultiple                    | 是否多选                                                                                                                                                            | `boolean`                                                     | true                  | false |
| filters                           | 表头的筛选菜单项                                                                                                                                                        | `object[]`                                                    | -                     | false |
| filterSearch                      | 筛选菜单项是否可搜索                                                                                                                                                      | `'boolean' \| 'function(input, filter):boolean'`              | false                 | false |
| fixed                             | 列是否固定，可选`true`(等效于 left)`'left' \| 'right'`                                                                                                                     | `boolean \| string`                                           | false                 | false |
| key                               | Vue 需要的 key，如果已经设置了唯一的`dataIndex`，可以忽略这个属性                                                                                                                      | `string`                                                      | -                     | false |
| maxWidth                          | 拖动列最大宽度，会受到表格自动调整分配宽度影响                                                                                                                                         | `number`                                                      | -                     | false |
| minWidth                          | 拖动列最小宽度，会受到表格自动调整分配宽度影响                                                                                                                                         | `number`                                                      | 50                    | false |
| resizable                         | 是否可拖动调整宽度，此时 width 必须是 number 类型	                                                                                                                               | `boolean`                                                     | -                     | false |
| responsive                        | 响应式 breakpoint 配置列表。未设置则始终可见。                                                                                                                                   | [Breakpoint](#Breakpoint)[]                                   | -                     | false |
| rowScope                          | 设置列范围                                                                                                                                                           | `'row' \| 'rowgroup'`                                         | -                     | false |
| showSorterTooltip                 | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中`showSorterTooltip`                                                                                                            | `boolean \| ` [Tooltip props](#Tooltip props)                 | true                  | false |
| sortDirections                    | 支持的排序方式，取值为`'ascend' \| 'descend'`                                                                                                                              | `Array`                                                       | ['ascend', 'descend'] | false |
| sorter                            | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | `'Function'\| 'boolean'`                                      | -                     | false |
| sortOrder                         | 排序的受控属性，外界可用此控制列的排序，可设置为`'ascend' \| 'descend'\| 'null'`                                                                                                        | `string`                                                      | -                     | false |
| title                             | 列头显示文字                                                                                                                                                          | `string`                                                      | -                     | true  |
| width                             | 列宽度                                                                                                                                                             | `'string'\| 'number'`                                         | -                     | false |
| onFilter                          | 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为`filter`事件使用                                                                                                              | `Function`                                                    | -                     | true  |
| onFilterDropdownOpenChange        | 自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为`filterDropdownOpenChange`事件使用                                                                                              | `function(open) {}`                                           | -                     | true  |

## Breakpoint

```vue
type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
```

## Options

| 参数               | 说明           | 类型                                                 | 默认值     | 必传    |
|------------------|--------------|----------------------------------------------------|---------|-------|
| bodyCell         | 个性化单元格		     | `v-slot:bodyCell="{text, record, index, column}"	` | -       | false |
| bordered         | 是否展示外边框和列边框	 | `boolean`                                          | `false` | false |
| customFilterIcon | 自定义筛选图标	     | `v-slot:customFilterIcon="{filtered, column}"`	    | -       | false |
| showMenu         | 是否显示菜单组      | `boolean`                                          | `true`  | false |
| showLeftMenu     | 是否显示左菜单组     | `boolean`                                          | `true`  | false |
| showRightMenu    | 是否显示右菜单组     | `boolean`                                          | `true`  | false |

<Tag color="#165DFF">待更新...</Tag>