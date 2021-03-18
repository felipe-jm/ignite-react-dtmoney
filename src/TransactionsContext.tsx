import { createContext, useEffect, useState } from "react";
import { api } from "services/api";

type Transaction = {
  id: number;
  title: string;
  type: "deposit" | "withdraw";
  category: string;
  amount: number;
  createdAt: string;
};

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

type TransactionContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
};

const transactionContextDefaultValues = {
  transactions: [],
  createTransaction: () => null,
};

export const TransactionContext = createContext<TransactionContextData>(
  transactionContextDefaultValues
);

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
