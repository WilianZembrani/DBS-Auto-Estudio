/* eslint-disable react-hooks/set-state-in-effect */
import './Employer.css';
import perfilIcon from '../../assets/user-icon.png';
import { useState, useEffect } from 'react';

import { createEmployee, listEmployees, deleteUser } from '../../services/userService';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import { toast } from 'react-toastify';

function Employer() {
    const [showModal, setShowModal] = useState(false);
    const [employees, setEmployees] = useState([]);

    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    const loadEmployees = async () => {
        try {
            const data = await listEmployees();
            setEmployees(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreateEmployee = async () => {
        try {
            await createEmployee({
                name,
                email,
                password,
                job_title: jobTitle,
                role: 'employee'
            });

            setShowModal(false);
            setName('');
            setEmail('');
            setPassword('');
            setJobTitle('');

            loadEmployees();
            toast.success("Funcionário criado!");
        } catch (error) {
            toast.error("Erro ao criar funcionário", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            await loadEmployees();
            toast.success("Funcionário deletado com sucesso");
        } catch (error) {
            console.error(error);
            toast.error("Esse funcionário possui serviços ativos");
        }
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    return (
        <div className='emp-cnt'>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Novo funcionário</h2>

                        <input
                            className='modal-input'
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            className='modal-input'
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            className='modal-input'
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            className='modal-input'
                            type="text"
                            placeholder="Cargo"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />

                        <div className="modal-actions">
                            <button onClick={() => setShowModal(false)}>Cancelar</button>
                            <button onClick={handleCreateEmployee}>Criar</button>
                        </div>
                    </div>
                </div>
            )}

            <h1>Funcionários</h1>

            <div className='navbar'>
                <img className='navbar-icon' src={perfilIcon} alt="" />
                <p><b>{employees.length}</b> Funcionários registrados</p>
                <button onClick={() => setShowModal(true)}>
                    Adicionar novo funcionário
                </button>
            </div>

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
                                <ActionButtons
                                    onDelete={() => handleDelete(employee.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>

    );
}

export default Employer;