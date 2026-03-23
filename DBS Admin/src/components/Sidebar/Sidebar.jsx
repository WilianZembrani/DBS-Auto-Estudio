import './Sidebar.css'
import addIcon from '../../assets/add_icon.png'
import orderIcon from '../../assets/order_icon.png'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='side-cnt'>
            <div className='side-buttons'>
                <NavLink
                    to="/dashboard/addservices"
                    className={({ isActive }) => isActive ? 'btn active' : 'btn'}
                >
                    <img className="icon add" src={addIcon} />
                    Adicionar Serviço
                </NavLink>


                <NavLink to="/dashboard/services"
                    className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
                    <img className='icon see' src={orderIcon} />
                    Ver todos os Serviços
                </NavLink>


                <NavLink to="/dashboard/employers"
                    className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
                    <img className='icon see' src={orderIcon} />
                    Funcionários
                </NavLink>


                <NavLink to="/dashboard/addproduct"
                    className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
                    <img className='icon add' src={addIcon} />
                    Adicionar Produto
                </NavLink>


                <NavLink to="/dashboard/listproducts"
                    className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
                    <img className='icon see' src={orderIcon} />
                    Listar Produtos
                </NavLink>
                <NavLink to="/dashboard/products"
                    className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
                    <img className='icon see' src={orderIcon} />
                    Gerenciar Pedidos
                </NavLink>
            </div>
        </div >
    )
}

export default Sidebar