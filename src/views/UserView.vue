<template>
  <div class="userCard">
    <User/>
    <hr>
    <div>
      <p>Meus Tópicos</p>
      <p>minhas Avaliações</p>
      <p>Favoritos</p>

      <router-link to="/">
        <CardTopico/>
      </router-link>
    </div>
  </div>
</template>

<script>
import User from "@/components/User";
import CardTopico from "@/components/CardTopico";
export default {
  name: "UserView",
  components: {CardTopico, User},
}

</script>

<style scoped lang="scss">
  .userCard {

  }
</style>