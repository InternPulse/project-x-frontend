"use client";

import Man from "../../../assets/Man.png";
import PrettyLady from "../../../assets/PrettyLady.png";
import QuoteEnd from "../../../assets/QuoteEnd.png";
import QuoteStart from "../../../assets/QuoteStart.png";

import { Carousel } from "flowbite-react";

function Slider() {
  return (
    <div className="h-[35rem] sm:h-[23rem] xl:h-80 2xl:h-[35rem]">
      <Carousel>
        <div className="flex flex-col h-full items-center w-[100%] gap-5 justify-start dark:bg-gray-700 dark:text-white relative">
          <div className="border border-white h-[75px] w-[75px] rounded-[100%] bg-primary-900 mt-2 mb-[-4px]">
            <img src={PrettyLady} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div className="mx-2 md:mx-40 flex flex-col items-center justify-center relative">
            <h3>Jane Doe</h3>
            <p>2022 Product Management track</p>
            <div className="flex items-start justify-start relative">
              <img src={QuoteStart} alt="" className="w-[10px] sm:w-[20px] " />
              <p className="text-center   pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                natus laboriosam beatae quia quas accusantium temporibus harum
                molestiae dicta autem ullam dolorem, iste porro et aliquid hic
                alias nihil sint." Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Laborum inventore nam cum est, laudantium
              </p>
              <img
                src={QuoteEnd}
                alt=""
                className="w-[10px] sm:w-[20px] absolute bottom-2 sm:bottom-1 right-10 sm:right-[-3rem] mb-1 mr-0"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
