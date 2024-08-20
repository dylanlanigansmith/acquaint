import BasicButton from "@/components/input/BasicButton";
import { get_user_by_identifier } from "@/data/user";
import SmallButton from "../input/SmallButton";
export default async function MiniProfile({ session, label }) {
  if (session == null) return null;
  let user = await get_user_by_identifier(session.user.email);
  if (user == null) {
    console.error("no user for active session...", session);
    return null;
  }

  return (
    <div className="bg-gray-50 py-2  sticky top-16 px-2 rounded-2xl shadow-sm">
      <div className="pt-2 pb-0 text-center flex justify-between space-x-2">
        <h1 className="font-extrabold text-gray-700">{label}</h1>
        <SmallButton key="logoutbutton" label="Logout" href="/logout"></SmallButton>
      </div>

      <div className="flex justify-center pt-0">
        <div className="border-b items-center justify-center flex space-x-2 pt-0 px-2 mr-6 text-gray-700  hover:text-blue-400">
          <div className="flex space-x-4">
            <div className="flex justify-right">
              <img
                className="rounded-full h-10 w-10 border"
                src={user.profile_pic}
                alt={user.display_name}
                srcSet=""
              />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{user.display_name}</p>
              <span className="text-gray-600">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
