<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Slot } from 'vue'
interface Props {
  title?: string|Slot // 确认框的标题
  description?: string|Slot // 确认框的内容描述
  content?: string|Slot // 展示的文本
  icon?: string|Slot // 自定义弹出确认框 Icon 图标
  maxWidth?: string|number // 弹出确认框内容最大宽度
  cancelText?: string|Slot // 取消按钮文字
  cancelType?: string // 取消按钮类型
  okText?: string|Slot // 确认按钮文字
  okType?: string // 确认按钮类型
  showCancel?: boolean // 是否显示取消按钮
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  content: '',
  icon: '',
  maxWidth: 'auto',
  cancelText: '取消',
  cancelType: 'default',
  okText: '确定',
  okType: 'primary',
  showCancel: true
})
const popMaxWidth = computed(() => {
  if (typeof props.maxWidth === 'number') {
    return props.maxWidth + 'px'
  }
  return props.maxWidth
})
const visible = ref(false)
const desc = ref()
const showDesc = ref(1)
onMounted(() => {
  showDesc.value = desc.value.offsetHeight
})
const top = ref(0) // 提示框top定位
const left = ref(0) // 提示框left定位
const contentRef = ref() // 声明一个同名的模板引用
const popRef = ref() // 声明一个同名的模板引用
function getPosition () {
  const contentWidth = contentRef.value.offsetWidth // 展示文本宽度
  const popWidth = popRef.value.offsetWidth // 提示文本宽度
  const popHeight = popRef.value.offsetHeight // 提示文本高度
  top.value = popHeight + 4
  left.value = (popWidth - contentWidth) / 2
}
const activeBlur = ref(false) // 是否激活 blur 事件
function onEnter () {
  activeBlur.value = false
}
function onLeave () {
  activeBlur.value = true
  popRef.value.focus()
}
function onBlur () {
  visible.value = false
  emits('openChange', false)
}
const emits = defineEmits(['cancel', 'ok', 'openChange'])
function onOpen () {
  visible.value = !visible.value
  if (visible.value) {
    getPosition()
  }
  emits('openChange', visible.value)
}
function onCancel (e: Event) {
  visible.value = false
  emits('openChange', false)
  emits('cancel', e)
}
function onOk (e: Event) {
  visible.value = false
  emits('openChange', false)
  emits('ok', e)
}
</script>
<template>
  <div class="m-popconfirm">
    <div
      ref="popRef"
      tabindex="1"
      class="m-pop-content"
      :class="{'show-pop': visible}"
      :style="`max-width: ${popMaxWidth}; top: ${-top}px; left: ${-left}px;`"
      @blur="activeBlur ? onBlur() : () => false">
      <div class="m-pop">
        <div class="m-pop-message">
          <span class="m-icon">
            <slot name="icon">
              <svg focusable="false" class="u-icon" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>
            </slot>
          </span>
          <div class="m-title" :class="{'font-weight': showDesc}">
            <slot name="title">{{ title }}</slot>
          </div>
        </div>
        <div class="m-pop-description" ref="desc" v-if="showDesc">
          <slot name="description">{{ description }}</slot>
        </div>
        <div class="m-pop-buttons">
          <Button v-if="showCancel" @click="onCancel" size="small" :type=cancelType>{{ cancelText }}</Button>
          <Button @click="onOk" size="small" :type=okType>{{ okText }}</Button>
        </div>
      </div>
      <div class="m-pop-arrow">
        <span class="u-pop-arrow"></span>
      </div>
    </div>
    <div
      ref="contentRef"
      @click="onOpen"
      @mouseenter="onEnter"
      @mouseleave="onLeave">
      <slot>{{ content }}</slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.m-popconfirm {
  position: relative;
  display: inline-block;
  .m-pop-content {
    position: absolute;
    z-index: 999;
    width: max-content;
    padding-bottom: 12px;
    outline: none;
    pointer-events: none;
    opacity: 0;
    transform-origin: 50% 75%;
    transform: scale(.8); // 缩放变换
    -ms-transform: scale(.8); /* IE 9 */
    -webkit-transform: scale(.8); /* Safari and Chrome */
    transition: transform .25s, opacity .25s;
    .m-pop {
      min-width: 32px;
      min-height: 32px;
      padding: 12px;
      font-size: 14px;
      color: rgba(0, 0, 0, .88);
      line-height: 1.5714285714285714;
      text-align: start;
      text-decoration: none;
      word-wrap: break-word;
      cursor: auto;
      user-select: text;
      background-color: #FFF;
      border-radius: 8px;
      box-shadow: 0 6px 16px 0 rgba(0, 0, 0, .08), 0 3px 6px -4px rgba(0, 0, 0, .12), 0 9px 28px 8px rgba(0, 0, 0, .05);
      .m-pop-message {
        position: relative;
        margin-bottom: 8px;
        font-size: 14px;
        display: flex;
        flex-wrap: nowrap;
        align-items: start;
        .m-icon {
          content: '\f8f5';
          flex: none;
          line-height: 1;
          padding-top: 4px;
          display: inline-block;
          text-align: center;
          .u-icon {
            display: inline-block;
            line-height: 1;
            fill: #faad14;
          }
        }
        .m-title {
          flex: auto;
          margin-inline-start: 8px;
        }
        .font-weight {
          font-weight: 600;
        }
      }
      .m-pop-description {
        position: relative;
        margin-inline-start: 22px;
        margin-bottom: 8px;
        font-size: 14px;
      }
      .m-pop-buttons {
        text-align: end;
        & > .m-btn-wrap {
          margin-inline-start: 8px;
        }
      }
    }
    .m-pop-arrow {
      position: absolute;
      z-index: 9;
      left: 50%;
      bottom: 12px;
      transform: translateX(-50%) translateY(100%) rotate(180deg);
      display: block;
      border-radius: 0 0 2px;
      pointer-events: none;
      width: 32px;
      height: 32px;
      overflow: hidden;
      &::before {
        position: absolute;
        bottom: 0;
        inset-inline-start: 0;
        width: 32px;
        height: 8px;
        background: #FFF;
        clip-path: path('M 6.343145750507619 8 A 4 4 0 0 0 9.17157287525381 6.82842712474619 L 14.585786437626904 1.414213562373095 A 2 2 0 0 1 17.414213562373096 1.414213562373095 L 22.82842712474619 6.82842712474619 A 4 4 0 0 0 25.65685424949238 8 Z');
        content: "";
      }
      &::after {
        position: absolute;
        width: 11.31370849898476px;
        height: 11.31370849898476px;
        bottom: 0;
        inset-inline: 0;
        margin: auto;
        border-radius: 0 0 2px 0;
        transform: translateY(50%) rotate(-135deg);
        box-shadow: 3px 3px 7px rgba(0, 0, 0, .1);
        z-index: 0;
        background: transparent;
        content: "";
      }
    }
  }
  .show-pop {
    pointer-events: auto;
    opacity: 1;
    transform: scale(1); // 缩放变换
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1); /* Safari and Chrome */
  }
}
</style>