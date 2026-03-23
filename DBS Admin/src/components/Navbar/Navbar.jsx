import './Navbar.css'
import logoIcon from '../../assets/DBS_logo.jpg';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        navigate('/login')
    }


    return (
        <div className='nav-cnt'>
            <img src={logoIcon} alt="" />
            <button onClick={handleSubmit} >Sair</button >
        </div>
    )
}

export default Navbar;