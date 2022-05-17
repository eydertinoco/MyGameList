<template>
  <router-link :to="getURI()"> 
    <img class="cardgame" :src="thumbnail" :alt="slug">
  </router-link>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CardGame",
  props: {
    thumbnail: String,
    slug: String,
    id: String,
  },
  methods: {
    getURI() {
      return `/games/${this.slug}`;
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';
@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

.cardgame {
  width: 200px;
  height: 272px;
  border-radius: 4px;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.4);
  padding: 0;

  cursor: pointer;

  @include for-phone-only() {
    width: calc(200px * 1.5);
    height: calc(272px * 1.5);
  }
  @include for-tablet-only() {
    width: calc(200px * 1.2);
    height: calc(272px * 1.2);
  }

  transition: 0.3s;
  &:hover {
    transform: translateY(-8px);
  }
}

</style>