/* eslint-disable react-hooks/set-state-in-effect */
import { createOffice, updateOffice } from '../../services/officeService';
import './AddService.css'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddService() {

    const location = useLocation();
    const officeEdit = location.state;
    const navigate = useNavigate();
    const isEdit = officeEdit ? true : false;

    const [servico, setServico] = useState('');
    const [descricao, setDescricao] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [valor, setValor] = useState('');
    const [employees, setEmployees] = useState([]);

    const loadEmployees = async () => {
        const response = await fetch('http://localhost:3000/api/users/employees');
        const data = await response.json();
        setEmployees(data);
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    useEffect(() => {
        if (officeEdit) {
            setServico(officeEdit.name);
            setDescricao(officeEdit.description);
            setFuncionario(officeEdit.employee_id);
            setValor(officeEdit.price);
        }
    }, [officeEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!servico || !descricao || !funcionario || !valor) {
            toast.warn("Preencha todos os campos!");
            return;
        }

        try {
            if (isEdit) {
                await updateOffice(officeEdit.id, {
                    name: servico,
                    description: descricao,
                    price: Number(valor),
                    employee_id: funcionario
                });
                toast.success("Serviço atualizado!");
            } else {
                await createOffice({
                    name: servico,
                    description: descricao,
                    price: Number(valor),
                    employee_id: funcionario,
                    status: 'Ativo'
                });
                toast.success("Serviço criado!");
            }

            setServico('');
            setDescricao('');
            setFuncionario('');
            setValor('');

        } catch (error) {
            toast.error("Erro ao salvar serviço", error);
        }
    };

    return (
        <div className='form-cnt'>
            <h1>{isEdit ? "Editar serviço" : "Adicionar serviço"}</h1>

            <form onSubmit={handleSubmit} className='form-servico'>

                <input
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    placeholder='Serviço..'
                    type="text"
                />

                <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder='Descrição do serviço..'
                />

                <select
                    value={funcionario}
                    onChange={(e) => setFuncionario(e.target.value)}
                >
                    <option value="">Selecione um funcionário</option>

                    {employees.map((emp) => (
                        <option key={emp.id} value={emp.id}>
                            {emp.name}
                        </option>
                    ))}
                </select>

                <input
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder='Valor..'
                    type="number"
                />

                <button type='submit' onClick={() => navigate('/dashboard/services')}>
                    {isEdit ? "Atualizar" : "Adicionar"}
                </button>
            </form>
        </div>
    );
}

export default AddService;