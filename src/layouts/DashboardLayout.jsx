import { useState } from "react";
import './Dashboardlayout.css';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Add from "../pages/Add/Add";


function DashboardLayout() {
    const [activePage, setActivePage] = useState('addService');

    const renderPage = () => {
        switch (activePage) {
            case 'addService':
                return <Add />;
            default:
                return <div>Bem-vindo ao Dashboard!</div>;
        }
    }

    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-main">
                <Sidebar setActivePage={setActivePage} />
                <div className="dashboard-content">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
