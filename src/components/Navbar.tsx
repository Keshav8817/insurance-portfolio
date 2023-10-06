function Navbar() {
  return (
    <div className="bg-black/70 w-full h-[140px] z-50  fixed ">
      <div className="container   fixed  p-5  ">
        <div className="flex items-center justify-between">
          {/* Left Side */}

          <div className="flex items-center space-x-4">
            <img
              src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"
              alt="plurk"
              className="h-[100px] w-[120px]"
            />

            <div className="text-white font-bold text-xl"></div>
          </div>

          <div className="flex items-center w-full justify-evenly">
            <ul className="flex space-x-10">
              <li className=" hover:scale-150 transition-transform duration-300 ease-in-out text-2xl text-white">Home</li>

              <li className=" text-2xl hover:scale-150 transition-transform duration-300 ease-in-out text-white">Service</li>

              <li className=" text-2xl hover:scale-150 transition-transform duration-300 ease-in-out text-white">Team</li>

              <li className=" text-2xl  hover:scale-150 transition-transform duration-300 ease-in-out text-white">About Us</li>

              <li className=" text-2xl hover:scale-150 transition-transform duration-300 ease-in-out text-white">Career</li>
            </ul>
          </div>

          {/* Right Side */}
        


          <div className="flex items-center space-x-8  h-30 ]">
        <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
  </svg>
  <span className="sr-only">Search</span>
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
