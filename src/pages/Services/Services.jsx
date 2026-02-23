import './Services.css';
import lupeIcon from "../../assets/lupa-icon.png";
import trashIcon from "../../assets/trash-icon.png";
import editIcon from "../../assets/edit-icon.png";
import { useNavigate } from "react-router-dom";


function Services() {
    const navigate = useNavigate();

    function handleBackToAdd(event) {
        event.preventDefault();
        navigate('/dashboard/add-service');
    }



    return (
        <div className="services">
            <h1>Serviços</h1>
            <p>Esta é a página de serviços. Aqui você pode visualizar e gerenciar os serviços disponíveis.</p>
            <div className="navbar-secondary">

                <div className="search-group">
                    <img className='lupe-icon' src={lupeIcon} alt="Ícone de lupa" />
                    <input type="text" placeholder="Buscar serviço..." />
                </div>

                <div className="filters-group">
                    <select className='category' name="categoria" id="categoria">
                        <option value="">Todas as categorias</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="reparo">Reparo</option>
                        <option value="limpeza">Limpeza</option>
                    </select>

                    <select className='employee' name="funcionario" id="funcionario">
                        <option value="">Todos os funcionários</option>
                        <option value="funcionario1">Funcionário 1</option>
                        <option value="funcionario2">Funcionário 2</option>
                        <option value="funcionario3">Funcionário 3</option>
                    </select>
                </div>

                <div className="actions-group">
                    <button onClick={handleBackToAdd}>+ Novo Serviço</button>
                </div>
            </div>


            <table className="services-table">
                <thead className='services-table-head'>
                    <tr>
                        <th>Nome do Serviço</th>
                        <th>Categoria</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>Troca de óleo</td>
                        <td>Manutenção</td>
                        <td>Substituição do óleo do motor</td>
                        <td>R$ 150,00</td>
                        <td className='actions'>
                            <img className="edit-icon" src={editIcon} alt="Editar" />
                            <img className="trash-icon" src={trashIcon} alt="Excluir" />
                        </td>
                    </tr>
                </thead>
            </table>
        </div >
    )
}

export default Services 