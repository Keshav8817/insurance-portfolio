import React from "react";

import Marquee from "react-fast-marquee";

export const Fifthsec = () => {
  return (
    <>
      <div>
        <section className="overflow-hidden py-14 bg-black md:py-20 pl-[236px] px-20">
          <div className="container">
            <div className="font-semibold uppercase italic">
              {/* <img

    src="./Images/08.svg"

    alt="loading"

    data-aos="fade-down"

    data-aos-duration="1500"

    className="aos-init aos-animate"

  /> */}

              <h2
                className="mb-3 -mt-6 text-2xl font-slate-500 md:-mt-10 md:text-6xl  md:leading-normal"
                data-aos="fade-right"
              >
                <span className="text-cyan-500 dark:text-white">Blog </span>

                <span className="text-border-gray tracking-wider">&amp; </span>

                <span className=" bg-white bg-clip-text pr-4 text-white"></span>
              </h2>

              <p className="leading-loose xl:w-1/2 text-white">
                Unlock the latest trends/news
              </p>
            </div>

            <div className="mt-8 grid gap-y-10 gap-x-7 italic sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {/* Repeat the following block for each news item */}

              <div
                className="group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="overflow-hidden sm:h-64">
                  <img
                    src="./blog1.jpg"
                    alt=""
                    className="h-[250px] w-[350px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="pt-5 font-extrabold">
                  <div className="inline-block bg-gray-50 p-2.5 text-sm font-bold">
                    December 25, 2022
                  </div>

                  <a className="my-3 block text-[22px] leading-9 text-white transition line-clamp-2 hover:text-secondary dark:text-white">
                    How to brace and breathe properly for weightlifting
                  </a>

                  <p className="mb-5 font-semibold text-white line-clamp-3">
                    It has roots in a piece of classical Latin literature from
                    45 BC, making it over 2000 years old.
                  </p>

                  <a className="text-secondary  text-cyan-500 transition hover:text-primary">
                    Read More
                  </a>
                </div>
              </div>

              {/* End of news item block */}

              <div
                className="group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="overflow-hidden sm:h-64">
                  <img
                    src="./blog2.jpg"
                    alt="loading"
                    className="h-[250px] w-[350px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="pt-5 font-extrabold">
                  <div className="inline-block bg-white p-2.5 text-sm font-bold">
                    March 13, 2023
                  </div>

                  <a className="my-3 block text-[22px] leading-9 text-white transition line-clamp-2 hover:text-secondary dark:text-white">
                    How to brace and breathe properly for weightlifting
                  </a>

                  <p className="mb-5 font-semibold text-white line-clamp-3">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>

                  <a className="text-secondary text-cyan-500 transition hover:text-primary">
                    Read More
                  </a>
                </div>
              </div>

              <div
                className="group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="overflow-hidden sm:h-64">
                  <img
                    src="./blog3.jpg"
                    alt=""
                    className=" h-[250px] w-[350px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="pt-5 font-extrabold">
                  <div className="inline-block bg-white p-2.5 text-sm font-bold">
                    June 05, 2023
                  </div>

                  <a className="my-3 block text-[22px] leading-9 text-white transition line-clamp-2 hover:text-secondary dark:text-white">
                    How to brace and breathe properly for weightlifting
                  </a>

                  <p className="mb-5 font-semibold text-white line-clamp-3">
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose.
                  </p>

                  <a className="text-secondary  text-cyan-500 transition hover:text-primary">
                    Read More
                  </a>
                </div>
              </div>

              {/* end of news */}
            </div>
          </div>
        </section>
      </div>

      <div>
        <Marquee
          pauseOnHover
          speed={100}
          gradientColor="cyan"
          gradientWidth={30}
        >
          <div className=" w-full " data-aos="fade-down-right">
            <img className="m-0 p-[41px] " src="./logos.png"></img>
          </div>{" "}
        </Marquee>
      </div>
      <div className="  w-full flex "></div>

      {/* {form} */}
      <div>
        {/* component */}
        <div className="flex justify-center items-center w-screen h-screen bg-white">
          {/* COMPONENT CODE */}
          <div
            className="container mx-auto my-4 px-4 lg:px-20"
            data-aos="fade-left"  data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  defaultValue={""}
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div
              className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl"
             data-aos= "zoom-in-left"  data-aos-easing="linear"
             data-aos-duration="1500"
            >
              <div className="flex flex-col text-white">
                <h1 className="font-bold uppercase text-4xl my-4">
                  Drop in our office
                </h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.
                  Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
                  ex.
                </p>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Main Office</h2>
                      <p className="text-gray-400">
                        5555 Tailwind RD, Pleasant Grove, UT 73533
                      </p>
                    </div>
                  </i>
                </div>
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2"></i>
                    </div>
                    <i className="fas fa-phone-alt pt-2 pr-2">
                      <div className="flex flex-col">
                        <h2 className="text-2xl">Call Us</h2>
                        <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                        <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                      </div>
                    </i>
                  </div>
                  <i className="fas fa-phone-alt pt-2 pr-2">
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                      <a
                        href="https://www.facebook.com/ENLIGHTENEERING/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                      >
                        <i className="fab fa-facebook-f text-blue-900"></i>
                      </a>
                      <i className="fab fa-facebook-f text-blue-900">
                        <a
                          href="https://www.linkedin.com/company/enlighteneering-inc-"
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                        >
                          <i className="fab fa-linkedin-in text-blue-900"></i>
                        </a>
                        <i className="fab fa-linkedin-in text-blue-900"></i>
                      </i>
                    </div>
                    <i className="fab fa-facebook-f text-blue-900">
                      <i className="fab fa-linkedin-in text-blue-900"></i>
                    </i>
                  </i>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {new section footer} */}
      <div className="h-[5px] w-full bg-black/30 "></div>

      <footer className=" bg-white/90 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent"   data-aos= "zoom-in-left" >
        <div className="container">
          <div className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px] pl-64">
            <div className="relative">
              <img
                src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"
                alt=""
                className="h-[100px] w-auto"
              />

              <ul className="mt-12 flex items-center gap-8" data-aos= "flip-left"  data-aos-easing="linear"
             data-aos-duration="1000"></ul>

              <div className="flex mr-5">
                <img
                  src="https://img.freepik.com/premium-vector/social-media-icon-illustration-facebook-facebook-icon-vector-illustration_561158-2134.jpg"
                  alt="facebook"
                  className="text-black/80 h-7 w-auto "
                />

                <ul className="mt-12 mr-5 flex gap-8"></ul>

                <img
                  src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
                  alt="twitter"
                  className="text-black/80 h-7 w-auto "
                />

                <ul className="mt-12 flex items-center gap-8">
                  <li>
                    <a>
                      <svg
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="currentColor"
                        // xmlns="http://www.w3.org/2000/svg"

                        className="transition hover:scale-110 hover:text-secondary"
                      ></svg>
                    </a>
                  </li>
                </ul>

                <img
                  src="data:image/jpeg;base64,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"
                  alt="instagram"
                  className="text-black/80 h-7 w-auto "
                />

                <ul className="mt-12 flex items-center gap-8">
                  <li>
                    <a>
                      <svg
                        width="10"
                        height="20"
                        viewBox="0 0 10 20"
                        fill="none"
                        // xmlns="http://www.w3.org/2000/svg"

                        className="transition hover:scale-110 hover:text-secondary"
                      ></svg>
                    </a>
                  </li>

                  <li>
                    <a>
                      <svg
                        width="23"
                        height="18"
                        viewBox="0 0 23 18"
                        fill="none"
                        // xmlns="http://www.w3.org/2000/svg"

                        className="transition hover:scale-110 hover:text-secondary"
                      ></svg>
                    </a>
                  </li>

                  <li>
                    <a>
                      <svg
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="currentColor"
                        // xmlns="http://www.w3.org/2000/svg"

                        className="transition hover:scale-110 hover:text-secondary"
                      ></svg>
                    </a>
                  </li>
                </ul>
              </div>

              <img
                src="https://react.plurk.sbthemes.com/assets/images/footer-shape.png"
                alt="footer-shape"
                className="absolute bottom-0 right-0 sm:left-0"
              />
              <img
                src="./Images/footer-shape-dark.png"
                alt="footer-shape-dark"
                className="absolute bottom-0 right-0 hidden dark:block sm:left-0"
              />
            </div>

            <div>
              <ul className="flex flex-col gap-3 font-bold" data-aos= "flip-left"  data-aos-easing="linear"
             data-aos-duration="1000">
                <li className="mb-3 text-lg font-extrabold text-black dark:text-white">
                  Quick Menu
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    Home
                  </a>
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    Membership
                  </a>
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    Team
                  </a>
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    About Us
                  </a>
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-3 font-bold" data-aos= "flip-right"  data-aos-easing="linear"
             data-aos-duration="1000">
                <li className="mb-3 text-lg font-extrabold text-black dark:text-white">
                  Legal
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    Terms &amp; Conditions
                  </a>
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    FAQs
                  </a>
                </li>

                <li>
                  <a className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-3 font-bold" data-aos= "flip-left"  data-aos-easing="linear"
             data-aos-duration="1000">
                <li className="mb-3 text-lg font-extrabold text-black dark:text-white">
                  Information
                </li>

                <li className="text-black/80">
                  539 Nuevo Reese Ave, Fresno, CA 93722
                </li>

                <li>
                  <a
                    href="tel:+(617) 489-2321"
                    className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                  >
                    +(617) 489-2321
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-5 dark:border-t-2 dark:border-white/5 dark:bg-none">
          <div className="container">
            <div className="text-black/80 items-center justify-between text-center font-bold dark:text-white md:flex">
              <div>
                <a className="text-black/80 text-primary transition hover:text-secondary">
                  @Healthy life Pvt. Ltd.
                </a>
              </div>

              <div className="flex">
                Need help? Visit the Contact Us
                {/* <a

          className="text-black/80 text-secondary transition hover:text-primary"> Contact Us

          </a> */}
               
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
