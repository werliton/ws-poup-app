import { selector } from "recoil";
import financeState from "../atoms/financeState";

const getFinanceRule = (meta, valor) => {
  switch (meta) {
    case "economizar":
      return valor * 0.2; // o que pode ser gasto
    case "investir":
      return valor * 0.15; // o que pode ser guardado
    case "controlar-gastos":
      return valor * 0.8;
    default:
      return valor;
  }
};

const financeProgressSelector = selector({
  key: "financeProgressSelector",
  get: ({ get }) => {
    const { objetivo, renda } = get(financeState);
    const orcamento = renda / 30;
    const meta = getFinanceRule(objetivo, renda);

    if (objetivo == "controlar-gastos")
      return (((meta - orcamento) / meta) * 100).toFixed(2);

    return ((orcamento / meta) * 100).toFixed(2);
  },
});

export { financeProgressSelector };
