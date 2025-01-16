import Layout from "@/layouts/Layout";
import DetailsPage from "@/pages/DetailsPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:id", element: <DetailsPage /> },
    ],
  },
]);

export default router;
