import { v4 as uuidv4 } from "uuid";
import PhotoStoryTile from "./PhotoStoryTile";
import VideoStoryTile from "./VideoStoryTile";

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

function SlideShowVideoStories({ photoStoriesData, className }) {
  return (
    <div className=" justify-start sm:justify-center text-[#211E1D] flex-col  flex sm:flex-row Boldy  w-screen">
      {photoStoriesData.slice(0, 3)?.map((image, index) => (
        <div key={uuidv4()} className="">
          {console.log("video", image)}
          <VideoStoryTile
            name={`${image?.firstPersonName} + ${image?.secondPersonName}`}
            location={image?.state}
            img={image?.image}
            className={className}
            link={`videostories/${image?.id}`}
          />
        </div>
      ))}
    </div>
  );
}

export default SlideShowVideoStories;
