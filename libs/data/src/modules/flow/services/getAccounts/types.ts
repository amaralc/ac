export interface IAccount {
  id: string;
  name: string;
}

export interface IGetAccountsResponseData {
  accounts: Array<IAccount>;
}
