import React from "react";
import video from "./production_id_4896502 (1080p).mp4"
// import { basic } from "../assets/banner.png";

function Banner() {
  return (
    <><div className="">
      <div className=" ">
        <div className="  gap-x-3 h-full w-[1100px]">
          <video
            className="  object:cover absolute opacity-80  rounded-br-[700px]"
            src={video}
            autoPlay
            loop
            muted
          >
            <div
              className="  items-center justify-center overlay space-x-2  "
              data-aos="fade-left"
            >
              {/* <div className="flex-1 p-20"> */}
              <h1 className="text-slate-100 text-center p-0 font-bold text-6xl">
                <i>GET INSURANCE </i>
              </h1><span>
              <h1 className="text-blue-600 text-center font-bold text-6xl">
                <i>POLICY AND </i>
              </h1>
              <h1 className="text-pink-600 text-center font-bold text-6xl">
                <i>Save 20%! </i>
              </h1></span>
              <br />
              <br />
 
              <h1 className="text-slate-100  text-center font-bold text-1xl">
                <i>Lorem ipsum dolor sit amet consectetur </i>
              </h1>
              <h1 className="text-slate-100 font-bold  text-center text-1xl">
                <i>
                  typesetting industry and uses Latin words combined with <br />{" "}
                  lorem Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. 2
                  <br /> Voluptatibus enim numquam laborum tempore at amet ab
                  necessitatibua{" "}
                </i>
              </h1>
              <br />
              <div className=" p-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                  <span className="mr-2">Get a Quote</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* <div className="h-992px w-717px bg-blue"> */}
            <div className="float-right mt-[119px] m-0 justify-between">
              <img
                src="/banner_img.png"
                className="h-50 w-78% pl-24"
                data-aos="fade-left"
              ></img>
            </div>
          </video>
        </div>
      </div>
      <div
        className=" flex  overlay  items-center  justify-center text-center bg-black/20  h-[1011px] w-full space-x-2 mx-5 p-32 "
        data-aos="fade-left"
      ><div className="mt-[135px]">
        {/* <div className="flex-1 p-20"> */}
        <h1 className="text-cyan-500  justify-center font-bold text-7xl"  data-aos="fade-right">
          <i>GET INSURANCE </i>
        </h1>
        <h1 className="text-blue-600 font-bold text-7xl" data-aos="fade-right">
          <i>POLICY AND </i>
        </h1>
        <h1 className="text-pink-600 font-bold text-7xl" data-aos="fade-right">
          <i>Save 20%! </i>
        </h1>
        <br />
        <br />

        <h1 className="text-black-100 font-bold text-2xl" data-aos="fade-right">
          <i>Lorem ipsum dolor sit amet consectetur </i>
        </h1>
        <h1 className="text-black-100 font-bold text-2xl" data-aos="fade-left">
          <i>
            typesetting industry and uses Latin words combined with  lorem
            Lorem ipsum dolor,<br/> sit amet consectetur adipisicing elit. 2
            <br /> Voluptatibus enim numquam laborum tempore at amet ab
            necessitatibua{" "}
          </i>
        </h1>
        <br />
        <br/>
        <div className=" p-3 justify-center items-center ml-[362px] " data-aos="fade-right">
          <button className="bg-blue-500 hover:bg-blue-600 text-white  font-bold py-2 px-4 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out flex items-center">
            <span className="mr-2  text-2xl">Get a Quote</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>

      {/* <div className="h-992px w-717px bg-blue"> */}
      {/* <div className="float-right mt-[-471px] p-0  mr-[91px] justify-between">
        <img
          src="./banner_img (1).png"
          className=" pl-24"
          data-aos="fade-left"
        ></img>
      </div> */}

</div>
      {/* {first section complete} */}
      <div
        className="aos-init  aos-animate"
        data-aos="fade-up-right"
      >
        <div className="container">
          <div className="flex flex-col gap-7 lg:flex-row m-[115px]">
            <div className="mx-auto h-[450px] w-full max-w-[380px] flex-none overflow-hidden rounded-b-[160px] rounded-tl-[200px] rounded-tr-[20px] border-[10px] border-white dark:border-gray-dark">
              <img
                src="https://bambiniphoto.sg/wp-content/uploads/family-photography-bambini-025.jpg"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between text-left ltr:md:text-left rtl:md:text-right">
              <div>
                <p className="mb-2.5 text-lg font-semibold text-cyan-500">
                  know more
                </p>
                <h2 className="mb-4 text-2xl font-extrabold text-underline text-purple dark:text-white md:text-3xl lg:text-[40px] lg:leading-tight">
                  About
                  {/* <span className="text-secondary ">About</span>Company */}
                </h2>
                <p className="mb-5 lg:text-lg text-1xl">
                  Invest in your drivers, improve their safety and reduce the
                  risk of incidents with our compre hensive courses and seminars
                  tailored to the needs of your organisation. With a choice of
                  full or half-day sessions, all are flexible to fit with.
                </p>
                <p className="lg:text-lg text-1xl">
                  From lost luggage to unexpected medical expenses, we’re there
                  to help when things don’t go to plan. With basic cover from
                  only $2.84 a day 1, Real Travel Insurance can give you
                  affordable peace of mind when you’re travelling.
                </p>
              </div>
              <div className="mt-4 grid gap-4 rounded-[10px] bg-white p-5 dark:bg-gray-dark sm:grid-cols-3 ltr:lg:-ml-60 rtl:lg:-mr-60 xl:gap-[72px]">
                <div
                  className="flex items-center gap-4 "
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px] bg-primary text-white lg:h-20 lg:w-20">
                    <button className="bg-cyan-500 hover:bg-cyan-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      <svg
                        className="h-20 w-20 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="9" />{" "}
                        <line x1="9" y1="9" x2="9.01" y2="9" />{" "}
                        <line x1="15" y1="9" x2="15.01" y2="9" />{" "}
                        <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                      </svg>
                    </button>{" "}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold z-10 text-black dark:text-white lg:text-2xl">
                      <div className="inline-flex text-secondary p-[8px]">
                        <span>12+</span>
                      </div>
                      Happy
                    </h3>
                    <p className="text-sm font-semibold text-gray lg:text-xl p-[8px]">
                      Customers
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-black dark:text-white lg:text-2xl">
                      <div
                        className="inline-flex text-secondary p-0 "
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        <button className="bg-cyan-500 hover:bg-cyan-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                          <svg
                            className="h-20 w-20 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            {" "}
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                          </svg>
                        </button>
                        <span className="p-[10px]">
                          25+ Offers Of Insurance
                        </span>
                      </div>
                    </h3>
                  </div>
                </div>

                <div
                  className="flex items-center grid-gap-4 w-[243px] z-20 pt-0 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px] bg-primary text-white lg:h-20 lg:w-20">
                    <button className="bg-cyan-500 hover:bg-cyan-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      <svg
                        className="h-20 w-20 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
                        <circle cx="9" cy="7" r="4" />{" "}
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />{" "}
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <div className="mb-1 text-lg font-bold inline-flex text-secondary text-black dark:text-white pl-[22px] lg:text-2xl">
                      10+ Years Of experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
