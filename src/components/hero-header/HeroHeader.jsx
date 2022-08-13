import { Link } from 'react-router-dom';
import './HeroHeader.css';


const HeroHeader = () => {

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
                <Link to='/videolisting'>
                    <button 
                        onClick={watchNowHandler}
                        className='watch-now-btn'
                    >
                        Watch Now
                    </button>
                </Link>

            </div>
        </div>
    )
}

export { HeroHeader }