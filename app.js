// ...existing code...
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HederApp } from "./src/HeaderApp";
import BodyApp from "./src/BodyApp";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./src/About";
import Error from "./src/Error";
import { Contact } from "./src/Contact";
import { ResMenue } from "./src/ResMenue";
// ...existing code...

const AppLayout = () => {
  return (
    <div className="app-root">
      <HederApp />
      <Outlet />
    </div>
  );
};

const data = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
         {
        path: "/",
        element: <BodyApp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:name/order",
        element: <ResMenue />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={data} />);
