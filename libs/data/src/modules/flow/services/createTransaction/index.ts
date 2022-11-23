import { hasuraGraphQLClient } from '../../clients/graphql';
import { createTransactionQuery } from './query';
import { ICreateTransactionResponseData } from './types';

export const createTransaction = async ({
  originAccountId,
  destinationAccountId,
  value,
}: {
  originAccountId: string;
  destinationAccountId: string;
  value: number;
}): Promise<ICreateTransactionResponseData['transaction'] | null> => {
  try {
    const client = hasuraGraphQLClient();
    const response = (await client.request(createTransactionQuery, {
      originAccountId,
      destinationAccountId,
      value,
    })) as ICreateTransactionResponseData;
    return response.transaction;
  } catch (e) {
    console.log(e);
    return null;
  }
};
