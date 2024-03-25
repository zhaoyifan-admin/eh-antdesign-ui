# 快速上手

<BackTop />
<Watermark fullscreen content="Eh Antdesign UI" />

## 安装

::: code-group

```sh [npm]
$ npm add eh-antdesign-ui
```

```sh [pnpm]
$ pnpm add eh-antdesign-ui
```

```sh [yarn]
$ yarn add eh-antdesign-ui
```

```sh [bun]
$ bun add eh-antdesign-ui
```

:::

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import EhAntdesignUI from 'eh-antdesign-ui'
import 'eh-antdesign-ui/css'

const app = createApp(App)
app.use(EhAntdesignUI)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'eh-antdesign-ui'
import 'eh-antdesign-ui/css'
</script>

<template>
  <Button></Button>
</template>
```
