/* eslint-disable react-hooks/set-state-in-effect */
import SearchBar from '../../components/SearchBar/SearchBar'
import './ListProducts.css'
import somIcon from '../../assets/iconSom.png'
import { useState, useEffect } from 'react';
import { listProducts, productDelete } from '../../services/productService';
import ActionButtons from '../../components/ActionButtons/ActionButtons'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function ListProducts() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const data = await listProducts();
            setProducts(data);
        } catch (error) {
            console.error(error);

        }
    }

    const handleDelete = async (id) => {
        try {
            await productDelete(id);
            fetchProducts();
            toast.success("Produto deletado com sucesso");

        } catch (error) {
            toast.error("Erro ao deletar produto");
            console.error(error);

        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

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
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className="product-list__product">
                                            <img
                                                className="product-list__product-image"
                                                src={somIcon}
                                                alt="Produto"
                                            />
                                            <span className="product-list__product-name">
                                                {product.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td>R$ {product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <ActionButtons
                                            onEdit={() => navigate("/dashboard/addproduct", { state: product })}
                                            onDelete={() => handleDelete(product.id)} />
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    )
}

export default ListProducts