import { selector } from "recoil";
import { transactionState } from "../atoms/transactionState";
import { currencyFormatter, dateFormatter } from "src/utils/formatter";

export const selectTransactions = selector({
  key: "selectTransactions",
  get: ({ get }) => {
    const transactions = get(transactionState);

    if (!transactions.length) return transactions;

    return transactions.map((item) => ({
      ...item,
      valor: currencyFormatter.format(item.valor),
      data: dateFormatter(item.data),
    }));
  },
});
