import './SearchBar.css'
import lupeIcon from '../../assets/lupa-icon.png'


function SearchBar() {
    return (
        <div className='search-container'>
            <img className="icon" src={lupeIcon} alt="lupa" />
            <input type="text" placeholder='Pesquisar..' />
        </div>
    )
}


export default SearchBar