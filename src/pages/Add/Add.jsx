import "./Add.css"

function Add() {
    return (
        <div className="Add">
            <form className="add-form">
                <h1 className="title">Cadastre um novo serviço</h1>
                <div>
                    <label htmlFor="serviceName">Nome do Serviço: </label>
                    <input placeholder="Digite aqui" type="text" id="serviceName" name="serviceName" required />
                </div>
                <div>
                    <label htmlFor="serviceCategory">Categoria: </label>
                    <select id="serviceCategory" name="serviceCategory" required>
                        <option value="">Selecione uma categoria</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="reparo">Reparo</option>
                        <option value="limpeza">Limpeza</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="serviceDescription">Descrição do Serviço:</label>
                    <textarea placeholder="Digite a descrição aqui" id="serviceDescription" name="serviceDescription" required></textarea>
                </div>
                <div>
                    <label htmlFor="servicePrice">Preço do Serviço:</label>
                    <input placeholder="0" type="number" id="servicePrice" name="servicePrice" required />
                </div>
                <button className="btn-add" type="submit">Adicionar</button>
            </form >
        </div >
    )
}

export default Add