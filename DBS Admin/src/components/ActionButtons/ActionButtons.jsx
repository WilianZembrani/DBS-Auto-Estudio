import './ActionButtons.css'
import trashIcon from '../../assets/trash-icon.png'
import editicon from '../../assets/edit-icon.png'

function ActionButtons({ onDelete, onEdit }) {
    return (

        <div className='product-list__actions'>
            <img
                onClick={onEdit}
                title="Editar status"
                className='product-list__icon product-list__icon--edit'
                src={editicon}
                alt="Botão de editar"
            />
            <img
                onClick={onDelete}
                title="Excluir"
                className='product-list__icon product-list__icon--delete'
                src={trashIcon}
                alt="Botão de excluir"
            />
        </div>


    )
}

export default ActionButtons