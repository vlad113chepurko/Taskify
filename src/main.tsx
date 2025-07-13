import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import '@styles/index.css';
import App from "./App";
import pages from '@pages/pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <pages.Home /> },
      { path: "tasks", element: <pages.Tasks /> },
      { path: "add", element: <pages.NewTask /> },
      { path: "deleted", element: <pages.DeletedTasks /> },
      { path: "*", element: <pages.NotFound /> },
    ],
  },

]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
