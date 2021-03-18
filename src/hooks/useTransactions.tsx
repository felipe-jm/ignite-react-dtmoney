import { createContext, useContext, useEffect, useState } from "react";
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

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

const transactionsContextDefaultValues = {
  transactions: [],
  createTransaction: () => Promise.resolve(),
};

export const TransactionsContext = createContext<TransactionsContextData>(
  transactionsContextDefaultValues
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

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
