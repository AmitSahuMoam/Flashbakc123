import { useEffect } from 'react';

import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import Sliders from '../components/Slider';
import Videos from '../components/videos';
import Thoughts from '../components/Thoughts';

function HomePage() {
  useEffect(() => {
    document.title = 'Flashback';
  }, []);

  return (
    <div className="screen-home overflow-x-hidden">
      <Hero />
      <FeaturedCollection />
      <Sliders />
      <Videos />
     <Thoughts/>
    </div>
  );
}
export default HomePage;
