import logoImg from "assets/logo.svg";

import * as S from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <img src={logoImg} alt="dt money logo" />

        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </S.Content>
    </S.Wrapper>
  );
};
