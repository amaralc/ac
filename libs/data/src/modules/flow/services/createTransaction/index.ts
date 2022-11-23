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
    const endpoint = process.env['HASURA_ENDPOINT'] as string;
    const headers = {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env['HASURA_ADMIN_SECRET'] as string,
    };
    const graphqlQuery = {
      operationName: 'CreateTransaction',
      query: `mutation CreateTransaction($originAccountId: uuid!, $destinationAccountId:uuid!, $value:numeric!) {
        insert_transactions_one(object: {origin_account_id: $originAccountId, destination_account_id: $destinationAccountId, value: $value}) {
          id
        }
      }`,
      variables: { originAccountId, destinationAccountId, value },
    };

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(graphqlQuery),
    };

    const response = await fetch(endpoint, options);
    const jsonResponse = await response.json();
    const transaction = jsonResponse.data.transaction;
    return transaction;
  } catch (e) {
    console.log(e);
    return null;
  }
};
