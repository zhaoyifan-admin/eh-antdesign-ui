# 倒计时 Countdown

<BackTop />
<Watermark fullscreen content="Eh Antdesign UI" />

## 何时使用

- 当要展示倒计时时

<script setup lang="ts">
function onFinish () {
  console.log('countdown finished')
}
</script>

## 基本使用

*format: MM月 DD天 HH:mm:ss*

<br/>

<Countdown
  title="Countdown 1年"
  :value="12 * 30 * 24 * 60 * 60 * 1000"
  :future="false"
  format="MM月 DD天 HH:mm:ss"
  finished-text="Finished"
  @finish="onFinish" />

::: details Show Code

```vue
<script setup lang="ts">
function onFinish () {
  console.log('countdown finished')
}
</script>
<template>
  <Countdown
    title="Countdown 1年"
    :value="12 * 30 * 24 * 60 * 60 * 1000"
    :future="false"
    format="MM月 DD天 HH:mm:ss"
    finished-text="Finished"
    @finish="onFinish" />
</template>
```

:::

## 毫秒倒计时

*format: Y 年 M 月 D 天 H 时 m 分 s 秒 SSS*

<br/>

<Countdown
  title="Million Seconds"
  :value="12 * 30 * 24 * 60 * 60 * 1000"
  :future="false"
  format="Y 年 M 月 D 天 H 时 m 分 s 秒 SSS 毫秒"
  finished-text="Finished"
  @finish="onFinish" />

::: details Show Code

```vue
<script setup lang="ts">
function onFinish () {
  console.log('countdown finished')
}
</script>
<template>
  <Countdown
    title="Million Seconds"
    :value="12 * 30 * 24 * 60 * 60 * 1000"
    :future="false"
    format="Y 年 M 月 D 天 H 时 m 分 s 秒 SSS 毫秒"
    finished-text="Finished"
    @finish="onFinish" />
</template>
```

:::

## 使用插槽

<Countdown
  :value="2471875200000"
  format="Y 年 M 月 D 天 H 时 m 分 s 秒 SSS 毫秒"
  finished-text="Finished"
  @finish="onFinish">
  <template #title>2048年 五一 Countdown</template>
  <template #prefix>There's only </template>
  <template #suffix> left for the end.</template>
</CountDown>

::: details Show Code

```vue
<script setup lang="ts">
function onFinish () {
  console.log('countdown finished')
}
</script>
<template>
  <Countdown
    :value="2471875200000"
    format="Y 年 M 月 D 天 H 时 m 分 s 秒 SSS 毫秒"
    finished-text="Finished"
    @finish="onFinish">
    <template #title>2048年 五一 Countdown</template>
    <template #prefix>There's only </template>
    <template #suffix> left for the end.</template>
  </CountDown>
</template>
```

:::

## 自定义样式

<Countdown
  :value="2485094400000"
  format="Y 年 MM 月 DD 天 HH 时 mm 分 ss 秒 SSS 毫秒"
  :title-style="{fontWeight: 500, fontSize: '18px'}"
  :value-style="{fontWeight: 600, color: '#1677ff'}"
  @finish="onFinish">
  <template #title>2048年 十一 Countdown</template>
</CountDown>

::: details Show Code

```vue
<script setup lang="ts">
function onFinish () {
  console.log('countdown finished')
}
</script>
<template>
  <Countdown
    :value="2485094400000"
    format="Y 年 MM 月 DD 天 HH 时 mm 分 ss 秒 SSS 毫秒"
    :title-style="{fontWeight: 500, fontSize: '18px'}"
    :value-style="{fontWeight: 600, color: '#1677ff'}"
    @finish="onFinish">
    <template #title>2048年 十一 Countdown</template>
  </CountDown>
</template>
```

:::

## 倒计时已完成

<Countdown :value="0" :future="false" @finish="onFinish" />

::: details Show Code

```vue
<script setup lang="ts">
function onFinish () {
  console.log('countdown finished')
}
</script>
<template>
  <Countdown :value="0" :future="false" @finish="onFinish" />
</template>
```

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
title | 倒计时标题 | string &#124; slot | '' | false
value | 倒计时数值支持设置未来某时刻的时间戳或相对剩余时间，单位`ms` | number | undefined | true
future | 是否为未来某时刻；为 `false` 表示相对剩余时间戳 | boolean | true| false
format | 格式化倒计时展示，(`Y/YY`：年，`M/MM`：月，`D/DD`：日，`H/HH`：时，`m/mm`：分钟，`s/ss`：秒，`SSS`：毫秒) | string | 'HH:mm:ss' | false
prefix | 倒计时数值的前缀 | string &#124; slot | '' | false
suffix | 倒计时数值的后缀 | string &#124; slot | '' | false
titleStyle | 设置标题的样式 | CSSProperties | {} | false
valueStyle | 设置数值的样式 | CSSProperties | {} | false
finishedText | 完成后的展示文本 | string &#124; slot | 'Finished' | false

## Events

事件名称 | 说明 | 参数
-- | -- | --
finish | 倒计时完成时触发 | () => void
