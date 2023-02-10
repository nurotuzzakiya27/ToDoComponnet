<template>
  <div class="container">
    <h1 class="title">To Do List</h1>
    <input-form @emitSubmit="addList"/>
    <list :listdata="list" @emitDelete="deleteList"/>
  </div>
</template> 
<script>
import { mapGetters } from "vuex";
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
  computed: {
    
  },
  methods: {
    addList(datainput) {
      let newList = {
        title: datainput,
      };
      this.list.push(newList);
    },
    deleteList(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>