import UploadImage from '../../components/UploadImage/UploadImage'
import './AddProduct.css'


function AddProduct() {
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

                <div className='product-form'>

                    <div className='form-group'>
                        <label>Nome do Produto</label>
                        <input type="text" placeholder='Pneu..' />
                    </div>

                    <div className='form-group'>
                        <label>Categoria</label>
                        <select>
                            <option>Selecione uma categoria</option>
                            <option>Som</option>
                            <option>Carro</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Descrição</label>
                        <textarea placeholder='Pneu 0KM..' />
                    </div>

                    <div className='form-group'>
                        <label>Estoque</label>
                        <input type="number" placeholder='10..' />
                    </div>

                    <div className='form-group'>
                        <label>Preço</label>
                        <input type="number" placeholder='250..' />
                    </div>

                    <button className='submit-button'>Adicionar</button>

                </div>
            </div>
        </div >
    )
}

export default AddProduct