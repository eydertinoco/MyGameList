<template>
  <div class="footer">
    <img src="../../public/img/MyGameList.png" alt="MyGameList" class="footer__logo"/>
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

.footer {
  background-color: $azulClaro;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__logo {
    margin: 30px 0px 20px;
    width: 300px;
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