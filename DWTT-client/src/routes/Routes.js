import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import { lazy } from "react";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "", Component: lazy(() => import("../pages/HomePage")) },
    ],
  },
]);
