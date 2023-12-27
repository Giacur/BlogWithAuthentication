import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { getAuthToken } from "./utils/checkToken";
import HomePage, { loader as userLoader } from "./pages/HomePage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import { logout } from "./pages/LogoutPage";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import ArticlesPage, { loader as articlesLoader } from "./pages/ArticlesPage";
import CreatePage, {
  loader as createPostLoader,
  action as createPostAction,
} from "./pages/CreatePage";
import { action as deleteAction } from "./pages/DeletePost";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      loader: getAuthToken,
      id: "root",
      children: [
        { index: true, element: <LoginPage />, action: loginAction },
        { path: "register", element: <RegisterPage />, action: registerAction },
        { path: "home", element: <HomePage />, loader: userLoader },
        { path: "articles", element: <ArticlesPage />, loader: articlesLoader },
        {
          path: "articles/new",
          element: <CreatePage />,
          loader: createPostLoader,
          action: createPostAction,
        },
        { path: "/articles/del/:id", action: deleteAction },
        { path: "logout", action: logout },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
