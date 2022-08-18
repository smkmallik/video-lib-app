import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import './HeroHeader.css';


const HeroHeader = () => {

    const { user } = useAuth();

    const watchNowHandler = () => {
        console.log('clicked');
    }


    return (
      <div>
        <div className='hero-container'>
          <h2 className='hero-header-title'>Video library App</h2>
          <h1 className='logo-name'>Video Streaming Player</h1>
          <p className='header-description'>
            Video Lib App is a platform for free movie watching
          </p>
          {user.token ? (
            <Link to='/videolisting'>
              {' '}
              <button className='watch-now-btn'>Watch now</button>
            </Link>
          ) : (
            <Link to='/login'>
              {' '}
              <button className='watch-now-btn'>Watch now</button>
            </Link>
          )}
        </div>
      </div>
    )
}

export { HeroHeader }