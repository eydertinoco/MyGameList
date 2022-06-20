<template>
  <div class="gameCard">
    <div class="gameview">
      <header class="game">
        <img :src="game.thumbnail" :alt="game.slug">
        <div class="game__content">
          <h1 class="game__content__title">
            {{ game.title }}
          </h1>
          <p class="game__content__description">
            {{ game.description }}
          </p>

          <div class="game__content__badges">
            <div class="game__content__badges__left">
              <div class="game__content__badges__left__item">
                {{ game.genre }}
              </div>
              <div class="game__content__badges__left__item">
              <span v-if="platform" >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.479L7.377 1.463V8.59H0V2.48V2.479ZM0 15.521L7.377 16.538V9.498H0V15.521ZM8.188 16.646L18 18V9.498H8.188V16.646ZM8.188 1.354V8.59H18V0L8.188 1.354Z" fill="#00D1B2"/>
                </svg>
              </span>
              </div>
            </div>
            <div v-if="isLogged && hasReview === -1" @click="openModal" class="game__content__badges__right">
              Avaliar
            </div>
            <div v-if="hasReview != -1" class="game__content__badges__review">
            <span v-if="hasReview === 1" class="good">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"/></svg>
            </span>
              <span v-else-if="hasReview === 0" class="bad">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-5.293 1.293l-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707z"/></svg>
            </span>
            </div>
          </div>
        </div>
      </header>
      <section class="info">
        <h1 class="info__title">Informations</h1>
        <div class="info__data">
          <div class="info__data__item">
            <strong>Data de Publicação</strong>
            <span>{{ formatDate(game.release_date) }}</span>
          </div>
          <div class="info__data__item">
            <strong>Desenvolvedora</strong>
            <span>{{ game.developer }}</span>
          </div>
          <div class="info__data__item">
            <strong>Publicadora</strong>
            <span>{{ game.publisher }}</span>
          </div>
        </div>
      </section>
      <div class="rate__modal" @click="closeModal" v-if="modalOpenned">
        <form @submit="sendReview" class="rate__modal__form">
          <h2>Avalie <span>{{game.title}}</span></h2>
          <div class="rate__modal__form__buttons">
            <button type="button" ref="btnLike" disabled @click="onRate(true)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"/></svg>
            </button>
            <button type="button" ref="btnDislike" @click="onRate(false)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-5.293 1.293l-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707z"/></svg>
            </button>
          </div>
          <textarea v-model="comment" placeholder="Escreva um comentário"></textarea>
          <button type="submit" class="button is-success">Avaliar</button>
        </form>
      </div>
    </div>
    <hr>
    <GameActivity :gameSlug="this.game.slug" :gameId="this.game.id"/>
  </div>
</template>

<script>
import { server } from '../services/config';
import moment from 'moment';
import { useCookies } from 'vue3-cookies';
import GameActivity from "@/components/GameActivity";

