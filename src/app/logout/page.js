'use client'

import { signOut, useSession } from 'next-auth/react'

export default function Logout(){
  const { data: session, status } = useSession()
  console.log(`status ${status} session ${session}`)

  const urlParams = new URLSearchParams(window.location.search);
  
  const redirect = (urlParams.get('redirect')) ? urlParams.get('redirect') : "/" 


  if (status === "authenticated") {
    let err = signOut()
    console.log(err)
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold text-gray-700">Logged Out</h3>
          <p className="text-sm text-gray-500">
            You are now logged out. 

            <a href="/" className="font-semibold text-gray-600">
              Back to Homepage
            </a>
          </p>
      
        </div>
        
      </div>
    </div>
      );
  }

  location.href=redirect
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold text-gray-700">It seems you aren't logged in?</h3>
        <p className="text-sm text-gray-500">
          Not much else we can do here... <br></br>
        <a href="/" className="font-semibold text-gray-600">
              Back to Homepage
            </a>
        </p>
    
      </div>
      
    </div>
  </div>
    );

    
}