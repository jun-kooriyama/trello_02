<template>
  <div class="body">
    <div>
      <ul class="lanes">
        <li class="lane" v-for="lane in lanes">
          <draggable :options="{group:'tasks',animation:300}">
            {{lane}}<task_add></task_add>
          </draggable>
        </li>
      </ul>
    </div>
    <div class="form">
      <input type="text" v-model="title" placeholder="Add new lane">
      <button v-on:click="add"> レーンを追加 </button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import task_add from './task_add'

export default {
  components: {
    draggable,
    task_add,
  },
  data(){
    return {
      title: "",
      lanes: ["lane1","lane2"],
    }
  },
  methods:{
    add(){
      this.lanes.push(this.title)
      this.title = ""
    }
  }
}
</script>

<style>
.body{
  display: flex;
}

.lanes{
  display: flex;
  list-style: none;
}

.lane{
  list-style: none;
  width: 160px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #000;
}

.form{
  width: 160px;
  margin: 20px 5px;
  padding: 5px;
}

</style>
