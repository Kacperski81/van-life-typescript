// import { useLoaderData } from "react-router-dom";
// import { Transaction } from "../../types";
import StackedBarChart from "../../Components/StackedBarChart";
import { changeIncomeDays } from "../../reducer/reducer";
// import { useHost } from "../../contexts/hostContext";
import { useUser } from "../../UserContext";
// export function loader() {
//   const vanLifeData = localStorage.getItem("vanLife");
//   if (vanLifeData) {
//     const vanLife = JSON.parse(vanLifeData);
//     return vanLife.transactionsData;
//   }
//   return [];
// }

export function Income() {
  const { transactions, incomeDays, dispatch } = useUser();
  
  const filteredTransactions = transactions.slice(transactions.length - incomeDays);

  return (
    <section className="py-6">
      <span className="flex items-center gap-2 x`text-center">
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={incomeDays}
          onChange={(e) => (dispatch(changeIncomeDays(Number(e.target.value))))}
          />
        {incomeDays} days
      </span>
      <div className="lg:w-11/12">
        <StackedBarChart transactions={filteredTransactions}/>
      </div>
    </section>
  );
}

// const transactionsData = [
//     { amount: 60, date: "3/1/23", id: "1", vanId: "1" },
//     { amount: 70, date: "3/1/23", id: "2", vanId: "6" },
//     { amount: 120, date: "4/1/23", id: "3", vanId: "5" },
//     { amount: 70, date: "4/1/23", id: "4", vanId: "6" },
//     { amount: 60, date: "4/1/23", id: "5", vanId: "1" }]
//     { amount: 700, date: "6/1/23", id: "6" },
//     { amount: 650, date: "7/1/23", id: "7" },
//     { amount: 800, date: "8/1/23", id: "8" },
//     { amount: 900, date: "9/1/23", id: "9" },
//     { amount: 1000, date: "10/1/23", id: "10" },
//     { amount: 1100, date: "11/1/23", id: "11" },
//     { amount: 1200, date: "12/1/23", id: "12" },
//     { amount: 1300, date: "1/1/24", id: "13" },
//     { amount: 1400, date: "2/1/24", id: "14" },
//     { amount: 1500, date: "3/1/24", id: "15" },
//     { amount: 1600, date: "4/1/24", id: "16" },
//     { amount: 1700, date: "5/1/24", id: "17" },
//     { amount: 1800, date: "6/1/24", id: "18" },
//     { amount: 1900, date: "7/1/24", id: "19" },
//     { amount: 2000, date: "8/1/24", id: "20" },
//   ];
// return (
//   <>
//     <section className="px-2 text-base">
//       <h2 className="mb-4 text-4xl">Income</h2>
//       <p className="mb-4 text-base">
//         Last <span className="font-bold underline">30 days</span>
//       </p>
//       <h2 className="mb-4 text-5xl font-extrabold"></h2>
//       <div className="mb-4 h-[300px]">
//           <Chart data={filteredTransactions} />
//         {/* <img src="/income-graph.png" alt="Income graph" className="p-0" /> */}
//       </div>
//       <div className="m-4 flex py-4">
//         <h3 className="grow text-2xl font-bold">
//           Your transactions ({filteredTransactions.length})
//         </h3>
//         <p>
//           Last <span className="font-bold underline">30 days</span>
//         </p>
//       </div>
//       <div>
//         {filteredTransactions.map((transaction) => {
//           return (
//             <div
//               key={transaction.id}
//               className="m-2 flex items-center justify-between rounded-lg bg-white p-4"
//             >
//               <p className="text-4xl font-semibold">{transaction.amount}</p>
//               <p className="text-xl">{transaction.date}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   </>
// );
