import { selector } from "recoil";
import { accountsAtom } from "../atoms/accountsAtom";
import { currencyFormatter } from "src/utils/formatter";

export const getAccountState = selector({
  key: "getAccountState",
  get: ({ get }) => {
    const accounts = get(accountsAtom);

    return accounts.map((item) => ({
      ...item,
      saldo: currencyFormatter.format(item.saldo),
    }));
  },
});
