import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CollapseIcon from '@mui/icons-material/ExpandLess';

function TestimonialTile({ name, title, content, img }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mx-5 my-2 leading-normal">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <img
          src={img !== "" ? img : "https://via.placeholder.com/1024x576"}
          alt="placeholder"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="Courier text-[#1C1C1C] text-[16px] font-bold mt-2">
          {title}
        </p>
        <p className="Courier text-[#4A4A4A] text-[16px] mt-2 leading-normal">
          {isExpanded ? content : `${content.substring(0, 200)}...`}
        </p>
      </div>
      <div className="w-full text-2xl border cursor-pointer mb-2 ml-[-10px] mt-2 rounded-lg Boldy text-black Courier Prime">
        <div className="border w-fit h-min rounded-lg">
          <Button
            sx={{ color: '#4A4A4A', textTransform: 'none' }}
            startIcon={isExpanded ? <CollapseIcon /> : <AddOutlinedIcon />}
            onClick={toggleExpand}
            className="Courier Prime"
          >
            {isExpanded ? 'Collapse' : 'Read More'}
          </Button>
        </div>
      </div>
      <div className="text-black uppercase Boldy text-lg mt-5 mb-0">
        {name}
      </div>
      <hr className="border-black mt-5" />
    </div>
  );
}

TestimonialTile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default TestimonialTile;
