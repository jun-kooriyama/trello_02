<template>
  <div>
      <ul class="tasks">
        <draggable :options="{group:'tasks',animation:300}">
          <li class="task" v-for="task in tasks"><draggable>{{task}}</draggable></li>
        </draggable>
      </ul>
    <input type="text" v-model="title" placeholder="Add new task">
    <button v-on:click="add" > タスクを追加 </button>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data(){
    return {
      title: "",
      tasks : []
    }
  },
  methods:{
    add(){
      this.tasks.push(this.title)
      this.title = ""
    }
  }
}
</script>

<style>
.body{

}
.tasks{
  list-style: none;
}

.task{
  width: 100px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #000;
  list-style: none;
}
</style>
