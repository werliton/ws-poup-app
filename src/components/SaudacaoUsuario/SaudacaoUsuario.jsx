import { useRecoilValue } from "recoil";
import financeState from "src/service/atoms/financeState";
import styled from "styled-components";

export const Usuario = styled.div`
  grid-area: usuario;
  color: var(--cor-neutra-light);

  & > h1 {
    margin: 16px 0 0 0;
  }

  & > p {
    margin: 8px 0 16px 0;
  }
`;

const SaudacaoUsuario = () => {
  const { nome: username } = useRecoilValue(financeState);

  return (
    <Usuario>
      <h1>Olá, {username}</h1>
      <p>Veja como estão suas finanças hoje.</p>
    </Usuario>
  );
};

export default SaudacaoUsuario;
