import { selector } from "recoil";
import { transactionsAtom } from "../atoms/transactionsAtom";

export const selectTransactionsToGraph = selector({
  key: "selectGraph",
  get: ({ get }) => {
    const transactions = get(transactionsAtom);

    if (!transactions.length) return transactions;

    const despesas = transactions.filter((item) => item.tipo == "despesa");

    const categoriasAgrupadas = despesas.reduce((valorAcumulado, transacao) => {
      valorAcumulado[transacao.categoria] =
        parseFloat(transacao.valor) +
        (valorAcumulado[transacao.categoria] || 0);

      return valorAcumulado;
    }, {});

    const categorias = Object.keys(categoriasAgrupadas);
    const despesasValor = Object.values(categoriasAgrupadas);

    return {
      categorias,
      despesas: despesasValor,
    };
  },
});
