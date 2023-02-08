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
     
    };
  },
  computed: {
    ...mapGetters({
      list: 'getToDo'
    })
  },
  methods: {
    addList(datainput) {
      let newList = {
        title: datainput,
      };
      // this.list.push(newList);
      this.$store.dispatch('addList', newList)
    },
    deleteList(index) {
      // this.list.splice(index, 1);
      this.$store.dispatch('deleteList', index)
    },
  },
};
</script>