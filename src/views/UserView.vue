<template>
  <div class="userCard">
    <UserInfo :username="username" :email="email" />
    <hr>
    <UserActivity/>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import UserActivity from "@/components/UserActivity";
import { server } from '../services/config';
import { useCookies } from 'vue3-cookies';

export default {
  name: "UserView",
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      username: 'a',
      email: 'a',
    }
  },
  components: {UserActivity, UserInfo},
  async beforeMount() {
    let token = this.cookies.get('token-session');
    if (!token) this.$router.push('/login');
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    };

    const { data } = await server.get('/users/logged', config);
    const user = data;
    if ( user ) {
      this.username = user.username;
      this.email = user.email;
    } else {
      this.cookies.remove('token-session');
      this.$router.push('/login');
    }
  }
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