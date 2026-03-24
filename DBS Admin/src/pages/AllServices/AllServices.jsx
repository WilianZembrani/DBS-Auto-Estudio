import './AllServices.css'
import trashIcon from '../../assets/trash-icon.png'
import editIcon from '../../assets/edit-icon.png'
import lupeIcon from '../../assets/lupa-icon.png'

function AllServices() {
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
                    <option value="">Funcionario</option>
                    <option value="">Pedro</option>
                </select>

                <button>+ Novo Serviço</button>
            </div>

            <div>
                <table className='table'>
                    <thead>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllServices