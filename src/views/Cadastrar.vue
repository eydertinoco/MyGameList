<template>
  <div class="body">
    <Message :msg="msg" v-show="msg"/>
    <form action="" @submit="criarConta($event)" class="form_cadastro">

      <h1>Crie sua Conta</h1>

      <div class="card">

        <div class="card__field">
          <label>Conta</label>
          <input type="text" v-model="nickname" required="true"/>
        </div>

        <div class="card__field">
          <label>E-mail</label>
          <input type="email" v-model="email" required="true"/>
        </div>

        <div class="card__field">
          <label>Senha</label>
          <input type="password" v-model="password" required="true"/>
        </div>

        <div class="card__field">
          <label>Confirmar Senha</label>
          <input type="password" v-model="passwordConfirm" required="true"/>
        </div>

        <div class="card__submit">
          <button class="card__submit__btn">Acessar</button>
        </div>

        <router-link to="/login" class="card__create">
          Login
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.172 6.778L6.808 1.414L8.222 0L16 7.778L8.222 15.556L6.808 14.142L12.172 8.778H0V6.778H12.172Z" fill="black"/>
          </svg>
        </router-link>

      </div>

    </form>
  </div>
</template>

<script>
import Message from "@/components/Message";
import { server } from '../services/config';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {Message},
  data() {
    return {
      nickname: null,
      email: null,
      password: null,
      passwordConfirm: null,
      msg: null,
    }
  },
  methods: {
    async criarConta(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm) {
        const req = await server.post('/users', {
          nickname: this.nickname,
          email: this.email,
          password: this.password
        })

        if (req.data) {
          //Mensagem
          this.msg = `A conta com email ${req.data.email} foi criada com sucesso`;
          setTimeout(() => { 
            this.msg='';
            this.$router.push('/login');
          }, 3000);
        }
      } else {
        //Mensagem
        this.msg = `Senha está incorreta.`;
        setTimeout(() => this.msg='', 1500);
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

.form_cadastro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  color: $preto;
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 3.2rem;
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
}

</style>