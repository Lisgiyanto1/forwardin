import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UnauthenticatedPage = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown === 0) {
            router.push('/signin');
            return;
        }

        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown, router]);

    const handleLoginRedirect = () => {
        router.push('/signin');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Access Denied
            </h1>
            <p className="text-gray-600 mb-8">
                You must be logged in to access the admin dashboard.
            </p>
            <p className="text-lg font-medium mb-4">
                Redirecting to login in <span className="font-bold text-blue-500">{countdown}s</span>
            </p>
            <button
                onClick={handleLoginRedirect}
                className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
                Go to Login Now
            </button>
            <p className="mt-4 text-sm text-gray-500">
                Don’t have an account?{' '}
                <Link href="/signup" className="text-blue-500 hover:underline">
                    Sign up here
                </Link>
            </p>
        </div>
    );
};

export default UnauthenticatedPage;
