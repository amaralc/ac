import { GraphQLClient } from 'graphql-request';

export const hasuraGraphQLClient = () =>
  new GraphQLClient('https://viable-deer-83.hasura.app/v1/graphql', {
    headers: {
      'x-hasura-admin-secret':
        'ZFxzST0xs8DCFXKcNhDHNUksXThbzS9hIz2tKbbVcoCWY9SZMTXvVBa66yGx4KdN',
    },
  });
