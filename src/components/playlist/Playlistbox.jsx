import './Playlistbox.css';

const Playlistbox = () => {
  return (
    <div>
      <div className='video-listing-container'>
        <div className='page-title'>Playlist (0) </div>
        <div className='page-video-container'>
          <div className='no-video-message'>
            There is no playlist. Please Add{' '}
          </div>
          <button className='explore-btn'>Create playlist</button>
        </div>
      </div>
    </div>
  )
}

export { Playlistbox };