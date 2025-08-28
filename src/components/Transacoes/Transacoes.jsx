import { useState } from "react";
import MoneyIcon from "@components/Icones/MoneyIcon/MoneyIcon";
import { Container } from "@components/Contas/Contas";
import { Cartao, CartaoCabecalho } from "@components/Cartao";
import Botao from "@components/Botao";
import TransacaoModal from "./TransacaoModal";
import { Lista } from "./Transacao/Lista";

const Transacoes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Cartao>
      <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
      <Container>
        <Lista />
        <Botao $variante="neutro" onClick={() => handleOpenModal()}>
          <MoneyIcon />
          Adicionar transação
        </Botao>
        {isModalOpen && (
          <TransacaoModal
            isOpen={isModalOpen}
            onCloseModal={() => handleCloseModal()}
          />
        )}
      </Container>
    </Cartao>
  );
};
export default Transacoes;
