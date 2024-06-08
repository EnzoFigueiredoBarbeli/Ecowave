
import { Link } from 'react-router-dom';
import '../sass/estilo.scss'

function Nav() {
    return(
        <>
        <nav>
            <ul className='navbar'>
                <Link to="/DashBoard" className='text'><li>DashBoard</li></Link>
                <Link to="/" className='text'><li>Home</li></Link>
                <Link to="/Login" className='text'><li>Login</li></Link>
                <Link to='/contato' className='text'><li>Contato</li></Link>
            </ul>
        </nav>
        </>
    )
}
export default Nav;