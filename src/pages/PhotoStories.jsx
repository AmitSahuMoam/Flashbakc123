import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import BgImage from "../assets/images/photostories/bgImage.png";
import PhotoStoryTile from "../components/PhotoStoryTile";
import useFetchData from "../customHooks/useFetchData";

import styles from "../sass/photo_stories/_photo-stories.module.scss";

function PhotoStories() {
  const {
    photoStoriesData,
    fetchPhotoStories,
    photoStoryPage,
    setPhotoStoryPage,
  } = useFetchData();

  useEffect(() => {
    fetchPhotoStories();
  }, [photoStoryPage]);

  return (
    <div>
      <div
        className="bg-center bg-cover h-[450px] sm:h-full"
        id="head"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/e608394a238a81e104cf3d52505f03898baf7335-2560x512.png"
          className="w-full h-full object-cover"
          alt="Quote"
        />
      </div>
      <div className="bg-[#EDECE7] flex justify-center items-center">
        <div className="flex flex-col items-center w-[90%]">
          <div className="sm:text-5xl text-4xl uppercase Boldy text-black text-center py-6">
         <div> Love &nbsp;<span className="Actonia lowercase">is the</span> whole
            thing.</div> <div className = " "> we are only pieces.</div>
          </div>
          <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[100%] lg:w-[70%] ">
            <div className=" Courier flex-1 text-[16px] m-2 mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
            <br />
            <div className="Courier flex-1 text-[16px] m-2 mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
          </div>
          <div className="Courier flex flex-wrap justify-center">
            {photoStoriesData.map((photostory, index) => (
              <div className="flex justify-center mx-2">
                <PhotoStoryTile
                  name={`${photostory?.firstPersonName} + ${photostory?.secondPersonName}`}
                  location={photostory.state}
                  img={photostory?.image}
                  link={`photostories/${photostory?.id}`}
                  nameClass="text-[#1C1C1C]"
                  locationClass="text-[#1C1C1C]"
                />
              </div>
            ))}
          </div>
          <Stack spacing={2} className="sm:pt-6 pb-12">
            <Pagination
              count={Math.ceil(photoStoriesData.length / 8)}
              page={photoStoryPage}
              onChange={(event, value) => setPhotoStoryPage(value)}
              renderItem={(item) => (
                <PaginationItem
                  classes={{
                    page: styles["MuiPaginationItem-page"],
                    iconButton: styles["MuiPaginationItem-iconButton"],
                    ellipsis: styles["MuiPaginationItem-ellipsis"],
                  }}
                  slots={{
                    previous: ArrowCircleLeftOutlinedIcon,
                    next: ArrowCircleRightOutlinedIcon,
                  }}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              )}
            />
          </Stack>
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

export default PhotoStories;
