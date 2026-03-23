import { Outlet } from 'react-router-dom'
import './DashboardLayout.css'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar'



function DashboardLayout() {
    return (
        <div className="dashboard">
            <header><Navbar /></header>

            <div className="content">
                <aside ><Sidebar /></aside>

                <main className="main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout