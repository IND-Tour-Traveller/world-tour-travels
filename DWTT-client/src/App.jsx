import "./styles/app.css";
import { RouterProvider } from "react-router";
import { Router } from "./routes/Routes";

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
