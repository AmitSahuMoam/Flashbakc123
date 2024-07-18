import PropTypes from "prop-types";

function PhotoStoryTile({ name, location, img, nameClass, locationClass, link }) {
  const isVideo = img?.includes("mp4");

  return (
    <a href={link}  rel="noreferrer">
      <div className="mt-5 lg:max-w-[100vw]">
        {isVideo ? (
          <div className="aspect-video">
            <video
              src={img}
              alt="placeholder"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          </div>
        ) : (
          <img
            src={img !== "" ? img : "https://via.placeholder.com/280X400"}
            alt="placeholder"
            className="w-full h-auto lg:min-w-[360px] lg:h-[460px] object-cover"
          />
        )}
        <div className="Boldy uppercase mt-4 text-[24px] text-[#1C1C1C]">
          <span className={nameClass}>{name}</span>
          <span className={`ml-2 Courier Prime italic normal-case text-[20px] text-opacity-40 ${locationClass}`}>
            {location}
          </span>
        </div>
      </div>
    </a>
  );
}

PhotoStoryTile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PhotoStoryTile;
