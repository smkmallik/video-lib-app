import { Navbar, Sidebar } from "../../components"


const SingleVideoPage = () => {
  return (
    <div>
      <Navbar />
      <div className='video-container'>
        <SideBar />
        <SingleVideoBox />
      </div>
    </div>
  )
}

export { SingleVideoPage }