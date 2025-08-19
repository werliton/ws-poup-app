import { selector } from "recoil";
import financeAtom from "../atoms/financeAtom";
import { currencyFormatter } from "src/utils/formatter";

export const financeSelector = selector({
  key: "financeSelector",
  get: ({ get }) => {
    const finance = get(financeAtom);

    return {
      ...finance,
      renda: currencyFormatter.format(parseFloat(finance.renda)),
      orcamento: currencyFormatter.format(Math.floor(finance.orcamento)),
    };
  },
});
