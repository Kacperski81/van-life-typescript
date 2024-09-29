// import { ComboChart } from "./ComboChart";
// import { useUser } from "../../UserContext";

// export default function SingleVanChart() {
//   const {
//     state: { incomeDays, transactions, vanType },
//   } = useUser();
//   //   const filteredTransactions = transactions
//   //     .slice(transactions.length - incomeDays)
//   //     .reduce<
//   //       {
//   //         date: string;
//   //         amount: number;
//   //         simple?: number;
//   //         rugged?: number;
//   //         luxury?: number;
//   //       }[]
//   //     >((acc, transaction) => {
//   //       switch (vanType) {
//   //         case "simple":
//   //           acc.push({
//   //             date: transaction.date,
//   //             amount: transaction.allVans,
//   //             simple: transaction.simple,
//   //           });
//   //           break;
//   //         case "rugged":
//   //           acc.push({
//   //             date: transaction.date,
//   //             amount: transaction.allVans,
//   //             rugged: transaction.rugged,
//   //           });
//   //           break;
//   //         case "luxury":
//   //           acc.push({
//   //             date: transaction.date,
//   //             amount: transaction.allVans,
//   //             luxury: transaction.luxury,
//   //           });
//   //           break;
//   //         case "allVans":
//   //           return acc;
//   //       }
//   //       return acc;
//   //     }, []);

//   //   const simple = transactions.reduce((acc, curr) => acc + curr.simple, 0);
//   //   const rugged = transactions.reduce((acc, curr) => acc + curr.rugged, 0);
//   //   const luxury = transactions.reduce((acc, curr) => acc + curr.luxury, 0);

//   type DataToSingleVanChart = {
//     date: string;
//     van: string;
//     vanIncome: number;
//     totalIncome: number;
//   };

//   const dataToSingleVanChart = transactions
//     .slice(transactions.length - incomeDays)
//     .reduce<DataToSingleVanChart[]>((acc, curr) => {
//       switch (vanType) {
//         case "simple":
//           acc.push({
//             date: curr.date,
//             van: "simple",
//             vanIncome: curr.simple,
//             totalIncome: curr.allVans,
//           });
//           break;
//         case "rugged":
//           acc.push({
//             date: curr.date,
//             van: "rugged",
//             vanIncome: curr.rugged,
//             totalIncome: curr.allVans,
//           });
//           break;
//         case "luxury":
//           acc.push({
//             date: curr.date,
//             van: "luxury",
//             vanIncome: curr.luxury,
//             totalIncome: curr.allVans,
//           });
//           break;
//       }
//       return acc;
//     }, []);
//   console.log(dataToSingleVanChart);
//   const vanName =
//     vanType === "simple"
//       ? "Modest Explorer"
//       : vanType === "rugged"
//         ? "Green Wonder"
//         : "The Cruiser";
//   const totalName = "Total Income";
//   return (
//     <div>
//       {/* <h2>Chart goes here</h2> */}
//       <ComboChart
//         data={dataToSingleVanChart}
//         index="date"
//         barSeries={{
//           categories: [
//             {
//               name: vanName,
//               dataKey: "vanIncome",
//               color: `${vanType}`,
//             },
//           ],
//           colors: [`${vanType}`],
//         }}
//         lineSeries={{
//           categories: [
//             { name: totalName, dataKey: `totalIncome`, color: "gray" },
//           ],
//           colors: ["gray"],
//         }}
//       />
//     </div>
//   );
// }
