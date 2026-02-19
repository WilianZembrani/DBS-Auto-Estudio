import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login/Login.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Add from "./pages/Add/Add.jsx";
import DashboardLayout from "./Layouts/Dashboardlayout.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="add" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App