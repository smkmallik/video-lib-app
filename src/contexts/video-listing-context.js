import { useEffect, useContext, createContext, useState } from "react";
import axios from 'axios';

const CreateVideo = createContext();

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([])  

  useEffect(() => {
    (async () => {
      const videoDataResponse = await axios.get('/api/videos')
      if (videoDataResponse.status === 200) {
        setVideoList(videoDataResponse.data.videos)
      }
    })()
  }, [])

  return (
    <CreateVideo.Provider value={{ videoList, setVideoList }}>
      {children}
    </CreateVideo.Provider>
  )
}

const useVideoList = () => useContext(CreateVideo);

const useSingleVideo = (videoId) => {
    const {videoList} = useVideoList();
    return videoList.find((item) => item._id === videoId);
}
export { VideoProvider, useVideoList, useSingleVideo};