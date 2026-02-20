import './Sidebar.css'
import { NavLink } from "react-router-dom"
import addIcon from '../../assets/add_icon.png'
import orderIcon from '../../assets/order_icon.png'

const menuItems = [
    { icon: addIcon, label: 'Adicionar Serviço', path: '/dashboard/add-service' },
    { icon: orderIcon, label: 'Ver todos os Serviços', path: '/dashboard/services' },
    { icon: orderIcon, label: 'Funcionários', path: '/dashboard/employees' },
    { icon: addIcon, label: 'Adicionar Produto', path: '/dashboard/add-product' },
    { icon: orderIcon, label: 'Listar Produtos', path: '/dashboard/products' },
    { icon: orderIcon, label: 'Gerenciar Pedidos', path: '/dashboard/orders' },
]

function Sidebar() {

    return (
        <div className="sidebar">
            {menuItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                        `sidebar-row ${isActive ? 'active' : ''}`
                    }
                >
                    <img className="icon" src={item.icon} alt={item.label} />
                    <p className="sidebar-item">{item.label}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar;