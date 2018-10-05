<template>
  <div>
    <h1>vue-apollo example: users</h1>
    {{ user }}
  </div>
</template>

<script>
import gql from 'graphql-tag'

const FeedQuery = gql`
{
  user {
    id
    name
  }
}
`
export default {
  name: 'user',
  data() {
    return {
      user: "", //レスポンスを入れるプロパティの初期化,
      hoge: "12"
    }
  },
  apollo: {
    user: {
      query: FeedQuery,
      loadingKey: 'loading',
    },
  },
}
</script>
