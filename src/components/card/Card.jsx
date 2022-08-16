import './Card.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useLike } from '../../contexts/like-context';
import { useAuth } from '../../contexts/auth-context';
import { useWatchLater } from '../../contexts/watch-later-context';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useHistory } from '../../contexts/history-context';

const Card = (props) => {
    const {item, isLike, isWatchLater} = props;
    const {like, setLike} = useLike();
    const {user} = useAuth();
    const { watchLater, setWatchLater } = useWatchLater();
    const { history, setHistory } = useHistory();
    const navigate = useNavigate();

    useEffect(() => {
      user.token
        ? (async () => {
            try {
              const responseFromServer = await axios.get(
                '/api/user/watchlater',
                {
                  headers: { authorization: user.token },
                }
              )

              if (responseFromServer.status === 200) {
                setWatchLater({
                  watchLater: responseFromServer.data.watchlater,
                })
              }
            } catch (err) {
              console.error('error', err)
            }
          })()
        : setWatchLater({ watchLater: [] })
    }, [])

    const likeHandler = async () => {
      // console.log(like)

      try {
        const likeResponse = await axios({
          method: 'post',
          url: '/api/user/likes',
          headers: { authorization: user.token },
          data: { video: item },
        })
        setLike({ like: likeResponse.data.likes })

        // console.log(likeResponse.data.likes)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        user.token
            ? (async() => {
                try {
                    const responsefromServerLike = await axios.get("/api/user/likes", {
                        headers: {authorization: user.token},
                    });

                    if(responsefromServerLike.status === 200) {
                        setLike({ like: responsefromServerLike.data.likes});
                    }
                } catch(error) {
                    console.error("error", error);
                }
            })()
            : setLike({ like: [] });
    }, []);

    useEffect(() => {
      user.token
        ? (async () => {
            try {
              const responseFromServerHistory = await axios.get(
                '/api/user/history',
                {
                  headers: { authorization: user.token },
                }
              )

              if (responseFromServerHistory.status === 200) {
                setHistory({ history: responseFromServerHistory.data.history })
              }
            } catch (err) {
              console.error('error', err)
            }
          })()
        : setHistory({ history: [] })
    }, [])

    const moveToHistoryHandler = async () => {
      try {
        const moveToHistoryResponse = await axios({
          method: 'post',
          url: '/api/user/history',
          headers: { authorization: user.token },
          data: { video: item },
        })
        setHistory({ history: moveToHistoryResponse.data.history })
      } catch (error) {
        console.log(error)
      }
      navigate(`/videolisting/${item._id}`)
    }

    const removeLikeHandler = async () => {
      try {
        const removeLikeResponse = await axios({
          method: 'delete',
          url: `/api/user/likes/${item._id}`,
          headers: { authorization: user.token },
          data: { video: item },
        })

        setLike({ like: removeLikeResponse.data.likes })
      } catch (error) {
        console.log(error)
      }
    };

    const moveToWatchLaterHandler = async () => {
      try {
        const watchLaterData = await axios({
          method: 'post',
          url: '/api/user/watchlater',
          headers: { authorization: user.token },
          data: { video: item },
        })
        setWatchLater({ watchLater: watchLaterData.data.watchlater })
      } catch (error) {
        console.log(error)
      }
    }

    const removeFromWatchLaterHandler = async () => {
      try {
        const removeWatchLaterResponse = await axios({
          method: 'delete',
          url: `/api/user/watchlater/${item._id}`,
          headers: { authorization: user.token },
          data: { video: item },
        })

        setWatchLater({ watchLater: removeWatchLaterResponse.data.watchlater })
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <div>
        <div className='parent'>
          <div className='card-container'>
            <div className='card-img-container'>
              <img
                onClick={moveToHistoryHandler}
                className='card-img' 
                src={item.cardImg} alt='cricket-ball' />
            </div>
            <div className='card-sub-container'>
              <img className='avatar-img' src={item.cardImg} alt='avatar-img' />
              <div className='card-title'>{item.cardTitle}</div>
              {isLike ? (
                <ThumbDownIcon
                  className='icons sidebar-icons'
                  onClick={removeLikeHandler}
                />
              ) : (
                <ThumbUpIcon
                  className='icon-outline-blue'
                  onClick={likeHandler}
                />
              )}

              {
                isWatchLater ? (
                    <AccessTimeIcon 
                        className='icons sidebar-icons'
                        onClick={removeFromWatchLaterHandler}
                    />
                ) : (
                    <WatchLaterIcon
                        className='icon-outline-blue'
                        onClick={moveToWatchLaterHandler}
                    />
                )
              }
              <CreateNewFolderIcon className='icons sidebar-icons' />
            </div>
            <div className='card-sub-container2'>
              <div className='card-channel-name'>{item.cardOwner}</div>
              <CheckCircleIcon className='icons sidebar-icons' />
            </div>
            <div className='card-sub-container3'>{item.description}</div>
          </div>
        </div>
      </div>
    )
}

export { Card }