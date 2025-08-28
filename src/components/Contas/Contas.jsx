import styled from "styled-components";
import CampoTexto from "@components/CampoTexto";
import { Cartao, CartaoCabecalho } from "@components/Cartao";
import Botao from "@components/Botao";
import Modal from "@components/Modal";
import Form from "@components/Form";
import Label from "@components/Label";
import Fieldset from "@components/Fieldset";
import { WalletIcon } from "@components/Icones";
import CartaoCorpo from "@components/Cartao/CartaoCorpo/CartaoCorpo";
import useAccount from "src/hooks/useAccount";
import { Lista } from "./Conta/Lista";

export const Container = styled(CartaoCorpo)`
  padding: var(--padding-l) var(--padding-m);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contas = () => {
  const {
    aoAdicionarConta,
    handleOpenModal,
    handleCloseModal,
    setNovaConta,
    isModalOpen,
    novaConta,
  } = useAccount();

  return (
    <Cartao>
      <CartaoCabecalho>Minhas contas</CartaoCabecalho>
      <Container>
        <Lista />
        <Botao $variante="neutro" onClick={() => handleOpenModal()}>
          <WalletIcon />
          Adicionar conta
        </Botao>
        {isModalOpen && (
          <Modal
            aoFechar={() => handleCloseModal()}
            estaAberta={isModalOpen}
            aoClicar={() => aoAdicionarConta()}
            titulo="Adicionar conta bancária"
            icon={<WalletIcon />}
          >
            <Form>
              <Fieldset>
                <Label htmlFor="banco">Banco</Label>
                <CampoTexto
                  type="text"
                  id="banco"
                  placeholder="Ex: Anybank"
                  value={novaConta.banco}
                  onChange={(e) =>
                    setNovaConta({ ...novaConta, banco: e.target.value })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="saldo">Saldo</Label>
                <CampoTexto
                  type="number"
                  id="saldo"
                  placeholder="R$ 500,00"
                  value={novaConta.saldo}
                  onChange={(e) =>
                    setNovaConta({ ...novaConta, saldo: e.target.value })
                  }
                />
              </Fieldset>
            </Form>
          </Modal>
        )}
      </Container>
    </Cartao>
  );
};
export default Contas;
