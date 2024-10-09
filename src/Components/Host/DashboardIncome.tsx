import { useUser } from "../../UserContext";
import { Link } from "react-router-dom";
import { changeDashboardDays } from "../../reducer/reducer";
export default function DashboardIncome() {
  const {
    state: { dashboardDays, transactions, vanType },
    dispatch,
  } = useUser();
  const amount = transactions
    .slice(transactions.length - dashboardDays)
    .reduce((acc, curr) => {
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
    <section className="flex grow bg-[#FFEAD0] px-4 py-4 md:min-w-[600px]">
      <div className="flex grow flex-col gap-5">
        <h2 className="text-4xl">Welcome ! Refactor 4</h2>
        <p className="flex items-center gap-2 text-sm sm:text-base">
          <span className="">Income last </span>
          <input
            className="sm:w-30 w-20"
            type="range"
            min="1"
            max="10"
            step="1"
            value={dashboardDays}
            onChange={(e) =>
              dispatch(changeDashboardDays(Number(e.target.value)))
            }
          />
          <span className="flex-grow">{dashboardDays} days</span>
        </p>
        <p className="text-5xl font-extrabold">£{amount}</p>
      </div>
      <Link to="income" className="flex justify-end self-center text-base">
        Details
      </Link>
    </section>
  );
}
