// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
interface Slide {
slide: string;
}

interface GalleryProps {
  pretitle: string;
  heading: string;
  galleryImages: Slide[];
}

const Gallery: React.FC<GalleryProps> = ({
  pretitle,
  heading,
  galleryImages,
}) => {
  return (
    <div className=" lg:py-[90px] bg-[#DFDFDF33] lg:my-20 my-10 lg:rounded-[90px] rounded-[30px] py-16">
      <div className="custom-container">
        <p className="text-helper text-center">{pretitle}</p>
        <h2 className="lg:text-6xl md:text-5xl text-4xl font-medium text-center mt-3">
          {heading}
        </h2>
      </div>

      <div className="relative md:mt-[70px] mt-12">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          initialSlide={1}
          watchSlidesProgress={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          className="testimonals"
        >
          {galleryImages.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <div>
                <div className="border border-[#F1F1F1] rounded-[50px]  ">
                  <img
                    loading="lazy"
                    src={slide}
                    className="w-full lg:h-[500px]"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:w-[700px] md:w-[600px] sm:w-[500px]  w-11/12 mx-auto">
          <div className=" absolute lg:w-[700px] md:w-[600px] sm:w-[500px]  w-11/12  md:-ml-8 -ml-6 px-3  flex justify-between items-center top-1/2">
            <div className="prev cursor-pointer">
              <div className=" bg-secondary rounded-full md:w-16 md:h-16 w-10 h-10 p-3 top-1/2 z-10  absolute flex justify-center items-center">
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
              <div className=" bg-secondary rounded-full md:w-16 md:h-16 w-10 h-10 p-3 top-1/2  z-10 absolute flex justify-center items-center">
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
    </div>
  );
};

export default Gallery;
