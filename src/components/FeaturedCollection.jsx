import { NavLink } from "react-router-dom";
import "../App.css";
import BigSlider from "./BigSlider";
import triangleImage from "../assets/images/indents/carouselTriangle.png";

function FeaturedCollection() {
  return (
    <div className="bg-texture h-full bg-fixed">
      <div className="bg-aboutus text-white text-6xl Boldy sm:pt-[13vh] pt-[5vh] p-5 flex justify-center items-center">
        <div className="flex flex-col sm:flex-row sm:w-[75%] justify-center items-center">
          <img
            className="w-[90vw] max-w-[390px] h-[313px] sm:h-full sm:w-[25vw] sm:min-w-[477px] object-cover"
            src="https://cdn.sanity.io/images/u8qx4arf/production/6c1d7502c2d96b086051b64cbe9f7e165a6cae7f-636x809.png"
            alt="hello"
          />
          <div className="text-[40px] sm:text-[48px] sm:w-[50%] Boldy flex-col flex  justify-center  mt-10 sm:mt-0">
            Behind
            <div className="flex-row flex mt-[-5px]">
              <p className="Actonia lg:text-5xl text-3xl mb-auto lowercase ml-10">
                the
              </p>
              <p className="text-[#FFCA00] ml-2"> brand</p>
            </div>
            <div className="text-lg flex-col flex mt-5 sm:pl-10 pl-0 leading-normal">
              <div className="Courier Prime text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus.
              </div>
              <div className="Courier Prime text-[16px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus.
              </div>

              <div className="text-lg mt-10  cursor-pointer w-fit">
                <NavLink to="/aboutus">
                  {" "}
                  <button
                    type="button"
                    className="border-yellow-300 text-[16px] border h-[34px] w-[176px] rounded-md pt-1 px-2 hover:text-black hover:bg-yellow-300 hover:border-black transition-all ease-in duration-300"
                  >
                    more about us
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full flex justify-center z-50">
        <img src={triangleImage} alt="Triangle" className="w-full h-auto" />
      </div>
      <BigSlider className="h-[80vh] mt-20  flex flex-col justify-center items-center lg:text-5xl text-3xl bg-center bg-cover text-white" />
    </div>
  );
}
export default FeaturedCollection;
