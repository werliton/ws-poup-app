import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import { Descricao } from "../Cartao";
import { useRecoilValue } from "recoil";
import { financeSelector } from "src/service/selectors/financeSelector";

const OrcamentoDiario = () => {
  const { orcamento: orcamentoDiario } = useRecoilValue(financeSelector);

  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>{orcamentoDiario}</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default OrcamentoDiario;
