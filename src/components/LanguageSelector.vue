<template>
  <div>
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="lang in languages" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();
    const languages = ['en', 'hi', 'mr']; // Available languages
    const selectedLanguage = ref(locale.value); // Sync with current locale

    const changeLanguage = () => {
      locale.value = selectedLanguage.value; // Change the locale
    };

    return {
      languages,
      selectedLanguage,
      changeLanguage,
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
