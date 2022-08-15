import './Card.css'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Card2({ item }) {
  return (
    <div>
      <div className='parent'>
        <div className='card-container'>
          <div className='card-img-container'>
            <img className='card-img' src={item.cardImg} alt='cricket-ball' />
          </div>
          <div className='card-sub-container'>
            <img src={item.cardImg} className='avatar-img'></img>
            <div className='card-title'> {item.cardTitle} </div>
            {/* <FaIcons.FaThumbsUp onClick={likeHandler} className="icons sidebar-icons" /> */}
            <AccessTimeIcon className='icons sidebar-icons' />
            <CreateNewFolderIcon className='icons sidebar-icons' />
          </div>
          <div className='card-sub-container2'>
            <div className='card-channel-name'> {item.cardOwner} </div>
            <CheckCircleIcon className='icons sidebar-icons' />
          </div>
          <div className='card-sub-container3'>{item.description}</div>
        </div>
      </div>
    </div>
  )
}
