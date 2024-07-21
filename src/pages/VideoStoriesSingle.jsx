import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import facebook_icon from "../assets/FacebookLogo.png";
import insta_icon from "../assets/InstagramLogo.png";
import ReactPlayer from "react-player";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import useFetchData from "../customHooks/useFetchData";

function VideoStoriesSingle() {
  const {
    videoStorySingleData,
    fetchVideoStorySingleData,
    fetchVideoStoryNextPrevious,
    videoStoryNextPrevious,
  } = useFetchData();
  const { id } = useParams();
  useEffect(() => {
    fetchVideoStorySingleData(id);
    fetchVideoStoryNextPrevious(id);
  }, []);

  return (
    <div className="bg-[#1C1C1C] text-white">
      <div className="flex justify-center pt-[120px]">
        {videoStorySingleData ? (
          <ReactPlayer
            // className="h-[500px]"
            width="80%"
            height="500px"
            url={videoStorySingleData?.video}
          ></ReactPlayer>
        ) : (
          <div>There is no single video</div>
        )}
      </div>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col items-center w-[85%]">
          <div className="text-center uppercase text-[40px] 2xl:text-[70px] sm:text-[48px] Boldy  my-[60px]">
            {videoStorySingleData?.title}
          </div>
       
       
            <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[100%] lg:w-[70%] ">
            <div className=" Courier flex-1 text-md   m-2 ">
            {videoStorySingleData?.descrleft}
            </div>
            <div className="Courier flex-1 text-md  m-2">
            {videoStorySingleData?.descrright}
            </div>
          </div>
         
          <div className=" w-full mt-[60px]">
            <div className=" bg-[#4A4A4A] h-[1.5px] border-[#4A4A4A] w-full border " />
            <div className="flex justify-between my-[70px]">
              <div className="w-[367px]  text-[18px] Courier Prime uppercase text-opacity-40">
                wedding, destination, photography, blog, experimental
              </div>
              <div className="flex  gap-[10px]">
                <a
                  href="https://facebook.com/FlashbakcStudios/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="pr-1"
                    src="https://cdn.sanity.io/images/u8qx4arf/production/3945544b8fe6cd8ad4dd8a453911fba78baff95c-32x32.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/flashbakcstudios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="pr-1"
                    src="https://cdn.sanity.io/images/u8qx4arf/production/1fa83b004e203f6454bd2461dd0bdcdce5b06aad-32x32.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className=" bg-[#4A4A4A] h-[1.5px] border-[#4A4A4A] w-full border " />
          </div>
          {videoStoryNextPrevious != null ? (
            <div className="w-full mt-10  pb-[150px]">
              {console.log(videoStoryNextPrevious)}
              <div className="w-full justify-between flex flex-row">
                {videoStoryNextPrevious[0] != null ? (
                  <div className="flex items-end flex-row-reverse">
                    <div className="flex flex-col items-start">
                      <p className="text-[16px]  text-[#FFFFFF]  Courier Prime">
                        Previous
                      </p>
                      <a
                        href={`/videostories/${parseInt(id) - 1}`}
                        className="text-[32px] Boldy text-[#FFFFFF]"
                      >
                        {`${videoStoryNextPrevious[0].title}`}
                      </a>
                    </div>
                    <ArrowCircleLeftOutlinedIcon className="mb-4 mr-2" />
                  </div>
                ) : (
                  <div></div>
                )}
                {videoStoryNextPrevious[1] != null ? (
                  <div className="flex flex-row items-end">
                    <div className="flex flex-col items-end">
                      <p className="text-[16px]  text-[#FFFFFF]  Courier Prime">Next</p>
                      <a
                        href={`/videostories/${parseInt(id) + 1}`}
                        className="text-[32px] Boldy "
                      >
                        {`${videoStoryNextPrevious[0].title}`}
                      </a>
                    </div>
                    <ArrowCircleRightOutlinedIcon className="mb-4 ml-2" />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default VideoStoriesSingle;
