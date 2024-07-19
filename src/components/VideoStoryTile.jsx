import PropTypes from "prop-types";

function VideoStoryTile({ name, location, img, link }) {
  return (
    <a href={link}  rel="noreferrer">
      <div className="  p-3 sm:p-3">
        {img?.includes("mp4") ? (
          <video
            src={img}
            alt="placeholder"
            className="min-w-[540px] max-w-screen h-[300px] object-cover"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={img !== "" ? img : "https://via.placeholder.com/280X400"}
            alt="placeholder"
            className="w-[540px]"
          />
        )}
        <div className="  text-[#D8CAB1] Boldy  mt-2 text-[24px]">
          {name}
          <span className="ml-2  Courier Prime italic text-[#EDECE7] opacity-50 text-[20px]  ">
            {location}
          </span>
        </div>
      </div>
    </a>
  );
}

VideoStoryTile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default VideoStoryTile;