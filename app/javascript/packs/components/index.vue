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
  users {
    ...namename
  }
}
fragment namename on User {
  name
  id
}
`
export default {
  data: () => ({
    users: [{name: 'test'}]
  }),
  apollo: {
    users: {
      query: FeedQuery,
      loadingKey: 'loading'
    }
  }
}
</script>
