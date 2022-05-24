<template>
  <div>
    <!-- <nav> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <router-view />

    <!-- <button @click="$store.dispatch('getImages')">call api</button> -->
  </div>  
</template>

<script>

export default {
  name: 'app'
}

</script>

<style lang="scss">


</style>
