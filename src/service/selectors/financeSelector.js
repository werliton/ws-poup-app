import { selector } from "recoil";
import financeState from "../atoms/financeState";
import { currencyFormatter } from "src/utils/formatter";

export const financeSelector = selector({
  key: "financeSelector",
  get: ({ get }) => {
    const finance = get(financeState);

    return {
      ...finance,
      renda: currencyFormatter.format(parseFloat(finance.renda)),
      orcamento: currencyFormatter.format(Math.floor(finance.renda / 30)),
    };
  },
});
