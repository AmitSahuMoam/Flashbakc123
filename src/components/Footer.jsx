/* eslint-disable jsx-a11y/control-has-associated-label */
// import githubIcon from "../assets/img/github-icon.png";
import { useState } from "react";
import MovingComponent from "react-moving-text";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Link } from "react-router-dom";
import useScrollTo from "../customHooks/useScrollTo";
// import footerTriangle from "../assets/images/indents/footerTriangle.png";

function Footer() {
  useScrollTo()
  const [CurrentStuff, setCurrentStuff] = useState(0);
  setTimeout(() => {
    if (CurrentStuff === 5) setCurrentStuff(0);
    else setCurrentStuff(CurrentStuff + 1);
  }, 2000);
  const stuff = [
    "IN TOUCH",
    "TOGETHER",
    "FOREVER",
    "CREATIVE",
    "STARTED",
    "LOUD",
  ];
  return (
    <>
       <div className="absolute w-full flex justify-center z-50 h-[50px] mt-[-48px] ">
        <img src="https://cdn.sanity.io/images/u8qx4arf/production/5d4746e18745c5639d98db6084ea19127dff30d4-2560x70.png" alt="Triangle" className="w-full h-auto" />
      </div> 
      <footer className="footer bg-footertext">
        <div className="min-h-[300px] w-full flex flex-col sm:flex-row justify-between items-center px-[7%] ">
          <div className="flex-1">
            <div className="w-[60px]">
              <img
                src="https://cdn.sanity.io/images/u8qx4arf/production/272ca9b7e96fc5ac962b9cbb5d0e4ecbc6d9ff47-74x89.png"
                className=" w-[57px] pt-[60px] sm:mb-0 pr-0"
                alt="Quote"
              />
              <div className="flex flex-row justify-between text-white mt-2">
                <a href="https://facebook.com/FlashbakcStudios/" target="_blank" rel="noreferrer">
                  <img
                    className="pr-1"
                    src="https://cdn.sanity.io/images/u8qx4arf/production/3945544b8fe6cd8ad4dd8a453911fba78baff95c-32x32.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/flashbakcstudios" target="_blank" rel="noreferrer">
                  <img
                    className="pr-1"
                    src="https://cdn.sanity.io/images/u8qx4arf/production/1fa83b004e203f6454bd2461dd0bdcdce5b06aad-32x32.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  text-[40px]  text-3xl Boldy text-white text-center mb-20 sm:mb-0 ">
            <div className="flex flex-row text-[40px]  text-3xl Boldy text-white text-center pl-10 pt-[50px]">
              Lets Get
              <Link
                to="/aboutus#contact"
              >
                <img
                  src="https://cdn.sanity.io/images/u8qx4arf/production/4b7a41122dadf6389912a00d9927152055eb626a-28x28.svg"
                  alt="hello"
                  className="w-[28px] h-[18px] cursor-pointer"
                />{" "}
              </Link>
            </div>

            <div className="text-yellow-300 pl-5 mt-3" key={CurrentStuff}>
              <MovingComponent
                id="moving"
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-in-out"
                iteration="1"
                fillMode="none"
              >
                {stuff[CurrentStuff]}
              </MovingComponent>
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center">
            <div className="Courier flex-1 flex flex-col sm:justify-end justify-center items-end sm:pt-[100px] ">
              <span className="Boldy sm:text-2xl text-lg sm:self-end self-center  text-[#D8CAB1] ">
                Write to us:
              </span>
              <a
                href="mailto:heythere@flashbakc-studios.com"
                className="text-white Courier sm:text-1xl  text-sm sm:mb-2 mb-10 justify-center text-center"
              >
                heythere@flashbakc-studios.com
              </a>
            </div>
          </div>
          <div className="text-white relative cursor-pointer sm:-right-10 -bottom-10 hidden sm:flex ">
            <a
              href="#top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowCircleLeftOutlinedIcon
                sx={{ transform: 'rotate(90deg)' }}
              />
            </a>
          </div>

        </div>
        <div className="Courier Prime border border-white w-full px-[7%] pb-[50px] ">
          <hr className="border-[#4A4A4A]" />
          <div className="flex flex-col sm:flex-row justify-between text-xs pt-5 text-center items-center text-[#4A4A4A]">
            <span>
              © 2024 Flashbakc Studios Fabian & Rahul. All rights reserved.
            </span>
            <div className="flex sm:mt-0 mt-10 flex-row">
              <span className="mr-2">Privacy Policy &nbsp;</span>
              <span className="mr-2">Terms & Conditions &nbsp;</span>
              <span className="">Copyright &nbsp;</span>
            </div>
            <div className=" Courier flex sm:mt-0 mt-10 flex-row items-center">
              <span className="mr-8">Designed & developed with intention by</span>
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src="https://cdn.sanity.io/images/u8qx4arf/production/767b4d9d11a5deea3d3d490f8e1762d9a89cad5e-57x50.png"
                  alt="hello"
                  width={57}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
