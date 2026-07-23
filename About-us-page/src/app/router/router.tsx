import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/AboutUs/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
]);
