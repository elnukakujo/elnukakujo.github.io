import HeroPoster from '../assets/img/heroPoster.png';

import HeroSection from '../pages/HomePage/HeroSection/HeroSection';

function HeroLayout() {
  return (
    <div className="relative w-screen min-w-sm -mt-16 h-screen overflow-hidden group">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroPoster})` }} />
      
      <div className="relative z-2 flex justify-center items-center h-full">
        <HeroSection />
      </div>
    </div>
  );
}

export default HeroLayout;