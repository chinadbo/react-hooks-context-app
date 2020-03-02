import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initalState = {
  transactions: [
    { id: 1, text: "Apple", amount: 200 },
    { id: 2, text: "Google", amount: 40 },
    { id: 3, text: "Amazon", amount: -100 }
  ]
};

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
