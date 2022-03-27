<template>
  <div class="body">
      <GamePage/>
  </div>
</template>

<script>
import GamePage from "@/views/GamePage";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {GamePage},
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';


</style>