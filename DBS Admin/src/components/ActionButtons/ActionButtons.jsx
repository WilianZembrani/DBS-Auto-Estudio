import './ActionButtons.css'
import trashIcon from '../../assets/trash-icon.png'
import editicon from '../../assets/edit-icon.png'

function ActionButtons() {
    return (

        <div className='product-list__actions'>
            <img
                title="Editar status"
                className='product-list__icon product-list__icon--edit'
                src={editicon}
                alt="Botão de editar"
            />
            <img
                title="Excluir"
                className='product-list__icon product-list__icon--delete'
                src={trashIcon}
                alt="Botão de excluir"
            />
        </div>


    )
}

export default ActionButtons