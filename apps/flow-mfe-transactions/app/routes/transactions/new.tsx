import { ActionFunction } from '@remix-run/node';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

const createTransaction = async (data: Record<string, any>) => {
  console.log('data', data);
};

export const action: ActionFunction = async ({ request }) => {
  const schema = zfd.formData({
    origin: zfd.text(),
    destination: zfd.text(),
    value: zfd.numeric(z.number().min(0)),
    description: zfd.text(),
  });
  try {
    const formData = schema.parse(await request.formData());
    console.log('newTransaction', formData);
    await createTransaction(formData);
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default function TransactionPage() {
  return (
    /**
     * For usage with index files @see https://github.com/remix-run/remix/issues/2726#issuecomment-1302346573
     */
    <form method="post" action="/transactions/new" id="new-transaction">
      <p>
        <label htmlFor="origin">Origin:</label>
        <select name="origin" id="origin" form="new-transaction">
          <option value="account-1">account-1</option>
          <option value="account-2">account-2</option>
          <option value="account-3">account-3</option>
        </select>
      </p>
      <p>
        <label htmlFor="destination">Destination:</label>
        <select name="destination" id="destination" form="new-transaction">
          <option value="account-1">account-1</option>
          <option value="account-2">account-2</option>
          <option value="account-3">account-3</option>
        </select>
      </p>
      <p>
        <label>
          Value: <input name="value" type="number" min={0} />
        </label>
      </p>
      <p>
        <label>
          Description:
          <br />
          <textarea name="description" />
        </label>
      </p>
      <p>
        <button type="submit">Create</button>
      </p>
    </form>
  );
}
