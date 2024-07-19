function Photos() {
  return (
    <div className="bg-black bg-fixed">
      <div className="h-[70vh]  grid grid-cols-2 gap-1  text-white lg:text-5xl 2xl:text[70px] text-3xl Boldy pt-[13vh] pb-20 pl-20">
        <div className=" h-[60vh] flex flex-row-reverse flex-nowrap">
          <img src="src/assets/images/photosheader.svg" alt="hello" />
        </div>
        <div className="lg:text-5xl 2xl:text[70px]  text-3xl flex-col flex gap-10 pl-10 pt-[10vh]">
          <strong>
            <p>
              Behind
              <div className="flex-row flex gap-2">
                {" "} &nbsp;
                <p className="Actonia lg:text-5xl 2xl:text[64px] text-3xl mb-auto">the</p>
                <p>brand</p>
              </div>
            </p>
            <div className="text-[16px] 2xl:text-[20px] flex-col flex gap-10 pt-5">
              <div className="Courier">
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore
                  magna <br /> aliqua. Justo laoreet sit amet cursus.Consequat
                  interdum <br /> varius sit amet mattis vulputate enim nulla
                  aliquet.<br />
                </h1>{" "}
              </div>
              <div className="Courier">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />{" "}
                sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
                <br /> aliqua. Justo laoreet sit amet cursus.Consequat interdum{" "}
                <br /> varius sit amet mattis vulputate enim nulla aliquet.
                <br />
              </div>
            </div>
          </strong>
        </div>
      </div>

    </div>
  );
}
export default Photos;
