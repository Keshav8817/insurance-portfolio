import React from "react";

const Thirdsection = () => {
  return (
    <>
      {" "}
      <div className="bg-black/90 flex w-[1798px] ">
        <div className=" w-1/2 space-y-8 pt-44 pl-20" data-aos="fade-left">
          <div className="text-slate-100 font-bold text-6xl ">
            <i> Why Choose Insure</i>
            <span>
              <i>Insurance...?</i>
            </span>
          </div>
          <div className="text-gray-100 font-bold text-1xl pl-0 ">
            <p>
              Client satisfaction is our mission. It is a long established fact
              that a reader will be distracted by the readable content of a
              creative page It is a long established fact that a creative page
              It is a long established. We always try our clients to give the
              best support. a reader will be distracted by the readable content
              of a creative page It is a long established
            </p>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-slate-200 dark:text-white">
                Client Satisfy
              </span>
              <span className="text-sm font-medium text-slate-200 dark:text-white">
                85%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: "85%" }}
              />
            </div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-slate-200 dark:text-white">
              skill
            </span>
            <span className="text-sm font-medium text-slate-200 dark:text-white">
              75%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-slate-200 dark:text-white">
              Experience
            </span>
            <span className="text-sm font-medium text-slate-200 dark:text-white">
              75%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
            <br/>

            <div className=" p-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white  hover:scale-120 transition-transform duration-300 ease-in-out font-bold py-2 px-4 rounded-full flex items-center">
                <span className="mr-2">KNOW MORE</span>
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
        {/* {text end} */}
        <div className=" float-right ml-[120px] ">
          
          <div
            className=" absolute z-40 h-[200px] w-[200px] bg-gray-700 bottom-[-1100px] left-0>..."
            data-aos="zoom-in"
          >
            {" "}
            <div className="text-slate-100   hover:scale-120 transition-transform duration-300 ease-in-out text-2xl  p-6">
              24+ YEARS OF INSURERS INSURENCE
            </div>{" "}
          </div>
          <div className=" relative  z-39 h-[850px] w-[650px]  p-28">
            <img
              className="h-full w-full object-cover"
              src="./why-img1.jpg "
              data-aos="zoom-out"
            ></img>
          </div>
          <div className=" relative  z-40 h-[250px] w-[350px]  bottom-[229px] left-[22px]">
            <img
              className="h-full w-full object-cover"
              src="./why-small-img.jpg "
              data-aos="zoom-in"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdsection;
