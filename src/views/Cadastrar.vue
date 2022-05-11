<template>
  <div class="body">
    <form action="" @submit="acessarConta($event)">

      <h1>Crie sua Conta</h1>

      <div class="card__field">
        <label>Conta: </label>
        <input type="text" v-model="username" required="true"/>
      </div>

      <div class="card__field">
        <label>Email: </label>
        <input type="text" v-model="email" required="true"/>
      </div>

      <div class="card__field">
        <label>Senha: </label>
        <input type="password" v-model="password" required="true"/>
      </div>

      <div class="card__field">
        <label>Confirmar Senha: </label>
        <input type="password" v-model="passwordConfirm" required="true"/>
      </div>

      <div class="card__submit">
        <button class="card__submit__btn">Acessar</button>
      </div>

      <router-link to="/login">Login</router-link>

    </form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
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
@import './../assets/style/mixins.scss';

  .body {
    align-items: center;
    background-size: cover;
    position: relative;
  }

  .card {
    align-items: center;
    border: 1px solid $azulEscuro;
    border-radius: 5px;
    background: $branco;
    justify-content: center;
    position: absolute;
    @include for-phone-only() {
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
    @include for-tablet-only() {
      top: calc(50% - 105px);
      left: calc(50% - 200px);
      height: 235px;
      width: 400px;
    }
    @include for-desktop-only() {
      top: calc(50% - 105px);
      left: calc(50% - 200px);
      height: 235px;
      width: 400px;
    }
    &__field {
      display: flex;
      flex-direction: column;
      margin: 15px 30px;
      & label {
        font-weight: bold;
        margin-bottom: 5px;
      }
      & input {
        height: 30px;
        padding-left: 5px;
        width: 100%;
      }
    }
    &__submit {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: 25px 30px;
      &__btn {
        background: $verde;
        border: 0px;
        border-radius: 10px;
        color: $branco;
        font-weight: bold;
        height: 35px;
        transition: 0.5s;
        @include for-phone-only() {
          width: 100%;
        }
        @include for-tablet-only() {
          width: 190px;
        }
        @include for-desktop-only() {
          width: 190px;
        }
        &:hover {
          background: $azulEscuro;
        }
      }
    }
  }

</style>