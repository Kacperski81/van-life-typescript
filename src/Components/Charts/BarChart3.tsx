import { BarChart } from "./BarChart";
import { useUser } from "../../UserContext";
import { Tooltip } from "../StackedBarChart";
// const chartdata = [{ date: "10/07", amount: 260, rugged: 60 }];

export const BarChart3 = () => {
  const {
    state: { incomeDays, transactions, vanType },
  } = useUser();
  const filteredTransactions = transactions
    .slice(transactions.length - incomeDays)
    .reduce<
      {
        date: string;
        amount: number;
        simple?: number;
        rugged?: number;
        luxury?: number;
      }[]
    >((acc, transaction) => {
      switch (vanType) {
        case "simple":
          acc.push({
            date: transaction.date,
            amount: transaction.allVans,
            simple: transaction.simple,
          });
          break;
        case "rugged":
          acc.push({
            date: transaction.date,
            amount: transaction.allVans,
            rugged: transaction.rugged,
          });
          break;
        case "luxury":
          acc.push({
            date: transaction.date,
            amount: transaction.allVans,
            luxury: transaction.luxury,
          });
          break;
        case "allVans":
          return acc;
      }
      return acc;
    }, []);
  // console.log({ filteredTransactions });

  return (
    <div className="flex">
    <div className="flex flex-col gap-4 h-full w-full">
        {/* <p className="mx-auto font-mono text-sm font-medium">type="abc"</p> */}
        <BarChart
          key={1}
          type="stacked"
          className="h-80 sm:block"
          data={filteredTransactions}
          index="date"
          maxValue={260}
          yAxisWidth={35}
          colors={[`${vanType}`]}
          categories={[`${vanType}`]}
          showLegend={false}
          customTooltip={Tooltip}
        />
      </div>
    </div>
  );
};
