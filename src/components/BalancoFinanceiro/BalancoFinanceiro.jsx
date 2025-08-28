import { Pie } from "react-chartjs-2";
import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useStore } from "src/mobx/StoreContext";
import { observer } from "mobx-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export const AreaChart = styled.div`
  padding: var(--padding-xs);
  width: 50%;
  height: 50%;
`;

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const BalancoFinanceiro = observer(() => {
  const { transactionsStore } = useStore();
  const categorias = transactionsStore.allTransactionByCategory.categorias;
  const despesas = transactionsStore.allTransactionByCategory.despesas;

  return (
    <Cartao>
      <CartaoCabecalho>Gastos por categoria</CartaoCabecalho>
      <CartaoCorpo>
        <AreaChart>
          <Pie
            data={{
              labels: categorias,
              datasets: [
                {
                  label: "Gastos",
                  data: despesas,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={options}
          />
        </AreaChart>
      </CartaoCorpo>
    </Cartao>
  );
});
export default BalancoFinanceiro;
