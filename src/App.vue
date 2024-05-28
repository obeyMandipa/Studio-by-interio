<script >
import { RouterLink, RouterView } from 'vue-router'
import Landing from './views/Landing.vue';

export default {
  name: 'App ',
  created() {

  },
  data() {
    return {
    }
  },

  components:{
    Landing
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<template>
  <div>  
    <router-view></router-view>
</div>
</template>

<style scoped>
*{
  padding: 15px;
}
</style>
