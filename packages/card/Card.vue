<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { CSSProperties } from 'vue'
interface Props {
  width?: number|string // 卡片宽度
  bordered?: boolean // 是否有边框
  extra?: string // 卡片右上角的操作区域 string | slot
  size?: 'default'|'small' // 卡片的尺寸
  title?: string // 卡片标题 string | slot
  headStyle?: CSSProperties //	标题区域自定义样式
  bodyStyle?: CSSProperties // 内容区域自定义样式
}
const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
  bordered: true,
  extra: '',
  size: 'default',
  title: '',
  headStyle: () => ({}),
  bodyStyle: () => ({})
})
const cardWidth = computed(() => {
  if (typeof props.width === 'number') {
    return props.width + 'px'
  }
  return props.width
})
const slots = useSlots()
const showTitle = computed(() => {
  const titleSlots = slots.title?.()
  const extraSlots = slots.extra?.()
  let n = 0
  if (titleSlots && titleSlots[0].children?.length) {
    n++
  }
  if (extraSlots && extraSlots[0].children?.length) {
    n++
  }
  return Boolean(n) || props.title || props.extra
})
</script>
<template>
  <div
    class="eh-card b-radius-5 font-14"
    :class="{'bordered': bordered, 'eh-small-card': size === 'small'}"
    :style="`width: ${cardWidth};`">
    <div class="eh-card-head p-inline-16 p-block-10" :style="headStyle" v-if="showTitle">
      <div class="eh-head-wrapper">
        <div class="u-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="u-extra">
          <slot name="extra">{{ extra }}</slot>
        </div>
      </div>
    </div>
    <div class="eh-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.bordered {
  border: 1px solid #f0f0f0;
}

.eh-card {
  color: rgba(0, 0, 0, .88);
  line-height: 1.5714285714285714;
  position: relative;
  background: #ffffff;
  text-align: left;

  .eh-card-head {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 46px;
    margin-bottom: -1px;
    color: rgba(0, 0, 0, .88);
    font-weight: 600;
    font-size: 16px;
    background: transparent;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 8px 8px 0 0;

    .eh-head-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      .u-title {
        display: inline-block;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .u-extra {
        margin-inline-start: auto;
        font-weight: normal;
        font-size: 14px;
      }
    }
  }

  .eh-card-body {
    padding: 16px;
    border-radius: 0 0 8px 8px;
  }
}

.eh-small-card {
  .eh-card-head {
    min-height: 38px;
    padding: 0 12px;
    font-size: 14px;
  }

  .eh-card-body {
    padding: 12px;
  }
}
</style>
