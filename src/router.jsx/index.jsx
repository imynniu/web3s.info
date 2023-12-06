import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Layout from "../layout/Layout";
import Project1 from "../pages/projects/project1/Project1";
import Project2 from "../pages/projects/project2/project2";
import Home from "../pages/home/Home";
import About from "../pages/about/about";
import ProjectLayout from "../layout/projectLayout";
import NotFund from "../pages/NotFund";
import Index from "../pages";

//路由导航
const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "*",
    element: <NotFund />,
  },
  // {
  //   path: "/",
  //   element: <Navigate to={"index"} />,
  // },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <ProjectLayout />,
        children: [
          {
            path: "project1",
            element: <Project1 />,
          },
          {
            path: "project2",
            element: <Project2 />,
          },
        ],
      },
    ],
  },
];
//创建路由实例
const router = createBrowserRouter(routes);
export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
