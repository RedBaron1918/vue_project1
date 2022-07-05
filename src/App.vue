<template>
<div class="container">
  <Header :showAddTask="showTaskadd" @btn-click="toggleTask" title="Task Tracker"/>

  <div v-show="showTaskadd">
  
  <AddTask @add-task="addTask"/>
  
  </div>
  <Tasks @toggle-click="ToggleClick" @delete-task="DeleteTask" :tasks="tasks"/>
</div>

</template>



<script>
import AddTask from './components/AddTask.vue'
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
export default {
  components:{Header, Tasks,AddTask},
  data(){
    return{
      tasks:[],
      showTaskadd:false,
    }
  },
  methods:{
    toggleTask(){
      this.showTaskadd = !this.showTaskadd
    },

    DeleteTask(id){
      this.tasks = this.tasks.filter((task)=> task.id !== id)
    },
    ToggleClick(id){
      this.tasks = this.tasks.map((task) => task.id === id
       ? {...task,reminder:!task.reminder} : task)
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




<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
