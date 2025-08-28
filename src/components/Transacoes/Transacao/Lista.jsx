import { Movimentacoes } from "@components/Movimentacoes";
import { observer } from "mobx-react";
import { useStore } from "src/mobx/StoreContext";
import { Transacao } from "..";

export const Lista = observer(() => {
  const { transactionsStore } = useStore();
  const transacoes = transactionsStore.allTransactions;
  return (
    <Movimentacoes>
      {transacoes.length == 0 && <div>Nenhuma transação por aqui.</div>}
      {transacoes.map((transacao) => (
        <Transacao key={transacao.id} transacao={transacao} />
      ))}
    </Movimentacoes>
  );
});
