import './ListProduct.css'
import iconProduct from "../../assets/iconSom.png"
import trashIcon from "../../assets/trash-icon.png"
import editIcon from "../../assets/edit-icon.png"

function ListProduct() {
    return (
        <div className="list-product">
            <p>Todos os produtos</p>

            <div className="list">
                <div className="table-wrapper">
                    <table className='list-table'>

                        <thead className="list-head">
                            <tr>
                                <th>Imagem</th>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Remover</th>
                            </tr>
                        </thead>

                        <tbody className="list-body">
                            <tr>
                                <td><img className='product-icon' src={iconProduct} alt="Produto" /></td>
                                <td>Caixa Som Automotivo Radio Bluetooth</td>
                                <td>Som automotivo</td>
                                <td>
                                    Especificações do Driver:
                                    <br />• Driver 120w
                                    <br />• 8 Ohms
                                    <br />• Conjunto Magnético 102x10mm
                                </td>
                                <td>R$922,36</td>
                                <td className='list-actions'>
                                    <img src={editIcon} alt="Editar" />
                                    <img src={trashIcon} alt="Excluir" />
                                </td>
                            </tr>
                            <tr>
                                <td><img className='product-icon' src={iconProduct} alt="Produto" /></td>
                                <td>Caixa Som Automotivo Radio Bluetooth</td>
                                <td>Som automotivo</td>
                                <td>
                                    Especificações do Driver:
                                    <br />• Driver 120w
                                    <br />• 8 Ohms
                                    <br />• Conjunto Magnético 102x10mm
                                </td>
                                <td>R$922,36</td>
                                <td className='list-actions'>
                                    <img src={editIcon} alt="Editar" />
                                    <img src={trashIcon} alt="Excluir" />
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div >
    )
}

export default ListProduct