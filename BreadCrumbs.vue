<template>
    <div>
        <h3> Breadcrumbs in BootStrap</h3>
        <hr>
        <b-container>
            <h4>  Static Breadcrumb </h4>
             <b-breadcrumb>
                <b-breadcrumb-item href="#Home"> Home </b-breadcrumb-item>
                <b-breadcrumb-item href="#Blog"> Blog </b-breadcrumb-item>
                <b-breadcrumb-item  active> Hello Blog </b-breadcrumb-item>
            </b-breadcrumb>
       <hr>
       
             <h4>  Dynamic Breadcrumb </h4>
         <b-breadcrumb :items="items"> </b-breadcrumb>      
         </b-container><hr> 
         <h3> Calendar in BootStrap</h3>
         <b-row>
        <b-col> 
        <b-calendar v-model="selected_date" @context="on_context" locale="en-US"> </b-calendar> 
        </b-col> 
        <b-col>
    <p> Value: <code> {{ selected_date}}</code></p> <pre class="small"> {{ context}}</pre>      
        </b-col>
         </b-row>
       <hr><h3> Calendar with Date Limits</h3><hr>
    <b-row>
        <b-col> <b-calendar disabled></b-calendar> </b-col>
        <b-col> <b-calendar v-model="selected_date2" locale="en-US" :min="min" :max="max"></b-calendar> </b-col>
        <b-col> 
       <p> Value: <code> {{ selected_date2}}</code></p> 
        </b-col>
    </b-row>
    </div>
</template>
<script>
const now = new Date();
const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
const minDate = new Date(today);
minDate.setFullYear(minDate.getFullYear() - 5); minDate.setDate(15);
const maxDate = new Date(today);
maxDate.setFullYear(maxDate.getFullYear() + 5); maxDate.setDate(15);
export default {

    data(){
    return{
    items:[{text:'Blogs',href:'#Blogs'},{text:'My First Blog',active:true} ],
    selected_date:'',selected_date2:'',context:null,min:minDate,max:maxDate
        }
    },
    methods:{
        on_context(ctx){ this.context=ctx; }
    }
}
</script>