import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./wholeseller/pages/login";
import Register from "./wholeseller/pages/Register";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}
