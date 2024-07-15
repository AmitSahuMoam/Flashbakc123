import moment from "moment/moment";
import PropTypes from "prop-types";

function BlogTile({ imageUrl, title, length, date, location, tags }) {
  // component logic here

  return (
    <div className="flex flex-col">
      <img src={imageUrl} className="w-full h-[65vh]" alt="blog-img" />
      <p className="text-white Boldy mt-3">{title}</p>
      <div className="flex flex-row">
        <div className="text-white">
          {" "}
          {length} | {moment(date).format("LL")} | {location}
        </div>
      </div>
      <div>
        <span className="text-[#D8CAB1]">Tags: {tags}</span>
      </div>
    </div>
  );
}

export default BlogTile;
BlogTile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
