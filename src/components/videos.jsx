import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import downarrow from "../assets/images/downarrow.svg";



import useFetchData from "../customHooks/useFetchData";

import SlideShow from "./SlideShow";
import SlideShowVideoStories from "./SlideShowVideoStories";

function Videos() {
  const { videoStoriesData, fetchVideoStories } = useFetchData();

  useEffect(() => {
    fetchVideoStories();
  }, []);

  return (
    <div className="pt-10 bg-[#1c1c1c] bg-fixed h-full bg-cover ">
      <div className="flex w-full ">
        <div className="flex flex-row ml-[20%] ">
          <span className="Actonia text-white mb-auto text-[40px] sm:text-[36px] 2xl:text-[64px] mt-2 ">through</span>
          <span className="text-[#ffca00] ml-2 Boldy text-[40px] sm:text-[48px] 2xl:text-[70px] mt-4">Videos</span>
          <img src={downarrow} alt="" className="w-[2vh] ml-1 mt-5" />
        </div>
      </div>
      <SlideShowVideoStories
        photoStoriesData={videoStoriesData}
        className="text-[#D8CAB1]"
      />
      <div className="text-[16px] 2xl:text-[20px] sm:text-[16px] border-yellow-400 Boldy cursor-pointer pb-10 ml-3 rounded-lg uppercase text-white w-full justify-end flex">
        <NavLink to="/videostories#head1" className="mr-[20%]">
          <button
            type="button"
            className="border-yellow-300 px-1 py-1 border text-[20px] 2xl:h-[34px] 2xl:w-[192px] rounded-md  hover:text-black hover:bg-yellow-300 hover:border-yellow-300 transition-all ease-in duration-300"
          >
            see more videos
          </button>
        </NavLink>
      </div>
    </div>
  );
}
export default Videos;
