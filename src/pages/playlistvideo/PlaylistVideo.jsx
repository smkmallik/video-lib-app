import { Navbar } from "../../components"
import DeleteIcon from '@mui/icons-material/Delete'
import { users } from "../../backend/db/users"
import { Link, useParams } from "react-router-dom"
import { usePlaylist } from "../../contexts/playlist-context"
import { useAuth } from "../../contexts/auth-context"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import axios from 'axios';
import './PlaylistVideo.css';

const PlaylistVideo = () => {

    const { playlistId } = useParams();
    const { playlistArray, setPlaylistArray } = usePlaylist();
    const { auth } = useAuth();
    const playlist = playlistArray.playlistData.filter((element) => element._id === playlistId);

    const deleteParticularVideo = async(videoId, playlistId) => {
        const deleteParticularVideoResponse = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
            headers: { authorization: users.token}
        });

        setPlaylistArray({
            playlistData: playlistArray.playlistData.map((el) => {
                if(el._id === deleteParticularVideoResponse.data.playlist) {
                    return deleteParticularVideoResponse.data.playlist;
                }
                return el;
            })
        })
    }


    return (
      <div>
        <Navbar />
        <div className='nav-margin-top'>
          <Link className='back-btn' to='/playlist'>
            Back to playlist
          </Link>
        </div>
        <div className='parent flex-display'>
          {playlist[0].videos.map((item) => (
            <div className='card-container'>
              <div className='card-img-container'>
                <img
                  className='card-img'
                  src={item.cardImg}
                  alt='cricket-ball'
                />
              </div>
              <div className='card-sub-container'>
                <img
                  className='avatar-img'
                  src={item.cardImg}
                  alt='avatar-img'
                />
                <div className='card-title'>{item.cardTitle}</div>
                <DeleteIcon
                  onClick={() => deleteParticularVideo(item._id, playlistId)}
                  className='icons sidebar-icons'
                />
              </div>
              <div className='card-sub-container2'>
                <div className='card-channel-name'> {item.cardOwner} </div>
                <CheckCircleIcon
                    className="icons sidebar-icons"
                />
              </div>
              <div className="card-sub-container3">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export { PlaylistVideo }