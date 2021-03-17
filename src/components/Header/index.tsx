import logoImg from "assets/logo.svg";

import * as S from "./styles";

export const Header = () => (
  <S.Wrapper>
    <S.Content>
      <img src={logoImg} alt="dt money logo" />

      <button>Nova transação</button>
    </S.Content>
  </S.Wrapper>
);
