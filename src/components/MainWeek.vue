<template>
<div class="main__week">
    <Day v-for="(day, i ) in weather.daily" :key="i" :day="day"/>
</div>

<div class="main__rights">
   <p>created by Sobirov Saidaxror</p>
</div>
  
</template>

<script>
import { mapState } from 'vuex'
import Day from './Day.vue'

export default {
 components: {
    Day
 },

 computed: {
    ...mapState(['weather'])
 }
}
</script>

<style>

</style>