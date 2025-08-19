import { selector } from "recoil";
import { accountAtom } from "../atoms/accountAtom";
import { currencyFormatter } from "src/utils/formatter";

export const getAccountState = selector({
  key: "getAccountState",
  get: ({ get }) => {
    const accounts = get(accountAtom);

    return accounts.map((item) => ({
      ...item,
      saldo: currencyFormatter.format(item.saldo),
    }));
  },
});
