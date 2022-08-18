import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/auth-context";
import { usePlaylist } from "../../contexts/playlist-context";
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import landingpage from '../../assets/MLP.jpg';

const PlaylistCard = ({playlistInfo}) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { playlistArray, setPlaylistArray } = usePlaylist();

    const deletePlaylistHandler = async () => {
      const deletePlaylistResponse = await axios.delete(
        `/api/user/playlists/${playlistInfo._id}`,
        { headers: { authorization: user.token } }
      )

      console.log(deletePlaylistResponse.data.playlists, 'delete response')
      setPlaylistArray({
        playlistData: [...deletePlaylistResponse.data.playlists],
      })
    }

    const newHandler = () => {
      navigate(`/playlist/${playlistInfo._id}`)
    }

    return (
      <div>
        <div className='parent'>
          <div className='card-container'>
            <div className='card-img-container'>
              <img
                onClick={newHandler}
                className='card-img'
                src={landingpage}
                alt='cricket-ball'
              />
            </div>
            <div
              style={{ display: 'flex', justifyContent: 'space-between' }}
              className='delete-title-container'
            >
              <div className='card-sub-container3'> {playlistInfo.title} </div>
              <div>
                <DeleteIcon
                  onClick={deletePlaylistHandler}
                  className='icons sidebar-icons'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export { PlaylistCard };