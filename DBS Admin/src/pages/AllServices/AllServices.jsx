
import './AllServices.css'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import { listOffices, deleteOffice } from '../../services/officeService';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

function AllServices() {

    const navigate = useNavigate()
    const [employee, setEmployee] = useState("")
    const [search, setSearch] = useState("");

    function handleClick() {
        navigate('/dashboard/addservice')
    }
    const [offices, setOffices] = useState([]);

    const uniqueEmployees = Object.values(
        offices.reduce((acc, office) => {
            acc[office.employee_id] = office;
            return acc;
        }, {})
    );


    const loadOffices = async () => {
        try {
            const data = await listOffices(search, employee);
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, employee]);

    return (
        <div className='table-cnt'>
            <h1>Ver todos os serviços</h1>
            <p>Aqui nessa página você consegue acessar todos seus serviços</p>
            <div className='mini-nav'>
                <div className='search-container'>
                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <select value={employee} className='category' onChange={(e) => setEmployee(e.target.value)}>
                    <option value="">Funcionario..</option>
                    {uniqueEmployees.map((office) => (
                        <option key={office.employee_id} value={office.employee_id}>
                            {office.employee_name}
                        </option>
                    ))}
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