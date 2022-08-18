import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HistoryPage, LandingPage, LikePage, LoginPage, PlaylistPage, PlaylistVideo, Signuppage, SingleVideoPage, VideoListingPage, Watchlaterpage } from "./pages";
import Mockman from 'mockman-js';


function MockAPI() {
  return (
    <div className='MockAPI'>
      <Mockman />
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/videolisting' element={<VideoListingPage />} />
        <Route path='/like' element={<LikePage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/playlist' element={<PlaylistPage />} />
        <Route path='/watchlater' element={<Watchlaterpage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signuppage />} />
        <Route 
          path='/videolisting/:videoId'
          element={<SingleVideoPage />}
        />
        <Route path="/playlist/:playlistId" element={<PlaylistVideo />} />
        <Route path='/mockman' element={<MockAPI />} />
      </Routes>
    </div>
  )
}

export default App;
