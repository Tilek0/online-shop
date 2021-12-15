<template>
  <div class="myButton">
    <button @click="myButtonEvent"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "myButton",
  methods: {
    myButtonEvent() {
      this.$emit('myButtonEvent')
    },
  },
};
</script>

<style lang="scss" scoped>
.myButton {
  button {
    border: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
  }
}
</style>