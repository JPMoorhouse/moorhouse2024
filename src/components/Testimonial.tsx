// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
interface Slide {
  Cardicon: string;
  cardText: string;
  cardDescription: string;
  author: string;
  authorName: string;
  authorpost: string;
  rating: number;
}

interface TestimonialProps {
  pretitle: string;
  heading: string;
  Testimonials: Slide[];
}

const Testimonial: React.FC<TestimonialProps> = ({ pretitle, heading, Testimonials }) => {
  return(
    <div className=" lg:py-[90px] py-16">
      <div className="custom-container">
        <p className="text-helper text-center">{pretitle}</p>
        <h2 className="lg:text-6xl md:text-5xl text-4xl  lg:leading-[70px] mx-auto font-medium text-center text-black mt-3">
       {heading}
        </h2>
      </div>

      <div className="relative md:mt-[70px] mt-12">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          initialSlide={2}
          watchSlidesProgress={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]}

          pagination={{
            clickable: true,
          }}
          className="testimonals"
        >
          {Testimonials.map((slide:any, index:number) => (
            <SwiperSlide key={index}>
              <div  >
                <div className="border border-[#F1F1F1] rounded-[50px] lg:px-20 lg:py-14 md:px-10 md:py-7 px-5 py-4">
                  <div className="flex justify-center items-center gap-2 mb-12">
                    {Array.from(
                      { length: Math.floor(slide.rating) },
                      (_, index) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          key={index}
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_269)">
                            <path
                              d="M25.956 31.088L16 23.7707L6.04402 31.088L9.86668 19.2707L-0.0839844 12H12.2013L16 0.162659L19.7987 12H32.0827L22.1334 19.2707L25.956 31.088Z"
                              fill="#F6D53B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_269">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )
                    )}
                  </div>
                  <h3 className="md:text-xl text-base mb-12  text-center font-light leading-8">
                    {slide.cardText}
                  </h3>
                  <div className="flex justify-center gap-2 items-center">
                    <img src={slide.author} className="" alt="" />
                    <div>
                      <p className="text-[#747474] text-center line-clamp-4">
                        {slide.authorName}
                      </p>
                      <span>{slide.authorpost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:w-[700px] md:w-[600px] sm:w-[500px]  w-11/12 mx-auto">

      
        <div className=" absolute lg:w-[700px] md:w-[600px] sm:w-[500px]  w-11/12  md:-ml-8 -ml-6 px-3  flex justify-between items-center top-1/2">
          <div className="prev cursor-pointer">
            <div className=" bg-helper rounded-full md:w-16 md:h-16 w-10 h-10 p-3 top-1/2 z-50  absolute flex justify-center items-center">
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
            <div className=" bg-helper rounded-full md:w-16 md:h-16 w-10 h-10 p-3 top-1/2  z-50 absolute flex justify-center items-center">
              <svg
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
      <a
        href={""}
        className="rounded-full px-4 py-3 gap-4 bg-white border mx-auto mt-[70px] border-black  flex justify-center items-center w-fit"
      >
        See All Reviews
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
        >
          <g clipPath="url(#clip0_1_321)">
            <path
              d="M25.4522 12.0389L20.3525 6.93919L19.5881 7.70356L24.5808 12.6963H0V13.7774H24.5786L19.587 18.769L20.3514 19.5334L25.4522 14.4326C26.1117 13.7731 26.1117 12.6984 25.4522 12.0389Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_321">
              <rect
                width="25.9474"
                height="25.9474"
                fill="white"
                transform="translate(0 0.263153)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export default Testimonial;
