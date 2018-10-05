<template>
<div>
  <h1>vue-apollo example: users</h1>
  {{ user }}
    <header>
      <h1>Task</h1>
    </header>
    <hr>
    <main>
      <lane_add></lane_add>
    </main>
</div>
</template>

<script>
import draggable from 'vuedraggable';
import lane_add from './lane_add'
import gql from 'graphql-tag'

const FeedQuery = gql`
{
  user {
    id
    name
    email
  }
}
`
export default {
  name: 'user',
  data() {
    return {
      user: "", //レスポンスを入れるプロパティの初期化,
      // hoge: "12"
    }
  },
  apollo: {
    user: {
      query: FeedQuery,
      loadingKey: 'loading',
    },
  },
  components: {
    draggable,
    lane_add,
  }
}




</script>
