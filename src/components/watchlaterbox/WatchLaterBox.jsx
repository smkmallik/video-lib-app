import './WatchLaterBox.css';

const WatchLaterBox = () => {
  return (
    <div>
      <div className='video-listing-container'>
        <div className='page-title'>Watch later video (0) </div>
        <div className='page-video-container'>
          <div className='no-video-message'>
            There Is No watch later Video. Please Add{' '}
          </div>
          <button className='explore-btn'>Explore</button>
        </div>
      </div>
    </div>
  )
}

export { WatchLaterBox };