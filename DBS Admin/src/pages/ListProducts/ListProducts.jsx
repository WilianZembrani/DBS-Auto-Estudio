import SearchBar from '../../components/SearchBar/SearchBar'
import './ListProducts.css'
import somIcon from '../../assets/iconSom.png'
import ActionButtons from '../../components/ActionButtons/ActionButtons'

function ListProducts() {
    return (
        <div className='product-list'>
            <h1 className='product-list__title'>Listar Produtos</h1>
            <p className='product-list__description'>
                Aqui você pode gerenciar e visualizar todos os produtos disponíveis na loja.
            </p>

            <div className='product-list__content'>

                <div className='product-list__filters'>
                    <SearchBar />

                    <div className='product-list__filter-actions'>
                        <select className='product-list__select'>
                            <option>Filtrar por categoria</option>
                            <option>Automovel</option>
                            <option>Produtos</option>
                            <option>Limpeza</option>
                        </select>

                        <button className='product-list__clear-btn'>
                            Limpar filtros
                        </button>
                    </div>
                </div>

                <div className='product-list__table-container'>
                    <table className='product-list__table'>
                        <thead>
                            <tr>
                                <th>
                                    <div className='product-list__table-name'>
                                        <span>Produto</span>
                                    </div>
                                </th>
                                <th>Preço</th>
                                <th>Categoria</th>
                                <th>Estoque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <div className="product-list__product">
                                    <img
                                        className="product-list__product-image"
                                        src={somIcon}
                                        alt="Caixa de som"
                                    />
                                    <span className="product-list__product-name">
                                        Caixa de som
                                    </span>
                                </div>
                                <td>250</td>
                                <td>Som</td>
                                <td>5</td>
                                <td><ActionButtons /></td>
                            </tr>
                            <tr>
                                <div className="product-list__product">
                                    <img
                                        className="product-list__product-image"
                                        src={somIcon}
                                        alt="Caixa de som"
                                    />
                                    <span className="product-list__product-name">
                                        Caixa de som
                                    </span>
                                </div>
                                <td>250</td>
                                <td>Som</td>
                                <td>5</td>
                                <td><ActionButtons /></td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    )
}

export default ListProducts