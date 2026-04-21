import './UploadImage.css'
import addIcon from '../../assets/add-img.png'

function UploadImage({ onChange, image }) {

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onChange(file);
        }
    };

    return (
        <label className='upload-image'>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
            />

            <img
                src={image ? URL.createObjectURL(image) : addIcon}
                alt="Preview"
                className={image ? "preview-img" : "upload-icon"}
            />
        </label>
    )
}

export default UploadImage;