export default function NavBarEntry({label, faIcon, href}){
    return (
        <div className="block group py-2 px-2 text-gray-700 hover:bg-blue-100 rounded-3xl hover:text-blue-400 text-2xl">
        <i className={`fa fa-${faIcon} mr-2`}></i>{" "}
        <span className="font-semibold group-hover:text-blue-400 text-black">{label}</span>
      </div>
    )
}

