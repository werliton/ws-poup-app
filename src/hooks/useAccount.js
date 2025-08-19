import { useRecoilState, useRecoilValue } from "recoil";
import { accountsAtom } from "src/service/atoms/accountsAtom";
import { getAccountState } from "src/service/selectors/accountSelector";
import { useId, useState } from "react";
import useBudget from "src/hooks/useBudget";

function useAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaConta, setNovaConta] = useState({
    banco: "",
    saldo: 0,
  });
  const id = useId();
  const [, setAccount] = useRecoilState(accountsAtom);
  const savedAccounts = useRecoilValue(getAccountState);
  const { addIncome } = useBudget();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const aoAdicionarConta = () => {
    handleCloseModal();

    setAccount((prev) => [...prev, { id, ...novaConta }]);
    addIncome(novaConta.saldo);
  };

  return {
    isModalOpen,
    novaConta,
    contas: savedAccounts,
    setNovaConta,
    aoAdicionarConta,
    handleOpenModal,
    handleCloseModal,
  };
}

export default useAccount;
