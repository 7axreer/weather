<template>

<div class="container" v-if="weather">
<Navbar/>
<Main/>

</div>

<div class="loading" v-else>
  <h1>Идёт загрузка...</h1>

</div>
  
</template>

<script>

import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'

import {mapState, mapActions} from 'vuex'


export default {
    components: {
      Navbar,
      Main
    },
 computed: {
   ...mapState(['weather'])
 },

 methods: {
  ...mapActions(['getWeather'])
 },

 created(){
  this.getWeather('Ташкент')
 }


}
</script>

<style scoped> 
  .loading {
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;

  }
</style>

