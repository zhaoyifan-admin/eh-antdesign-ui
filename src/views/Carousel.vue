<script setup lang="ts">
import { ref } from 'vue'

const images = ref([
  {
    title: 'image-1',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/1.jpg',
    link: ''
  },
  {
    title: 'image-2',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/2.jpg',
    link: ''
  },
  {
    title: 'image-3',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/3.jpg',
    link: ''
  },
  {
    title: 'image-4',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/4.jpg',
    link: ''
  },
  {
    title: 'image-5',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/5.jpg',
    link: ''
  },
  {
    title: 'image-6',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/6.jpg',
    link: ''
  },
  {
    title: 'image-7',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/7.jpg',
    link: ''
  },
  {
    title: 'image-8',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/8.jpg',
    link: ''
  },
  {
    title: 'image-9',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/9.jpg',
    link: ''
  }
])
</script>
<template>
  <div>
    <h1>Carousel 走马灯</h1>
    <h2 class="mt30 mb10">基本使用</h2>
    <h3 class="mb10">支持自动切换，导航切换，键盘上、下、左、右按键切换，分页切换</h3>
    <Carousel
      :images="images"
      :width="800"
      :height="450" />
    <h2 class="mt30 mb10">自定义导航、分页样式</h2>
    <Carousel
      :images="images"
      :width="800"
      :height="450"
      nav-color="#13C2C2"
      :nav-size="48"
      page-active-color="#13C2C2"
      :page-style="{ width: '24px', height: '5px', borderRadius: '5px', backgroundColor: '#FFF' }" />
  </div>
</template>
