import { cx } from "../../lib/utils";
import { Transaction } from "../../types";
import { DonutChart } from "./DonutChart";

export const DonutChartLabel = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  console.log({ transactions });
  const simple = transactions.reduce((acc, curr) => acc + curr.simple.price, 0);
  const rugged = transactions.reduce((acc, curr) => acc + curr.rugged.price, 0);
  const luxury = transactions.reduce((acc, curr) => acc + curr.luxury.price, 0);
  const dataToChart = [
    { amount: simple, name: "Modest Explorer", color: "simple", borderBottom: true },
    { amount: rugged, name: "Green Wonder", color: "rugged", borderBottom: true },
    { amount: luxury, name: "The Cruiser", color: "luxury", borderBottom: false},
  ];
  return (
    <div className="py-2 mx-auto h-[320px] w-[200px] flex flex-col gap-4 min-[450px]:min-w-[430px] min-[450px]:h-[200px] min-[450px]:flex-row min-[450px]:gap-0 min-[450px]:items-center lg:flex-col lg:h-[300px] lg:min-w-[300px] shadow-sm">
      <DonutChart
        className="mx-auto"
        data={dataToChart}
        colors={["simple", "rugged", "luxury"]}
        category="name"
        value="amount"
        showLabel={true}
        valueFormatter={(number: number) =>
          `£${Intl.NumberFormat("uk").format(number).toString()}`
        }
      />
      <div className="px-4 min-[450px]:mx-auto">
        {dataToChart.map((item) => (
          // <div className="flex gap-1 py-1">
          <div className={cx("flex py-2 gap-1 min-[450px]:py-2", {"border-b-2": item.borderBottom})}>
            <span className={`h-[10px] w-[10px] self-center bg-active-${item.color} rounded-sm`}></span>
            <h4 className="grow">{item.name}</h4>
            <h4 className="">£{item.amount}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
