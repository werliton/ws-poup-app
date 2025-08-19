import { useRecoilState } from "recoil";
import financeAtom from "src/service/atoms/financeAtom";

export default function useBudget() {
  const [, setFinance] = useRecoilState(financeAtom);

  const addIncome = (value) => {
    setFinance((prevFinance) => ({
      ...prevFinance,
      orcamento: Number(prevFinance.orcamento + parseFloat(value)),
    }));
  };

  const addOutcome = (value) => {
    setFinance((prevFinance) => ({
      ...prevFinance,
      orcamento: Number(prevFinance.orcamento - parseFloat(value)),
    }));
  };

  return {
    addIncome,
    addOutcome,
  };
}
