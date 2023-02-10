import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./wholeseller/pages/login";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
