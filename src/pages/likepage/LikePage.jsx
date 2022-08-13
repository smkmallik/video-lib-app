import { LikeBox, Navbar, Sidebar } from '../../components';
import './LikePage.css';

const LikePage = () => {
  return (
    <div>
      <Navbar />
      <div className='video-container'>
        <Sidebar />
        <LikeBox />
      </div>
    </div>
  )
}

export { LikePage };