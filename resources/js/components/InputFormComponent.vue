<template>
  <form class="form">
    <input type="text" v-model="inputform" />
    <button-form textlabel="Submit" @emitClick="addList" stylecustom="blue" />
    <button-form textlabel="Reset" @emitClick="resetList" />
  </form>
</template>

<script>
export default {
  data(){
    return {
      inputform: ""
    }
  },
  methods:{
    addList(){
      this.$emit("emitSubmit", this.inputform)
      this.inputform = ""
    },
    resetList(){
      this.inputform = ""
    }
  }
}
</script>