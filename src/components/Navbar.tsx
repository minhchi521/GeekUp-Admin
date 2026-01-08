import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

export const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const isAdmin = location.pathname.includes('/admin')

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📦</span>
          GeekUp Shop
        </Link>
        <ul className="navbar-menu">
          {user?.role === 'admin' && (
            <>
              <li>
                <Link 
                  to="/admin" 
                  className={`nav-link ${isAdmin ? 'active' : ''}`}
                >
                  Admin
                </Link>
              </li>
            </>
          )}
          {user?.role === 'user' && (
            <>
              <li>
                <Link 
                  to="/user" 
                  className={`nav-link ${!isAdmin ? 'active' : ''}`}
                >
                  Shop
                </Link>
              </li>
            </>
          )}
          <li className="navbar-user">
            <span className="user-info">
              {user?.email}
            </span>
          </li>
          <li>
            <button 
              onClick={handleLogout} 
              className="nav-link logout-btn"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
