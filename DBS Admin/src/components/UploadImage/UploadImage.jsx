import './UploadImage.css'
import addIcon from '../../assets/add-img.png'


function UploadImage() {
    return (
        <div className='upload-image'>
            <img src={addIcon} alt="Adicionar imagem" />
        </div>
    )
}

export default UploadImage