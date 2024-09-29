import { DonutChartHero } from "../../Components/Charts/DountChartHero";
import StackedBarChart from "../../Components/StackedBarChart";
import { changeIncomeDays } from "../../reducer/reducer";
import { useUser } from "../../UserContext";
import { stringToDate } from "../../utils";

export function Income() {
  const {
    state: { transactions, incomeDays, vanType },
    dispatch,
  } = useUser();

  const filteredTransactions = transactions.slice(
    transactions.length - incomeDays,
  );

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

  return (
    <section className="px-4 py-3 mx-auto md:mx-0 max-w-[550px] md:min-w-[600px] lg:max-w-[800px] md:py-0">
      <h2 className="text-4xl">Income</h2>
      <span className="my-4 flex items-center gap-2 text-center">
        Last
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={incomeDays}
          onChange={(e) => dispatch(changeIncomeDays(Number(e.target.value)))}
        />
        {incomeDays} day{incomeDays > 1 ? "s" : ""}
      </span>
      <h2 className="mt-4">£{amount}</h2>
      <div className="flex flex-col lg:flex-row">
        <StackedBarChart transactions={filteredTransactions} />
        <DonutChartHero transactions={filteredTransactions} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">Your transactions ({filteredTransactions.length})</h3>
        <div className="flex flex-col gap-2 rounded-lg custom-scrollbar md:h-[320px] md:w-[550px] md:overflow-y-auto md:px-2">
          {filteredTransactions.map((transaction) => {
            const date = stringToDate(transaction.date).toLocaleDateString();
            return (
            <div key={transaction.id} className="p-3 bg-white flex justify-between items-center">
               <h2>£{transaction.total}</h2>
               <p>{date}</p> 
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}

