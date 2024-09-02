// import { useState } from "react";
import { cx } from "../lib/utils";
import { Transaction } from "../types";
import { BarChart, TooltipProps } from "./BarChart";

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("uk").format(number).toString();
};

const Tooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;
  const data = payload.map((item) => ({
    total: item.payload.amount,
    type: item.category,
    value: item.value,
    percentage: (
      (item.value /
        (item.payload["luxury"] +
          item.payload["rugged"] +
          item.payload["simple"])) *
      100
    ).toFixed(0),
  }));

  return (
    <>
      <div className="w-60 rounded-md border border-gray-500/10 bg-blue-500 px-4 py-1.5 text-sm shadow-md dark:border-gray-400/20 dark:bg-gray-900">
        <p className="flex items-center justify-between">
          <span className="text-gray-50 dark:text-gray-50">Date</span>
          <span className="font-medium text-gray-50 dark:text-gray-50">
            {label}
          </span>
        </p>
        <p className="flex items-center justify-between">
          <span className="text-gray-50 dark:text-gray-50">Total</span>
          <span className="font-medium text-gray-50 dark:text-gray-50">
            £{valueFormatter(data[0].total)}
          </span>
        </p>
      </div>
      <div className="mt-1 w-60 space-y-1 rounded-md border border-gray-500/10 bg-white px-3 py-2 text-sm text-white shadow-md dark:border-gray-400/20 dark:bg-gray-900">
        {data.map((item, index) => (
          <div
            key={index}
            className={cx(
              "flex items-center space-x-2.5 rounded-lg px-2 py-1",
              {
                "bg-active-simple": item.type === "simple",
                "bg-active-luxury": item.type === "luxury",
                "bg-active-rugged": item.type === "rugged",
              },
            )}
          >
            {/* <span
              className={cx("size-2.5 shrink-0 rounded-sm")}
              aria-hidden={true}
            /> */}

            <div className="flex w-full justify-between">
              <span className="">
                {item.type === "luxury"
                  ? "The Cruiser"
                  : item.type === "rugged"
                    ? "Green Wonder"
                    : "Modest Explorer"}
              </span>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-white">£{item.value}</span>
                <span className="text-white">({item.percentage}&#37;)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// type VanTypeFilter = "all" | "luxury" | "rugged" | "simple";
const vanTypes = ["luxury", "rugged", "simple"];

export default function StackedBarChart({
  transactions,
}: {
  transactions: Transaction[];
}) {
  //   const [vanTypeFilter, setVanTypeFilter] = useState<VanTypeFilter>("all");

  return (
    <div style={{ minWidth: "300px", minHeight: "300px" }}>
      <h2>abc</h2>
      <BarChart
        className="hidden h-96 sm:block"
        data={transactions}
        index="date"
        categories={["luxury", "rugged", "simple"]}
        type="stacked"
        colors={["luxury", "rugged", "simple"]}
        valueFormatter={valueFormatter}
        yAxisWidth={35}
        showLegend={false}
        customTooltip={Tooltip}
      />
      <BarChart
        className="h-80 sm:hidden"
        data={transactions}
        index="date"
        categories={["luxury", "rugged", "simple"]}
        type="stacked"
        colors={["luxury", "rugged", "simple"]}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
        startEndOnly={true}
        customTooltip={Tooltip}
      />
    </div>
  );
}
