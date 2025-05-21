import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Sndala from "../components/Sndala";
import Shebara from "../components/Shebara";
import Shura from "../components/Shura";
import Omahat from "../components/Omahat";

function Layout() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Sndala /> },
      { path: "/shebara", element: <Shebara /> },
      { path: "/shura", element: <Shura /> },
      { path: "/omahat", element: <Omahat /> },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
