<template>
  <div class="home">
    <div class="home__intro">
      <img src="../../public/img/Controle.png" alt="Controle" class="home__intro__img">
      <div class="home__intro__text">
        <h2>Quer encontrar os jogos mais jogados?</h2>
        <h2>Quer conversar com uma comunidade ativa?</h2>
        <p>Entre no My game List e faça com que outros jogadores vivam o mesmo.</p>
      </div>
    </div>
    <div class="home__intro" style="flex-direction: column;">
      <div class="home__intro__text" style="padding-bottom: 0;">
        <h2>Escolha seu jogo, avalie, crie tópicos e faça a comunidade crescer.</h2>
      </div>
      <img src="https://thumbs.dreamstime.com/b/grupo-de-pessoas-multi-tnico-sociedade-retrato-multicultural-da-comunidade-e-cidad%C3%A3os-povos-dos-jovens-do-adulto-pessoa-idosa-153736278.jpg"
           alt="Controle" class="home__intro__img" style="margin-top: 0; width: 100%;">
    </div>

    <div class="home__bestGame">

    </div>

    <div>
      <h2>Adicione seu email para receber novidades sobre o Projeto</h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "LadingPage"
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