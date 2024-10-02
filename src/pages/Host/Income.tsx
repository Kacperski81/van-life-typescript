import { DonutChartHero } from "../../Components/Charts/DountChartHero";
import StackedBarChart from "../../Components/StackedBarChart";
import { changeIncomeDays } from "../../reducer/reducer";
import useIncome from "../../hooks/useIncome";
import TransactionsDetails from "../../Components/Host/TransactionsDetails";

export function Income() {
  const { incomeDays, amount, filteredTransactions, dispatch } = useIncome();

  return (
    <section className="mx-auto max-w-[550px] px-4 py-3 md:mx-0 md:min-w-[600px] md:py-0 lg:max-w-[800px]">
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
      <TransactionsDetails filteredTransactions={filteredTransactions} />
    </section>
  );
}
