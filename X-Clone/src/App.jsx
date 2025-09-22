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
     
    </>
  )
}

export default App
