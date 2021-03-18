import { Dashboard } from "components/Dashboard";
import { NewTransactionModal } from "components/NewTransactionModal";
import { useState } from "react";
import { TransactionsProvider } from "TransactionsContext";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
};
