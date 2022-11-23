import { hasuraGraphQLClient } from '../../clients/graphql';
import { getAccountsQuery } from './query';
import { IGetAccountsResponseData } from './types';

export const getAccountsByAgentName = async (
  agentName: string
): Promise<IGetAccountsResponseData['accounts']> => {
  try {
    const client = hasuraGraphQLClient();
    const response = (await client.request(getAccountsQuery, {
      agentName,
    })) as IGetAccountsResponseData;
    return response.accounts;
  } catch (e) {
    console.log(e);
    return [];
  }
};
