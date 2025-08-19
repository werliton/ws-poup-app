import { selector } from "recoil";
import { transactionsAtom } from "../atoms/transactionsAtom";
import { currencyFormatter, dateFormatter } from "src/utils/formatter";

export const selectTransactions = selector({
  key: "selectTransactions",
  get: ({ get }) => {
    const transactions = get(transactionsAtom);

    if (!transactions.length) return transactions;

    return transactions.map((item) => ({
      ...item,
      valor: currencyFormatter.format(item.valor),
      data: dateFormatter(item.data),
    }));
  },
});
