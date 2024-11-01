<template>
  <div>
    <h1>Home Page</h1>
    <h1>Reusable Button Example</h1>
    <BaseButton text="Click Me" @click="handleClick" />
    <BaseButton text="Submit" variant="primary" @click="handleSubmit" />
    <BaseButton text="Disabled" :disabled="true" />

     <UserList/>

  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import UserList from '../components/UserList.vue';
export default {
  name: 'Home',
  components:{
  	BaseButton,
  	UserList,
  },
   methods: {
    handleClick() {
      alert('Button clicked!');
    },
    handleSubmit() {
      alert('Form submitted!');
    },
  },
};
</script>
