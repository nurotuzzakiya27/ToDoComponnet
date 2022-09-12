<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  /** Soal No 2 **/
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>