<template>
  <div class="gameActivity">

    <form>

      <div class="gameActivity__newTopic">
        <router-link :to="gameuri">
          Cadastrar Tópico
        </router-link>
      </div>


      <div class="gameActivity__menu">
        <button @click="tabList === true">Tópicos</button>
        <button @click="tabList === false">Avaliações</button>
      </div>

      <div v-if="tabList === true">
        <CardTopico v-for="topic in topics" :key="topic.id" :id="topic.id" :topicTitle="topic.title"/>
      </div>

    </form>

  </div>
</template>

<script>
import CardTopico from "@/components/CardTopico";

export default {
  name: "GameActivity",
  components: {CardTopico},
  props: {
    gameId: String,
    topics: String,
    gameSlug: String,
  },
  data() {
    return {
      tabList: true,
      rate: true,
      userName: '',
      dataAvaliacao: '',
      descricaoAvaliacao: 'Esse jogo é foda!',
      gameuri: `/cadastrarTopicos/${this.gameSlug}`,
    }
  },
  updated() {
    this.gameuri = `/cadastrarTopicos/${this.gameSlug}`;
  },
  // methods: {
  //   async findTopics() {
  //     const result = await server.get(`/topics`);
  //     this.topics = result.data;
  //     console.log(this.topics);
  //   },
  // },
  // async beforeMount() {
  //   await this.findTopics();
  // }
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
    & button {
      background: none;
      border: none;
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