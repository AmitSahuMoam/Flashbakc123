import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../sass/home_page/_hero.scss'

function BigSlider() {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      autoPlay
      infiniteLoop
    >
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/8b519908577c79c5b311f73514bf3d9535b22b04-1200x800.jpg"
          alt="Slide 1"
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/d491d571773969fe6f3a0c903a003ef6ddb22c72-5152x7728.jpg"
          alt="Slide 2"
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/c05345c4c7bc9eb1af1582d12eb8d5260284b4ef-5152x7728.jpg"
          alt="Slide 3"
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/dfe050aa2ba77ac9ed7d67d43b62594668250ffa-7728x5152.jpg"
          alt="Slide 4"
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/c133c1a645fc31ccbd4ce71dc0a9a8885376fde3-7728x5152.jpg"
          alt="Slide 5"
          className="w-full h-[80vh] object-cover"
        />
      </div>
    </Carousel>
  );
}

export default BigSlider;