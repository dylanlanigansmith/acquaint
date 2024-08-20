export default function SideBar({ param }){
    return (
        <div className="flex-1 py-4 pl-10 pr-28 space-y-4 bg-white hidden md:block">
        <div className="sticky top-0 bg-white pb-2">
          <input
            type="text"
            className="block text-black border border-grey-light bg-gray-200 w-full py-2 pl-3 rounded-3xl"
            name="fullname"
            placeholder="Search Twiiter"
          />
        </div>
        <div className="">
          <div className="block bg-gray-50 py-2  px-2 rounded-2xl shadow-sm">
            <p className="font-extrabold text-lg">Trends for you</p>
          </div>
        </div>
        <div className="block bg-gray-50 py-2  sticky top-16 px-2 rounded-2xl shadow-sm">
          <div className="border-b py-2">
            <h1 className="font-extrabold text-lg">Who to follow</h1>
          </div>
          <div className=" block border-b items-center justify-between flex group py-4 px-2 mr-6 text-gray-700  hover:text-blue-400">
            <div className="flex space-x-4">
              <div>
                <p className="font-semibold text-gray-800">Acquaintance</p>
                <span className="text-gray-600">@Acquaintance</span>
              </div>
            </div>

            <div>
              <a
                href=""
                className="inline-block border border-blue-400 text-blue-400 py-1 px-4 rounded-full font-bold"
              >
                Follow
              </a>
            </div>
          </div>
          <div className=" block border-b items-center justify-between flex group py-4 px-2 mr-6 text-gray-700  hover:text-blue-400">
            <div className="flex space-x-4">
              <div>
                <p className="font-semibold text-gray-800">Acquaintance</p>
                <span className="text-gray-600">@Acquaintance</span>
              </div>
            </div>

            <div>
              <a
                href=""
                className="inline-block border border-blue-400 text-blue-400 py-1 px-4 rounded-full font-bold"
              >
                Follow
              </a>
            </div>
          </div>
          <div className=" block border-b items-center justify-between flex group py-4 px-2 mr-6 text-gray-700  hover:text-blue-400">
            <div className="flex space-x-4">
              <div>
                <p className="font-semibold text-gray-800">Acquaintance</p>
                <span className="text-gray-600">@Acquaintance</span>
              </div>
            </div>

            <div>
              <a
                href=""
                className="inline-block border border-blue-400 text-blue-400 py-1 px-4 rounded-full font-bold"
              >
                Follow
              </a>
            </div>
          </div>
          <div className=" block border-b items-center justify-between flex group py-4 px-2 mr-6 text-gray-700  hover:text-blue-400">
            <div className="flex space-x-4">
              <div>
                <p className="font-semibold text-gray-800">Acquaintance</p>
                <span className="text-gray-600">@Acquaintance</span>
              </div>
            </div>

            <div>
              <a
                href=""
                className="inline-block border border-blue-400 text-blue-400 py-1 px-4 rounded-full font-bold"
              >
                Follow
              </a>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm font-bold text-blue-400 py-3">See more</p>
          </div>
        </div>
      </div> )
}