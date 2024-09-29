import DashboardIncome from "../../Components/Host/DashboardIncome";
import DashboardReviews from "../../Components/Host/DashboardReviews";
import DashboardVans from "../../Components/Host/DashboardVans";
export function Dashboard() {
  return (
    <div className="flex mx-auto max-w-[550px] md:min-w-[600px] md:max-w-[700px] flex-col lg:mx-0">
      <DashboardIncome />
      <DashboardReviews />
      <DashboardVans />
    </div>
  );
}
