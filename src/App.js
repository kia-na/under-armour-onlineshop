import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import MainSite from "./pages/MainSite/MainSite";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import AdminLoginForm from "./pages/Form/AdminLoginForm";
import Layout from "./pages/Layout/Layout";
import FilteredProducts from "./components/ProductsSection/FilteredProducts";
import Orders from "./components/Orders/Orders";
import Prices from "./components/Prices/Prices";
import Products from "./components/Product/Products";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="underarmour" />} />
        <Route path="/underarmour" element={<Layout />}>
          <Route element={<MainSite />}>
            <Route index element={<ProductsSection />} />
            <Route path="orders" element={<Orders />} />
            <Route path=":gender" element={<FilteredProducts />} />
          </Route>

          <Route path="admin-panel" element={<AdminPanel />}>
            <Route index path="orders" element={<Orders />} />
            <Route path="prices" element={<Prices />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="admin-login-form" element={<AdminLoginForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
