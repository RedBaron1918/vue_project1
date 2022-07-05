<template>
  <header>
   <h1>{{title}}</h1>
   <Button v-show="removeBtn" @btn-click="$emit('btn-click')" class="btn" :text="showAddTask ? 'close' : 'add Task'" :color="showAddTask ? 'red' : 'green'"/>
   
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
    },
    showAddTask:Boolean
},
computed:{
    removeBtn(){
        if(this.$route.path === '/'){
            return true
        }else{
            return false
        }
    }
}

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