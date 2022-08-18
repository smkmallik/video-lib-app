import { useState } from 'react';
import { usePlaylist } from '../../contexts/playlist-context';
import './Playlistbox.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { PlaylistCard } from '../card/PlaylistCard';

const Playlistbox = () => {

    const [createPlaylistModal, setCreatePlaylistModal] = useState(false);

    const [playlistName, setPlaylistName] = useState({ playlistName: ""});

    const playlistHandler = () => {
        setCreatePlaylistModal(false);
    }

    const { playlistArray } = usePlaylist()

  return (
    <div>
      <div className='video-listing-container'>
        {playlistArray.playlistData?.map((playlist) => (
          <PlaylistCard playlistInfo={playlist} />
        ))}
      </div>
    </div>
  )
}

export { Playlistbox };