<template>
  <div v-for:="task in tasks" :key="task.id">
    <Task @toggle-click="$emit('toggle-click',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task"/>

  </div>

</template>

<script>
import Task from './Task.vue'
export default {
props:{
    tasks:Array
},
emits:['delete-task','toggle-click'],
components:{Task}
}
</script>

<style>

</style>