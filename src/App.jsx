import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import CreateAsset from "./pages/CreateAsset"

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
      <Route
        path="/assets/new"
        element={
          <ProtectedRoute>
            <CreateAsset />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App