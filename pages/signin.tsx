import { useRouter } from 'next/router';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import ForgotPassword from '@/components/ForgotPassword'; // Import ForgotPassword component
import WelcomeText from '@/components/WelcomeText';
import { useState, useEffect } from 'react';

export default function SignInPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<'signIn' | 'signUp' | 'forgotPassword'>('signIn');

  useEffect(() => {
    // Determine the current page based on the route
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <WelcomeText />

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {currentPage === 'signUp' && 'Sign Up'}
            {currentPage === 'forgotPassword' && 'Forgot Password'}
            {currentPage === 'signIn' && 'Sign In'}
          </h2>

          {currentPage === 'signIn' && <SignIn />}
          {currentPage === 'signUp' && <SignUp isInSignInPage={true} />}
          {currentPage === 'forgotPassword' && <ForgotPassword />}

          <div className="mt-4 text-center">
            {currentPage === 'signIn' && (
              <>
                <p>
                  Don`t have an account?{' '}
                  <button onClick={handleSwitchToSignUp} className="text-blue-500 hover:underline">
                    Sign Up
                  </button>
                </p>
                <p>
                  <button onClick={handleForgotPassword} className="text-blue-500 hover:underline">
                    Forgot Password?
                  </button>
                </p>
              </>
            )}
            {currentPage === 'signUp' && (
              <p>
                Already have an account?{' '}
                <button onClick={handleSwitchToSignIn} className="text-blue-500 hover:underline">
                  Sign In
                </button>
              </p>
            )}
            {currentPage === 'forgotPassword' && (
              <p>
                Remembered your password?{' '}
                <button onClick={handleSwitchToSignIn} className="text-blue-500 hover:underline">
                  Sign In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
