import iconDBS from "../../assets/DBS_logo.jpg";
import { useNavigate } from "react-router-dom";
import './Navbar.css'


function Navbar() {

    const navigate = useNavigate();

    function handleLogout() {
        navigate('/');
    }




    return (
        <div className="navbar">
            <img src={iconDBS} alt="Logo" className="logo" />
            <button className="btn-logout" onClick={handleLogout}>Sair</button>
        </div>
    )
}

export default Navbar