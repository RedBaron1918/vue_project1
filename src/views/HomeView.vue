<template>
 <div v-show="showAddTask">
  
  <AddTask @add-task="addTask"/>
  
  </div>
  <Tasks @toggle-click="ToggleClick" @delete-task="DeleteTask" :tasks="tasks"/>
</template>

<script>
import AddTask from '../components/AddTask.vue'
import Tasks from '../components/Tasks.vue'

export default {
  name: 'HomeView',
  components:{AddTask,Tasks},
  data(){
    return{
       tasks:[],
    }
  },
  props:['showAddTask'],
   methods:{
   async DeleteTask(id){
      const res = await fetch(`api/tasks/${id}`,{
        method:'DELETE'
      })
      res.status === 200 ? ( this.tasks = this.tasks.filter((task)=> task.id !== id)): alert('i did something dumb i guess')
     
    },
   async ToggleClick(id){
      const toggling = await this.singleTask(id)
      const taskupt = {...toggling, reminder: !toggling.reminder} 

      const res = await fetch(`api/tasks/${id}`,{
        method:'PUT',
        headers:{
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(taskupt)

      })
      const data = await res.json()


      this.tasks = this.tasks.map((task) => task.id === id
       ? {...task,reminder: data.reminder} : task)
    },
    async addTask(e){
      const res = await fetch('api/tasks',{
        method:'POST',
        headers:{
          'Content-type' :  'application/json',
        },
        body: JSON.stringify(e)
      })
      const data = await res.json()
      this.tasks = [...this.tasks,data]
    },
    async Tasks(){
      const res = await fetch('api/tasks')
      const data = await res.json()
      return data
    },
    async singleTask(id){
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()
      return data
    }
  },
  async created(){
    this.tasks = await this.Tasks()
    
    }
 
}
</script>
