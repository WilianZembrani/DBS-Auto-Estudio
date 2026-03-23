import { Outlet } from 'react-router-dom'
import './DashboardLayout.css'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar'



function DashboardLayout() {
    return (
        <div className='dash-cnt'>
            <Sidebar />
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout