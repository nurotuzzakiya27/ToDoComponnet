<template>
  <ul class="list">
    <li v-for="(item, index) in listdata" :key="index">
      <!-- Soal no. 3 -->
      <input type="checkbox" :id="'list' + index" v-model="item.status" />
      <label :class="item.status ? 'done' : ''">{{ item.title }}</label>
      <!-- {{ item.title }} -->
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
      this.$emit("emitClick", index);
    },
  },
};
</script>