import { Navbar, Sidebar } from "../../components"
import { SingleVideoBox } from "../../components/singlevideobox/SingleVideoBox"

const SingleVideoPage = () => {
  return (
    <div>
      <Navbar />
      <div className='video-container'>
        <Sidebar />
        <SingleVideoBox />
      </div>
    </div>
  )
}

export { SingleVideoPage }