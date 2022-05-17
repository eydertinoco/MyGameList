<template>
  <div class="gameview">
    <header class="game">
      <img :src="game.thumbnail" :alt="game.slug">
      <div class="game__content">
        <h1 class="game__content__title">{{game.title}}</h1>
        <p class="game__content__description">
          {{game.description}}
        </p>

        <div class="game__content__badges">
          <div class="game__content__badges__left">
            <div class="game__content__badges__left__item">
              {{game.genre}}
            </div>
            <div class="game__content__badges__left__item">
              <span v-if="platform" >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.479L7.377 1.463V8.59H0V2.48V2.479ZM0 15.521L7.377 16.538V9.498H0V15.521ZM8.188 16.646L18 18V9.498H8.188V16.646ZM8.188 1.354V8.59H18V0L8.188 1.354Z" fill="#00D1B2"/>
                </svg>
              </span>
            </div>
          </div>
          <div class="game__content__badges__right">
            Avaliar
          </div>
        </div>
      </div>
    </header>

    <section class="info">
      <h1 class="info__title">Informations</h1>
      <div class="info__data">
        <div class="info__data__item">
          <strong>Release Date</strong>
          <span>{{formatDate(game.release_date)}}</span>
        </div>
        <div class="info__data__item">
          <strong>Developer</strong>
          <span>{{game.developer}}</span>
        </div>
        <div class="info__data__item">
          <strong>Publisher</strong>
          <span>{{game.publisher}}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: "GameView",
  data() {
    return {
      game: {},
      platform: ''
    }
  },
  methods: {
    async getGame() {
      const result = await axios.get('http://localhost:4040/games');
      this.games = result.data;
      const slug = document.location.pathname.split('/')[2];
      this.game = this.games.filter((game) => game.slug === slug)[0];
      this.platform = this.game.platform.split(' ')[1].replace('(', ' ').replace(')', ' ').toLowerCase();
    },
    formatDate(date) {
      moment.locale('pt-br');
      return moment(date).format('L');
    }
  },
  beforeMount() {
    window.scroll(0, 0);
    this.getGame();
  }
}
</script>

<style scoped lang="scss">
  @import './../assets/style/mixins';
  @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

  .gameview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    font-family: 'Rajdhani', Arial, Helvetica, sans-serif;
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