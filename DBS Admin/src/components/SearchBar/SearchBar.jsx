import './SearchBar.css'
import lupeIcon from '../../assets/lupa-icon.png'


function SearchBar({ value, onChange }) {
    return (
        <div className='search-container'>
            <img className="icon" src={lupeIcon} alt="lupa" />
            <input
                type="text"
                placeholder='Pesquisar..'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBar