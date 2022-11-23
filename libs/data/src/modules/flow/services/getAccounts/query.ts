import { gql } from 'graphql-request';

export const getAccountsQuery = gql`
  query GetAccounts($agentName: String!) {
    accounts(where: { agent: { name: { _eq: $agentName } } }) {
      id
      name
    }
  }
`;
