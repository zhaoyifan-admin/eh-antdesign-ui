<script setup lang="ts">
import dayjs from 'dayjs'

interface paramsType {
  diaType?: string
  colItem?: any
  Form?: any
  size?: string
  options?: any
  disabled?: boolean
}

const props = withDefaults(defineProps<paramsType>(), {
  diaType: '',
  colItem: () => {
    return {}
  },
  Form: () => {
    return {}
  },
  size: 'middle', //search: 查询表单 | modal: 弹框表单
  options: () => {
    return {
      showMenu: true,
      showLeftMenu: true,
      showRightMenu: true,
    }
  },
  disabled: false,
})
</script>

<template>
  <!--            Input 输入框-->
  <a-input v-if="colItem.type === 'input' || colItem.type === undefined"
           v-model:value="Form[colItem.dataIndex]"
           :disabled="disabled"
           :maxlength="colItem.maxlength"
           :placeholder="colItem.placeholder || colItem.label"
           :showCount="colItem.showCount"
           :size="size"
           allow-clear
           style="width: 100%">
  </a-input>
  <a-textarea
    v-if="colItem.type === 'textarea'"
    v-model:value="Form[colItem.dataIndex]"
    :auto-size="{ minRows: 4, maxRows: 8 }"
    allow-clear
    :show-count="colItem.showCount"
    :maxlength="colItem.maxlength"
    :placeholder="colItem.placeholder || colItem.label"
    :disabled="disabled"
    style="width: 100%"
  />
  <a-input-password v-if="colItem.type === 'password'"
                    :size="size"
                    v-model:value="Form[colItem.dataIndex]"
                    :placeholder="colItem.placeholder || colItem.label"
                    :disabled="disabled"
                    allow-clear />
  <a-input-number v-if="colItem.type === 'number'"
                  :size="size"
                  v-model:value="Form[colItem.dataIndex]"
                  :controls="colItem.controls"
                  :defaultValue="colItem.defaultValue"
                  :formatter="colItem.formatter"
                  :parser="colItem.parser"
                  :step="colItem.step"
                  :string-mode="colItem.stringMode"
                  :min="colItem.min"
                  :max="colItem.max"
                  :placeholder="colItem.placeholder || colItem.label"
                  :disabled="disabled">
    <template #addonBefore>
      <slot :name="colItem.dataIndex + 'SearchaddonBefore'"></slot>
    </template>
    <template #addonAfter>
      <slot :name="colItem.dataIndex + 'SearchaddonAfter'"></slot>
    </template>
  </a-input-number>

  <!--            DatePicker 日期选择框-->
  <a-date-picker
    v-if="colItem.type === 'date' || (colItem.type === 'daterange' && (diaType === 'add' || diaType === 'edit'))"
    :size="size"
    v-model:value="Form[colItem.dataIndex]"
    :show-time="colItem.showTime"
    :picker="colItem.picker || 'date'"
    :disabled-date="colItem.disabledDate"
    :disabled-time="colItem.disabledDateTime"
    :format="colItem.format || 'YYYY-MM-DD'"
    :valueFormat="colItem.valueFormat || 'YYYY-MM-DD'"
    :placeholder="colItem.placeholder || colItem.label"
    :disabled="disabled"
    style="width: 100%" />
  <a-range-picker v-if="colItem.type === 'daterange' && diaType === 'search'"
                  :size="size"
                  v-model:value="Form[colItem.dataIndex]"
                  :show-time="colItem.showTime"
                  :picker="colItem.picker || 'date'"
                  :disabled-date="colItem.disabledDate"
                  :disabled-time="colItem.disabledRangeTime"
                  :format="colItem.format || 'YYYY-MM-DD'"
                  :valueFormat="colItem.valueFormat || 'YYYY-MM-DD'"
                  :disabled="disabled"
                  style="width: 100%" />

  <!--            Select 选择器-->
  <a-select
    v-if="colItem.type === 'select'"
    ref="searchselect"
    v-model:value="Form[colItem.dataIndex]"
    :size="size"
    :show-search="colItem.showSearch"
    :mode="colItem.mode"
    :label-in-value="colItem.labelInValue"
    :placeholder="colItem.placeholder || colItem.label"
    allowClear
    :disabled="disabled"
    style="width: 100%"
  >
    <template v-for="(item, index) in options[colItem.dataIndex]" :key="index">
      <a-select-option
        :value="colItem.dataType === 'number' ? Number(item[colItem.props.value]) || Number(item.value) : item[colItem.props.value] || item.value">
        <template #suffixIcon>
          <slot :name="colItem.dataIndex + 'SearchsuffixIcon'"></slot>
        </template>
        <template #default>
          <slot :name="colItem.dataIndex + 'optionLabel'">
            {{ item[colItem.props.label] || item.label }}
          </slot>
        </template>
      </a-select-option>
    </template>
  </a-select>

  <!--            TimePicker 时间选择框-->
  <a-time-picker
    v-if="colItem.type === 'time'"
    v-model:value="Form[colItem.dataIndex]"
    :size="size"
    :use12-hours="colItem.use12Hours"
    allowClear
    :format="colItem.format"
    :value-format="colItem.valueFormat"
    :placeholder="colItem.placeholder || colItem.label"
    :disabled="disabled"
    style="width: 100%" />
</template>

<style scoped lang="less">

</style>