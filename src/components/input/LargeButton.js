export default function LargeButton({href, label}){
    return (
        <div className="block py-3 px-2 bg-blue-400 shadow text-white text-center mr-6 font-bold rounded-3xl">
        <a href={href} className="inline-block ">
          {label}
        </a>
      </div>
    )
}