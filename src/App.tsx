import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vans } from "./pages/Vans";
import { HostLayout } from "./pages/Host/HostLayout";
import { VanDetails } from "./Components/VanDetails";
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostVans } from "./pages/Host/HostVans";
import { HostVanDetails } from "./pages/Host/HostVanDetails";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { HostVanPrice } from "./pages/Host/HostVanPrice";
import { HostVanPhoto } from "./pages/Host/HostVanPhoto";

import "./server"


export function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPrice />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
          </Route>
        </Route>
      </Routes>
  )
}