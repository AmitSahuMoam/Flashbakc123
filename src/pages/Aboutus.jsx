/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import GetInTouch from "../components/GetInTouch";
import QuestionAnswers from "../components/QuestionAnswers";
import { useScrollRestoration } from 'react';
import useFetchData from "../customHooks/useFetchData";

import useScrollTo from '../customHooks/useScrollTo';

import "../sass/about_page/_story.scss"

import styles from "../sass/about_pagination/_about-pagination.module.scss"

function Aboutus() {
  useScrollTo();

  const { questionsData, fetchQuestionsAnswers, questionPage, setQuestionPage } = useFetchData();
  const scrollRestoration = useScrollRestoration();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchQuestionsAnswers();
  }, []);

  useEffect(() => {

    console.log(questionsData, "questionsData");
  }, [questionsData])


  return (
    <div>
      <div
        className="h-[100vh] bg-cover bg-center flex flex-col justify-end"
        style={{
          backgroundImage: `url('https://cdn.sanity.io/images/u8qx4arf/production/5439c849afbfa3fe71b2ebb9d65e2134fe2a6588-2560x1305.png')`,
        }}
      >
        <div className="w-full flex flex-row flex-wrap justify-end text-white uppercase text-[40px] 2xl:text-[70px] sm:text-[48px] mb-10 pr-8 Boldy"
          style={{
            lineHeight: "1.2"
          }}
        >
          <p className="text-[#FFCA00]">Friendly.</p>
          <p className="sm:mr-2 ml-2">Relaxed.</p>
          <p className="text-[#FFCA00]">Stress-Free.</p>
        </div>
      </div>
      <div className="bg-dustTexture flex sm:flex-row flex-col justify-center p-5">
        <div className="flex flex-col sm:flex-row sm:w-[60%] w-full sm:mt-10">
          <div className="flex flex-col m-5 ">
            <p className="Actonia text-[#1C1C1C] text-[40px] sm:text-[36px] 2xl:text-[64px] mb-[-12px] leading-[35px] ml-1">our</p>
          <p className="uppercase text-[#1C1C1C] text-[40px] sm:text-[48px] 2xl:text-[70px] Boldy lg:leading-[45px] sm:leading-[35px] 2xl:leading-[75px] ">Flashbakc</p>

            <p className="Courier Prime text-[#4A4A4A] text-[16px] 2xl:text-[20px] leading-normal">
              <br />
              Hi! Welcome to Flashbakc Studios. Narrow roads, winding lanes,
              coconut grooves, fields on both sides, and you will find us
              situated, working out of the comfort of our home, sippin some gin
              and tonic or urrak (local drink), listening to some indie or
              reggae music and working our magic in creating a fairytale out of
              reality.
              <br />
              <br />
              Founded by Rahul DSouza and Fabian Franco, who lived in the same
              neighborhood in Goa, knowing each other only by face. They met
              unexpectedly in the same hostel in Bandra, Mumbai.
            </p>
          </div>
          <div>
            <p className="Courier Prime  text-[#4A4A4A] m-5 mt-7 text-[16px] 2xl:text-[20px]">
              Rahul, working as a concept artist in a gaming studio and Fabian,
              pursuing his masters in Social work, kicked off a new journey of
              friendship.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pell.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </p>
          </div>
        </div>
      </div>
      <img alt="Image description" src=" https://cdn.sanity.io/images/u8qx4arf/production/8b5bf7c63efff172c54d7adf864c31bd5c4a9972-2560x565.svg" className="bg-[#D8CAB1]" />

      <div
        className="bg-texture pt-[50px] pb-[50px]  flex flex-col justify-start sm:justify-center items-center min-h-screen"
        id="questions"
      >
        <div className="flex flex-col justify-center items-center ml-2 sm:ml-0">
          <div className=" text-white uppercase lg:text-5xl 2xl:text[70px] text-3xl tracking-tighter Boldy  flex flex-col justify-start w-full text-left sm:py-[30px] 2xl:py-[50px] ">
            <span className="Boldy text-[40px] sm:text-[48px] 2xl:text-[70px]  text-[#FFCA00] uppercase text">
              questions
            </span>
            <div className="flex flex-row">
              <span className="Actonia text-[40px] 2xl:text-[64px] 2xl:leading-[50px] sm:text-[36px] lowercase mr-3 ml-2 ">you</span>
              <span className="Boldy text-[40px] sm:text-[48px]  2xl:text-[70px]  text-white uppercase text leading-[35px] md:leading-[50px] 2xl:leading-[50px]">
                may have
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-[80%] w-full p-2">
          {
            questionsData?.map((question) => (
              <QuestionAnswers
                key={question?.id}
                question={question?.question}
                answer={question?.answer}
              />
            ))
          }
        </div>
        <Stack spacing={2} className="mt-10" >
          <Pagination
            count={Math.ceil(questionsData.length / 4) + 1}
            page={questionPage}
            onChange={(event, value) => setQuestionPage(value)}
            renderItem={(item) => (
              <PaginationItem
                classes={{
                  page: styles['MuiPaginationItem-page'],
                  iconButton: styles['MuiPaginationItem-iconButton'],
                  ellipsis: styles['MuiPaginationItem-ellipsis'],
                  selected: styles['MuiPaginationItem-selected'],
                }}
                {...item}
                component="button"
                onClick={() => setQuestionPage(item.page)}
                slots={{
                  previous: () => <ArrowCircleLeftOutlinedIcon sx={{
                    color: "rgb(255 202 0)"
                  }} />, next: () => <ArrowCircleRightOutlinedIcon
                    sx={{
                      color: "rgb(255 202 0)"
                    }} />
                }}
                sx={{
                  '&.Mui-selected': {
                    background: '#333',
                    color: "white"
                  },
                }}
                {...item}
              />
            )}
          />
        </Stack>
        <span
          className='ml-2 mt-10 px-4 Courier Prime text-[16px] 2xl:text-[20px] font-medium normal-case leading-normal text-[#FFFFFF]'
        >
          Didn&apos;t find an answer to your question here? <br />
          Ask us directly through our {" "}
          <a href="/aboutus#contact" className="underline text-[#FFCA00]">
            contact form!
          </a>
        </span>
      </div>
      <div
        id="contact"
      >
        <GetInTouch />
      </div>
    </div>
  );
}

export default Aboutus;
