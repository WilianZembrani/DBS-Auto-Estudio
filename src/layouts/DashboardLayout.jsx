import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import './DashboardLayout.css'

function DashboardLayout() {
    return (
        <div className="dashboard-container">
            <Navbar />

            <div className="dashboard-main">
                <Sidebar />

                <div className="dashboard-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;