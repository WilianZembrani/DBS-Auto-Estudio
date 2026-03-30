import { createOffice } from '../../services/officeService';
import './AddService.css'
import { useState, useEffect } from "react";

function AddService() {

    const [servico, setServico] = useState('');
    const [descricao, setDescricao] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [valor, setValor] = useState('');
    const [employees, setEmployees] = useState([]);


    const loadEmployees = async () => {
        const response = await fetch('http://localhost:3000/api/users/employees');
        const data = await response.json();
        setEmployees(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        if (!servico || !descricao || !funcionario || !valor) {
            alert("Preencha todos os campos!");
            return;
        }




        await createOffice({
            name: servico,
            description: descricao,
            price: valor,
            employee_id: funcionario,
            status: 'Ativo'
        })

        setServico(''),
            setDescricao(''),
            setFuncionario(''),
            setValor('')



    }

    useEffect(() => {
        loadEmployees();
    }, [])

    return (
        <div className='form-cnt'>
            <h1>Adicionar serviço</h1>
            <p>Informe os dados do serviço que deseja adicionar ao sistema.</p>
            <form onSubmit={handleSubmit} className='form-servico' action="">
                <input value={servico} onChange={(e) => setServico(e.target.value)}
                    placeholder='Serviço..' type="text" />

                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}
                    placeholder='Descrição do serviço..' name="" id="" />

                <select value={funcionario} onChange={(e) => setFuncionario(e.target.value)}
                    placeholder='Funcionario..' name="" id="">
                    <option value="">Selecione um funcionário</option>

                    {employees.map((emp) => (
                        <option key={emp.id} value={emp.id}>
                            {emp.name}
                        </option>
                    ))}
                </select>

                <input className='form-value' value={valor} onChange={(e) => setValor(e.target.value)} placeholder='Valor..' type="number" />
                <button type='Submit' >Adicionar</button>
            </form>
        </div>
    )
}

export default AddService