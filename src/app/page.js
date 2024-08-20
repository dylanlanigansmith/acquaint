import React from "react";




import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Feed from "@/components/Feed";



export default async function Home() {
  //const feed = await Feed();
  return (
    <div className="flex antialiased h-screen">

     <NavBar key="navbarmain" param={"Entry"} />

      <Feed key="feed" param={"dunno"}/>

      <SideBar key="sidebarmain" param={"idk"} />
    </div>
  );
}
