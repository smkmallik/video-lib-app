import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import { useHistory } from '../../contexts/history-context';
import { useLike } from '../../contexts/like-context';
import { useWatchLater } from '../../contexts/watch-later-context';
import './Navbar.css';

const Navbar = () => {

    const {user, setUser} = useAuth();
    const navigate = useNavigate();
    const { like, setLike } = useLike()
    const { watchLater, setWatchLater } = useWatchLater();
    const { setHistory } = useHistory();

    const logoutHandler = () => {
        setUser({ token: null });
        setLike({ like: [] });
        setWatchLater({ watchLater: [] });
        setHistory({history: []});
        navigate("/");
    }

    return (
        <div>
            <nav className='nav-container'>
                <Link to='/'>
                    <div className='nav-logo'>
                        Video Lib App
                    </div>
                </Link>
                { user.token === null ? (
                    <Link to='/login'>
                        <button className='login-btn'>
                            Login
                        </button>
                    </Link> ) : (
                        <button
                            onClick={logoutHandler}
                            className='login-btn'
                        >
                            Logout
                        </button>
                    )
                }
            </nav>
        </div>
    )
}

export { Navbar };