import { useRouter } from 'next/router';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import ForgotPassword from '@/components/ForgotPassword';
import WelcomeText from '@/components/WelcomeText';
import { useState, useEffect } from 'react';

export default function SignInPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<'signIn' | 'signUp' | 'forgotPassword'>('signIn');

  useEffect(() => {

    if (router.pathname === '/signup') {
      setCurrentPage('signUp');
    } else if (router.pathname === '/forgot-password') {
      setCurrentPage('forgotPassword');
    } else {
      setCurrentPage('signIn');
    }
  }, [router.pathname]);

  const handleSwitchToSignUp = () => {
    setCurrentPage('signUp');
    router.push('/signup');
  };

  const handleSwitchToSignIn = () => {
    setCurrentPage('signIn');
    router.push('/signin');
  };

  const handleForgotPassword = () => {
    setCurrentPage('forgotPassword');
    router.push('/forgot-password');
  };

  return (

    <div className="flex flex-row lg:bg-gray-100 h-auto ">
      <div className="hidden pl-36 pb-10  justify-center lg:flex w-full ">
        <WelcomeText />
      </div>
      <div className=" flex flex-col w-full justify-center ">
        {currentPage === 'signIn' && <SignIn />}
        {currentPage === 'signUp' && <SignUp isInSignInPage={true} />}
        {currentPage === 'forgotPassword' && <ForgotPassword />}

        <div className="mt-4 text-center">
          {currentPage === 'signIn' && (
            <>
              <p>
                Butuh Buat Akun?{' '}
                <button onClick={handleSwitchToSignUp} className="text-blue-500 hover:underline">
                  Daftar di sini
                </button>
              </p>
              <p>
                <button onClick={handleForgotPassword} className="text-blue-500 hover:underline">
                  Lupa Password?
                </button>
              </p>
            </>
          )}
          {currentPage === 'signUp' && (
            <p>
              Sudah punya akun?{' '}
              <button onClick={handleSwitchToSignIn} className="text-blue-500 hover:underline">
                Masuk di sini
              </button>
            </p>
          )}
          {currentPage === 'forgotPassword' && (
            <p>
              Ingin Password?{' '}
              <button onClick={handleSwitchToSignIn} className="text-blue-500 hover:underline">
                Masuk di sini
              </button>
            </p>
          )}
        </div>
      </div>
    </div>


  );
}
