import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import useFetchData from "../customHooks/useFetchData";

function Photostoriessingle() {
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
    <div>
      <div
        className="h-[100vh] bg-cover bg-center flex flex-col justify-end"
        style={{
          backgroundImage: `url(${videoStorySingleData?.image})`,
        }}
      />
      <div className="bg-[#EDECE7] flex justify-center items-center">
        <div className="flex flex-col items-center w-[85%]">
          <div className="text-5xl 2xl:text[70px] uppercase Boldy text-[#1c1c1c] text-center pt-10 pb-10">
            {videoStorySingleData?.title}
          </div>
          <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[100%] lg:w-[70%] ">
            <div className=" Courier flex-1 text-md   m-2 ">
              {videoStorySingleData?.descriptionLeft}
            </div>
            <div className="Courier flex-1 text-md  m-2">
              {videoStorySingleData?.descriptionRight}
            </div>
          </div>
          {/* <div className="w-full">
            <img
              src={videoStorySingleData?.mainImage}
              alt="placeholder"
              className="w-full h-auto"
            />
          </div> */}
          <div className="h-[100px]">
            <div className=" bg-[#4A4A4A] h-[1.5px] border-[#4A4A4A] w-full border " />
          </div>
          {videoStoryNextPrevious != null ? (
            <div className="w-full mt-10 pb-2">
              {console.log(videoStoryNextPrevious)}
              <div className=" bg-[#4A4A4A] h-[1.5px] border-[#4A4A4A] w-full border " />
              <div className="w-full justify-between flex flex-row">
                {videoStoryNextPrevious[0] != null ? (
                  <div className="flex items-end flex-row-reverse">
                    <div className="flex flex-col items-start">
                      <p className="text-sm italic text-[#1C1C1C] font-extralight">
                        Previous
                      </p>
                      <a
                        href={`/photostories/${parseInt(id) - 1}`}
                        className="text-[32px] Boldy text-[#1C1C1C]"
                      >
                        {`${videoStoryNextPrevious[0].firstPersonName} + ${videoStoryNextPrevious[0].secondPersonName}`}
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
                      <p className="text-sm italic text-[#1C1C1C] font-extralight">
                        Next
                      </p>
                      <a
                        href={`/photostories/${parseInt(id) + 1}`}
                        className="text-[32px] Boldy text-[#1C1C1C]"
                      >
                        {`${videoStoryNextPrevious[1].firstPersonName} + ${videoStoryNextPrevious[1].secondPersonName}`}
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
          {/* <div className="Courier pb-[50px] flex justify-center bg-green-400">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-30 max-w-full">
              {photoStoriesData.map((photostory, index) => (
                <div className="flex justify-center mr-2">
                  <PhotoStoryTile
                    name={`${photostory?.firstPersonName} + ${photostory?.secondPersonName}`}
                    location={photostory.state}
                    img={photostory?.image}
                    link={photostory?.narrativeLink}
                  />
                </div>
              ))}
            </div>
          </div> */}

          {/* <Stack spacing={2} className="pt-6 pb-12">
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{
                    previous: ArrowCircleLeftOutlinedIcon,
                    next: ArrowCircleRightOutlinedIcon,
                  }}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              )}
            />
          </Stack> */}
        </div>
      </div>
      <div className="h-[450px] sm:h-full flex justify-center items-center overflow-hidden">
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/719b9927c0c61f58c77df7c4c9ddaca3af3a715d-2560x920.png"
          className="object-cover h-[450px] sm:h-full w-full"
          alt="Quote"
        />
      </div>
    </div>
  );
}

export default Photostoriessingle;

// import ReactPlayer from "react-player";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import useFetchData from "../customHooks/useFetchData";

// function VideoStoriesSingle() {
//   const { videoStorySingleData, fetchVideoStorySingleData } = useFetchData();
//   const { id } = useParams();

//   useEffect(() => {
//     fetchVideoStorySingleData(id);
//   }, []);

//   {
//     return (
//       <div>
//         <div className="h-full bg-[#1C1C1C]">
//           <Header />
//           <div className="w-full flex flex-col mt-32 items-center min-h-screen">
//             <ReactPlayer
//               url={videoStorySingleData?.image}
//               width="80%"
//               height="80vh"
//             />
//             <div className="flex flex-col justify-center items-center w-[80%] text-white border-b-4 border-indigo-500">
//               <div className="uppercase mt-10 text-[#D8CAB1] text-3xl font-extrabold flex-row">
//                 {" "}
//                 <p> {videoStorySingleData?.title} </p>
//               </div>
//             </div>
//             <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[100%] lg:w-[70%] ">
//               <div className="Courier flex-1 text-md text-white  m-2 ">
//                 {videoStorySingleData?.descrleft}
//               </div>
//               <div className="Courier flex-1 text-md text-white m-2">
//                 {videoStorySingleData?.descrright}
//               </div>
//               <div></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default VideoStoriesSingle;
