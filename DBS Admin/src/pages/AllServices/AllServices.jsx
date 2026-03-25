import './AllServices.css'
import trashIcon from '../../assets/trash-icon.png'
import editIcon from '../../assets/edit-icon.png'
import lupeIcon from '../../assets/lupa-icon.png'
import { useNavigate } from 'react-router-dom';


function AllServices() {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/dashboard/addservice')

    }


    return (
        <div className='table-cnt'>
            <h1>Ver todos os servições</h1>
            <p>Aqui nessa página você consegue acessar todos seus serviços</p>
            <div className='mini-nav'>
                <div className='search-container'>
                    <img className="icon" src={lupeIcon} alt="lupa" />
                    <input type="text" placeholder='Buscar serviço..' />
                </div>

                <select className='category'>
                    <option value="">Funcionario..</option>
                    <option value="">Pedro</option>
                </select>

                <button onClick={handleClick}>+ Novo Serviço</button>
            </div>

            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Troca de óleo</td>
                            <td>Manutenção</td>
                            <td>120</td>
                            <td>Ativo</td>
                            <td>
                                <div className='actions'>
                                    <img src={editIcon} />
                                    <img src={trashIcon} />
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllServices