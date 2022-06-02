<template>
  <div class="gameActivity">
    <div class="gameActivity__menu">
      <p>Tópicos</p>
      <p>Avaliações</p>
    </div>

    <div class="gameActivity__newTopic">
      <router-link :to="gameuri">
        Cadastrar Tópico
      </router-link>
    </div>

    <router-link to="/topicView">
      <CardTopico tituloTopico="Titulo do Tópico" nomeCriador="Eyder" dataCriacao="29/05/2022"/>
    </router-link>
    <router-link to="/topicView">
      <CardTopico tituloTopico="Railander" nomeCriador="Agnes" dataCriacao="29/05/2022"/>
    </router-link>
    <router-link to="/topicView">
      <CardTopico tituloTopico="Mosquito" nomeCriador="Mikhael" dataCriacao="29/05/2022"/>
    </router-link>

    <CardAvaliacao notaAvaliacao="{{ GameView.rate }}" nomeCriador="{{ userName }}" dataAvaliacao="{{ dataAvaliacao }}"
                   descricaoAvaliacao="{{ descricaoAvaliacao }}"/>

  </div>
</template>

<script>
import CardTopico from "@/components/CardTopico";
import CardAvaliacao from "@/components/CardAvaliacao";

export default {
  name: "GameActivity",
  components: {CardAvaliacao, CardTopico},
  props: {
    gameSlug: String,
  },
  data() {
    return {
      rate: true,
      userName: '',
      dataAvaliacao: '',
      descricaoAvaliacao: 'Esse jogo é foda!',
      gameuri: `/cadastrarTopicos/${this.gameSlug}`
    }
  },
  updated() {
    this.gameuri = `/cadastrarTopicos/${this.gameSlug}`;
  }
}

</script>

<style scoped lang="scss">
@import "src/assets/style/mixins";

.gameActivity {
  margin: 40px auto;
  &__menu {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    & p {
      color: $cinzaEscuro;
      font-size: 24px;
      font-weight: 600;
      margin-right: 20px;
      &:hover {
        color: $vermelho;
      }
      &:active {
        color: $vermelho;
      }
    }
  }

  &__newTopic {
    background: $verde;
    border-radius: 5px;
    height: 50px;
    width: 140px;
    float: right;
    margin-bottom: 10px;
    & a {
      color: $branco;
      width: 100%;
      height: 100%;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>