import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface Slide {
  Cardicon: string;
  cardText: string;
  cardDescription: string;
}

interface WhatToExpectProps {
  pretitle: string;
  heading: string;
  WhatToExpect: Slide[];
}

const WhatToExpect: React.FC<WhatToExpectProps> = ({ pretitle, heading, WhatToExpect }) => {
  return (
    <div className="lg:py-20 pt-16 pb-24 custom-container relative">
      <p className="text-helper text-center text-lg mb-4">{pretitle}</p>
      <h2 className="lg:text-6xl md:text-5xl text-4xl lg:w-2/3 lg:leading-[70px] mx-auto font-medium text-center lg:mb-32 mb-10  mt-3">
        {heading}
      </h2>
      <div className="relative">
        <div className="2xl:px-20 xl:px-16 lg:px-14 md:px-[4.5rem] px-14">
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              1100: {
                slidesPerView: 3,
              },
              780: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {WhatToExpect.map((slide, index) => (
              <SwiperSlide key={index} className="slide-item">
                <div className="border border-[#F1F1F1] rounded-[30px] px-6 py-8">
                  <img
                    src={slide.Cardicon}
                    className="bg-primary bg-opacity-15 mx-auto rounded-2xl p-2"
                    alt=""
                  />
                  <h3 className="text-xl font-medium  my-6 text-center md:h-14 leading-normal">
                    {slide.cardText}
                  </h3>
                  <p className="text-[#747474] text-center line-clamp-4">
                    {slide.cardDescription}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev cursor-pointer">
            <div className=" bg-primary rounded-full md:w-16 md:h-16 w-10 h-10 p-3 top-1/2 z-10 left-0 absolute flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clipPath="url(#clip0_1_203)">
                  <path
                    d="M0.547796 11.7758L5.64753 6.67603L6.4119 7.44039L1.4192 12.4331H26V13.5142H1.42136L6.41298 18.5059L5.64862 19.2702L0.547796 14.1694C-0.1117 13.5099 -0.1117 12.4353 0.547796 11.7758Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_203">
                    <rect
                      width="25.9474"
                      height="25.9474"
                      fill="white"
                      transform="matrix(-1 0 0 1 26 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="next cursor-pointer">
            <div className=" bg-primary rounded-full md:w-16 md:h-16 w-10 h-10 p-3 top-1/2 right-0 z-10 absolute flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clipPath="url(#clip0_1_199)">
                  <path
                    d="M25.4522 11.7758L20.3525 6.67603L19.5881 7.44039L24.5808 12.4331H0V13.5142H24.5786L19.587 18.5059L20.3514 19.2702L25.4522 14.1694C26.1117 13.5099 26.1117 12.4353 25.4522 11.7758Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_199">
                    <rect width="25.9474" height="25.9474" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
