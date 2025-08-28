import { autorun, makeAutoObservable } from "mobx";
import { currencyFormatter, dateFormatter } from "src/utils/formatter";
import { v4 as uuidv4 } from "uuid";

const KEY_STORAGE = "transactionsData";
class TransactionStore {
  transactions = [];

  constructor() {
    makeAutoObservable(this);

    this.#buscarDadosDoLocalstorage();

    autorun(() => {
      localStorage.setItem(KEY_STORAGE, JSON.stringify(this.transactions));
    });
  }

  saveTransaction(transaction) {
    this.transactions.push({
      id: uuidv4(),
      ...transaction,
    });
  }

  get allTransactions() {
    return this.transactions.map((transaction) => ({
      ...transaction,
      valor: currencyFormatter.format(transaction.valor),
      data: dateFormatter(transaction.data),
    }));
  }

  #buscarDadosDoLocalstorage() {
    try {
      const dados = localStorage.getItem(KEY_STORAGE);

      if (!dados) return;

      const transactions = JSON.parse(dados);

      this.transactions = transactions;
    } catch (error) {
      console.error("Erro ao buscar dados no localstorage");
    }
  }
}

export const transactionsStore = new TransactionStore();
