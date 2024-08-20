import LargeButton from "./input/LargeButton";
import NavBarEntry from "./NavBarEntry";

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
        <NavBarEntry faIcon="hashtag" label="Explore"></NavBarEntry>
        <NavBarEntry faIcon="bell-o" label="Notifications"></NavBarEntry>
        <NavBarEntry faIcon="envelope-o" label="Messages"></NavBarEntry>
        <NavBarEntry faIcon="list-ol" label="Lists"></NavBarEntry>
        <NavBarEntry faIcon="user-circle" label="Profile"></NavBarEntry>
        <NavBarEntry faIcon="dot-circle-o" label="More"></NavBarEntry>
  
          <LargeButton href="/tweet" label="Tweet"> </LargeButton>
        </div>
      </div>
    )
}