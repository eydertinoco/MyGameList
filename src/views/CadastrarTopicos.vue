<template>
  <div class="body">
    <form class="form_topico">

      <h1>Crie Tópico</h1>

      <div class="card">

        <div class="card__field">
          <label>Titulo</label>
          <input type="text" v-model="titulo" required="true"/>
        </div>

        <div class="card__field">
          <label>Descrição</label>
          <input type="text" v-model="descricao" required="true"/>
        </div>

        <editor api-key="cwe23frs9spq8i7w3rq9f15i9xpp9g5opzsasnbvtcd8vt4i"
                :init="{plugins: 'lists link image table code help wordcount'}"
                style="width: 100%; height: 800px;"/>

        <div class="card__submit">
          <button class="card__submit__btn">Publicar</button>
        </div>

      </div>

    </form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'CadastrarTopicos',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'editor': Editor,
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
  }

</style>