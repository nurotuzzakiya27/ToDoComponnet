<template>
  <button type="button" 
    @click="functionClick" 
    :class="stylecustom"
  >
    {{ textlabel }}
  </button>
</template>

<script>
export default {
  props:{
    textlabel:{
      type: String,
      default: "Label"
    },
    stylecustom:{
      type: String,
      default: ""
    },
  },
  methods:{
    functionClick(){
      this.$emit("emitClick")
    }
  }
}
</script>

<style scoped>
.transparent{
  font-size: 11px;
  color: darksalmon;
  background: transparent;
}
.blue{
  background: lightblue;
  border: 1px solid lightblue;
}
</style>