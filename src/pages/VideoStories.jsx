/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Header from "../components/Header";
import useFetchData, {
  VIDEO_STORY_ITEMS_PER_PAGE,
} from "../customHooks/useFetchData";
import PhotoStoryTile from "../components/PhotoStoryTile";

import styles from "../sass/video_stories/_video-stories.module.scss";

function VideoStories() {
  const {
    videoStoriesData,
    fetchVideoStories,
    videoStoryPage,
    setVideoStoryPage,
    fetchAllVideoStories,
    videoStoriesAllData,
  } = useFetchData();

  useEffect(() => {
    fetchVideoStories();
    fetchAllVideoStories();
  }, [videoStoryPage]);

  return (
    <div>
      <div
        className="bg-center h-[512px] bg-cover bg-blend-overlay "
        id="head1"
        style={{
          backgroundImage: `url('https://cdn.sanity.io/images/u8qx4arf/production/82895e8a74c95c86122685d0e1f61a257f292286-2560x512.png')`,
        }}
      >
        <Header />
      </div>
      <div className="bg-[#1C1C1C] flex justify-center items-center text-white">
        <div className="flex flex-col items-center sm:w-[70%]">
          <div
            className="text-[40px] sm:text-[48px] 2xl:text-[70px] uppercase font-extrabold Boldy tracking-normal text-center mt-10 p-3 text-white"
            style={{
              lineHeight: "1.1",
            }}
          >
            NAMES ON A PAPER WE ARE NOT
          </div>
          <div className="flex flex-col justify-around sm:flex-row py-10 pt-4 max-w-[100%] lg:w-[80vw] leading-normal">
            <div className="flex-1 text-[16px] 2xl:text-[20px] Courier mr-6 sm:ml-0 ml-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
            <br />
            <div className="flex-1 text-[16px] 2xl:text-[20px] Courier ml-6 mr-6 sm:mr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
          </div>

          <div className="Courier pb-[50px] flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-0 max-w-[90%] ">
              {videoStoriesData.map((videoStory, index) => (
                <div className="flex aspect-video justify-center">
                  <PhotoStoryTile
                    name={`${videoStory?.firstPersonName} + ${videoStory?.secondPersonName}`}
                    location={videoStory.state}
                    img={videoStory?.image}
                    link={`videostories/${videoStory?.id}`}
                    nameClass="text-[#D8CAB1]"
                    locationClass="text-[#FFFFFF]"
                  />
                </div>
              ))}
            </div>
          </div>
          <Stack spacing={2} className="sm:pt-6 pb-12">
            <Pagination
              count={Math.ceil(
                videoStoriesAllData.length / VIDEO_STORY_ITEMS_PER_PAGE
              )}
              page={videoStoryPage}
              onChange={(event, value) => setVideoStoryPage(value)}
              renderItem={(item) => (
                <PaginationItem
                  classes={{
                    page: styles["MuiPaginationItem-page"],
                    iconButton: styles["MuiPaginationItem-iconButton"],
                    ellipsis: styles["MuiPaginationItem-ellipsis"],
                    selected: styles["MuiPaginationItem-selected"],
                  }}
                  component="button"
                  onClick={() => setVideoStoryPage(item.page)}
                  slots={{
                    previous: () => (
                      <ArrowCircleLeftOutlinedIcon
                        sx={{
                          color: "rgb(255 202 0)",
                        }}
                      />
                    ),
                    next: () => (
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "rgb(255 202 0)",
                        }}
                      />
                    ),
                  }}
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

export default VideoStories;