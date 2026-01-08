import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const location = useLocation()
  const isAdmin = location.pathname.includes('/admin')

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📦</span>
          GeekUp Shop
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/user" 
              className={`nav-link ${!isAdmin ? 'active' : ''}`}
            >
              User
            </Link>
          </li>
          <li>
            <Link 
              to="/admin" 
              className={`nav-link ${isAdmin ? 'active' : ''}`}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
