<template>
  <div class="cardTopico">
    <img src="https://icon-library.com/images/batman-icon-png/batman-icon-png-10.jpg" alt="avatar">
    <div class="cardTopico__text">
      <h4>Titulo do Tópico</h4>
      <div class="cardTopico__userInfo">
        <p>Nome do usuário</p>
        <p class="cardTopico__userInfo__separador">-</p>
        <p>Data</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTopico"
}
</script>

<style scoped lang="scss">
  @import "src/assets/style/mixins";

  .cardTopico {
    border: 1px solid $cinza;
    border-radius: 10px;
    display: flex;
    margin: 10px auto 20px;
    min-height: 80px;
    padding: 15px;
    height: auto;
    transition: 0.5s;
    @include for-desktop-only() {
      width: 960px;
    }
    @include for-tablet-only() {
      width: 100%;
    }
    @include for-phone-only() {
      width: 100%;
    }
    &:hover {
      border: 1px solid $azulClaro;
      transition: 0.5s;
      & h4 {
        color: $azulEscuro;
      }
      & p {
        color: $azulClaro;
      }
    }
    & img {
      border-radius: 30px;
      height: 50px;
      width: 50px;
    }
    & h4 {
      font-size: 24px;
      font-weight: 600;
      transition: 0.5s;
    }
    &__text {
      margin-left: 15px;
    }
    &__userInfo {
      display: flex;
      & p {
        font-size: 16px;
        color: $cinzaEscuro;
        transition: 0.5s;
      }
      &__separador {
        margin: 0 5px;
      }
    }
  }
</style>