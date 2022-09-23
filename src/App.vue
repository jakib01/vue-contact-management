<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "./components/NavBar"
  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>

<style>

</style>
