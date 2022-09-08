<template>
  <form class="form">
    <input type="text" v-model="inputform" />
    <button-form @emitClick="reset" text="Reset" color="blue" />
    <button-form @emitClick="addList" text="Submit" />
  </form>
</template> 
<script>
export default {
  data() {
    return {
      inputform: "",
    };
  },
  methods: {
    addList() {
      this.$emit("emitSubmit", this.inputform);
      this.inputform = "";
    },
    reset() {
      this.inputform = "";
    },
  },
};
</script>