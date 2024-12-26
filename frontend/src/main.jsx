import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/products/ProductPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";
import AllProducts from "./pages/products/AllProducts.jsx";
import Category from "./pages/categories/Category.jsx";
import Brand from "./pages/brand/Brand.jsx";
import Cart from "./pages/carts/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/Product/:id" element={<ProductPage />} />
      <Route path="/brand/:id" element={<Brand />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
