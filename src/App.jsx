import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainLayout />, children: [
      {index: true, element: <LoginPage />},
      {path: '/register', element: <RegisterPage />},
    ] },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
