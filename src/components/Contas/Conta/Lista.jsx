import { Movimentacoes } from "@components/Movimentacoes";
import { observer } from "mobx-react";
import { Conta } from "..";
import { useStore } from "src/mobx/StoreContext";

export const Lista = observer(() => {
  const { accountStore } = useStore();
  const contas = accountStore.allAccounts;
  return (
    <Movimentacoes>
      {contas.length == 0 && <div>Nenhuma conta cadastrada.</div>}
      {contas.map((conta) => (
        <Conta key={conta.id} conta={conta} />
      ))}
    </Movimentacoes>
  );
});
