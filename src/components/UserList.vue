<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <img :src="user.avatar" alt="User Avatar" class="avatar" />
        <div>
          <h3>{{ user.first_name }} {{ user.last_name }}</h3>
          <p>Email: {{ user.email }}</p>
        </div>
      </li>
    </ul>
    <p v-if="loading">Loading users...</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { fetchUsers } from '@/services/apiService'; // Adjust the path as necessary

export default {
  data() {
    return {
      users: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      this.loading = true;
      this.error = null;

      try {
        this.users = await fetchUsers();
      } catch (error) {
        this.error = 'Failed to load users.';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
