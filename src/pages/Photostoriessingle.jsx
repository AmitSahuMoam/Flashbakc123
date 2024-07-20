import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import facebook_icon from "../assets/FacebookLogo.png";
import insta_icon from "../assets/InstagramLogo.png";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import useFetchData from "../customHooks/useFetchData";

function Photostoriessingle() {
  const {
    photoStorySingleData,
    fetchPhotoStorySingleData,
    fetchPhotoStoryNextPrevious,
    photoStoryNextPrevious,
  } = useFetchData();
  const { id } = useParams();
  useEffect(() => {
    fetchPhotoStorySingleData(id);
    fetchPhotoStoryNextPrevious(id);
    console.log(photoStorySingleData);
  }, []);

  return (
    <div>
      <div
        className={`h-[${
          photoStorySingleData ? "100vh" : "50vh"
        }] bg-cover bg-center flex flex-col justify-end`}
        style={{
          backgroundImage: `url(${photoStorySingleData?.hero})`,
        }}
      />
      {/* <div className="text-center text-[70px] Boldy text-[#1C1C1C] my-[60px]">
        {photoStorySingleData.title}
      </div>
      <div className="flex px-[8%] gap-4 mb-[30px]">
        <div>
          {photoStorySingleData.descriptionLeft}
        </div>
        <div>
          {photoStorySingleData.descriptionRight}
        </div>
      </div> */}
      <div className="bg-[#EDECE7] flex justify-center items-center pb-[150px]">
        <div className="flex flex-col items-center w-[85%]">
          <div className="uppercase text-[40px] 2xl:text-[70px] sm:text-[48px]  Boldy text-[#1c1c1c] text-center pt-10 pb-10">
            {photoStorySingleData?.title}
          </div>
          <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[100%] lg:w-[70%] ">
            <div className=" Courier flex-1 text-md   m-2 ">
              {photoStorySingleData?.descriptionLeft}
            </div>
            <div className="Courier flex-1 text-md  m-2">
              {photoStorySingleData?.descriptionRight}
            </div>
          </div>
          {photoStorySingleData ? (
            <div className="w-[80%] h-auto flex justify-center items-center">
              <img
                src={photoStorySingleData?.mainImage}
                alt="placeholder"
                className="w-[80%] h-auto flex justify-center items-center"
              />
            </div>
          ) : (
            <div>There is no single photo</div>
          )}
          <div className=" w-full mt-[60px]">
            <div className=" bg-[#4A4A4A] h-[1.5px] border-[#4A4A4A] w-full border " />
            <div className="flex justify-between my-[70px]">
              <div className="w-[367px]  text-[18px] Courier Prime uppercase text-opacity-40">
                wedding, destination, photography, blog, experimental
              </div>
              <div className="flex text-[#1C1C1C] gap-[10px]">
                <a
                  href="https://facebook.com/FlashbakcStudios/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="pr-1" src={facebook_icon} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/flashbakcstudios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="pr-1" src={insta_icon} alt="" />
                </a>
              </div>
            </div>

            <div className=" bg-[#4A4A4A] h-[1.5px] border-[#4A4A4A] w-full border " />
          </div>
          {photoStoryNextPrevious != null ? (
            <div className="w-full mt-10 pb-2">
              <div className="w-full justify-between flex flex-row">
                {photoStoryNextPrevious[0] != null ? (
                  <div className="flex items-end flex-row-reverse">
                    <div className="flex flex-col items-start">
                      <p className="text-[16px]  text-[#1C1C1C]  Courier Prime">
                        Previous
                      </p>
                      <a
                        href={`/photostories/${parseInt(id) - 1}`}
                        className="text-[32px] Boldy text-[#1C1C1C]"
                      >
                        {/* {`${photoStoryNextPrevious[0].firstPersonName} + ${photoStoryNextPrevious[0].secondPersonName}`} */}
                        {photoStoryNextPrevious[0].title}
                      </a>
                    </div>
                    <ArrowCircleLeftOutlinedIcon className="mb-4 mr-2" />
                  </div>
                ) : (
                  <div></div>
                )}
                {photoStoryNextPrevious[1] != null ? (
                  <div className="flex flex-row items-end">
                    <div className="flex flex-col items-end">
                      <p className=" text-[#1C1C1C] Courier Prime text-[16px]">
                        Next
                      </p>
                      <a
                        href={`/photostories/${parseInt(id) + 1}`}
                        className="text-[32px] Boldy text-[#1C1C1C]"
                      >
                        {/* {`${photoStoryNextPrevious[1].firstPersonName} + ${photoStoryNextPrevious[1].secondPersonName}`} */}
                        {photoStoryNextPrevious[1].title}
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
      {/*<div className="h-[450px] sm:h-full flex justify-center items-center overflow-hidden">
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/719b9927c0c61f58c77df7c4c9ddaca3af3a715d-2560x920.png"
          className="object-cover h-[450px] sm:h-full w-full"
          alt="Quote"
        />
      </div>*/}
    </div>
  );
}

export default Photostoriessingle;
