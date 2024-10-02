import { useUser } from "../UserContext";

export default function useIncome() {
  const {
    state: { transactions, incomeDays, vanType },
    dispatch,
  } = useUser();

  const sortedTransactions = transactions.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const filteredTransactions = sortedTransactions.slice(
    sortedTransactions.length - incomeDays,
  );
  // const filteredTransactions = transactions.slice(
  //   transactions.length - incomeDays,
  // );

  const amount = filteredTransactions.reduce((acc, curr) => {
    switch (vanType) {
      case "simple":
        return acc + curr.simple.price;
      case "rugged":
        return acc + curr.rugged.price;
      case "luxury":
        return acc + curr.luxury.price;
      case "allVans":
        return acc + curr.total;
    }
  }, 0);

  return {incomeDays, amount, filteredTransactions, dispatch};
}
