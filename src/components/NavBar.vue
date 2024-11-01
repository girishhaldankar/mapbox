<!-- src/components/NavBar.vue -->
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/map">Map</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
nav {
  margin-bottom: 1em;
}
router-link {
  margin-right: 1em;
  text-decoration: none;
  color: blue;
}
</style>
