<template>
  <ul class="list">
    <li v-for="(item, index) in listdata" :key="index">
      <input type="checkbox" :id="'list' + index" v-model="item.status" />
      <label :class="item.status ? 'done' : ''">{{ item.title }}</label>
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
      this.$emit("emitClick");
    },
  },
};
</script>