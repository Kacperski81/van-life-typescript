import { DonutChart } from "./DonutChart";
import { useUser } from "../../UserContext";
import { Transaction, VanType } from "../../types";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const DonutChartHero = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  // console.log(state);
  const {
    state: { vanType },
  } = useUser();

  // const amount = transactions
  //   .slice(transactions.length - incomeDays)
  //   .reduce((acc, curr) => {
  //     switch (vanType) {
  //       case "simple":
  //         return acc + curr.simple;
  //       case "rugged":
  //         return acc + curr.rugged;
  //       case "luxury":
  //         return acc + curr.luxury;
  //       case "allVans":
  //         return acc + curr.allVans;
  //     }
  //   }, 0);

  const simple = transactions.reduce((acc, curr) => acc + curr.simple.price, 0);
  const rugged = transactions.reduce((acc, curr) => acc + curr.rugged.price, 0);
  const luxury = transactions.reduce((acc, curr) => acc + curr.luxury.price, 0);
  //manipulates the transactions to show how much money each van earn in the given days
  const dataToDountChart = (vanType: VanType) => {
    switch (vanType) {
      case "allVans":
        return [
          { amount: luxury, van: "luxury", name: "The Cruiser" },
          { amount: rugged, van: "rugged", name : "Green Wonder"},
          { amount: simple, van: "simple", name: "Modest Explorer" },
        ];
      case "luxury":
        return [
          { amount: luxury, van: "luxury" },
          { amount: rugged + simple, van: "rugged and simple" },
        ];
      case "rugged":
        return [
          { amount: rugged, van: "rugged" },
          { amount: luxury + simple, van: "luxury and simple" },
        ];
      case "simple":
        return [
          { amount: simple, van: "simple" },
          { amount: luxury + rugged, van: "luxury and rugged" },
        ];
    }
  };
  // console.log(dataToDountChart);
  const forChart = dataToDountChart(vanType);
  return (
    // <div className="flex flex-col gap-12 border">
    <div className="mx-auto lg:mx-0">
      {/* <div className="flex flex-col items-center justify-center gap-4"> */}
      <div className="h-[250px] w-[250px] lg:h-[280px] lg:w-[280px]">
        {/* <p className="text-gray-700 dark:text-gray-300">Total: {`${amount}`}</p> */}
        {/* <div className="flex w-[50%]"> */}
        <DonutChart
          data={forChart}
          variant="pie"
          showLabel={true}
          label="amount"
          category="van"
          colors={
            vanType === "allVans"
              ? ["luxury", "rugged", "simple"]
              : [`${vanType}`, "gray"]
          }
          value="amount"
          showTooltip={true}
          valueFormatter={(number: number) =>
            `£${Intl.NumberFormat("uk").format(number).toString()}`
          }
        />
      </div>
    </div>
    // </div>
  );
};
