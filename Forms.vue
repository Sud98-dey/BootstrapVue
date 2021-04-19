<template>
    <div>
        <h3> Bootstrap Form(Inline) </h3>
    <b-form inline>
    <b-form-input v-model="form1.name" id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Username"> </b-form-input>
    <b-form-input v-model="form1.email" id="inline-form-input-username" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email"> </b-form-input>
    <b-button variant="primary" @click="formData1"> Save </b-button>
    </b-form> <hr>
    
    <b-row><b-col> <h3> Bootstrap Form </h3>
    <b-form> 
        <b-form-group id="input-group-1" description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form2.email" type="email" placeholder="Enter Email" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2">
        <b-form-input id="input-2" v-model="form2.name" placeholder="Enter Fullname" required></b-form-input>
      </b-form-group>
         <label for="input-with-list">Occupation </label>
      <b-form-input list="input-list" v-model="form2.occupation" id="input-with-list"></b-form-input>
      <b-form-datalist id="input-list" :options="options"></b-form-datalist><br>
    
    <b-form-group label="Favourite Games" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group id="checkbox-group-1" v-model="form2.selected" 
        :options="Games" name="flavour-1" :aria-describedby="ariaDescribedby">
    </b-form-checkbox-group>
    </b-form-group>
    <b-form-group label="Select Gender" v-slot="{ ariaDescribedby }">
      <b-form-radio-group id="radio-group-1" v-model="form2.gender"
        :options="Gender" :aria-describedby="ariaDescribedby" name="radio-options"></b-form-radio-group>
    </b-form-group>

    <b-button variant="primary" class="mr-3" @click="form2.show = !form2.show"> Submit </b-button> 
        
    </b-form> </b-col>
    <b-col> 
        <h3> Display Formdata </h3>
        <p v-if="form2.show"> 
    <span> {{form2.name}}</span> | <span> {{form2.email}}</span> | <span> {{form2.occupation}}</span>
    <br> <span> Selected : {{form2.selected}} </span> | <span> Gender: {{ form2.gender}} </span>
     
        </p>
    </b-col>
    </b-row>
    </div>
</template>
<script>
export default {
    data(){ 
        return { form1:{name:'',email:''},options:['Lawyer','Doctor','Detective','IT Engineer','Professor'],
                 form2:{name:'',email:'',occupation:'',show:false,gender:'',selected:[]},
                 Gender:[{text:'Male',value:'male'},{text:'Female',value:'female'}],
                 Games:[{text:'Chess',value:'chess'},{text:'Carrom',value:'carrom'},
                  {text:'Cricket',value:'cricket'},{text:'Hockey',value:'hockey'}] 
                };
    },
    methods:{
        formData1(){  alert(JSON.stringify(this.form1));}
        }
}
</script>