import { gql } from 'graphql-request';

export const createTransactionQuery = gql`
  mutation CreateTransaction(
    $originAccountId: uuid!
    $destinationAccountId: uuid!
    $value: numeric!
  ) {
    insert_transactions_one(
      object: {
        origin_account_id: $originAccountId
        destination_account_id: $destinationAccountId
        value: $value
      }
    ) {
      id
    }
  }
`;
