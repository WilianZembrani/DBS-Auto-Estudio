import './Sidebar.css'

function Sidebar() {
    return (
        <div className='side-cnt'>
            <div className='side-buttons'>
                <button>Adicionar Serviço</button>
                <button>Ver todos os Serviços</button>
                <button>Funcionários</button>
                <button>Adicionar Produto</button>
                <button>Listar Produtos</button>
                <button>Gerenciar Pedidos</button>
            </div>
        </div >
    )
}

export default Sidebar