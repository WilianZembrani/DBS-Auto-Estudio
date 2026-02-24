import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login/Login.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Add from "./pages/Add/Add.jsx";
import Services from "./pages/Services/Services.jsx";
import Employees from "./pages/Employees/Employees.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import ListProduct from "./pages/ListProduct/ListProduct.jsx";
import DashboardLayout from "./Layouts/Dashboardlayout.jsx";
import Orders from "./pages/Orders/Orders.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="add-service" element={<Add />} />
                    <Route path="services" element={<Services />} />
                    <Route path="employees" element={<Employees />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="products" element={<ListProduct />} />
                    <Route path="orders" element={<Orders />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App