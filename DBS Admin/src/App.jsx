import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import AddService from './pages/AddService/AddService.jsx';
import AllServices from './pages/AllServices/AllServices.jsx';
import Employer from './pages/Employer/Employer.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='addservice' element={<AddService />} />
          <Route path='services' element={<AllServices />} />
          <Route path='employers' element={<Employer />} />
          <Route path='addproduct' element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )


}


export default App