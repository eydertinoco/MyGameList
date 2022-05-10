<template>
  <div class="header">
    <img src="../../public/img/MyGameList.png" alt="MyGameList" class="header__logo"/>
    <div class="header__menu">
      <router-link to="/">Reviews</router-link>
      <router-link to="/login">About Us</router-link>
      <router-link to="/login">News</router-link>
    </div>
    <div class="header__login">
      <button class="header__login__login">Log In</button>
      <button class="header__login__singin">Sing In</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    acessarConta(e) {
      e.preventDefault();
      console.log('Dados do usuário preenchido:');

      const username = this.username;
      const password = this.password;

      console.log(username);
      console.log(password);

      //ajax

      //banco de dados
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';

.header {
  border-bottom: 1px solid $preto;
  display: flex;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &__logo {
    width: 300px;
  }
  &__menu {
    & a {
      color: $preto;
      font-size: 1.6rem;
      font-weight: 700;
      margin: 0 10px;
      transition: 0.5s;
      &:hover {
        color: $verde;
      }
      &:focus {
        color: $verde;
      }
      &:active {
        color: $verde;
      }
    }
  }
  &__login {
    &__login {
      background: $azulEscuro;
    }
    &__singin {
      background: $verde;
    }
    & button {
      border: none;
      border-radius: 10px;
      color: $branco;
      font-size: 1.3rem;
      font-weight: 700;
      height: 40px;
      margin: 0 5px;
      width: 100px;
    }
  }
}
</style>