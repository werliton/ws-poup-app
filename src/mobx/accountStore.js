import { autorun, makeAutoObservable } from "mobx";
import { currencyFormatter } from "src/utils/formatter";
import { v4 as uuidv4 } from "uuid";

const KEY_STORAGE = "accountData";

class AccountStore {
  contas = [];

  constructor() {
    makeAutoObservable(this);
    this.#buscarDadosDoLocalstorage();

    autorun(() => {
      localStorage.setItem(KEY_STORAGE, JSON.stringify(this.contas));
    });
  }

  save(account) {
    this.contas.push({
      id: uuidv4(),
      ...account,
    });
  }

  get allAccounts() {
    return this.contas.map((item) => ({
      ...item,
      saldo: currencyFormatter.format(item.saldo),
    }));
  }

  get saldoTotal() {
    return this.contas.reduce((total, conta) => total + conta.saldo, 0);
  }

  #buscarDadosDoLocalstorage() {
    try {
      const dados = localStorage.getItem(KEY_STORAGE);

      if (!dados) return;

      const accounts = JSON.parse(dados);

      this.contas = accounts;
    } catch (error) {
      console.error("Erro ao buscar dados no localstorage");
    }
  }
}

export const accountStore = new AccountStore();
