import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import SalesHistory from "../pages/SalesHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "sales-history",
        element: <SalesHistory />,
        loader: async () => {
          return fetch("http://localhost:5000/api/sales-history");
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
