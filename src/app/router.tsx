import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import PaperDesc from "../pages/PaperDesc/PaperDesc";
import Admin from "../pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/paper/:id",
        element: <PaperDesc />
      }
    ]
  },
  {
    path: "/admin",
    element: <Admin />
  }
]);

export default router;