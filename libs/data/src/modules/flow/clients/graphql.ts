import { GraphQLClient } from 'graphql-request';

export const hasuraGraphQLClient = () =>
  new GraphQLClient('https://viable-deer-83.hasura.app/v1/graphql', {
    headers: {
      'x-hasura-admin-secret': process.env['HASURA_ADMIN_SECRET'] as string,
    },
  });
