import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import { Descricao } from "../Cartao";
import { useStore } from "src/mobx/StoreContext";
import { observer } from "mobx-react";

const OrcamentoDiario = observer(() => {
  const { userStore } = useStore();

  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>{userStore.getOrcamentoDiario()}</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
});
export default OrcamentoDiario;
