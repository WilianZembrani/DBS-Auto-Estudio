import './Navbar.css'
import logoIcon from '../../assets/DBS_logo.jpg';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()

    function handleLogout() {
        navigate('/login');
    }

    function handleLogo() {
        navigate('/dashboard');
    }


    return (
        <div className='nav-cnt'>
            <img onClick={handleLogo} src={logoIcon} alt="" />
            <button className='nav-btn' onClick={handleLogout} >Sair</button >
        </div>
    )
}

export default Navbar;