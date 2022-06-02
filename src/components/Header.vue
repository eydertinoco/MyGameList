<template>
  <div class="header">
    <router-link to="/" class="header__logo">MyGameList</router-link>
    <div class="header__menu">
      <router-link to="/cadastrarTopicos">Reviews</router-link>
      <router-link to="/">About Us</router-link>
      <router-link to="/">News</router-link>
    </div>
    <div class="header__login">
      <div v-if="isLogged.logged" id="logged">
        <router-link to="/userview">
          <img class="header__login__image" src="https://icon-library.com/images/batman-icon-png/batman-icon-png-10.jpg" alt="avatar">
        </router-link>
        <div class="header__login__menu" ref="containerMenu" v-on:click="toggleMenu">
          <svg  ref="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
        <div v-if="menu_openned" class="header__login__menu__options">
            <ul>
              <li>Profile</li>
              <li v-on:click="logout">logout</li>
            </ul>
          </div>
      </div>
      <div v-else>
        <router-link to="/login" class="header__login__login button is-info">Sign In</router-link>
        <router-link to="/cadastrar" class="header__login__singin button is-primary">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import { reactive } from "vue";

export const isLogged = reactive({
  logged: false,
});

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  mounted() {
    
    document.addEventListener('click', (event) => {
      if ( this.menu_openned && (event.target != this.$refs.menu && event.target !== this.$refs.containerMenu) ) {
        this.closeMenu();
      }
    });

    document.addEventListener('scroll', () => {
      if (this.menu_openned) this.closeMenu();
    });
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      username: '',
      password: '',
      menu_openned: false,
      isLogged
    }
  },
  created() {
    let token = this.cookies.get('token-session');
    if ( token ) isLogged.logged = true;
  },
  methods: {
    logout() {
      this.cookies.remove('token-session');
      isLogged.logged = false;
      this.$router.push('/login');
    },
    toggleMenu() {
      this.menu_openned = !this.menu_openned;
    },
    closeMenu() {
      if (this.menu_openned) this.menu_openned = false;
    },
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
@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

.header {
  border-bottom: 1px solid $preto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @include for-desktop-only() {
    flex-direction: row;
    height: 80px;
  }
  @include for-tablet-only() {
    flex-direction: column;
    height: 150px;
  }
  @include for-phone-only() {
    flex-direction: column;
    height: 120px;
  }
  &__logo {
    font-family: 'Titan One';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 41px;
    color: #3E8ED0;
    text-shadow: 0px 6px 2px rgba(0, 0, 0, 0.25);
  }
  &__menu {
    @include for-phone-only() {
      visibility: hidden;
      height: 0px;
      width: 0px;
    }
    & a {
      color: #333333;
      font-family: "Rajdhani", sans-serif;
      font-size: 24px;
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
    @include for-phone-only() {

    }

    #logged {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      position: relative;

      & a {
        max-width: 50px;
      }
    }

    &__image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      padding: 0.2rem;
      box-shadow: 0 0 0 2px black;
    }

    &__menu {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      padding: 0.2rem;
      position: relative;
      transition: 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.02);
      }

      &__options {
        position: absolute;
        top: 100%;
        left: 80%;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: 0 0 0 1px black;
        padding: 0.2rem;
        background: $azulEscuro;
        z-index: 100;

        li {
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.2rem 0.8rem;

          &:hover {
            color: $azulClaro;
          }
        }
      }
    }

    &__login {
      background: $azulEscuro;
      padding: 10px 15px;
    }
    &__singin {
      background: $verde;
      padding: 10px 10px;
    }
    & a {
      border: none;
      border-radius: 4px;
      color: $branco;
      font-family: "Rajdhani", sans-serif;
      font-size: 24px;
      font-weight: 700;
      height: 40px;
      margin: 0 5px;
      width: 100px;
    }
  }
}
</style>