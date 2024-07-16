import { RouterProvider, createBrowserRouter} from "react-router-dom";
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
import { VansError } from "./Components/VansError";
import { 
  vansLoader, 
  vanLoader, 
  hostVansLoader } from "./loaders";
import { Login } from "./Components/Login";
import { loginAction } from "./actions";
import { requireAuth } from "./utils";
// import { getVans } from "./api";

import "./server"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
        // loader: async () => {
        //   return getVans()
        // },
        errorElement: <Error />
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
        loader: ({params}) => vanLoader({params}),
        errorElement: <VansError />
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
            loader: () => requireAuth()
          },
          {
            path: "income",
            element: <Income />,
            loader: () => requireAuth(),
          },
          // localhost:5173/host/income
          {
            path: "reviews",
            element: <Reviews />,
            loader: () => requireAuth(),
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
            errorElement: <Error />,
          },
          {
            path: "vans/:id",
            element: <HostVanDetails />,
            loader: () => hostVanDetailsLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />
              },
              {
                path: "pricing",
                element: <HostVanPrice />
              },
              {
                path: "photos",
                element: <HostVanPhoto />
              }
            ]
          },
        ]
      },
      {
        path: "*",
        element: <h2>Not Found</h2>
      }
    ]
  }
]
)

export function App() {
  return (
    <RouterProvider router={router} />
  )
}