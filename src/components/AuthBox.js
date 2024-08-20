import BasicButton from "./input/BasicButton";

export default async function AuthBox({name}) {
    return (
        <div className="bg-gray-50 py-2  sticky top-16 px-2 rounded-2xl shadow-sm">
          { 
            (name && name.length) ? (
              <div className="py-2 text-center">
              <h1 className="font-extrabold text-gray-700">{name}</h1>
            </div>
            ) : (null)
          }
         
          <div className="flex justify-center">
            <div className="flex space-x-4">
            <BasicButton key="loginbutton" label="Login" href="/auth/login"></BasicButton>
            <BasicButton key="signupbutton" label="Register" href="register"></BasicButton>
             </div>
        </div>
        </div>
    )
}