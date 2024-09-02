import { Outlet } from "react-router-dom";
import HostHeader from "../../Components/Host/HostHeader";
// xl:bg-[rgba(233,217,191,0.7)]
export function HostLayout() {
  return (
    <div className="mx-auto max-w-[500px] bg-background xl:flex xl:min-w-[1100px] xl:items-start xl:self-start xl:bg-background-large xl:shadow-[0px_20px_20px_20px_rgba(0,0,0,0.2)]">
      <HostHeader />
      <main className="aspect-[16/9] w-full">
          <Outlet />
      </main>
    </div>
  );
}
