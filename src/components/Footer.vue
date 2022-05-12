<template>
  <div class="footer">
    <p class="footer__logo">MyGameList</p>
    <div class="footer__social">
      <a href="https://pt-br.facebook.com/">
        <img src="../../public/img/social/facebook.png" alt="Facebook">
      </a>
      <a href="https://www.instagram.com/">
        <img src="../../public/img/social/instagram.png" alt="Instagram">
      </a>
      <a href="https://twitter.com">
        <img src="../../public/img/social/twitter.png" alt="Twitter">
      </a>
      <a href="https://www.youtube.com/">
        <img src="../../public/img/social/youT.png" alt="Youtube">
      </a>
    </div>
    <p class="footer__copyright">© 2022 MyGameList All rights reserved</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';
@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

.footer {
  background-color: $azulClaro;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__logo {
    font-family: "Titan One";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 41px;
    color: #EEF2F5;
    text-shadow: 0px 6px 2px rgb(0 0 0 / 25%);
    margin: 20px;
  }
  &__social {
    margin: 10px 0;
    & a {
      & img {
        margin: 5px;
        width: 35px;
      }
    }
  }
  &__copyright {
    color: $branco;
    font-weight: 600;
  }
}
</style>