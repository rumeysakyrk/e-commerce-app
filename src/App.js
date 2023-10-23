import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import Product from "./pages/Admin/Product";

import ProductDetail from './pages/ProductDetail';
import ProtectedRoute from './pages/ProtectedRoute';
import Cart from './pages/Cart';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';
import Orders from './pages/Admin/Orders';
import AdminHome from './pages/Admin/AdminHome';
import ProductsDetail from './pages/Admin/ProductsDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/products/:product_id" element={<ProductDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<ProtectedRoute />} />
            <Route element={<Admin />}>
              <Route index path='/admin' element={<AdminHome />} />
              <Route path='/admin/orders' element={<Orders />} />
              <Route path='/admin/product' element={<Product />} />
              <Route index path='/admin/products/:product_id' element={<ProductsDetail />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
