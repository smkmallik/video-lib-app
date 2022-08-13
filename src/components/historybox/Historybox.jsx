import './Historybox.css';

const Historybox = () => {
  return (
    <div>
      <div className='video-listing-container'>
        <div className='page-title'>History video (0) </div>
        <div className='page-video-container'>
          <div className='no-video-message'>There is no watch history</div>
        </div>
      </div>
    </div>
  )
}

export { Historybox }