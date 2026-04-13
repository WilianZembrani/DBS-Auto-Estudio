/* eslint-disable react-hooks/set-state-in-effect */
import './AllServices.css'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import { listOffices, deleteOffice } from '../../services/officeService';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

function AllServices() {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/dashboard/addservice')
    }
    const [offices, setOffices] = useState([]);


    const loadOffices = async () => {
        try {
            const data = await listOffices();
            setOffices(data);
        } catch (error) {
            console.log(error);
        }
    }


    const handleDelete = async (id) => {
        deleteOffice(id)
            .then(() => {
                toast.success("Serviço deletado com sucesso");
                loadOffices();
            })
            .catch((error) => {
                toast.error("Erro ao deletar serviço", error);
            });
    }

    useEffect(() => {
        loadOffices();
    }, []);

    return (
        <div className='table-cnt'>
            <h1>Ver todos os serviços</h1>
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
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Funcionário</th>
                            <th>Status</th>
                            <th>Ações</th>


                        </tr>
                    </thead>
                    <tbody>
                        {offices.map((office) => (
                            <tr key={office.id}>
                                <td>{office.name}</td>
                                <td>{office.description}</td>
                                <td>R$ {office.price}</td>
                                <td>{office.employee_name}</td>
                                <td>{office.status}</td>

                                <td>
                                    <ActionButtons
                                        onEdit={() => navigate('/dashboard/addservice', { state: office })}
                                        onDelete={() => handleDelete(office.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllServices