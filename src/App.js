import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HistoryPage, LandingPage, LikePage, LoginPage, PlaylistPage, Signuppage, VideoListingPage, Watchlaterpage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/videolisting' element={<VideoListingPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/watchlater" element={<Watchlaterpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signuppage />}/>
      </Routes>
    </div>
  );
}

export default App;
