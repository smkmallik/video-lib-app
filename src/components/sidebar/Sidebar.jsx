import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import QueueIcon from '@mui/icons-material/Queue'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import HistoryIcon from '@mui/icons-material/History'

const Sidebar = () => {
  return (
    <div>
      <div className='sidebar-container'>
        <Link to='/'>
          <div className='sidebar-chips'>
            <HomeIcon className='icons sidebar-icons' />
            <span className='sidebar-title'>Home</span>
          </div>
        </Link>
        <Link to='/videolisting'>
          <div className='sidebar-chips'>
            <ExploreIcon className='icons sidebar-icons' />
            <span className='sidebar-title'>Explore</span>
          </div>
        </Link>
        <Link to='/playlist'>
          <div className='sidebar-chips'>
            <QueueIcon className='icons sidebar-icons' />
            <span className='sidebar-title'>Playlist</span>
          </div>
        </Link>
        <Link to='/like'>
          <div className='sidebar-chips'>
            <ThumbUpIcon className='icons sidebar-icons' />
            <span className='sidebar-title'>Likes</span>
          </div>
        </Link>
        <Link to='/watchlater'>
          <div className='sidebar-chips'>
            <WatchLaterIcon className='icons sidebar-icons' />
            <span className='sidebar-title'>Watch later</span>
          </div>
        </Link>
        <Link to='/history'>
          <div className='sidebar-chips'>
            <HistoryIcon className='icons sidebar-icons' />
            <span className='sidebar-title'>History</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export { Sidebar };