import './Orders.css'
import orderIcon from "../../assets/iconSom.png"

function Orders() {
    return (
        <div>
            <p>Pedidos</p>
            <div className='order-container'>
                <img src={orderIcon} alt="" />
                <div className='order-name'>
                    <p>Caixa Som</p>
                    <p>Wilian Zembrani</p>
                    <p>Rua Tiradentes, 550,
                        Bairro ouro verde,
                        Coronel Freitas, SC, Brasil, 89840-000
                        49999179018</p>
                </div>
                <div>
                    <p>Produtos: 1</p>
                    <p>Método: Boleto</p>
                    <p>Pagamento : Pendente</p>
                    <p>Data : 03/03/2025, 11:41:39</p>
                </div>
                <p>Valor: 922,36</p>
                <select id="serviceCategory" name="serviceCategory" required>
                    <option value="">Pedido realizado</option>
                    <option value="manutencao">Preparando para envio</option>
                    <option value="reparo">Enviado</option>
                    <option value="limpeza">Saiu para entrega</option>
                    <option value="limpeza">Entregue</option>
                </select>
            </div>
        </div>
    )
}


export default Orders