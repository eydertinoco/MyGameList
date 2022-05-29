<template>
  <div class="userActivity">
    <div class="userActivity__menu">
      <p>Meus Tópicos</p>
      <p>Minhas Avaliações</p>
      <p>Favoritos</p>
    </div>

    <router-link to="/">
      <CardTopico tituloTopico="Titulo do Tópico" nomeCriador="Eyder" dataCriacao="29/05/2022"/>
    </router-link>
    <router-link to="/">
      <CardTopico tituloTopico="Railander" nomeCriador="Agnes" dataCriacao="29/05/2022"/>
    </router-link>
    <router-link to="/">
      <CardTopico tituloTopico="Mosquito" nomeCriador="Mikhael" dataCriacao="29/05/2022"/>
    </router-link>

  </div>
</template>

<script>
import CardTopico from "@/components/CardTopico";

export default {
  name: "UserActivity",
  components: {CardTopico},

}

</script>

<style scoped lang="scss">
  @import "src/assets/style/mixins";

  .userActivity {
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
  }
</style>