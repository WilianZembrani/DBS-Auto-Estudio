import './Dashboard.css'


function Dashboard() {
    return (
        <div className="dashboard-home">
            <h1 className="dashboard-title">Bem-vindo ao Painel Administrativo</h1>

            <p className="dashboard-text">
                Este sistema foi desenvolvido para facilitar o gerenciamento completo do seu negócio.
                Através deste painel, você pode controlar serviços, produtos, funcionários e pedidos de forma simples e eficiente.
            </p>

            <h2 className="dashboard-subtitle">O que você pode fazer aqui:</h2>

            <ul className="dashboard-list">
                <li className="dashboard-item">
                    <strong>Adicionar Serviços:</strong> Cadastre novos serviços oferecidos pela empresa.
                </li>

                <li className="dashboard-item">
                    <strong>Ver todos os Serviços:</strong> Visualize, edite ou remova serviços existentes.
                </li>

                <li className="dashboard-item">
                    <strong>Funcionários:</strong> Gerencie a equipe, adicionando ou acompanhando colaboradores.
                </li>

                <li className="dashboard-item">
                    <strong>Adicionar Produto:</strong> Cadastre novos produtos disponíveis para venda.
                </li>

                <li className="dashboard-item">
                    <strong>Listar Produtos:</strong> Veja todos os produtos cadastrados e faça alterações.
                </li>

                <li className="dashboard-item">
                    <strong>Gerenciar Pedidos:</strong> Acompanhe e organize os pedidos realizados pelos clientes.
                </li>
            </ul>

            <p className="dashboard-footer">
                Utilize o menu lateral para navegar entre as funcionalidades e gerenciar seu sistema de forma prática.
            </p>
        </div>
    )
}

export default Dashboard