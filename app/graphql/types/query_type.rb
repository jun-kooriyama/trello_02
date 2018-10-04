Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.



  field :user, !Types::UserType do
    resolve ->(_obj, _args, ctx) {
      ctx[:current_user]
  }

  end
end
