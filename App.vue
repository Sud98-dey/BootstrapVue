<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3> BootstrapVue Alert </h3>
    <b-container>
      <b-alert show> Default alert showing Here!</b-alert>
      <b-alert :show="show_alert" fade variant="danger" 
      @dismissed="callBack" dismissible> Danger alert showing Here!</b-alert>
      <b-alert :show="show_alert" fade variant="warning"> Warning alert showing Here!</b-alert>
      <b-alert :show="show_alert" fade variant="success"> Success alert showing Here!</b-alert>
      <b-button variant="info"> <span @click="toggleSuccess"> ToggleAlert </span></b-button>
      
    </b-container> 
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <hr/> <h3> Badges in BootstrapVue</h3>
    <b-container style="border: 1px solid black">
   <h2>  <b-badge class="mr-1" pill> Default </b-badge> 
     <b-badge class="mr-1" variant="primary" pill> Primary </b-badge> 
     <b-badge class="mr-1" variant="danger" pill> Danger </b-badge>
     <b-badge class="mr-1" variant="success" pill> Success </b-badge></h2>
    </b-container>
   <br><h3> Avatars in BootstrapVue </h3>
   <b-container>
     <b-avatar text="SD" variant="warning" class="mr-1" size="5rem"></b-avatar>
     <b-avatar icon="people-fill" variant="success" class="mr-1" size="5rem"></b-avatar>
     <b-avatar icon="music-note" variant="danger" class="mr-1" size="5rem"></b-avatar>
     <b-avatar src="https://placekitten.com/300/300" size="5rem" class="mr-1"> </b-avatar>
     <b-avatar class="mr-1" size="6rem" badge="SD" badge-bottom badge-left> {{ "Sudarshan Dey" }} </b-avatar>
   </b-container>
   <hr/> <h3> Aspect in BootstrapVue</h3>
    <b-button @click="changeAspect('3:2')" class="mr-1"> 3:2 </b-button> 
    <b-button @click="changeAspect('4:3')" class="mr-1"> 4:3 </b-button> 
    <b-button @click="changeAspect('16:9')" class="mr-1"> 16:9 </b-button>
     <b-container>
       <b-row> 
        <b-col><b-aspect :aspect="aspect" style="border: 1px solid black"> 
         My aspect : {{ aspect }} </b-aspect> </b-col>
       <b-col><b-aspect :aspect="aspect" style="border: 1px solid black"> 
        My aspect : {{ aspect }} </b-aspect> </b-col>
       </b-row>
     </b-container>   
   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
