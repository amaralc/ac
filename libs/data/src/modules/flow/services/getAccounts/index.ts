import { IGetAccountsResponseData } from './types';

export const getAccountsByAgentName = async (
  agentName: string
): Promise<IGetAccountsResponseData['accounts']> => {
  try {
    const endpoint = process.env['HASURA_ENDPOINT'] as string;
    const headers = {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env['HASURA_ADMIN_SECRET'] as string,
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
