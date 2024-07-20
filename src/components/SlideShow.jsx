import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import PhotoStoryTile from "./PhotoStoryTile";

function SlideShow({ photoStoriesData, className }) {
  const scrollContainerRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const firstChild = scrollContainerRef.current.children[0];
      if (firstChild) {
        const { width } = firstChild.getBoundingClientRect();
        setImageWidth(width);
      }
    }
  }, [photoStoriesData]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -imageWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: imageWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-row items-center justify-center w-full overflow-x-hidden">
      <ArrowCircleLeftOutlinedIcon
        style={{ cursor: "pointer" }}
        className="absolute left-5 md:left-20 bottom-5 z-10"
        onClick={scrollLeft}
      />
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll no-scrollbar"
      >
        <div className="flex flex-row w-full">
          {photoStoriesData?.map((image) => (
            <div
              key={uuidv4()}
              className="flex-shrink-0 w-full sm:w-auto sm:mx-4"
            >
              <PhotoStoryTile
                name={`${image?.firstPersonName} + ${image?.secondPersonName}`}
                location={image?.state}
                img={image?.image}
                className={className}
                // link={image?.link}
                link={`photostories/${image?.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowCircleRightOutlinedIcon
        style={{ cursor: "pointer" }}
        className="absolute right-5 md:right-20 bottom-5 z-10"
        onClick={scrollRight}
      />
    </div>
  );
}

export default SlideShow;
