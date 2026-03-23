import './AddService.css'
import { useState } from "react";

function AddService() {

    const [servico, setServico] = useState('');
    const [descricao, setDescricao] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [valor, setValor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!servico || !descricao || !funcionario || !valor) {
            alert("Preencha todos os campos!");
            return;
        }

        const dados = {
            servico,
            descricao,
            funcionario,
            valor
        }

        console.log(dados);

    }

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
                    <option value="">Pedro</option>
                    <option value="">Alvares</option>
                    <option value="">Cabral</option>
                </select>

                <input className='form-value' value={valor} onChange={(e) => setValor(e.target.value)} placeholder='Valor..' type="number" />
                <button type='Submit' >Adicionar</button>
            </form>
        </div>
    )
}

export default AddService