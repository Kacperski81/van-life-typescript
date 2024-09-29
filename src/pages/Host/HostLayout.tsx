import { Outlet } from "react-router-dom";
import HostHeader from "../../Components/Host/HostHeader";

export function HostLayout() {
  return (
    <div className="mx-auto flex w-full bg-background md:min-w-[750px] lg:bg-transparent lg:bg-none">
      <div className="grow sm:shadow-[0px_20px_20px_20px_rgba(0,0,0,0.2)] md:mx-auto md:flex md:grow-0 md:p-4 lg:min-w-[1000px] lg:bg-background-large">
        <HostHeader />
        <main className="w-full sm:mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
