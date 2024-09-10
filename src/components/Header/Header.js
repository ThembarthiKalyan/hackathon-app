import logo from '../../assets/icons/logo.png';
import './Header.css';

function Header(){

    return(
        <div className='header'>
            <img src={logo} alt='logo'/>
        </div>
    )
}

export default Header;