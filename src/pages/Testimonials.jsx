import { useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Header from "../components/Header";
import TestimonialTile from "../components/TestimonialTile";
import useFetchData from "../customHooks/useFetchData";

import styles from '../sass/testimonials/_testimonials.module.scss';

function Testimonials() {
  const { testimonialsData, fetchTestimonials } = useFetchData();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div>
      <div>
        <Header />
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/6297a834a703a7dc29917260d5f4d49468908aca-2560x920.png"
          alt=""
          id="head3"
          className="w-full h-[70vh] object-cover object-top"
        />
      </div>
      <div className="bg-testimonials flex flex-col justify-center items-center">
        <div className="sm:w-1/2 flex justify-center items-center flex-col py-[40px] 2xl:py-[50px] ">
        <div className="w-full flex flex-col justify-center items-start sm:items-center">
              <div className="flex flex-row justify-self-start leading-[20px] pl-[20px] pt-[30px] 2xl:pt-[45px] ">
                <p className="Actonia text-white text-[30px] sm:text-[36px] 2xl:text-[64px] "> our </p>
                <span className="text-nowrap text-[30px] text-[#1c1c1c] sm:text-[48px] 2xl:text-[70px] Boldy">HAPPY COUPLES</span>
              </div>
              <div className="flex flex-row  justify-self-end  w-min ml-[20%] pb-[30px] 2xl:pb-[45px] ">
                <p className="Actonia sm:pl-[9vh] text-[30px] sm:text-[36px] 2xl:text-[64px]    text-[#1c1c1c]">
                  {" "}
                  and{" "}
                </p>{" "}
                <span className="text-nowrap Boldy text-white text-[30px] sm:text-[48px] 2xl:text-[70px] ml-1">
                  THEIR THOUGHTS{" "}
                </span>
              </div>
            </div>
          {testimonialsData?.map((item, index) => (
            <div>
              <TestimonialTile
                name={`${item?.firstPersonName} + ${item?.secondPersonName}`}
                content={item?.description}
                title={item?.title}
                img={item?.image}
              />
            </div>
          ))}
        </div>
        <Stack spacing={2} className="pt-6 pb-12" >
          <Pagination

            count={1}
            renderItem={(item) => (
              <PaginationItem
                classes={{
                  page: styles['MuiPaginationItem-page'],
                  iconButton: styles['MuiPaginationItem-iconButton'],
                  ellipsis: styles['MuiPaginationItem-ellipsis'],
                }}
                slots={{ previous: ArrowCircleLeftOutlinedIcon, next: ArrowCircleRightOutlinedIcon }}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...item}
              />
            )}
          />
        </Stack>
      </div>
      <div className=" h-[100%] flex justify-center items-center  ">
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/719b9927c0c61f58c77df7c4c9ddaca3af3a715d-2560x920.png"
          className="w-100% h-100% pb-0"
          alt="Quote"
        />
      </div>
    </div>
  );
}

export default Testimonials;