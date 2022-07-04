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
        this.$emit('show-task')
    }
}
}
</script>

<style>

</style>