export default {
  name: "GameView",
  components: {GameActivity},
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      game: {},
      platform: '',
      isLogged: false,
      modalOpenned: false,
      rate: true,
      comment: '',
      hasReview: -1,
    }
  },
  methods: {
    async getGame() {
      const result = await server.get('/games');
      this.games = result.data;
      const slug = document.location.pathname.split('/')[2];
      this.game = this.games.filter((game) => game.slug === slug)[0];
      this.platform = this.game.platform.split(' ')[1].replace('(', ' ').replace(')', ' ').toLowerCase();
    },
    formatDate(date) {
      moment.locale('pt-br');
      return moment(date).format('L');
    },
    openModal() {
      this.modalOpenned = true;
    },
    closeModal(event) {
      if (event.target === event.currentTarget) {
        this.modalOpenned = false;
      }
    },
    onRate(value) {
      this.rate = value;
      if (value) {
        this.$refs.btnLike.setAttribute('disabled', true);
        this.$refs.btnDislike.removeAttribute('disabled');
      } else {
        this.$refs.btnDislike.setAttribute('disabled', true);
        this.$refs.btnLike.removeAttribute('disabled');
      }
    },
    async sendReview(event) {
      event.preventDefault();
      let token = this.cookies.get('token-session');
      if ( token ) {

        const config = {
          headers: { Authorization: `Bearer ${token}`}
        };
        
        setTimeout(() => { this.modalOpenned = false; }, 500);

        let result = await server.post('/reviews', {
          comment: this.comment, 
          rate: this.rate,
          game_id: this.game.id,
        }, config);

        if (result) {
          this.hasReview = this.rate ? 1 : 0;
        }
      }
    }
  },
  async beforeMount() {
    window.scroll(0, 0);
    await this.getGame();

    let token = this.cookies.get('token-session');
    if (token) this.isLogged = true;

    if (this.isLogged) {
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      };

      const result = await server.get(`/reviews/game/${this.game.id}`, config);
      
      if (result.data) {
        this.hasReview = result.data[0].rate ? 1 : 0;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import './../assets/style/mixins';

  .gameCard {
    @include for-desktop-only() {
      margin: 0 auto;
      width: 960px;
    }
    @include for-tablet-only() {
      margin: 0 60px;
    }
    @include for-phone-only() {
      margin: 0 10px;
    }
  }

  .gameview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    font-family: 'Rajdhani', Arial, Helvetica, sans-serif;
  }

  .rate__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;
    
    &__form {
      background: white;
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
      padding: 1.2rem;
      gap: 1.2rem;

      h2 {
        font-family: 'Rajdhani', Arial, Helvetica, sans-serif;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;

        span {
          color: $azulEscuro;
        }
      }

      textarea {
        outline: none;
        border: none;
        width: 100%;
        min-height: 200px;
        background: #c4c4c438;
        border-radius: 4px;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
        resize: none;
        transition: 0.3s;
        font-size: 1rem;
        padding: 0.5rem;

        &:hover {
          box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
          cursor: pointer;
        }

        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        &::-webkit-scrollbar-thumb {
          background: $azulClaro;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: $azulEscuro; 
        }
      }

      &__buttons {
        width: 100%;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        button {
          outline: none;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 4px;
          background: white;
          cursor: pointer;
          transition: 0.3s;

          &:first-child {
            box-shadow: 0 0 0 2px $azulClaro;
            svg {
              fill: $azulClaro;
            }
            &:hover {
              box-shadow: 0 0 0 3px $azulClaro;
            }
            &:disabled {
              background: $azulClaro;
              color: white;
              svg {
                fill: white;
              } 
            }
          }

          &:last-child {
            box-shadow: 0 0 0 2px #F14668;

            svg {
              fill: #F14668;
            }
            &:hover {
              box-shadow: 0 0 0 3px #F14668;
            }
            &:disabled {
              background: #F14668;
              svg {
                fill: white;
              }
            }
          }

          
        }
      }
    }
  }


  .game {
    display: flex;
    width: 960px;
    gap: 1.8rem;
    color: $preto;
    margin-top: 6rem;
    margin-bottom: 1rem;
    padding: 1rem;

    img {
      border-radius: 4px;
      box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.4);
    }

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: left;

      &__title {
        font-size: 2.8rem;
        font-weight: bold;
      }

      &__description {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;

        margin-bottom: 1rem;
        color: $preto;
        opacity: 0.8;
      }

      &__badges {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__left {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          &__item {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: bold;
            color: $verde;
            height: 40px;
            padding: 0.5rem 1.5rem;
            border-radius: 4px;
            box-shadow: 0 0 0 2px $verde;

            span {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }

        &__right {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: $azulClaro;
          height: 40px;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          box-shadow: 0 0 0 2px $azulClaro;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            color: $azulMedio;
            box-shadow: 0 0 0 3px $azulMedio;
          }
        }

        &__review {
          
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: $azulClaro;
          height: 40px;
          width: 40px;
          box-shadow: 0 3px 0 0 $verde;
          cursor: pointer;
          transition: 0.3s;

          span {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          span svg {
            transition: 0.3s;
          }

          span.good svg {
            fill: $azulMedio;
          }

          span.bad svg {
            fill: #F14668;
          }

          &:hover span svg {
            transform: translateY(-5px);
          }

        }
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 960px;
    gap: 1.8rem;
    color: $preto;
    padding: 1rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;

    &__title {
      font-size: 2rem;
      font-weight: bold;
      color: $preto;
      opacity: 0.5;
    }

    &__data {
      width: 100%;
      max-width: 500px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      &__item {
        display: flex;
        flex-direction: column;

        strong {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1;
        }

        span {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
    }
  }
</style>
