import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import uparrow from "../assets/images/uparrow.svg";
import SlideShow from "./SlideShow";
import useFetchData from "../customHooks/useFetchData";

function Slider() {
  const { fetchPhotoStories, photoStoriesData } = useFetchData();

  useEffect(() => {
    fetchPhotoStories();
  }, []);

  return (
      <div className="sm:pt-[50px] pt 2xl:pt-[125px] bg-[#EDECE7] p-5 justify-self-end  w-full 2xl:h-[954px]  overflow-hidden ">
        <div className="flex flex-col sm:flex-row  items-start sm:items-center justify-center ">
        <div className="flex flex-row text-4xl justify-end mr-3 ">
            <div className="flex flex-row">
              <span className="Actonia text-[#1C1C1C] mb-auto text-[30px] sm:text-[36px] 2xl:text-[64px] mr-1">
                our
              </span>
            </div>
            <span className="text-[#1C1C1C] Boldy text-[30px] sm:text-[48px] 2xl:text-[70px] mt-4 pl-2">Stories</span>
          </div>
          <div className="Courier Prime text-[16px] 2xl:text-[20px] sm:text-[16px] font-[#4A4A4A] max-w-4xl ">
            are different and every couple is unique. Your moments become your
            life story and live from one generation to the next. Here are your
            stories through our particular way of seeing it
          </div>
        </div>
      <div className="flex justify-center items-center 2xl:h-[590px]">
        <SlideShow photoStoriesData={photoStoriesData} className="text-black" />
      </div>
      <div className="flex sm:flex-row justify-end flex-col mr-[15%]">
        <div className="flex flex-row text-4xl pt-4 justify-end">
          <div className="flex flex-row">
            <img src={uparrow} alt="" className="w-[2vh] mb-3 mr-1" />{" "}
            <span className="Actonia text-black mb-auto text-[40px] sm:text-[36px] 2xl:text-[64px] mr-1">
              through
            </span>
          </div>
          <span className="text-[#ffca00] Boldy text-[40px] sm:text-[48px] 2xl:text-[70px] mt-4">Photos</span>
        </div>
        <div className="text-[16px] sm:text-[16px] 2xl:text-[20px] px-3 border-yellow-400 Boldy cursor-pointer ml-6 rounded-lg uppercase text-black text-right mt-4">
          <NavLink to="/photostories#head">
            <button
              type="button"
              className="border-yellow-300 px-2 py-1 border text-[20px] 2xl:h-[34px] 2xl:w-[192px] rounded-md  hover:text-black hover:bg-yellow-300 hover:border-yellow-300 transition-all ease-in duration-300 "
            >
              see more stories        
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Slider;