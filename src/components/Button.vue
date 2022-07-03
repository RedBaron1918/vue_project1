<template>
  <button :style="{background:color}">{{text}}</button>
</template>

<script>
export default {
props:{
    text:String,
    color:String
}
}
</script>

<style>

</style>