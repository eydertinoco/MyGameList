<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Message",
  props: {
    msg: String,
  }
}
</script>

<style scoped>
.message-container {
  color: #004085;
  background-color: #CCE5FF;
  border: 2px solid #B8DAFF;
  border-radius: 5px;
  padding: 10px;
  width: 400px;
  position: fixed;
  top: 50px;
  right: 30px;
  text-align: center;
  font-size: 1.5rem;
  z-index: 1000;
}
</style>