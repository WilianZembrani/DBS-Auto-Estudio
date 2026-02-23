import "./Employees.css";
import lupeIcon from "../../assets/lupa-icon.png";
import trashIcon from "../../assets/trash-icon.png";
import editIcon from "../../assets/edit-icon.png";

function Employees() {

    const totalEmployees = 12;
    return (
        <div className="employees">
            <h1>Funcionários</h1>
            <p>Esta é a página de funcionários. Aqui você pode gerenciar os funcionários da empresa, incluindo adicionar, editar e remover registros.</p>
            <div className="employees-container">
                <p className="employees-view">{totalEmployees} funcionários registrados</p>
                <div className="employees-search-group">
                    <img className="lupe-icon" src={lupeIcon} alt="" />
                    <input className="employees-search" type="text" placeholder="Buscar funcionários..." />
                </div>
                <button className="employees-add-btn">+ Adicionar funcionário</button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>João Silva</td>
                            <td>Gerente</td>
                            <td>joao.silva@dbs.com.br</td>
                            <td>(11) 99999-9999</td>
                            <td className='actions'>
                                <img src={editIcon} alt="Editar" />
                                <img src={trashIcon} alt="Excluir" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employees