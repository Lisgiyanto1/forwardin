"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Button } from 'flowbite-react';
import Link from 'next/link';
import LogoutModal from './LogoutModal';
import { useSession, signOut } from 'next-auth/react';

export default function CustomNavbar() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isSignInPage, setIsSignInPage] = useState(false);
    const [isSignUpPage, setIsSignUpPage] = useState(false);
    const [isInForgotPage, setIsInForgotPage] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    useEffect(() => {
        setIsSignInPage(router.pathname === '/signin');
        setIsSignUpPage(router.pathname === '/signup');
        setIsInForgotPage(router.pathname === '/forgot-password');
    }, [router.pathname]);

    const handleLogout = async () => {
        try {
            await signOut({ redirect: false });
            setShowLogoutModal(false);
            router.replace('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const shouldShowMinimalNavbar = isSignInPage || isSignUpPage || isInForgotPage;
    const isAdmin = session?.user?.role === 'admin';

    // Return null or empty fragment if the user is an admin
    if (isAdmin) return null;

    return (
        <>
            <Navbar fluid={true} rounded={true} className="bg-gray-800">
                {shouldShowMinimalNavbar ? (
                    <div className="flex items-center">
                        <Link href="/">
                            <img src="/logo.svg" alt="Logo" className="h-6 sm:h-9" />
                        </Link>
                    </div>
                ) : (
                    <>
                        <Navbar.Brand href="/">
                            <img
                                src="/logo.svg"
                                className="mr-3 h-6 sm:h-9"
                                alt="Logo"
                            />
                            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                                MyApp
                            </span>
                        </Navbar.Brand>

                        <Navbar.Toggle />

                        <Navbar.Collapse>
                            {/* Navbar Links */}
                            <Link href="/" className="text-white hover:text-blue-500">
                                Home
                            </Link>
                            <Link href="/profile" className="text-white hover:text-blue-500">
                                Profile
                            </Link>
                            <Link href="/setting" className="text-white hover:text-blue-500">
                                Settings
                            </Link>

                            {/* Show Sign In button when not authenticated */}
                            {status !== 'authenticated' && (
                                <div className="flex space-x-4">
                                    <Link href="/signin">
                                        <Button gradientDuoTone="cyanToBlue">Sign In</Button>
                                    </Link>
                                </div>
                            )}

                            {/* Show Logout button when authenticated */}
                            {status === 'authenticated' && (
                                <Button gradientDuoTone="cyanToBlue" onClick={() => setShowLogoutModal(true)}>
                                    Logout
                                </Button>
                            )}
                        </Navbar.Collapse>
                    </>
                )}

                {/* Logout Modal */}
                {showLogoutModal && (
                    <LogoutModal
                        onConfirm={handleLogout}
                        onCancel={() => setShowLogoutModal(false)}
                    />
                )}
            </Navbar>
        </>
    );
}
