import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import AddService from './pages/AddService/AddService.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='addservices' element={<AddService />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )


}


export default App