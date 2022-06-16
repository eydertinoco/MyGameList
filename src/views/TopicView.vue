<template>
  <div>

    <div class="headerTopico">
      <a>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.172 6.778L6.808 1.414L8.222 0L16 7.778L8.222 15.556L6.808 14.142L12.172 8.778H0V6.778H12.172Z" fill="#F14668"/>
        </svg>
        <p>Voltar</p>
      </a>

      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Jogo</a></li>
          <li><a href="#">Nome do Jogo</a></li>
          <li><a href="#">Tópico</a></li>
          <li class="is-active"><a href="#" aria-current="page">Nome do Tópico</a></li>
        </ul>
      </nav>
    </div>

    <CardTopico tituloTopico="Titulo do Tópico" nomeCriador="Eyder" dataCriacao="29/05/2022"/>

    <div style="max-width: 960px; margin: 0 auto;">
      <editor v-model="conteudo"/>
    </div>

    <hr/>

    <CardComentario/>

    <hr/>

    <div class="comentarTopico">
      <textarea v-model="message" class="comentarTopico__text"
                placeholder="Comente sobre o tópico aqui."></textarea>

      <button type="submit" class="comentarTopico__btn">Publicar</button>
    </div>

  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import { useCookies } from 'vue3-cookies';
import CardTopico from "@/components/CardTopico";
import CardComentario from "@/components/CardComentario";


export default {
  name: "TopicView",
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
      created: true,
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'editor': Editor,
    CardTopico,
    CardComentario,
  },
}
</script>

<style scoped lang="scss">
  @import "src/assets/style/mixins";

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
  .comentarTopico {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @include for-desktop-only() {
      width: 960px;
      margin: 0 auto;
    }
    &__text {
      height: 200px;
      font-size: 18px;
      width: 100%;
    }
    &__btn {
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 24px;
      font-weight: 600;
      background: #48C78E;
      padding: 10px 20px;
      margin: 25px 0;
    }
  }
</style>