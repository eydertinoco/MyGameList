<template>
  <Header/>
  <div class="body">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
@import './assets/style/mixins.scss';


*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: $preto;
  text-decoration: none;
}

html, body {
  font-family: "Rajdhani", Helvetica, Arial, sans-serif;
}

.body {
  min-height: calc(100vh - 414px);;
}

</style>
