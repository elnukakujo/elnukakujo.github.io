import HeroPoster from '../assets/img/heroPoster.png';
import SocialsBar from '../components/SocialsBar/SocialsBar';

import HeroSection from '../pages/HomePage/HeroSection/HeroSection';

function HeroLayout() {
  return (
    <div className="w-screen min-w-sm -mt-16 h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HeroPoster})` }}> 
        <HeroSection />

    </div>
  );
}

export default HeroLayout;