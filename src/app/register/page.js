import SignupForm from "@/components/input/SignupForm";
import SubmitButton from "@/components/input/SubmitButton";
import { redirect } from 'next/navigation';
import { create_user } from '@/data/user'

export default async function Register(){

  async function register(formData) {
    'use server';
    let email = formData.get('email') 
    let password = formData.get('password') 
    const user_exists = false
    console.log("register")
    if (user_exists) {
      return 'User already exists'; // TODO: Handle errors with useFormStatus
    } else {
      await create_user({
        type : "email",
        value : email
      }, password)
      redirect('/login');
    }
  }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
          <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
              <h3 className="text-xl font-semibold text-gray-700">Become Acquainted!</h3>
              
              <SignupForm action={register} >
             <SubmitButton><p className="text-sm font-semibold text-gray-900">
                Register
              </p></SubmitButton>
              </SignupForm>
              <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <a href="/login" className="font-semibold text-gray-800">
              Sign in
            </a>
            {' instead.'}
          </p>
            </div>
            
          </div>
        </div>
      );
    
}