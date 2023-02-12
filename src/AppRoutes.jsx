import { Route, Routes } from "react-router-dom";
import App from "./App";
import WholeSellerLayout from "./wholeseller/layouts/WholeSellerLayout";
import Category from "./wholeseller/pages/Category";
import Login from "./wholeseller/pages/login";
import ProductView from "./wholeseller/pages/ProductView";
import Register from "./wholeseller/pages/Register";
import SubCategory from "./wholeseller/pages/SubCategory";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<WholeSellerLayout />}>
                <Route index element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Wholeseller Route */}
                <Route path="/category" element={<Category />} />
                <Route path="/subcategory" element={<SubCategory />} />
                <Route path="/productview" element={<ProductView />} />
            </Route>

        </Routes>
    )
}
