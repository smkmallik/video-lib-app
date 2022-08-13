import './LandingPage.css';
import backgroundImg from '../../assets/MLP.jpg';
import { HeroHeader, Navbar } from '../../components';

const LandingPage = () => {
  return (
    <div>
        <div className='home-container'>
            <img 
                src={backgroundImg} 
                alt="landing"
                className='responsive-images landing-image'
            />
            <div className='landing-container'>
                <Navbar />
                <HeroHeader />
            </div>
        </div>
    </div>
  )
}

export { LandingPage };