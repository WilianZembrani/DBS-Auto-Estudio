import './Employer.css'
import perfilIcon from '../../assets/user-icon.png'
import { useState, useEffect } from 'react';

import { listEmployees } from '../../services/userService';
import ActionButtons from '../../components/ActionButtons/ActionButtons'

function Employer() {

    const [employees, setEmployees] = useState([]);

    const loadEmployees = async () => {
        try {
            const data = await listEmployees();
            setEmployees(data);
        } catch (error) {
            console.log(error);


        }
    }

    useEffect(() => {
        loadEmployees();
    }, [])
    return (
        <div className='emp-cnt'>
            <h1>Funcionários</h1>
            <p>Esta é a página de funcionários</p>
            <div className='navbar'>
                <img className='navbar-icon' src={perfilIcon} alt="" />
                <p><b>{employees.length}</b> Funcionários registrados</p>
                <button>Adicionar novo funcionário</button>
            </div>
            <div>
                <table className='table-info'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>

                            <th>Cargo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.job_title}</td>
                                <td>
                                    <ActionButtons />
                                </td>
                            </tr>
                        ))}



                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Employer