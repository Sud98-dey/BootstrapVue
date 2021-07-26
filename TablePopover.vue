<template>
<section> 
    <b-container fluid> 
        <h4> PopOver </h4>
        <b-button variant="success" v-b-popover.left="'Popover!'" class="mr-4"> Click </b-button>
        <b-button variant="outline-success" class="mr-4"
        v-b-popover.focus.bottom="{title:'PopOver',content:'PopOver Content'}" > Focus </b-button>
        <b-button variant="warning" v-b-popover.hover.top="popoverdata" class="mr-4"> Hover </b-button>
        <b-button variant="info" v-b-popover.hover.focus.topright.html="popoverhtml" 
        class="mr-4" title="Today Date"> Hover+Focus </b-button>
    </b-container> <hr>
<b-container>
    <h5> Bootstrap Table </h5>
<b-table id="my-table" :items="people" :per-page="perPage" :current-page="currentPage"
:fields="fields" striped bordered style="width: 60rem;"> </b-table>
<b-pagination v-model="currentPage" :total-rows="rows" 
:per-page="perPage" aria-controls="my-table">
<template #first-text> <b-button variant="success"> First</b-button></template>
<template #prev-text> <b-button variant="danger"> Prev </b-button></template>
<template #next-text> <b-button variant="info"> Next </b-button></template>
<template #last-text> <b-button variant="warning"> Last </b-button> </template>
</b-pagination>
<p class="mt-3"> Current Page: {{ currentPage }}</p>
</b-container><hr>
</section>
</template>
<script>
const data = { Name:'info',age:'warning'};
export default {
    data(){
      return {  
          currentPage:1,perPage:4,
          fields:[{key:'Name',sortable:false,variant:'primary',label:'Person Name'},
                  {key:'age',sortable:true,label:'Person Age',variant:'primary'}],
          people:[{id:1,Name:'Mahesh Shah',age:51},{id:2,Name:'Harish Khanna',age:41},
                 {id:3,Name:'Ivan Mikloj',age:38},{id:4,Name:'Mirwias Butt',age:46},
            {id:5,Name:'Mahesh A Shah',age:57,_rowVariant:'danger'},{id:6,Name:'Rahul Bose',age:44},
                 {id:7,Name:'Binoy Roy',age:33},{id:8,Name:'Namit Sharma',age:29},
            {id:9,Name:'Ali',age:28,_cellVariants:data},{id:10,Name:'Noel Ray',age:28},
            {id:11,Name:'Arslan Khan',age:38},{id:12,Name:'Namit Khanna',age:35}]
      };
    },
    computed:{
        popoverdata(){ 
            const date = new Date();
            return { title:'PopOver Title',content: 'The date is: ' + date };
        },
        popoverhtml() { return '<strong>' + new Date() +'</strong>'},
        rows(){ return this.people.length; }
    }
}
</script>