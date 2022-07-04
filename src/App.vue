<template>
<div class="container">
  <Header title="Task Tracker"/>
  <AddTask/>
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
      tasks:[]
    }
  },
  methods:{
    DeleteTask(id){
      this.tasks = this.tasks.filter((task)=> task.id !== id)
    },
    ToggleClick(id){
      this.tasks = this.tasks.map((task) => task.id === id
       ? {...task,reminder:!task.reminder} : task)
    }
  },
  created(){
    this.tasks = [
      {
        id:1,
        text:'go meet the boyz',
        day:'Jun 3rd at 5pm',
        reminder: true
      },
      {
        id:2,
        text:'check if crypro is still dying',
        day:'everyday',
        reminder: true
      },
      {
        id:3,
        text:'go and cry',
        day:'Jun 5th at 9pm',
        reminder: false
      }
    ]
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
