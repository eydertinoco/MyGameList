<template>
  <div class="body">
    <form class="form_topico" @submit="createTopic">

      <h1 v-if="!created">Criar Tópico para <span class="game-title">{{this.game.title}}</span></h1>

      <div v-if="!created" class="card">

        <div class="card__field">
          <label>Titulo</label>
          <input type="text" v-model="title" required="true"/>
        </div>

        <div class="card__field">
          <label>Descrição</label>
          <input type="text" v-model="description" required="true"/>
        </div>

        <editor v-model="content" api-key="cwe23frs9spq8i7w3rq9f15i9xpp9g5opzsasnbvtcd8vt4i"
                :init="{plugins: 'lists link image table code help wordcount'}"
                style="width: 100%; height: 800px;"/>

        <div class="card__submit">
          <button type="submit" class="card__submit__btn">Publicar</button>
        </div>

      </div>

      <div v-else class="card">
        <div class="card__info">
          Seu tópico foi criado e será avaliado em até 3 dias úteis. Continue a navegar!
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import axios from 'axios';
import { useCookies } from 'vue3-cookies';

export default {
  name: 'CadastrarTopicos',
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      title: '',
      description: '',
      content: '',
      game: {},
      created: false,
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'editor': Editor,
  },
  methods: {
    async getGame() {
      const result = await axios.get('http://localhost:4040/games');
      this.games = result.data;
      const slug = document.location.pathname.split('/')[2];
      this.game = this.games.filter((game) => game.slug === slug)[0];
      this.platform = this.game.platform.split(' ')[1].replace('(', ' ').replace(')', ' ').toLowerCase();
    },
    async createTopic(event) {
      event.preventDefault();
      if ( this.title.trim().length > 0 && this.description.trim().length > 0 && this.content.trim().length > 0 ) {
        
        let token = this.cookies.get('token-session');

        if ( token ) {
          const config = {
            headers: { Authorization: `Bearer ${token}`}
          };

          const result = await axios.post('http://localhost:4040/topics', {
            title: this.title,
            description: this.description,
            content: this.content,
            game_id: this.game.id,
          }, config);

          if ( result.status === 201 ) {
            this.created = true;
          }
        }
      }
    }
    
  },
  async beforeMount() {
    window.scroll(0, 0);
    await this.getGame();

    let token = this.cookies.get('token-session');
    if (!token) this.$router.push('/login');

  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

h1 {
  color: $preto;
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 3.2rem;
}

.game-title {
  color: $azulClaro;
}

.form_topico {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

  .card {
    @include for-desktop-only() {
      width: 960px;
    }
    @include for-tablet-only() {
      width: 600px;
    }
    @include for-phone-only () {
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    background-color: transparent;
    box-shadow: none;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 10px auto 60px;

    &__field {
      display: flex;
      margin-bottom: 1.2rem;
      flex-direction: column;
      width: 100%;

    & label {
        color: #00000050;
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    & input {
        padding: 0.5rem 1rem;
        width: 100%;
        background: #F0F0F0;
        height: 50px;
        font-size: 1.5rem;
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
        transition: 0.3s;

    &:hover {
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
    }

    }
    }

    &__submit {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: 1.2rem 0;
    @include for-phone-only() {
      width: 100%;
    }
    &__btn {
      background: $azulClaro;
      border: 0px;
      border-radius: 4px;
      color: $branco;
      font-weight: bold;
      height: 40px;
      font-size: 1.2rem;
      font-weight: 600;
      transition: 0.3s;
      cursor: pointer;
    @include for-phone-only() {
      width: 100%;
    }
    @include for-tablet-only() {
      width: 250px;
    }
    @include for-desktop-only() {
      width: 300px;
    }
    &:hover {
      background: $azulMedio;
    }
    }
    }
    &__create {
      color: black;
      display: flex;
      font-size: 20px;
      justify-content: center;
    }

    &__info {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 2rem;
      color: white;
      background: $verde;
      border-radius: 4px;
      padding: 1rem 2rem;
    }
  }

</style>