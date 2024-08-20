import SignInForm from "@/components/input/SigninForm";
import SubmitButton from "@/components/input/SubmitButton";
import { signIn } from "next-auth/react";
 

export default async function Login(){
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
          <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
              <h3 className="text-xl font-semibold text-gray-700">Sign In</h3>
              <p className="text-sm text-gray-500">
                Use your email and password to sign in
              </p>
              <SignInForm action={async (formData) => {
            'use server';
          
            await signIn('credentials', {
              redirect: '/',
              email: formData.get('email'),
              password: formData.get('password') ,
            });
          }}>

              <SubmitButton><p className="text-sm font-semibold text-gray-900">
                Sign In
              </p></SubmitButton>
              </SignInForm>
      
              <p className="text-center text-sm text-gray-600">
            {'Need an Account? '}
            <a href="/register" className="font-semibold text-gray-800">
              Register Here
            </a>
            {' instead.'} </p>
            </div>
            
          </div>
        </div>
      );
    
}