import ActionButtons from '../../components/ActionButtons/ActionButtons'
import './Orders.css'
import lupeIcon from '../../assets/lupa-icon.png'

function Orders() {
    return (
        <div className='orders'>
            <h1 className='orders__title'>Pedidos</h1>
            <p className='orders__description'>
                Aqui você consegue acessar todos os pedidos feitos.
            </p>

            <div className='orders__table-container'>
                <table className='orders__table'>
                    <thead className='orders__table-head'>
                        <tr className='orders__table-row'>
                            <th className='orders__table-header'>Número</th>
                            <th className='orders__table-header'>Cliente</th>
                            <th className='orders__table-header'>Data</th>
                            <th className='orders__table-header'>Status</th>
                            <th className='orders__table-header'>Valor</th>
                            <th className='orders__table-header'>Ações</th>
                        </tr>
                    </thead>

                    <tbody className='orders__table-body'>
                        <tr className='orders__table-row'>
                            <td className='orders__table-data'>#1</td>
                            <td className='orders__table-data'>Wilian</td>
                            <td className='orders__table-data'>21/02/2021</td>
                            <td className='orders__table-data orders__table-data--pending'>
                                Pendente
                            </td>
                            <td className='orders__table-data'>450.00</td>
                            <td className='orders__table-data'>
                                <div className='actions'>
                                    <img title="Ver detalhes" className='actions__icon' src={lupeIcon} alt="" />
                                    <ActionButtons />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders