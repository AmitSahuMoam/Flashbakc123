import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../sass/home_page/_hero.scss'

function BigSlider() {
  return (
    <Carousel
      swipeable
      useKeyboardArrows
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      stopPropagation={true}
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
          src="https://cdn.sanity.io/images/u8qx4arf/production/4c6106785b427548e6dc219c8e952e9d13725dc3-1200x800.jpg"
          alt="Slide 2"
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/1069f856313b8fa8e59753fbaba02a1f6bd2fed3-1200x800.jpg"
          alt="Slide 3"
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/2eb4a01b5d415e5c4a711bb95d7936c5dd5f4f72-1200x800.jpg"
          alt="Slide 4"
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div>
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/77e4a9db42e3b2517544c78d94c9f8c1d055cbcc-1200x800.jpg"
          alt="Slide 5"
          className="w-full h-[80vh] object-cover"
        />
      </div>


    </Carousel>
  );
}

export default BigSlider;