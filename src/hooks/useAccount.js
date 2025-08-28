import { useState } from "react";
import { useStore } from "src/mobx/StoreContext";

function useAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaConta, setNovaConta] = useState({
    banco: "",
    saldo: 0,
  });
  const { accountStore, userStore } = useStore();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const aoAdicionarConta = () => {
    handleCloseModal();
    accountStore.save(novaConta);
    userStore.atualizaOrcamentoDiario({
      tipo: "receita",
      valor: novaConta.saldo,
    });
  };

  return {
    isModalOpen,
    novaConta,
    setNovaConta,
    aoAdicionarConta,
    handleOpenModal,
    handleCloseModal,
  };
}

export default useAccount;
