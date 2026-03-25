import './AllServices.css'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import ActionButtons from '../../components/ActionButtons/ActionButtons';

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
                    <SearchBar />
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
                            <td><ActionButtons /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllServices