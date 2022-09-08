<template>
  <ul class="list">
    <li v-for="(item, index) in listdata" :key="index">
      {{ item.title }}
      <button-form
        @emitClick="deleteList(index)"
        text="Hapus"
        color="transparent"
      />
    </li>
  </ul>
</template> 
<script>
export default {
  props: {
    listdata: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    deleteList(index) {
      this.$emit("emitDelete", index);
    },
  },
};
</script>