function Hero() {
  return (
    <div className="bg-hero-pattern h-screen flex flex-auto bg-cover justify-center items-center text-white lg:text-5xl 2xl:text-[70px] text-[35px]  bg-top px-20 pb-12">
      <div className=" mt-auto ml-auto text-yellow-300 flex-col flex 2xl:pr-[100px]  ">
        <div className="Boldy flex flex-row">
          LOVE{" "}
          <p className="Actonia lg:text-5xl 2xl:text-[64px] text-3xl  text-nowrap text-white ml-2 mr-2 2xl:mt-4 mt-2">
            {" "}
            is the{" "}
          </p>                            
          <span className=" text-nowrap Boldy text-white ">WHOLE THING.</span>
        </div>
        <div className="Boldy text-white text-end 2xl:leading-[55px] leading-[15px] pb-4">
          <p> WE ARE ONLY PIECES.</p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
