<template>
  <div>
    <CNavbar />
    <RouterView :state="state" />
  </div>
</template>
<script lang="ts">
import CNavbar from './Components/CNavbar.vue'
import { RouterView } from 'vue-router';

export default {
  data() {
      return {
        state: [
          {id: 1, title: 'Product Management', desc: 'Never lose sight of your DevOps infrastructure - learn the art of monitoring and logging', level: '#junior', date: '6 months'},
          {id: 2, title: 'Product Management', desc: 'Never lose sight of your DevOps infrastructure - learn the art of monitoring and logging', level: '#junior', date: '6 months'},
          {id: 3, title: 'Product Management', desc: 'Never lose sight of your DevOps infrastructure - learn the art of monitoring and logging', level: '#junior', date: '6 months'},
          {id: 4, title: 'Product Management', desc: 'Never lose sight of your DevOps infrastructure - learn the art of monitoring and logging', level: '#junior', date: '6 months'},
        ]
      }
    },
    components: {
      CNavbar,
      RouterView
    },
    
}
</script>
<style>
  
</style>