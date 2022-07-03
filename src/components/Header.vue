<template>
  <header>
   <h1>{{title}}</h1>
   <Button class="btn" text="add task" color="green"/>
   
  </header>
</template>

<script>
import Button from './Button.vue'
export default {
    components:{Button},
props:
{
    title:{
        type:String,
        required:true
    }
},

}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }


</style>