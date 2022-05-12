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
      <h2>Seja o primeiro a avaliar</h2>
      <div class="home__games__avaliar">

      </div>
      <h2>Todos os jogos</h2>
      <div class="home__games__all">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';

.home {
  &__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 40px;
    &__img {
      margin: 9vw;
      width: 350px;
    }
    &__text {
      padding: 5vw;
      & h2 {
        font-weight: 700;
        font-size: 40px;
      }
      & p {
        font-size: 24px;
      }
    }
  }
  &__bestGame {
    background-image: url("../../public/img/fundoEstiloEdit.png");
    background-color: $azulClaro;
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &__games {
    background: $azulEscuro;
    padding: 40px 60px;
    & h2 {
      color: $branco;
      font-weight: 600;
      font-size: 36px;
    }
  }
}




</style>