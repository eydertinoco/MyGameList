<template>
  <div class="wrapper">

    <header class="headerTopico">
      <a>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.172 6.778L6.808 1.414L8.222 0L16 7.778L8.222 15.556L6.808 14.142L12.172 8.778H0V6.778H12.172Z" fill="#F14668"/>
        </svg>
        <p>Voltar</p>
      </a>

      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a v-bind:href="`/games/`+ this.game.slug">{{this.game.title}}</a></li>
          <li><a href="#">{{this.title}}</a></li>
        </ul>
      </nav>
    </header>
    <section class="user-info-container">
      <div class="user-info">
        <h2>{{this.user.nickname}}</h2>
        <p>publicado em: {{formatDate(this.topic.created_at)}}</p>
      </div>
    </section>
    <div class="divider"></div>
    <section class="content-container">
      <h1 class="topic-title">{{this.topic.title}}</h1>
      <div v-html="topic.content" class="content">
      </div>
    </section>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import { server } from '../services/config';
import moment from 'moment';

export default {
  name: "TopicView",
  data() {
    return {
      title: '',
      description: '',
      content: '',
      topic: {},
      user: {},
      game: {},
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'editor': Editor,
  },
  methods: {
    async getTopic() {
      const topicID = document.location.pathname.split('/')[2];
      const result = await server.get('/topics/' + topicID);
      this.topic = result.data;

      if ( this.topic ) {
        this.title = this.topic.title;
        this.description = this.topic.description;
        this.content = this.topic.content;
        this.user = this.topic.user;
        this.game = this.topic.game;
      }
    },
    formatDate(date) {
      moment.locale('pt-br');
      return moment(date).format('L');
    },
  },
  async beforeMount() {
    await this.getTopic();
  },
}
</script>

<style scoped lang="scss">
  @import "src/assets/style/mixins";

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    margin: 1rem 0;
  }

  .divider {
    height: 1px;
    width: 100%;
    max-width: 960px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .breadcrumb {
    margin: auto 10px;
    font-size: 18px;
    & a {
      color: black;
    }
  }

  .headerTopico {
    align-items: center;
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    margin: 15px auto;
    @include for-desktop-only() {
      width: 960px;
    }
    & a {
      display: flex;
      & svg {
        margin: auto;
      }
      & p {
        margin: 0 5px;
        color: #F14668;
        font-size: 24px;
        font-weight: 600;
      }
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .content {
    width: 100%;
    max-width: 960px;
    padding: 1rem 1.5rem;
    border-left: 2px solid rgba(12, 159, 189, 0.15);
    border-right: 2px solid rgba(12, 159, 189, 0.15);
  }
  .user-info-container {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.2rem;
  }

  .topic-title {
    font-size: 3rem;
    font-weight: 500;
  }
  .user-info h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
</style>