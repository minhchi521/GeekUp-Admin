import { Navbar } from '../../components/Navbar'
import { ProductList } from '../../components/ProductList'
import './UserPage.css'

export const UserPage = () => {
  return (
    <div className="user-page">
      <Navbar />
      <div className="user-container">
        <div className="page-header">
          <h1>Welcome to GeekUp Shop</h1>
          <p>Discover amazing products at unbeatable prices</p>
        </div>
        <ProductList />
      </div>
    </div>
  )
}

export default UserPage
