import { Navbar, Sidebar, WatchLaterBox } from '../../components';
import './Watchlaterpage.css';

const Watchlaterpage = () => {
  return (
    <div>
      <Navbar />
      <div className='video-container'>
        <Sidebar />
        <WatchLaterBox />
      </div>
    </div>
  )
}

export { Watchlaterpage };