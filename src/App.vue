<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<style>

</style>
<script>

  import MainLayout from "./components/MainLayout";
  import EmptyLayout from "./components/EmptyLayout";

  export  default {
    computed:{
      layout(){
        return (this.$route.meta.layout || 'empty')+'-layout'
      },
    },
    components:{
      MainLayout,
      EmptyLayout
    }
  }
</script>