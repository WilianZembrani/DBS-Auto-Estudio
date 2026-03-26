import './Employer.css'
import perfilIcon from '../../assets/user-icon.png'

import ActionButtons from '../../components/ActionButtons/ActionButtons'

function Employer() {
    return (
        <div className='emp-cnt'>
            <h1>Funcionários</h1>
            <p>Esta é a página de funcionários</p>
            <div className='navbar'>
                <img className='navbar-icon' src={perfilIcon} alt="" />
                <p><b>12</b> Funcionários registrados</p>
                <button>Adicionar novo funcionário</button>
            </div>
            <div>
                <table className='table-info'>
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
                            <td>Pedro</td>
                            <td>Funileiro</td>
                            <td>Pedro@gmail.com</td>
                            <td>490028922</td>
                            <td><ActionButtons /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Employer