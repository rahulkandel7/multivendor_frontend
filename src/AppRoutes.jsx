import { Route, Routes } from "react-router-dom";
import App from "./App";
import WholeSellerLayout from "./wholeseller/layouts/WholeSellerLayout";
import Login from "./wholeseller/pages/login";
import Register from "./wholeseller/pages/Register";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<WholeSellerLayout />}>
                <Route index element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

        </Routes>
    )
}
