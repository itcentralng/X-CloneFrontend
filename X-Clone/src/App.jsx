<<<<<<< HEAD
import Home from "./components/Home";
import SignUp from "./components/signUp";

function App() {
  return (
    <>  
   <SignUp />
    {/*  <Home />  */}
    
=======
import React from "react"
import Home from "./components/Home"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import LoginPage from "./Pages/LoginPage"
function App() {
const router= createBrowserRouter(createRoutesFromElements(
  <Route index element={<LoginPage/>}/>

))

  return (
    <>
     {/* <Home />  */}
     <LoginPage/>
     
>>>>>>> main
    </>
  )
}

export default App
