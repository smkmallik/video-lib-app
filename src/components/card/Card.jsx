import './Card.css';
import cricketBall from '../../assets/cricket-ball.jpg';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const Card = () => {
  return (
    <div>
      <div className='parent'>
        <div className='card-container'>
          <div className='card-img-container'>
            <img className='card-img' src={cricketBall} alt='cricket-ball' />
          </div>
          <div className='card-sub-container'>
            <img className='avatar-img' src={cricketBall} alt='avatar-img' /> 
            <div className='card-title'>This is cricket ball</div>
            <ThumbUpIcon className='icons sidebar-icons' />
            <AccessTimeIcon className='icons sidebar-icons' />
            <CreateNewFolderIcon className='icons sidebar-icons' />
          </div>
          <div className='card-sub-container2'>
            <div className='card-channel-name'>Soumik Mallik</div>
            <CheckCircleIcon className='icons sidebar-icons' />
          </div>
          <div className='card-sub-container3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ducimus
            eius possimus odit eos minima sequi earum alias aspernatur natus.
          </div>
        </div>
      </div>
    </div>
  )
}

export { Card }