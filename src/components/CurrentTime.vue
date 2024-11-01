<template>
  <div>
    <h1>Current Time</h1>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '', // To store the current time
    };
  },
  mounted() {
    this.updateTime(); // Initial call to set time
    setInterval(this.updateTime, 1000); // Update time every second
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear the interval when component is destroyed
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString(); // Format the time
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
