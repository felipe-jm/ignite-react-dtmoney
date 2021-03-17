import * as S from "./styles";

export const TransactionsTable = () => (
  <S.Wrapper>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento</td>
          <td className="deposit">R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
        <tr>
          <td>Desenvolvimento</td>
          <td className="withdraw">- R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
      </tbody>
    </table>
  </S.Wrapper>
);
