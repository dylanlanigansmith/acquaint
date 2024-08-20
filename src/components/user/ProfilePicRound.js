import { get_user_by_id} from "@/data/user";

export default async function ProfilePicRound({userID}){
    let user = await get_user_by_id(userID)
    let pfp_src = "/defaultpfp.png"
    let pfp_alt = "an invalid profile pic"
    if (user){
       pfp_src = user.profile_pic;
       pfp_alt = "Profile picture for user " + user.displayName;
    }

    return (
        <img className="rounded-full h-14 w-14 border"
        src={pfp_src}
        alt={pfp_alt} srcSet=""/>
    )
}