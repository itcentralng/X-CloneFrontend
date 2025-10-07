import Home from "./components/Home";
import SignUpPage from "./Pages/SignUpPage";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App;
