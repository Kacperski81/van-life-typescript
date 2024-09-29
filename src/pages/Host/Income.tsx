import { DonutChartHero } from "../../Components/Charts/DountChartHero";
import StackedBarChart from "../../Components/StackedBarChart";
import { changeIncomeDays } from "../../reducer/reducer";
import { useUser } from "../../UserContext";

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
    </section>
  );
}

