/* eslint-disable react-hooks/set-state-in-effect */
import UploadImage from '../../components/UploadImage/UploadImage'
import './AddProduct.css'
import { listCategories } from '../../services/categoryService'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { createProduct } from '../../services/productService';


function AddProduct() {


    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');



    const loadCategories = async () => {
        try {
            const data = await listCategories();
            setCategories(data);
        } catch (error) {
            console.error("Erro ao carregar categorias:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !categoryId || !description || !stock || !price) {
            toast.warn("Preencha todos os campos");
            return;
        }


        try {
            await createProduct({
                name,
                category_id: Number(categoryId),
                description,
                stock: Number(stock),
                price: Number(price)
            });



            toast.success("Produto criado com sucesso!");

        } catch (error) {
            toast.error("Erro ao criar produto");
            console.error(error);
        }
        setName('');
        setCategoryId('');
        setDescription('');
        setStock('');
        setPrice('');

    }



    useEffect(() => {
        loadCategories();
    }, [])


    return (
        <div className='product-cnt'>
            <h1>Adicionar Produto</h1>
            <p>Aqui você pode adicionar um novo produto a loja. Preencha os detalhes do Produto e clique em 'Adicionar' para salvar.</p>

            <div className='cnt-0'>

                <div className='up-box-1'>
                    <h2>Upload de Imagem</h2>

                    <div className='up-box-2'>
                        {[...Array(4)].map((_, index) => (
                            <UploadImage key={index} />
                        ))}
                    </div>
                    <p>SVG, PNG, JPG (máx 4 imagens)</p>
                </div>

                <form onSubmit={handleSubmit} className='product-form'>

                    <div className='form-group'>
                        <label >Nome do Produto</label>
                        <input type="text" placeholder='Pneu..' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label>Categoria</label>
                        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                            <option>Selecione uma categoria</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Descrição</label>
                        <textarea placeholder='Pneu 0KM..' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label>Estoque</label>
                        <input type="number" placeholder='10..' value={stock} onChange={(e) => setStock(e.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label>Preço</label>
                        <input type="number" placeholder='250..' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <button className='submit-button' type='submit'>
                        Adicionar
                    </button>

                </form>
            </div>
        </div >
    )
}

export default AddProduct