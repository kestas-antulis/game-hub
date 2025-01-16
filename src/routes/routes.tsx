import Layout from "@/layouts/Layout";
import DetailsPage from "@/pages/DetailsPage";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:id", element: <DetailsPage /> },
    ],
  },
]);

export default router;
