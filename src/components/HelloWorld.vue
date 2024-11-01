<template>
  <div>
      
    
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul>


  </div>
  
</template>

<script>
import axios from 'axios';



export default {
  components: {
    //ReusableForm,
  },
  data() {
    return {
      users: [],
      
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        this.users = response.data.data; // Access the data array
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    
  },
};
</script>

<style>
/* Add your styles here */
</style>




<!-- <script setup>
  import {ref} from "vue";
  import {getSigluUserData} from "../composable/userApi.js";
  let url = ref("https://reqres.in/api/users/")
  //const uid = ref(1);
  const {usersData, error} = getSigluUserData(url);
  //console.log(userData);
</script>

<template>
  <div v-if="error">Opps! Error encountered: {{ error }}>
  </div>
  <div v-else-if="usersData">
    <div v-for= "user in usersData" :key="user.id">
      <h3>IDd: {{ user.id}}</h3>
      <h3>FUll Name: {{ user.first_name}} {{ user.last_name}} </h3>
      <hr/>
    </div>
  </div>
    <div v-sele>loading....</div>
  
</template> -->

<style >

</style>
