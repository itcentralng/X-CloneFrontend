import React from "react"
import Home from "./components/Home"
import SignUpPage from "./Pages/SignUpPage"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes} from 'react-router-dom'
import LoginPage from "./Pages/LoginPage"

  function App() {
    const router= createBrowserRouter(createRoutesFromElements(
     
  <>
  <Route index element={<LoginPage/>}/>
  <Route path="/signup" element={<SignUpPage />} />
  <Route path="/home" element={<Home />} />
 </>

));
  return <RouterProvider router={router} />;
  
}

export default App
