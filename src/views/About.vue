<template>
  <div>
    <h1>About Page</h1>
    <p>This is the About page!</p>
 <CurrentTime />
        <LanguageSelector />
    <h1>{{ $t('welcome') }}</h1>
        
   
  </div>
</template>

<script>
	
//import HelloWorld from '../components/HelloWorld.vue'
import LanguageSelector from '../components/LanguageSelector.vue';
import CurrentTime from '../components/CurrentTime.vue';
export default {
  name: 'About',
  components:{
  	//HelloWorld,
  	LanguageSelector,
  	CurrentTime,
  }
};
</script>
