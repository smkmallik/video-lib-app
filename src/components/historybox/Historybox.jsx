import { useAuth } from '../../contexts/auth-context';
import { useHistory } from '../../contexts/history-context';
import './Historybox.css';
import axios from 'axios';
import {Card2} from '../card/Card2';

const Historybox = ({item}) => {

    const { history, setHistory } = useHistory()
    const { user } = useAuth()

    const clearHistoryHandler = async () => {
      try {
        const clearHistoryResponse = await axios({
          method: 'DELETE',
          data: { video: item },
          url: `/api/user/history/all`,
          headers: { authorization: user.token },
        })
        setHistory({ history: clearHistoryResponse.data.history })
      } catch (error) {
        console.log(error)
      }
    }


    return (
      <div>
        <div className='page-title'>
          History video ( {history.history.length} ){' '}
        </div>
        <div
          style={{ cursor: 'pointer' }}
          onClick={clearHistoryHandler}
          className='page-title'
        >
          {' '}
          Clear History{' '}
        </div>

        <div className='video-listing-container'>
          {history.history.map((item) => (
            <Card2 key={item._id} item={item} />
          ))}
        </div>
      </div>
    )
}

export { Historybox }