import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signup from "./Components/Signup"
import { ToastContainer } from "react-toastify"
import Login from "./Components/Login"
import Dashboard from "./Components/Home/Dashboard"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Signup/></>} />
      <Route path="/signup" element={<><Signup/></>} />
      <Route path="/login" element={<><Login/></>} /> 
      <Route path="/dashboard" element={<><Dashboard/></>} /> 

    </Routes>
    <ToastContainer position="top-center" />
    </BrowserRouter>


  )
}

export default App
