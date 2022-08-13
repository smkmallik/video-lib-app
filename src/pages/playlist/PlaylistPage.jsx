import { Navbar, Playlistbox, Sidebar } from '../../components';
import './PlaylistPage.css';

const PlaylistPage = () => {
  return (
    <div>
      <Navbar />
      <div className='video-container'>
        <Sidebar />
        <Playlistbox />
      </div>
    </div>
  )
}

export { PlaylistPage };