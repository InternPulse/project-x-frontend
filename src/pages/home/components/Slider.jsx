"use client";

import Man from "../../../assets/Man.png";
import PrettyLady from "../../../assets/PrettyLady.png";

import { Carousel } from "flowbite-react";

function Slider() {
  return (
    <div className="h-56 sm:h-[20rem] xl:h-80 2xl:h-[35rem]">
      <Carousel>
        <div className="flex flex-col  h-full  items-center  gap-5 justify-start bg-neutral-100 dark:bg-gray-700 dark:text-white ">
          <div className="border  border-white h-[70px] w-[70px] rounded-[100%] bg-white mt-2">
            <img src={PrettyLady} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div>
            <p className="text-center mx-5 md:mx-20 ">
              "spLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              natus laboriosam beatae quia quas accusantium temporibus harum
              molestiae dicta autem ullam dolorem, iste porro et aliquid hic
              alias nihil sint."Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Laborum inventore nam cum est, laudantium
              incidunt obcaecati assumenda iure doloribus eum aperiam fugit quas
              voluptas eligendi corporis voluptatibus? Voluptas fugiat delectus,
              libero, dolore quaerat natus fuga at aut minima, molestias
              inventore!
            </p>
          </div>
        </div>

        <div className="flex flex-col h-full  items-center gap-5 justify-start bg-neutral-100 dark:bg-gray-700 dark:text-white ">
          <div className="border  border-white h-[70px] w-[70px] rounded-[100%] bg-white mt-2">
            <img src={Man} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div>
            <p className="text-center mx-5 md:mx-20">
              "spLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              natus laboriosam beatae quia quas accusantium temporibus harum
              molestiae dicta autem ullam dolorem, iste porro et aliquid hic
              alias nihil sint."
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
