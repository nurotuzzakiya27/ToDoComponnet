<template>
  <div class="container">
    <title-form title="To Do List" />
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
          status: true,
        },
        {
          title: "cuci piring",
          status: false,
        },
        {
          title: "pel",
          status: true,
        },
      ],
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
    },
    deleteList(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>