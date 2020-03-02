import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transation => transation.amount);
  const total = amounts.reduce((acc, curr) => acc + curr, 0);
  const sign = total > 0 ? "+" : "-";
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sign}${Math.abs(total)}
      </h1>
    </>
  );
}
