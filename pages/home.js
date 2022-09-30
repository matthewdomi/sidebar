import React from "react";
import Navbar from "./components/navbar";
// import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh_-_88px)] bg-scroll bg-background_image h-screen bg-transparent bg-no-repeat bg-cover">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center rounded mt-10 px-3 col-span-1 ">
            <input
              type="text"
              placeholder="search here..."
              id="search"
              className="w-full h-10 rounded-2xl mx-10 items-center outline-none  "
            />
            <button className="shadow-md w-20 h-10 rounded-md justify-center">
              Get Started
            </button>
          </div>

          <div className=" flex mt-10 justify-end">
            {/* <Image src="/images/background.jpg" alt="" height={400} width={500} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
