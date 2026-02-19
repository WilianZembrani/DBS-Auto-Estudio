import './Sidebar.css'
import addIcon from '../../assets/add_icon.png'
import orderIcon from '../../assets/order_icon.png'

const menuItems = [
    { icon: addIcon, label: 'Adicionar Serviço', page: 'addService' },
    { icon: orderIcon, label: 'Ver todos os Serviços', page: 'services' },
    { icon: orderIcon, label: 'Funcionários', page: 'employees' },
    { icon: addIcon, label: 'Adicionar Produto', page: 'addProduct' },
    { icon: orderIcon, label: 'Listar Produtos', page: 'products' },
    { icon: orderIcon, label: 'Gerenciar Pedidos', page: 'orders' },
]

function Sidebar({ setActivePage }) {

    const renderMenuItem = (item, index) => (
        <div
            key={index}
            className="sidebar-row"
            onClick={() => setActivePage(item.page)}
        >
            <img className="icon" src={item.icon} alt={item.label} />
            <p className="sidebar-item">{item.label}</p>
        </div>
    );

    return (
        <div className="sidebar">
            {menuItems.map(renderMenuItem)}
        </div>
    )
}

export default Sidebar;
