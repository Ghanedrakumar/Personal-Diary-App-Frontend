
import React, { useState } from "react"
import PasswordInput from "../Components/Input/PasswordInput"
import { Link, useNavigate } from "react-router-dom"
import { validateEmail } from "../utils/helper"
import { useDispatch } from "react-redux"
// const apiKey = import.meta.env.VITE_API_BASE_URL;
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice"
import axios from "axios"
import { toast } from "react-toastify"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    if (!password) {
      setError("Please enter the password")
      return
    }

    setError("")

    try {
      dispatch(signInStart())

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login/login`,
        { email, password },
        { withCredentials: true }
      )

      if (res.data.success === false) {
        toast.error(res.data.message)
        dispatch(signInFailure(res.data.message))
        return
      }

      toast.success(res.data.message)
      dispatch(signInSuccess(res.data))
      navigate("/dashboard")
    } catch (error) {
      toast.error(error.message)
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-slate to-yellow-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
        <form onSubmit={handleLogin}>
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Login to Your Account
          </h2>

          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm pb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-2 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            LOGIN
          </button>

          <p className="text-sm text-center mt-4 text-gray-700">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
