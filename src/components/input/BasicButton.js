'use client'

export default async function BasicButton({label, href}) {

    return(
        <div className="relative overflow-hidden mb-8 text-center">
        <button className="border border-blue-500 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 rounded" onClick= {() => { location.href=href  } } >{label}</button></div>
    )
}