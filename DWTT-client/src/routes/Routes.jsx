import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import AppLayout from "../AppLayout";
import ErrorPage from "../pages/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", Component: lazy(() => import("../pages/HomePage")) },
    ],
  },
]);
