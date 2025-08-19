import { useRecoilState, useRecoilValue } from "recoil";
import { accountAtom } from "src/service/atoms/accountAtom";
import { getAccountState } from "src/service/selectors/accountSelector";
import { useId, useState } from "react";

function useAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaConta, setNovaConta] = useState({
    banco: "",
    saldo: 0,
  });
  const id = useId();
  const [, setAccount] = useRecoilState(accountAtom);
  const savedAccounts = useRecoilValue(getAccountState);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const aoAdicionarConta = () => {
    handleCloseModal();

    setAccount((prev) => [...prev, { id, ...novaConta }]);
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
