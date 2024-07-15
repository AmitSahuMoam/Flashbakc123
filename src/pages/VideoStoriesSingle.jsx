import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import useFetchData from "../customHooks/useFetchData";

function VideoStoriesSingle() {

const {videoStorySingleData, fetchVideoStorySingleData } = useFetchData();
const {id} = useParams();

useEffect(() => {
  fetchVideoStorySingleData(id);
}, []);

{
  return (
    <div>
      <div className="h-full bg-[#1C1C1C]">
        <Header />
        <div className="w-full flex flex-col mt-32 items-center min-h-screen">
          <ReactPlayer
            url={videoStorySingleData?.video}
            width="80%"
            height="80vh"
          />
          <div className="flex flex-col justify-center items-center w-[80%] text-white border-b-4 border-indigo-500">
            <div className="uppercase mt-10 text-[#D8CAB1] text-3xl font-extrabold flex-row">
                {" "}
             
                <p> {videoStorySingleData?.title} </p>
         
               </div>          
            </div>
              <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[100%] lg:w-[70%] ">
            <div className="Courier flex-1 text-md text-white  m-2 ">{videoStorySingleData?.descrleft}</div>
            <div className="Courier flex-1 text-md text-white m-2">{videoStorySingleData?.descrright}</div>
            <div>
              
            </div>
            </div>

            </div>
          </div>
          
        </div>
      
  );
}
}

export default VideoStoriesSingle;
