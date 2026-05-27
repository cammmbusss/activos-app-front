import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
       path="/dashboard"
        element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App