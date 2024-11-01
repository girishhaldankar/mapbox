<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(field, index) in fields" :key="index">
      <label :for="field.name">{{ field.label }}</label>
      <input
        v-model="formData[field.name]"
        :type="field.type"
        :name="field.name"
        :required="field.required"
      />
      <span v-if="errors[field.name]" class="error">{{ errors[field.name] }}</span>
    </div>
    <button type="submit">{{ submitText }}</button>
  </form>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true,
    },
    submitText: {
      type: String,
      default: 'Submit',
    },
  },
  data() {
    return {
      formData: {},
      errors: {},
    };
  },
  methods: {
    validate() {
      this.errors = {};
      for (const field of this.fields) {
        if (field.required && !this.formData[field.name]) {
          this.errors[field.name] = `${field.label} is required.`;
        }
      }
      return Object.keys(this.errors).length === 0;
    },
    handleSubmit() {
      if (this.validate()) {
        this.$emit('submit', this.formData);
        this.formData = {}; // Reset form data
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
