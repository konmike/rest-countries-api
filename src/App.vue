<script setup>
import { RouterView } from 'vue-router'
import ColorSwitcher from './components/ColorSwitcher.vue';
</script>

<template>
  <header class="page-header">
    <h1>Where in the world?</h1>
    <ColorSwitcher/>
  </header>

  <RouterView />
</template>