<template>
  <div>
    <h1>Reusable Contact Form</h1>
    <ReusableForm
      :fields="formFields"
      submitText="Send"
      @submit="handleFormSubmit"
    />

 
   
  </div>
</template>

<script>
	
import ReusableForm from '../components/ReusableForm.vue';

export default {
  name: 'Contact',
  components: {
    ReusableForm,
  },
  data() {
    return {
      users: [],
      formFields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'number', label: 'Number', type: 'number', required: true },
        { name: 'message', label: 'Message', type: 'textarea', required: false },
      ],
    };
  },
  mounted() {
    
  },
  methods: {
    
    handleFormSubmit(formData) {
      console.log('Form submitted:', formData);
      // Handle form submission (e.g., send to an API)
    },
  },
};
</script>
