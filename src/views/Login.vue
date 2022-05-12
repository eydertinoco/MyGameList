<template>
  <div class="body">
    <form action="" @submit="acessarConta($event)" class="form_login">

      <h1>Acessar Conta</h1>

      <div class="card">

        <div class="card__field">
          <label>Conta</label
          <input type="text" v-model="username" required="true"/>
        </div>

        <div class="card__field">
          <label>Senha </label>
          <input type="password" v-model="password" required="true"/>
        </div>

        <router-link to="/resetPassword" class="forgot_passowrd card__reset">
        Esqueci a senha
        </router-link>

        <div class="card__submit">
          <button class="card__submit__btn">
            Acessar
          </button>
        </div>

        <router-link to="/login" class="register_account" >
          Criar conta
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.172 6.778L6.808 1.414L8.222 0L16 7.778L8.222 15.556L6.808 14.142L12.172 8.778H0V6.778H12.172Z" fill="black"/>
          </svg>
        </router-link>

      </div>

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
@import './../assets/style/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

  h1 {
    color: $preto;
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
    margin: 3.2rem 0;
  }

  .forgot_passowrd {
    font-weight: 500;
    font-size: 1.2rem;
    color: #8D8D8D;
    align-self: flex-end;
    margin-top: 0.8rem;
    transition: 0.3s;

    &:hover {
      color: $azulClaro;
    }
  }

  .register_account {
    color: $preto;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: 0.3s;
    
    svg path {
      transition: 0.3s;
    }

    &:hover {
      color: $azulClaro;
      svg path {
        fill: $azulClaro;
      }
    }
  }

  .form_login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card {
    width: 600px;
    display: flex;
    flex-direction: column;
    margin: 60px auto 180px;
    background-color: transparent;
    box-shadow: none;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin-bottom: 2rem;

    &__field {
      display: flex;
      flex-direction: column;
      width: 100%;

      &:first-child {
        margin-bottom: 1.2rem;
      }

      & label {
        color: #00000050;
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      & input {
        padding: 0.5rem 1rem;
        width: 100%;
        background: #F0F0F0;
        height: 50px;
        font-size: 1.5rem;
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
        transition: 0.3s;

        &:hover {
          box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
        }

      }
    }
    &__reset {
      color: #8D8D8D;
      display: flex;
      font-size: 20px;
      justify-content: flex-end;
      margin-right: 30px;
    }
    &__submit {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: 1.2rem 0;
      &__btn {
        background: $azulClaro;
        border: 0px;
        border-radius: 4px;
        color: $branco;
        font-weight: bold;
        height: 40px;
        font-size: 1.2rem;
        font-weight: 600;
        transition: 0.3s;
        cursor: pointer;
        @include for-phone-only() {
          width: 100%;
        }
        @include for-tablet-only() {
          width: 250px;
        }
        @include for-desktop-only() {
          width: 300px;
        }
        &:hover {
          background: $azulMedio;
        }
      }
    }
    &__create {
      color: black;
      display: flex;
      font-size: 20px;
      justify-content: center;
    }
  }

</style>