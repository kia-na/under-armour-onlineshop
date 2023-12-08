import { Routes, Route, Navigate } from "react-router-dom";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Home from "./pages/Home/Home";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import LoginForm from "./pages/Form/LoginForm";
import Layout from "./pages/Layout/Layout";
import Orders from "./components/Orders/Orders";
import Prices from "./components/Prices/Prices";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="underarmour" />} />
        <Route path="/underarmour" element={<Layout />}>
          <Route element={<Home />}>
            <Route index element={<ProductsSection />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path=":gender" element={<ProductsSection />} />
          </Route>

          <Route path="admin-panel" element={<AdminPanel />}>
            <Route index element={<Orders />} />
            <Route path="orders" element={<Orders />} />
            <Route path="prices" element={<Prices />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="login-form" element={<LoginForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
