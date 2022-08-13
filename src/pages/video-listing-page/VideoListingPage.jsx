import { Navbar, Sidebar, VideoListingBox } from '../../components';
import './VideoListingPage.css';

const VideoListingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='video-container'>
        <Sidebar />
        <VideoListingBox />
      </div>
    </div>
  )
}

export { VideoListingPage };