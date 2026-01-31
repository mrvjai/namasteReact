// ...existing code...
import React, { lazy, Suspense, useState, useEffect,useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HederApp } from "./src/HeaderApp";
import BodyApp from "./src/BodyApp";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./src/About";
import Error from "./src/Error";
import { Contact } from "./src/Contact";
import { ResMenue } from "./src/ResMenue";
import context from "./utils/useContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ItemCart from "./src/ItemCart";
// ...existing code...
const Grocery = lazy(() => import("./src/Grocery"));
const AppLayout = () => {
  const [name,setName]=useState()
  useEffect(()=>{
    const naam = {
      name:"vijay Kumar"
    }
    setName(naam.name)
  },[])
  return (
    <Provider store={appStore}>
    <context.Provider value={{userName:name,setName}}>
    <div className="app-root">
      <HederApp />
      <Outlet />
    </div>
    </context.Provider>
    </Provider>
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <ItemCart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={data} />);
