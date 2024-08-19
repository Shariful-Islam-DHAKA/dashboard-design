import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/page/DashBoard";
import Projects from "./components/page/Projects";
import Tasks from "./components/page/Tasks";
import Settings from "./components/page/Settings";
import Help from "./components/page/Help";
import Layout from "./components/page/layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "Tasks",
        element: <Tasks />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
