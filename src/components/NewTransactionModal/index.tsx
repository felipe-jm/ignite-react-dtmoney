import Modal from "react-modal";

import { useState } from "react";

import closeImg from "assets/close.svg";
import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";

import * as S from "./styles";
import { useTransactions } from "hooks/useTransactions";

Modal.setAppElement("#root");

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  async function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Wrapper onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <S.TransactionTypeWrapper>
          <S.RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Botão de entradas" />

            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Botão de saídas" />

            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeWrapper>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Wrapper>
    </Modal>
  );
};
