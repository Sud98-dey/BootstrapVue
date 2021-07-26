<template>
  <b-container class="my-1">
    <div class="mb-2"> 
      <b-button @click="addTextBox"> Add ChatBox</b-button>
    </div>
    <section v-for="(text,i) in texts" :key="i" class="mb-2">
      <b-input-group class="sm-3">
      <b-form-input :aria-valuetext="text" 
       placeholder="Enter chat Text" v-model="text.message">
      </b-form-input>
      <b-input-group-append>
        <b-button variant="danger" 
         @click="removeTextBox(i)"> Delete</b-button>    
      </b-input-group-append>
      </b-input-group> 
    </section> 
    <section>
      <b-button variant="primary" 
      @click="addChats"  to="/chats"> Submit </b-button>
    </section>
      </b-container>
</template>
<script>
export default {
   data () {
   return { texts:[{ message:''}] }
   },
   methods:{
     addTextBox() { 
      this.texts.push({ message:'' }) },
     removeTextBox(i) { this.texts.splice(i)},
     addChats() { 
      this.$store.dispatch('addChats',this.texts) 
        }
      }//methods 
  }
       

</script>
