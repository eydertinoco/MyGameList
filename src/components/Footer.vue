<template>
  <div class="copyright">
    <p>© 2022, MyGameList</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';

.footer {
  background-color: $azulClaro;
  bottom: 0px;
  text-transform: uppercase;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 100%;
  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    @include for-phone-only() {
      height: 140px;
    }
    @include for-tablet-only() {
      height: 100px;
    }
    & .info {
      color: $branco;
      margin: 5px 0;
      &__t1 {
        font-weight: bold;
      }
      &__t2 {
      }
    }
    & .redeSocial {
      &__link {
        text-decoration: none;
      }
      &__icon {
        color: $branco;
        margin: 0 5px;
        height: 40px;
        width: 40px;
      }
    }
  }
}

.copyright {
  background: $preto;
  color: $branco;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  font-size: 14px;
  & .btnTop {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    border: 3px solid $preto;
    background: $cinza;
    color: $preto;
    position: absolute;
    bottom: 45px;
    right: 10px;
    z-index: 900;
  }
}

</style>