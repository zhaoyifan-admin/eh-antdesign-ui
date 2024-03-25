# 文字滚动 TextScroll

<BackTop />
<Watermark fullscreen content="Eh Antdesign UI" />

## 何时使用

- 当需要公告消息滚动展示时

<script setup lang="ts">
import { ref } from 'vue'
const scrollText = ref([
      {
        title: '美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说',
        link: 'https://blog.csdn.net/Dandrose?type=blog'
      },
      {
        title: '首次出版于1951年'
      },
      {
        title: '塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内,塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内'
      },
      {
        title: '并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界'
      },
      {
        title: '愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣'
      }
    ])
const singleText = {
        title: '请用一只玫瑰纪念我...',
        link: 'https://blog.csdn.net/Dandrose?type=blog'
      }
function onClick (value: string) { // 获取点击的标题
  console.log('value:', value)
}
</script>

## 水平文字滚动

<TextScroll :scrollText="scrollText" @click="onClick" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const scrollText = ref([
      {
        title: '美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说',
        link: 'https://blog.csdn.net/Dandrose?type=blog'
      },
      {
        title: '首次出版于1951年'
      },
      {
        title: '塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内,塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内'
      },
      {
        title: '并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界'
      },
      {
        title: '愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣'
      }
    ])
function onClick (value: string) { // 获取点击的标题
  console.log('value:', value)
}
</script>
<template>
  <TextScroll :scrollText="scrollText" @click="onClick" />
</template>
```

:::

## 单条文字滚动

<TextScroll :scrollText="singleText" single :font-size="30" :font-weight="800" color="#d4380d" @click="onClick" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const singleText = {
        title: '请用一只玫瑰纪念我...',
        link: 'https://blog.csdn.net/Dandrose?type=blog'
      }
function onClick (value: string) { // 获取点击的标题
  console.log('value:', value)
}
</script>
<template>
  <TextScroll :scrollText="singleText" single :font-size="30" :font-weight="800" color="#d4380d" @click="onClick" />
</template>
```

:::

## 垂直文字滚动

<TextScroll
  :scrollText="scrollText"
  background-color="#e6f4ff"
  :font-size="20"
  vertical
  @click="onClick" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const scrollText = ref([
      {
        title: '美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说',
        link: 'https://blog.csdn.net/Dandrose?type=blog'
      },
      {
        title: '首次出版于1951年'
      },
      {
        title: '塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内,塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内'
      },
      {
        title: '并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界'
      },
      {
        title: '愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣'
      }
    ])
function onClick (value: string) { // 获取点击的标题
  console.log('value:', value)
}
</script>
<template>
  <TextScroll
    :scrollText="scrollText"
    background-color="#e6f4ff"
    :font-size="20"
    vertical
    @click="onClick" />
</template>
```

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
scrollText | 滚动文字数组，`single` 为 `true` 时，类型为 `Text` | Text[] &#124; Text | [] | true
single | 是否启用单条文字滚动效果，只支持水平文字滚动，为 `true` `时，amount` 自动设为 `1` | boolean | false | false
width | 滚动区域宽度，单位`px` | number &#124; string | '100%' | false
height | 滚动区域高度，单位`px` | number | 60 | false
fontSize | 字体大小，单位`px` | number | 16 | false
fontWeight | 字体粗细 | number | 400 | false
color | 字体颜色 | string | 'rgba(0, 0, 0, .88)' | false
backgroundColor | 滚动区域背景色 | string | '#FFF' | false
amount | 滚动区域展示条数，水平滚动时生效 | number | 4 | false
gap | 水平滚动文字各列间距或垂直滚动文字两边的边距，单位`px` |  number | 20 | false
vertical | 是否垂直滚动 | boolean | false | false
interval | 文字滚动时间间隔，垂直滚动时生效，单位`ms` | number | 3000 | false

## Text Type

名称 | 说明 | 类型 | 必传
-- | -- | -- | --
title | 文字标题 | string | true
link | 跳转链接 | string | false

## Events

事件名称 | 说明 | 参数
-- | -- | --
click | 点击标题时的回调 | (title: string) => void
