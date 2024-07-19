import { NavLink } from "react-router-dom";
import "../App.css";

function Thoughts() {
  return (
    <div className="">
      <div className="bg-dustTexture lg:pt-20 pt-10 lg:pb-20 flex sm:flex-row justify-center items-center">
        <div className="sm:text-5xl 2xl:text[70px] text-3xl text-[#1c1c1c] Boldy flex-col flex sm:flex-row justify-center items-center lg:w-[70vw]">
          <div className="flex-1 flex flex-col flex-nowrap z-30 items-center">
            <div className="w-full flex flex-col justify-center items-start sm:items-center">
              <div className="flex flex-row justify-self-start">
                <p className="Actonia text-white text-[30px] sm:text-[36px] 2xl:text-[64px] pr-2 mt-[-20px] sm:ml-[-2vw] ml-5"> our </p>
                <span className="text-nowrap text-[30px] sm:text-[48px] 2xl:text-[70px] Boldy -ml-1">HAPPY COUPLES</span>
              </div>
              <div className="flex flex-row  justify-self-end  w-min ml-[20%] mt-2">
                <p className="Actonia mb-auto sm:pl-[15vh] text-[30px] sm:text-[36px] 2xl:text-[64px]  ml-8 mt-[-15px]">
                  {" "}
                  and{" "}
                </p>{" "}
                <span className="text-nowrap Boldy text-white text-[30px] sm:text-[48px] 2xl:text-[70px] ml-1">
                  THEIR THOUGHTS{" "}
                </span>
              </div>
            </div>
            <div className="Courier Prime text-[16px]  sm:text-[16px] 2xl:text-[20px] pb-15 lg:w-[80%] px-5 w-full lg:pt-10 pt-5 leading-normal">
              <span className=" text-[#1c1c1c] lg:w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </span>
              <p className="w-full text-[#4A4A4A]">
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. <br /> <br />{" "}
                Venenatis lectus magna fringilla urna porttitor. Risus quis varius quam quisque id diam vel quam elementum. Facilisi cras ferment
              </p>
              <div className=" w-full text-[16px] 2xl:text-[18px] sm:text-[16px] border cursor-pointer rounded-lg Boldy uppercase text-[#1c1c1c] ">
                <div className=" border w-fit h-min p-3 rounded-lg mt-2">
                  <NavLink to="/testimonials#head3" className="">
                    <button
                      type="button"
                      className="border-[#1c1c1c] border py-1 px-2 rounded-md   hover:text-[#1c1c1c] hover:bg-yellow-300 hover:border-yellow-300 transition-all ease-in duration-300 ml-[-10px] 2xl:text-[20px] text-[16px] sm:text-[16px]"
                    >
                      read more
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:-ml-[5%] p-5 flex justify-center items-center">
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/78c9de117f57bebf63efab92cd665b4a8cf2801b-859x646.png"
              alt="Hello"
              className="object-cover aspect-[4/3] sm:h-[35rem] w-[40rem] sm:min-w-[40rem] 2xl:min-w-[53rem]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EDECE7]">
        <div className="h-[15vh] pt-20 flex text-md sm:flex-row justify-center items-center text-3xl sm:text-3xl  Boldy bg-cover gap-2 pb-10">
          <span className="text-[#1C1C1C] Actonia text-[30px] sm:text-[36px] 2xl:text-[64px] mb-12 mr-[-10px] sm:mr-[0]">our</span>
          <span className="text-[#FFCA00] Boldy text-[30px] sm:text-[48px] 2xl:text-[70px]">AWARDS</span>
          <span className="Actonia text-[30px] text-[#1C1C1C] sm:text-[36px] 2xl:text-[64px]">&</span>{" "}
          <span className=" Boldy text-[30px] sm:text-[48px] 2xl:text-[70px] text-3xl text-[#1C1C1C]">
            FEATURES
          </span>
        </div>
        <div className="flex sm:flex-row justify-center items-center gap-10  pb-20">
          <div>
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/06baa6cdd698c5fdbfed0312edc9d0c1862da66c-155x155.png"
              alt="Award1"
              className="sm:h-[120px] h-[80px]"
            />
          </div>
          <div>
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/65e6200766a57d5d7d6a8391dd60f4611cd08a27-127x155.png"
              alt="Award2"
              className="sm:h-[120px] h-[80px]"
            />
          </div>
          <div>
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/cbec8b97a6bf71eb2e5e6e17c64d746796d51085-154x155.png"
              alt="Award3"
              className="sm:h-[120px] h-[80px]"
            />
          </div>
        </div>
      </div>
      <div className="sm:h-full h-[450px] object-cover flex justify-center items-center">
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/719b9927c0c61f58c77df7c4c9ddaca3af3a715d-2560x920.png"
          className="object-cover h-full w-full"
          alt="Quote"
        />
      </div>
    </div>
  );
}
export default Thoughts;