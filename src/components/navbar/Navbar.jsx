import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className='nav-container'>
            <Link to='/'>
                <div className='nav-logo'>
                    Video Lib App
                </div>
            </Link>
            <Link to='/login'>
                <button className='login-btn'>
                    Login
                </button>
            </Link>
        </nav>
    </div>
  )
}

export { Navbar };