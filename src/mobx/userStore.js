import { makeAutoObservable } from "mobx";
import { currencyFormatter } from "src/utils/formatter";

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
class UserStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;
  progressoDaMeta = 0;

  constructor() {
    makeAutoObservable(this);
  }

  defineDadosUsuario({ nome, renda, objetivoFinanceiro }) {
    this.nome = nome;
    this.renda = parseFloat(renda);
    this.objetivoFinanceiro = objetivoFinanceiro;
    this.orcamentoDiario = parseFloat(renda / 30);
  }

  getOrcamentoDiario() {
    return currencyFormatter.format(this.orcamentoDiario);
  }

  calculaProgresso() {
    const { objetivoFinanceiro, orcamentoDiario, renda } = this;

    const meta = getFinanceRule(objetivoFinanceiro, renda);

    if (objetivoFinanceiro == "controlar-gastos")
      return (((meta - orcamentoDiario) / meta) * 100).toFixed(2);

    return ((orcamentoDiario / meta) * 100).toFixed(2);
  }
}

export const userStore = new UserStore();
