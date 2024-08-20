export default function NavBar({ param }){
    return (
        <div className="w-1/4 border-r bg-white hidden md:block">
        <div className="py-2 pl-28 space-y-3 sticky top-0">
          <div className="block px-2 text-blue-400 text-3xl">
            <span>
              <i className="fa fa-address-card "></i>
            </span>
          </div>
          <div className="block  py-2 px-2 text-blue-400 text-2xl">
            <i className="fa fa-home mr-2"></i>
            <span className="font-extrabold">Home</span>
          </div>
          <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
            <i className="fa fa-hashtag mr-2"></i>{" "}
            <span className="font-semibold group-hover:text-blue-400  text-black">Explore</span>
          </div>
          <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
            <i className="fa fa-bell-o mr-4 "></i>
            <span className="font-semibold group-hover:text-blue-400  text-black">
              Notifications
            </span>
          </div>
          <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
            <i className="fa fa-envelope-o mr-4"></i>{" "}
            <span className="font-semibold group-hover:text-blue-400  text-black">Messages</span>
          </div>
          <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
            <i className="fa fa-bookmark-o mr-4"></i>{" "}
            <span className="font-semibold group-hover:text-blue-400  text-black">Bookmark</span>
          </div>
          <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
            <i className="fa fa-list-ol mr-4 "></i>{" "}
            <span className="font-semibold group-hover:text-blue-400  text-black">List</span>
          </div>
          <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
            <i className="fa fa-user-circle mr-4"></i>{" "}
            <span className="font-semibold group-hover:text-blue-400  text-black">Profile</span>
          </div>
          <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
            <i className="fa fa-dot-circle-o mr-4"></i>{" "}
            <span className="font-semibold group-hover:text-blue-400  text-black">More</span>
          </div>
          <div className="block py-3 px-2 bg-blue-400 shadow text-white text-center mr-6 font-bold rounded-3xl">
            <a href="" className="inline-block ">
              Tweet
            </a>
          </div>
        </div>
      </div>
    )
}