<template>
  <div class="cardAvaliacao">
    <img src="https://icon-library.com/images/batman-icon-png/batman-icon-png-10.jpg" alt="avatar">
    <div class="cardAvaliacao__text">
      <h4>{{ notaAvaliacao }} - {{ nomeCriador }}</h4>
      <div class="cardAvaliacao__userInfo">
        <p>{{ dataAvaliacao }}</p>
        <p>{{ descricaoAvaliacao }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAvaliacao",
  props: {
    notaAvaliacao: {
      type: Boolean,
      default: () => true,
    },
    nomeCriador: {
      type: String,
      default: () => "Desconhecido",
    },
    dataAvaliacao: {
      type: Date,
      default: () => "01/01/1900",
    },
    descricaoAvaliacao: {
      type: String,
      default: () => "Texto falando bem ou mal do jogo",
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/mixins";

.cardAvaliacao {
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
    flex-direction: column;
    & p {
      font-size: 16px;
      color: $cinzaEscuro;
      transition: 0.5s;
    }
  }
}
</style>