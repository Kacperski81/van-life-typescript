import { Link } from "react-router-dom";
// import { Transaction } from "../../types";
// import { Suspense } from "react";
// import { useHost } from "../../contexts/hostContext";
import { changeIncomeDays } from "../../reducer/reducer";
// import { useUser } from "../../UserContext";
import { cx } from "../../lib/utils";
import { useUser } from "../../UserContext";

export function loader() {
  const vanLifeData = localStorage.getItem("vanLife");
  if (vanLifeData) {
    const vanLife = JSON.parse(vanLifeData);
    return vanLife.transactionsData;
  }
  return [];
}

export function Dashboard() {
  // const { hostVans, transactions, reviews } = useLoaderData() as {
  //   hostVans: Van[];
  //   transactions: Transaction[];
  //   reviews: Review[];
  // };
  // const transactionsData = useLoaderData() as Transaction[];
  // console.log(transactionsData);
  // const { state, dispatch } = useUser();
  // const { incomeDays, vanType, setVanType,  setIncomeDays } = useHost();
  // const { user } = useUser();
  // const amount = transactionsData
  //   .slice(transactionsData.length - state.incomeDays)
  //   .reduce((acc, curr) => {
  //     if(vanType === "all") {
  //       return acc + curr.amount;
  //     }
  //     if(vanType === "simple") {
  //       return acc + curr.simple;
  //     }
  //     if(vanType === "rugged") {
  //       return acc + curr.rugged;
  //     }
  //     if(vanType === "luxury") {
  //       return acc + curr.luxury;
  //     }
  //     return acc;
  //   },0)
  // const { amount } = useHost();
  // console.log({amount})
  const { incomeDays, transactions, dispatch } = useUser();

  const amount = transactions.slice(transactions.length - incomeDays).reduce((acc, curr) => acc + curr.amount, 0);

  const vansNames = [
    { name: "Modest Explorer", type: "simple" },
    { name: "Green Wonder", type: "rugged" },
    { name: "The Cruiser", type: "luxury" },
  ];

  return (
    <>
      <h2>Welcome!</h2>
      <div className="my-2 flex gap-2">
        {vansNames.map((van, index) => (
          <button
            key={index}
            className={cx("rounded-lg bg-black px-2 py-1 text-white", {
              "bg-active-simple": van.type === "simple",
              "bg-active-rugged": van.type === "rugged",
              "bg-active-luxury": van.type === "luxury",
            })}
            // onClick={() => setVanType(van.type)}
          >
            {van.name}
          </button>
        ))}
      </div>
      <div className="flex max-w-[550px] bg-[#FFEAD0] px-2 py-4">
        <div className="flex grow flex-col gap-5">
          {/* <h2 className="text-4xl">{vanType === "simple" ? "Modest Explorer" : vanType === "rugged" ? "Green Wonder" : "The Cruiser"}</h2> */}
          <p className="">
            Income last{" "}
            <span className="font-bold underline">
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={incomeDays}
                onChange={(e) =>
                  dispatch(changeIncomeDays(Number(e.target.value)))
                }
              />
              {incomeDays} days
            </span>
          </p>
          <p className="text-5xl font-extrabold">£{amount}</p>
        </div>
        <Link to="income" className="flex justify-end self-center text-base">
          Details
        </Link>
      </div>
    </>
    // <div className="xl:grid xl:aspect-[16/9] xl:grid-cols-2 xl:grid-rows-1">
    //   <section className="xl: xl:mt-8 xl:flex xl:flex-col xl:gap-4 xl:px-8">
    //     <Suspense fallback={<div>Loading transactions ...</div>}>
    //       <Await resolve={transactions}>{renderTransactions}</Await>
    //     </Suspense>
    //     <Suspense fallback={<div>Loading reviews ...</div>}>
    //       <Await resolve={reviews}>{renderReviews}</Await>
    //     </Suspense>
    //   </section>
    //   <Suspense fallback={<div className="bg-red-500">Loading vans ...</div>}>
    //     <Await resolve={hostVans}>{renderHostVans}</Await>
    //   </Suspense>
    // </div>
    // <div className="xl:grid xl:aspect-[16/9] xl:grid-cols-2 xl:grid-rows-1">

    //   <section className="flex max-w-[550px] flex-col p-4 xl:pt-0">
    //     <div className="flex items-baseline py-4">
    //       <h2 className="grow text-2xl font-bold">Your listed vans</h2>
    //       <Link to="vans" className="text-base">
    //         View all
    //       </Link>
    //     </div>
    //     <Suspense fallback={<div className="bg-red-500">Loading...</div>}>
    //       <Await resolve={hostVans}>{renderHostVans}</Await>
    //     </Suspense>
    //   </section>
    // </div>
  );
}

// old code with function for Suspense Await
// function renderHostVans(vans: Van[]) {
//   return (
//     <div className="flex flex-col gap-2">
//       {vans.map((van) => {
//         return (
//           <div
//             key={van.id}
//             className="flex items-center gap-2 rounded-lg bg-[#fff] p-4 text-base"
//           >
//             <div className="aspect-square w-[70px] overflow-hidden rounded-lg">
//               <img src={van.imageUrl} />
//             </div>
//             <div className="grow">
//               <h3 className="text-xl font-semibold">{van.name}</h3>
//               <h4 className="text-[#4D4D4D]">${van.price}/day</h4>
//             </div>
//             <Link to={`/host/vans/${van.id}`}>Edit</Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// function renderTransactions(transactions: Transaction[]) {
//   return (
//     <div className="flex max-w-[550px] bg-[#FFEAD0] px-2 py-4">
//       <div className="flex grow flex-col gap-5">
//         <h2 className="text-4xl">Welcome!</h2>
//         <p className="">
//           Income last{" "}
//           <span className="font-bold underline">
//             <input
//               type="range"
//               min="1"
//               max="30"
//               step="1"
//               value={incomeDays}
//               onChange={(e) => setIncomeDays(() => Number(e.target.value))}
//             />
//             {incomeDays} days
//           </span>
//         </p>
//         <p className="text-5xl font-extrabold">${amount}</p>
//       </div>
//       <Link to="income" className="flex justify-end self-center text-base">
//         Details
//       </Link>
//     </div>
//   );
// }
// function renderReviews(reviews: Review[]) {
//   return (
//     <div className="flex max-w-[550px] items-center gap-2 bg-[#FFDDB2] px-2 py-8">
//       <h3 className="text-2xl font-bold">Review score</h3>
//       <BsStarFill className="fill-[#FF8C38] text-3xl" />
//       <p className="grow text-xl">
//         <span className="font-bold">5.0</span>/5
//       </p>
//       <Link to="reviews" className="text-base text-[#161616]">
//         Details
//       </Link>
//     </div>
//   );
// }
