import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GridMain from "./components/ui/GridMain.jsx";
import Video from "./components/Video/Video.jsx";
import From from "./components/Form/From.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <GridMain /> },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/form",
        element: <From />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
