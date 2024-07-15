import { useEffect } from "react";
import Header from "../components/Header";
import BlogTile from "../components/BlogTile";
import useFetchData from "../customHooks/useFetchData";


function Blogs() {
  const { blogsData, fetchBlogs } = useFetchData();

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.sanity.io/images/u8qx4arf/production/8b41a4ab1b603507b4a8e98a6b189ec8bd571575-2560x886.png')`,
        }}
      >
        <Header />
      </div>

      <div className="min-h-screen bg-[#322E2B] justify-center flex p-4">
        <div className="sm:w-2/3 mt-8 mb-10">
          <div className="flex sm:flex-row flex-col">
            <div className="flex-1 flex-col m-5">
              <div className="flex flex-row sm:flex-col">
                <div className="flex" >
                  <p className="text-white font-extrabold uppercase sm:text-[48px] text-[40px]">
                    Rahul
                  </p>{" "}
                  <p className="text-yellow-400 Actonia font-extrabold uppercase sm:text-[48px] text-[40px] mx-1 mt-1">
                    &
                  </p>
                </div>
                <div>
                  <p className="text-white font-extrabold uppercase sm:text-[48px] text-[40px] sm:-mt-4">
                    Fabians
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <p className="Actonia text-yellow-400 sm:text-[36px] text-[30px] -mt-5">experiences</p>
              </div>
            </div>
            <div className="flex-1 m-5">
              <p className=" Courier text-[#D8CAB1] text-[16px] leading-normal">
                <p className=" text-white text-[16px]">Rahul DSouza and Fabian Franco,</p>{" "}
                both seasoned photographers with a shared passion for capturing
                love stories, eagerly anticipate sharing their diverse
                experiences in photographing weddings of all kinds.
              </p>
            </div>
            <div className="flex-1 m-5">
              <p className=" Courier text-[#D8CAB1] text-[16px] leading-normal">
                From the tears of joy exchanged in intimate backyard ceremonies
                to the exhilarating dance floors of grand destination
                extravaganzas, theyve experienced the full gamut of wedding
                celebrations.
              </p>
            </div>
          </div>
          {blogsData?.map((item, index) => (
            <div className="p-5">
              <BlogTile
                imageUrl={item?.coverImage}
                date={item?.created_at}
                length={`${item?.readingTime || 10} min read`}
                location={item?.state}
                tags="Wedding, Photography"
                title={item?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
