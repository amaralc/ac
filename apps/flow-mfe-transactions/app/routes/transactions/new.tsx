import { createTransaction } from '@ac/data/modules/flow/services/createTransaction';
import { getAccountsByAgentName } from '@ac/data/modules/flow/services/getAccounts';
import { IGetAccountsResponseData } from '@ac/data/modules/flow/services/getAccounts/types';
import { ActionFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

// const createTransaction = async (data: Record<string, any>) => {
//   console.log('data', data);
// };

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const schema = zfd.formData({
    originAccountId: zfd.text(z.string().uuid()),
    destinationAccountId: zfd.text(z.string().uuid()),
    value: zfd.numeric(z.number().min(0)),
  });
  try {
    const formData = schema.parse(data);
    console.log('newTransaction', formData);
    await createTransaction(formData);
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const loader: LoaderFunction = async ({}) => {
  try {
    const accounts = await getAccountsByAgentName('ac');
    return accounts;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default function TransactionPage() {
  const accounts = useLoaderData<IGetAccountsResponseData['accounts']>();
  return (
    /**
     * For usage with index files @see https://github.com/remix-run/remix/issues/2726#issuecomment-1302346573
     */
    <form method="post" action="/transactions/new" id="new-transaction">
      <p>
        <label htmlFor="origin_account_id">Origin:</label>
        <select
          name="origin_account_id"
          id="origin_account_id"
          form="new-transaction"
        >
          {accounts.map((account) => (
            <option value={account.id} key={account.id}>
              {account.name}
            </option>
          ))}
        </select>
      </p>
      <p>
        <label htmlFor="destination_account_id">Destination:</label>
        <select
          name="destination_account_id"
          id="destination_account_id"
          form="new-transaction"
        >
          {accounts.map((account) => (
            <option value={account.id} key={account.id}>
              {account.name}
            </option>
          ))}
        </select>
      </p>
      <p>
        <label>
          Value: <input name="value" type="number" min={0} />
        </label>
      </p>
      <p>
        <button type="submit">Create</button>
      </p>
    </form>
  );
}
