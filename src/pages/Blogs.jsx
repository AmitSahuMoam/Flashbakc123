

function Blogs() {




  return (
  
  <section className="bg-black dark:bg-gray-900 h-[100vh]">
  <div className="pt-[20vh] px-4 mx-auto max-w-screen-md text-center  lg:px-12 ">
    <svg
      className="mx-auto mb-4 w-10 h-10 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"
      />
    </svg>
    <div className="pt-[30vh]">
    <h1 className=" text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
      Under Maintenance
    </h1>
    <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
      Our Enterprise administrators are performing scheduled maintenance.
    </p>
  </div>
  </div>
</section>

    // <div>
    //   <div
    //     className="h-[70vh] bg-cover bg-center"
    //     style={{
    //       backgroundImage: `url('https://cdn.sanity.io/images/u8qx4arf/production/8b41a4ab1b603507b4a8e98a6b189ec8bd571575-2560x886.png')`,
    //     }}
    //   >
    //     <Header />
    //   </div>

    //   <div className="min-h-screen bg-[#322E2B] justify-center flex p-4">
    //     <div className="sm:w-2/3 mt-8 mb-10">
    //       <div className="flex sm:flex-row flex-col">
    //         <div className="flex-1 flex-col m-5">
    //           <div className="flex flex-row sm:flex-col">
    //             <div className="flex" >
    //               <p className="text-white font-extrabold uppercase sm:text-[48px] 2xl:text-[70px] text-[40px]">
    //                 Rahul
    //               </p>{" "}
    //               <p className="text-yellow-400 Actonia font-extrabold uppercase sm:text-[48px] 2xl:text-[70px] text-[40px] mx-1 mt-1">
    //                 &
    //               </p>
    //             </div>
    //             <div>
    //               <p className="text-white font-extrabold uppercase sm:text-[48px] 2xl:text-[70px] text-[40px] sm:-mt-4">
    //                 Fabians
    //               </p>
    //             </div>
    //           </div>
    //           <div className="w-full flex justify-end">
    //             <p className="Actonia text-yellow-400 sm:text-[36px] 2xl:text-[64px] text-[40px] -mt-5">experiences</p>
    //           </div>
    //         </div>
    //         <div className="flex-1 m-5">
    //           <p className=" Courier text-[#D8CAB1] text-[16px] 2xl:text-[20px] leading-normal">
    //             <p className=" text-white text-[16px] 2xl:text-[20px]">Rahul DSouza and Fabian Franco,</p>{" "}
    //             both seasoned photographers with a shared passion for capturing
    //             love stories, eagerly anticipate sharing their diverse
    //             experiences in photographing weddings of all kinds.
    //           </p>
    //         </div>
    //         <div className="flex-1 m-5">
    //           <p className=" Courier text-[#D8CAB1]  2xl:text-[20px] leading-normal">
    //             From the tears of joy exchanged in intimate backyard ceremonies
    //             to the exhilarating dance floors of grand destination
    //             extravaganzas, theyve experienced the full gamut of wedding
    //             celebrations.
    //           </p>
    //         </div>
    //       </div>
    //       {blogsData?.map((item, index) => (
    //         <div className="p-5">
    //           <BlogTile
    //             imageUrl={item?.coverImage}
    //             date={item?.created_at}
    //             length={`${item?.readingTime || 10} min read`}
    //             location={item?.state}
    //             tags="Wedding, Photography"
    //             title={item?.title}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Blogs;
