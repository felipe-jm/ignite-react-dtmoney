import Modal from "react-modal";

import closeImg from "assets/close.svg";

import * as S from "./styles";

Modal.setAppElement("#root");

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button onClick={onRequestClose} className="react-modal-close">
      <img src={closeImg} alt="Fechar modal" />
    </button>

    <S.Wrapper>
      <h2>Cadastrar transação</h2>

      <input placeholder="Título" />

      <input type="number" placeholder="Valor" />

      <input placeholder="Categoria" />

      <button type="submit">Cadastrar</button>
    </S.Wrapper>
  </Modal>
);
