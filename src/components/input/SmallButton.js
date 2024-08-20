'use client'

export default async function SmallButton({label, href}) {

    return(
        <div className="relative overflow-hidden mb-8 text-center text-sm">
        <button className="border border-blue-500 hover:bg-blue-200 text-gray-800 font-bold py-1 px-2 rounded" onClick= {() => { location.href=href  } } >{label}</button></div>
    )
}