import "./AddProduct.css"
import addImg from "../../assets/add-img.png"

function addProduct() {
    const imageSlots = Array.from({ length: 5 })


    return (
        <div className="add-product">
            <h1>Adicionar Produto</h1>
            <p>Aqui você pode adicionar um novo produto ao sistema. Preencha os detalhes do produto e clique em "Adicionar" para salvar.</p>
            <form className="add-product-form">

                <div className="form-layout">


                    <div className="images-grid">{imageSlots.map((_, index) => (
                        <div className="image-section" key={index}>
                            <img src={addImg} alt={`Preview ${index + 1}`} />

                            <label className="file-upload">
                                <input type="file" />
                                <span>Carregar imagem</span>
                            </label>

                            <p>SVG, PNG, JPG (Máx. 2MB)</p>
                        </div>
                    ))}
                    </div>


                    < div className="fields-section" >
                        <p>Nome do Produto</p>
                        <input type="text" placeholder="Digite aqui.." />
                        <p>Categoria</p>
                        <select>
                            <option value="">Selecione uma categoria</option>
                            <option value="acessorios">Acessórios</option>
                            <option value="pecas">Peças</option>
                            <option value="oleos">Óleos e Lubrificantes</option>
                            <option value="oleos">Som automotivo</option>
                        </select>
                        <p>Descrição</p>
                        <textarea placeholder="Digite a descrição aqui" />
                        <div className="price-stock">
                            <p>Preço</p>
                            <input type="number" placeholder="0" />
                            <p>Estoque</p>
                            <input type="number" placeholder="0" />
                        </div>
                    </div>
                </div>

                <button type="submit">Adicionar</button>

            </form>
        </div >
    )
}

export default addProduct