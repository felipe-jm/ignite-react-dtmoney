import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";
import totalImg from "assets/total.svg";
import { useContext } from "react";
import { TransactionContext } from "TransactionsContext";

import * as S from "./styles";

export const Summary = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <S.Wrapper>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Ícone de Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Ícone de Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Ícone de Totais" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </S.Wrapper>
  );
};
