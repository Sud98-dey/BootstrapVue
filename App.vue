<template>
  <div>
  <app-header/> <router-view> </router-view>
  </div>
</template>

<script>
import appHeader from './header.vue'
export default {
  name: 'App',components:{appHeader},
  data(){
    return { show_alert:false,aspect:'3:2'}
  },
 methods:{
   toggleSuccess() { this.show_alert = !this.show_alert; },
   callBack(){ alert("Thanks for dismissing");},
   changeAspect(ratio){ this.aspect = ratio; }
 }
}
</script>

<style scoped>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a3e50;
  margin-top: 60px;
}
</style>
