<template>
  <div class="field">
    <label>{{ labelText }}</label>
    <input type="{{ tipoInput }}" required="{{ isRequired }}"/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Input",

  data() {
    return {
      labelText: '',
      tipoInput: '',
      modelInput: '',
      isRequired: '',
    }
  },
}
</script>

<style scoped lang="scss">
.field {
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
</style>