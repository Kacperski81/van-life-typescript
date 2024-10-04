import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import { Error } from "./Components/Error";
import { vansLoader, vanLoader } from "./loaders";
import { Login } from "./Components/Login";
import { loginAction } from "./actions";
import { requireAuth } from "./utils";
import Error2 from "./Components/Error2";

// import "./server";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
        errorElement: <Error2 message="Failed to load vans" />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Error />,
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
        loader: ({ params }) => vanLoader({ params }),
        errorElement: <Error2 message="Failed to load van details" />,
      },
      {
        path: "host",
        element: <HostLayout />,
        loader: () => requireAuth(),
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "vans",
            element: <HostVans />,
            errorElement: <Error />,
          },
          {
            path: "vans/:id",
            element: <HostVanDetails />,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
              },
              {
                path: "pricing",
                element: <HostVanPrice />,
              },
              {
                path: "photos",
                element: <HostVanPhoto />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <h2>Not Found</h2>,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
