<template>
  <div>
    <h1>vue-apollo example: users</h1>
    <div v-for="user in users" :key="user.id">
        <div>{{ user.id }}, {{ user.name }}</div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const FeedQuery = gql`
{
  user{

    name
    email
  }
}
`
export default {
  data: () => ({
    users: [{name: 'test1'}]
  }),
  apollo: {
    users: {
      query: FeedQuery,
      loadingKey: 'loading'
    }
  }
}
</script>
