import { useState } from "react";
import { Transaction } from "../../types";
import { convertTimestampToMoment } from "../../utils";

export default function TransactionsDetails({
  filteredTransactions,
}: {
  filteredTransactions: Transaction[];
}) {
  const [sort, setSort] = useState("asc");
  const sortedTransactions = filteredTransactions.sort((a,b) => {
    const dateA = convertTimestampToMoment(a.date);
    const dateB = convertTimestampToMoment(b.date);
    switch (sort) {
      case "asc":
        return dateA.diff(dateB);
      case "desc":
        return dateB.diff(dateA);
      default:
        return 0;
    }
  })
  return (
    <div>
      <div className="flex justify-between max-w-[550px] items-baseline">
        <h3 className="mb-3 text-xl font-bold">
          Your transactions ({filteredTransactions.length})
        </h3>
        <div className="flex gap-1 items-baseline">
          {/* <span>sort:</span> */}
          <select className="py-0 bg-background border-none" onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="custom-scrollbar flex flex-col gap-2 rounded-lg md:h-[220px] md:w-[550px] md:overflow-y-auto md:px-2">
        {sortedTransactions.map((transaction) => {
          const date = convertTimestampToMoment(transaction.date).format("DD/MM");
          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between bg-white p-3"
            >
              <h2>£{transaction.total}</h2>
              <p>{date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
