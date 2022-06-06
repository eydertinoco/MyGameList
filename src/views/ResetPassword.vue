<template>
  <div>
    <form action="" class="form_reset">

      <h1>Restaurar Senha</h1>

      <div class="card">

        <div v-if="!sent" class="card__field">
          <label>E-mail</label>
          <input type="text" v-model="email" required="true"/>
        </div>

        <div v-if="!sent" class="card__submit">
          <button type="button" class="card__submit__btn" @click="forgotPassword">
            Restaurar
          </button>
        </div>

        <div v-else class="card__info">
          O link para alterar sua senha foi enviado para seu email! 😳
        </div>

      </div>

    </form>
  </div>
</template>

<script>
import { server } from '../services/config';

export default {
  name: "ResetPassword",
  data() {
    return {
      email: '',
      sent: false,
    }
  },
  methods: {
    async forgotPassword(){
      const result = await server.post('/users/forgot', {
        email: this.email,
      })

      if ( result )
      {
        this.sent = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

.form_reset {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  color: $preto;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin: 30px 0;
}

.card {
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 60px auto 180px;
  background-color: transparent;
  box-shadow: none;
  &__field {
    display: flex;
    flex-direction: column;
    margin: 15px 30px;
    & label {
      color: #00000050;
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    & input {
      padding-left: 5px;
      width: 100%;
      background: #C4C4C426;
      height: 50px;
      font-size: 28px;
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
    margin: 25px 30px;
    &__btn {
      background: $azulClaro;
      border: 0px;
      border-radius: 10px;
      color: $branco;
      font-size: 24px;
      font-weight: 600;
      height: 50px;
      transition: 0.5s;
      @include for-phone-only() {
        width: 100%;
      }
      @include for-tablet-only() {
        width: 300px;
      }
      @include for-desktop-only() {
        width: 350px;
      }
      &:hover {
        background: $azulEscuro;
      }
    }
  }
  &__create {
    color: black;
    display: flex;
    font-size: 20px;
    justify-content: center;
  }

  &__info {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }
}

</style>