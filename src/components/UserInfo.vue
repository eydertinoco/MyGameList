<template>
  <div class="userInfo">
    <img src="https://icon-library.com/images/batman-icon-png/batman-icon-png-10.jpg" alt="avatar">
    <p class="userInfo__name">{{username}}</p>
    <p class="userInfo__email">{{email}}</p>
    <button class="userInfo__editButton">Editar Perfil</button>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "User",
  props: {
    username: String,
    email: String,
  }
}
</script>

<style scoped lang="scss">
  @import "src/assets/style/mixins";

  .userInfo {
    height: auto;
    text-align: center;
    margin: 60px auto;
    width: 300px;
    & img {
      border: 0px;
      border-radius: 150px;
      height: 200px;
      width: 200px;
    }
    &__name {
      font-size: 32px;
      font-weight: 600;
    }
    &__email {
      font-size: 16px;
      margin: 15px 0;
    }
    &__editButton {
      border: 3px solid $azulClaro;
      border-radius: 5px;
      background: $branco;
      color: $azulClaro;
      cursor: pointer;
      font-size: 20px;
      font-weight: 600;
      height: 40px;
      transition: 0.5s;
      width: 140px;
      &:hover {
        border: 3px solid $azulEscuro;
        color: $azulEscuro;
      }
    }
  }
</style>