import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AdminPage from './pages/admin/AdminPage'
import UserPage from './pages/user/UserPage'
import ProductDetail from './pages/user/ProductDetail'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  )
}

export default App
