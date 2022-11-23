import { createTransaction } from '@ac/data/modules/flow/services/createTransaction';
import { getAccountsByAgentName } from '@ac/data/modules/flow/services/getAccounts';
import { IGetAccountsResponseData } from '@ac/data/modules/flow/services/getAccounts/types';
import { ActionFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const schema = zfd.formData({
    originAccountId: zfd.text(),
    destinationAccountId: zfd.text(),
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
        <label htmlFor="originAccountId">Origin:</label>
        <select
          name="originAccountId"
          id="originAccountId"
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
        <label htmlFor="destinationAccountId">Destination:</label>
        <select
          name="destinationAccountId"
          id="destinationAccountId"
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
