import './Card.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../contexts/auth-context';
import { useHistory } from '../../contexts/history-context';
import axios from 'axios';

const Card2 = ({ item }) => {

    const { user } = useAuth()
    const { history, setHistory } = useHistory()

    const removeFromHistory = async () => {
      try {
        const removeFromHistoryResponse = await axios({
          method: 'delete',
          url: `/api/user/history/${item._id}`,
          headers: { authorization: user.token },
          data: { video: item },
        })
        setHistory({ history: removeFromHistoryResponse.data.history })
      } catch (error) {
        console.log(error)
      }
    }

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
              <DeleteIcon
                onClick={removeFromHistory}
                className='icons sidebar-icons'
              />
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

export { Card2 };