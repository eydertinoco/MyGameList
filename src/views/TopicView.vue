<template>
  <div>
    <p>Voltar</p>

    <CardTopico tituloTopico="Titulo do Tópico" nomeCriador="Eyder" dataCriacao="29/05/2022"/>

    <editor v-model="conteudo"/>

    <hr/>

    <CardComentario/>

    <hr/>

    <div>
      InputareaText
    </div>

    <div class="card__submit">
      <button type="submit" class="card__submit__btn">Publicar</button>
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

<style scoped>

</style>