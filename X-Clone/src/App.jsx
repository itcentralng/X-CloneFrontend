import Home from "./components/Home";
import SignUpPage from "./Pages/SignUpPage";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";

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
    {
      path: "/profile/:id",
      element: <ProfilePage />
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App;
