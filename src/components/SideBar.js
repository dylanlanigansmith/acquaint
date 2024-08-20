import AuthBox from "./AuthBox";
import { auth } from "@/auth";
import MiniProfile from "./user/MiniProfile";

export default async function SideBar({ param }){
  const session = await auth()
  console.log("SESSION = ", session)
    return (
      
        <div className="flex-1 py-4 pl-10 pr-28 space-y-4 bg-white hidden md:block">
        <div className="sticky top-0 bg-white pb-2">
          <input
            type="text"
            className="block text-black border border-grey-light bg-gray-200 w-full py-2 pl-3 rounded-3xl"
            name="fullname"
            placeholder="Search"
          />
        </div>
       
       { session == null ? <AuthBox key="sidebar-authbox" name="Who Are You?"></AuthBox> : <MiniProfile label="Account" session={session}></MiniProfile> }

       



      </div> )
}