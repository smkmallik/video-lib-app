import { Historybox, Navbar, Sidebar } from '../../components';
import './HistoryPage.css';


const HistoryPage = () => {
  return (
    <div>
      <Navbar />
      <div className='video-container'>
        <Sidebar />
        <Historybox />
      </div>
    </div>
  )
}

export { HistoryPage };