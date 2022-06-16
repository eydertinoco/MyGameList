<template>
  <div class="home">
    <div class="home__intro">
      <img src="../../public/img/Controle.png" alt="Controle" class="home__intro__img">
      <div class="home__intro__text">
        <h2>Encontre os jogos mais jogados e apoie seu jogo favorito.</h2>
        <p>Achou algo novo? Crie um tópico sobre isso! Faça com que outros jogadores vivam o mesmo.</p>
      </div>
    </div>
    <div class="home__bestGame">

    </div>
    <div class="home__games">
      <div class="home__games__content">
        <h2>Seja o primeiro a avaliar</h2>
        <div class="home__games__avaliar">

        </div>
        <h2>Todos os jogos</h2>
        <div class="home__games__all">
          <CardGame v-for="game in games" :key="game.id" :id="game.id" :thumbnail="game.thumbnail" :slug="game.slug"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CardGame from '@/components/CardGame.vue'
import { server } from '../services/config';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data() {
        return {
          games: [],
        };
    },
    components: { CardGame },
    methods: {
      async findGames() {
        const result = await server.get('/games');
        this.games = result.data;
      }
    },
    beforeMount() {
      this.findGames();
    }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.home {
  &__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 40px;
    @include for-phone-only() {
      flex-direction: column;
    }
    &__img {
      @include for-desktop-only() {
        margin: 9vw;
        width: 350px;
      }
      @include for-tablet-only() {
        margin: 5vw;
        width: 220px;
      }
      @include for-phone-only() {
        margin: 0;
        visibility: hidden;
        width: 0px;
      }
    }
    &__text {
      font-family: 'Poppins', sans-serif;
      color: $preto;
      padding: 5vw;
      & h2 {
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 1rem;
        line-height: 1.5;
      }
      & p {
        font-size: 24px;
        line-height: 1.5;
      }
    }
  }
  &__bestGame {
    background-image: url("../../public/img/fundoEstilo.png");
    background-color: $azulClaro;
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &__games {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $azulEscuro;
    padding: 40px 60px;
    & h2 {
      color: $branco;
      font-weight: 600;
      font-size: 2.5rem;
    }

    &__content {
      display: flex;
      flex-direction: column;
      max-width: 1080px;
    }

    &__all {
      margin-top: 1rem;
      align-self: center;
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 1rem 0.5rem;
      flex-wrap: wrap;
      padding: 0.5rem;
    }
  }
}




</style>