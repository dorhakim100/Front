// routes.ts
import React from "react";

import { Home } from "../../pages/Home/Home";
import { About } from "../../pages/About/About";
import { Services } from "../../pages/Services/Services";
import { Login } from "../../pages/Login/Login";

export interface Route {
  title: string;
  path: string;
  element: React.ComponentType;
}

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
    element: Home,
  },
  {
    title: "About",
    path: "/about",
    element: About,
  },
  {
    title: "Services",
    path: "/services",
    element: Services ,
  },
  {
    title: "Login",
    path: "/login",
    element: Login,
  },
];
