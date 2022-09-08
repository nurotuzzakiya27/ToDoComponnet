<template>
  <div class="container">
    <h1 class="title">To Do List</h1>
    <input-form @emitSubmit="addList" />
    <list :listdata="list" @emitDelete="deleteList" />
  </div>
</template> 
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "menyapu",
        },
        {
          title: "cuci piring",
        },
        {
          title: "pel",
        },
      ],
      input: null,
    };
  },
  mounted() {
    console.log("component mounted.");
  },
  methods: {
    addList(inputform) {
      let newList = {
        title: inputform,
      };
      this.list.push(newList);
      this.input = null;
    },
    deleteList(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>