<template>
  <div class="userCard">
    <UserInfo/>
    <hr>
    <UserActivity/>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import UserActivity from "@/components/UserActivity";
export default {
  name: "UserView",
  components: {UserActivity, UserInfo},
}

</script>

<style scoped lang="scss">
  @import "src/assets/style/mixins";

  .userCard {
    @include for-desktop-only() {
      margin: 0 auto;
      width: 960px;
    }
    @include for-tablet-only() {
      margin: 0 60px;
    }
    @include for-phone-only() {
      margin: 0 10px;
    }
  }
</style>