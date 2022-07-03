<template>
  <button @click="OnClick()" :style="{background:color}">{{text}}</button>
</template>

<script>
export default {
props:{
    text:String,
    color:String
},
methods:{
    OnClick(){
        
    }
}
}
</script>

<style>

</style>