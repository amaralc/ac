import { IGetAccountsResponseData } from './types';

export const getAccountsByAgentName = async (
  agentName: string
): Promise<IGetAccountsResponseData['accounts']> => {
  try {
    const endpoint = 'https://viable-deer-83.hasura.app/v1/graphql';
    const headers = {
      'content-type': 'application/json',
      'x-hasura-admin-secret':
        'ZFxzST0xs8DCFXKcNhDHNUksXThbzS9hIz2tKbbVcoCWY9SZMTXvVBa66yGx4KdN',
    };
    const graphqlQuery = {
      operationName: 'GetAccounts',
      query: `query GetAccounts($agentName:String!) { accounts(where: {agent: {name: {_eq: $agentName}}}) { id name } }`,
      variables: { agentName },
    };

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(graphqlQuery),
    };

    const response = await fetch(endpoint, options);
    const jsonResponse = await response.json();
    const accounts = jsonResponse.data.accounts;
    return accounts;
  } catch (e) {
    console.log(e);
    return [];
  }
};
