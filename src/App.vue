<template>
  <div>
    <CNavbar />
    <RouterView />
  </div>
</template>
<script lang="ts">
import CNavbar from './Components/CNavbar.vue'
import { RouterView } from 'vue-router';

export default {
    components: {
      CNavbar,
      RouterView
    }
}
</script>
<style>
  
</style>