import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init({
  easing: 'ease-out-quart',
  delay: 0,
  duration: 750
  })
function Forthsec() {
  return (
    <>
      <div className=" bg-[url('./bgimage.jpg')]h-full w-full">
        <div className="flex">
          <div className="item-center mt-[90px] ">
            <img className="h-full w-full" src="./health-img.png" data-aos="fade-left" ></img>
          </div>
          <div className=" p-40" data-aos="fade-right">
            <svg
              className="h-12 w-12 text-blue-900"
              viewBox="0 0 24 24"
              fill="blue"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <br/> <br/>
            <p className="text-sm font-semibold text-cyan-500 lg:text-4xl">
              Health Insurance
            </p>
            <p>
              <br />
            </p>
            <p className="text-sm font-semibold text-gray-400 lg:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Enim ad minim veniam, quis nostrud <br /> exercitation commodo
              consequat.
            </p>
            <br />
            <button className="bg-blue-500 hover:bg-blue-600  hover:scale-120 transition-transform duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full flex items-center">
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
        <div className="bg-[url('https://i.pinimg.com/originals/7f/e7/74/7fe774bbacce09f00cb5b2e3cbc48db3.png')]  bg-opacity-50 h-[400px] flex  p-0 item-center rounded-2xl mt-[25px] ml-11 my-11">
          <div className=" font-bold  lg:text-4xl p-[38px] ml-[155px] text-cyan-500" data-aos="fade-left">
            <p>
              {" "}
              Find an Insurance agent <br /> Call us anytime
            </p>
            <br/>


            <div className=" font-bold  lg:text-xl text-slate-50 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod
                <br /> tempor incididunt ut labore et dolore magna aliqua. Enim
                ad minim <br />
                Lorem ipsum dolor sit amet conse
              </p>
            </div>
          </div>
          <div className=" float-right  ml-[252px] p-12">
            <div className="  "  data-aos="fade-right">
              <i  className="font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Toll free</i>

            </div>
            <br />
<div className="flex  hover:scale-120 transition-transform duration-300 ease-in-out">
<svg className="h-10 w-10 text-blue-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
</svg> 
            <a
              href="#"
              className="lg:text-4xl text-blue-600 dark:text-blue-500  hover:underline"
              data-aos="fade-right"
            >
              +9177633776 

            </a>
          
            
            </div>
          </div>
        </div>
        <div className="bg-[url('')] h-[650px] flex ">
          <div className=" m-36 " data-aos='fade-left'>
            <div className=" font-bold  lg:text-4xl text-cyan-500  ">
              <p>Travel Insurance</p>
              <br />
              <div className=" font-bold  lg:text-xl text-black ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed{" "}
                  <br /> eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                  <br /> Enim ad minim veniam, quis nostrud exercitation commodo
                  consequat.
                </p>
              </div>
              <br />
              <button className="bg-blue-500 hover:bg-blue-600 text-white  lg:text-xl py-2 px-4 rounded-full flex items-center">
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
            </div>{" "}
          </div>
          <div className=" p-36"  data-aos='fade-right'>
            <img className="h-[500px] w-full" src="./traval-img.png"></img>
          </div>
        </div>

       {
        // testinomial section start
       }
        <div className=" bg-cyan-950 rounded-2xl ml-11 my-11   ">
          <div className="  pt-20 ml-11 my-11" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <i className=" font-bold text-cyan-200 ml-[131px] lg:text-xl text-slate-50">
              Testinomial
            </i>
            <br />
            <br />
            <i className=" font-bold ml-[131px]  lg:text-3xl text-slate-50">
              {" "}
              Feedback from our clients
            </i>

            <div className="flex hover:scale-110 transition-transform duration-300 ease-in-out ">
              <div className="float-left p-40 m-[37px] rounded-3xl    bg-cyan-900" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <br />
                <br />

                <i className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem magna
                  <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Eum earum <br />
                  que ratione autem dicta, magnam consectetur reprehenderit
                  odit, recusandae libero aliquid
                  <br /> rerum ipsum minima suscipit dolores assumenda.
                </i>
                <br />
                <br />
                <br />
                <i className="text-xl non-italic font-bold ">
                  {" "}
                  Albert De-capro
                </i>
                <br />
                <i className="text-gray-500 italic font-bold ">
                  CEO synofist Pvt lim
                </i>
              </div>
              <div className="float-right">
                <img
                  className="h-[370px] w-[250px] rounded-2xl"
                  src="./formal.jpg"
                ></img>
              </div>
            </div>
            <div className="p-[18px] pl-[232px]">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  View All
</button></div>
          </div>
        </div>

        {/* new section grid */}
        <div className=" h-[500px] ">
          <div className=" grid  grid-cols-3 gap-4 h-[200px] justify-center text-center bg-blue">
            <div className="  mt-[141px] h-[200px]">
              {/* {grid 01} */}
              <div className="justify-center text-center " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-white via-slate-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  <svg
                    className="h-16 w-16 text-white items-center text-center justify-center"
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
                    <rect x="4" y="13" rx="2" width="4" height="6" />{" "}
                    <rect x="16" y="13" rx="2" width="4" height="6" />{" "}
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />{" "}
                    <path d="M18 19a6 3 0 0 1 -6 3" />
                  </svg>
                </button>
                <br />
                <i className=" text-bold text-2xl justify-center items-center  text-slate-500 ">
                  Reliable partner
                </i>{" "}
                <br />
                <i className=" text-bold  justify-center items-center  text-black">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Veniam rjhcgbgcyu hhh
                </i>
              </div>
            </div>
            <div className="   mt-[141px] h-[200px]">
              {/* {grid 02} */}
              <div className=" item-center" data-aos="fade-down"
     data-aos-anchor-placement="center-bottom">
              <button
                  type="button"
                  className="text-white bg-gradient-to-r from-white via-slate-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  <svg
                    className="h-16 w-16 text-white"
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
                    <path d="M12 10L6 20l-3-5L9 5z" />{" "}
                    <path d="M9 15h12l-3 5h-12" />{" "}
                    <path d="M15 15L9 5h6l6 10z" />
                  </svg>
                </button>
               
                <br/>
                <i className=" text-bold text-4xl text-slate-500 ">
                  Tailored Plans
                </i><br />
                <i className=" text-bold  justify-center items-center  text-black">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Veniam rjhcgbgcyu hhh
                </i>

              </div>
            </div>
            <div className="   mt-[141px] h-[200px]">
              {/* {grid 02} */}
              <div className=" item-center" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              <button
                  type="button"
                  className="text-white bg-gradient-to-r from-white via-slate-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                 <svg className="h-16 w-16 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
</svg>

                </button>
               
                <br/>
                <i className=" text-bold text-4xl text-slate-500 ">
                Best-in-class services
                </i><br />
                <i className=" text-bold  justify-center items-center  text-black">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Veniam rjhcgbgcyu hhh
                </i>

              </div>
            </div>
           
            </div>
          </div>
      
      </div>
    </>
  );
}

export default Forthsec;
