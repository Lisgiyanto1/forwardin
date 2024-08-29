"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Button } from 'flowbite-react';
import Link from 'next/link';
import LogoutModal from './LogoutModal';
import { useSession, signOut } from 'next-auth/react';
import NavbarMinimal from './NavbarMinimal';
import { ArrowUpIcon, ArrowDownIcon, ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

export default function CustomNavbar() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isSignInPage, setIsSignInPage] = useState(false);
    const [isSignUpPage, setIsSignUpPage] = useState(false);
    const [isInForgotPage, setIsInForgotPage] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSignInDropdown, setShowSignInDropdown] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>("");


    const toggleFeaturesDropdown = () => {
        setFeaturesDropdownOpen((prevState) => !prevState);
        setActiveLink("Features");
    };


    const handleItemClick = (section: string) => {
        setActiveLink(section);
        setFeaturesDropdownOpen(false);
    };

    useEffect(() => {
        setIsSignInPage(router.pathname === '/signin');
        setIsSignUpPage(router.pathname === '/signup');
        setIsInForgotPage(router.pathname === '/forgot-password');

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrollingUp(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, router.pathname]);

    const handleLogout = async () => {
        try {
            setFeaturesDropdownOpen(false);
            await signOut({ redirect: false });
            setShowLogoutModal(false);
            router.replace('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };


    const shouldShowMinimalNavbar = isSignInPage || isSignUpPage || isInForgotPage;
    const isAdmin = session?.user?.role === 'admin';

    if (isAdmin) return null;

    return (
        <div className='flex flex-col justify-center items-center'>
            {shouldShowMinimalNavbar ? (
                <NavbarMinimal />
            ) : (
                <Navbar
                    fluid={true}
                    rounded={true}
                    className={`fixed   top-6 bg-white w-2/5 h-16 rounded-xl shadow-md flex justify-between items-center  z-50 transition-transform  ${isScrollingUp ? 'show-navbar' : 'hide-navbar'}`}
                >
                    <div className="flex items-center md:w-3/4">
                        <Navbar.Brand href="/">
                            <Image
                                src="/icon.png"
                                alt="dashboard"
                                width={200}
                                height={200}
                                className="mr-3 h-6 sm:h-9"
                            />
                        </Navbar.Brand>

                        <div
                            className="lg:hidden cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </div>
                    </div>

                    <div className="lg:flex items-center space-x-6 hidden ">
                        <div className="relative">
                            <button
                                onClick={toggleFeaturesDropdown}
                                className={`flex items-center ${activeLink === "Features" ? "text-blue-500 font-bold" : "text-gray-800"
                                    } hover:text-blue-500`}
                            >
                                Features
                                {featuresDropdownOpen ? (
                                    <ChevronUpIcon className="ml-2 w-4 h-4" />
                                ) : (
                                    <ChevronDownIcon className="ml-2 w-4 h-4" />
                                )}
                            </button>
                            {featuresDropdownOpen && (
                                <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-10">
                                    <Link
                                        href="/feature1"
                                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${activeLink === "Feature1" ? "text-blue-500 font-bold" : ""
                                            }`}
                                        onClick={() => handleItemClick("Feature1")}
                                    >
                                        Feature 1
                                    </Link>
                                    <Link
                                        href="/feature2"
                                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${activeLink === "Feature2" ? "text-blue-500 font-bold" : ""
                                            }`}
                                        onClick={() => handleItemClick("Feature2")}
                                    >
                                        Feature 2
                                    </Link>
                                    <Link
                                        href="/feature3"
                                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${activeLink === "Feature3" ? "text-blue-500 font-bold" : ""
                                            }`}
                                        onClick={() => handleItemClick("Feature3")}
                                    >
                                        Feature 3
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/pricing"
                            className={`${activeLink === "Pricing" ? "text-blue-500 font-bold" : "text-gray-800"
                                } hover:text-blue-500`}
                            onClick={() => handleItemClick("Pricing")}
                        >
                            Pricing
                        </Link>

                        <Link
                            href="/demo"
                            className={`${activeLink === "Demo" ? "text-blue-500 font-bold" : "text-gray-800"
                                } hover:text-blue-500`}
                            onClick={() => handleItemClick("Demo")}
                        >
                            Demo
                        </Link>

                        <Link
                            href="/blog"
                            className={`${activeLink === "Blog" ? "text-blue-500 font-bold" : "text-gray-800"
                                } hover:text-blue-500`}
                            onClick={() => handleItemClick("Blog")}
                        >
                            Blog
                        </Link>

                        {status !== "authenticated" && (
                            <Link href="/signin">
                                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1 rounded-lg w-full">
                                    Sign In
                                </Button>
                            </Link>
                        )}

                        {status === "authenticated" && (
                            <Button
                                gradientDuoTone="cyanToBlue"
                                onClick={() => setShowLogoutModal(true)}
                                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg w-full"
                            >
                                Logout
                            </Button>
                        )}
                    </div>
                    {menuOpen && (
                        <div
                            className="flex w-auto absolute right-1.5 flex-col items-center space-y-4 lg:hidden bg-gradient-to-b from-blue-50 to-white shadow-lg transition-all duration-300 ease-in-out py-4 rounded-lg"
                            style={{ top: '64px' }}
                        >
                            <div className="relative z-10">
                                <button
                                    onClick={toggleFeaturesDropdown}
                                    className="flex items-center text-gray-800 hover:text-blue-500 hover:font-bold"
                                >
                                    Features
                                    {featuresDropdownOpen ? (
                                        <ChevronUpIcon className="ml-2 w-4 h-4" />
                                    ) : (
                                        <ChevronDownIcon className="ml-2 w-4 h-4" />
                                    )}
                                </button>
                                {featuresDropdownOpen && (
                                    <div className="absolute mt-2 bg-white shadow-lg rounded-lg">
                                        <Link href="/feature1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                            Feature 1
                                        </Link>
                                        <Link href="/feature2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                            Feature 2
                                        </Link>
                                        <Link href="/feature3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                            Feature 3
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/pricing" className="text-gray-800 hover:text-blue-500 hover:font-bold">
                                Pricing
                            </Link>
                            <Link href="/demo" className="text-gray-800 hover:text-blue-500 hover:font-bold">
                                Demo
                            </Link>
                            <Link href="/blog" className="text-gray-800 hover:text-blue-500 hover:font-bold">
                                Blog
                            </Link>

                            {/* Sign In button with dropdown */}
                            {status !== 'authenticated' && (
                                <div className="relative flex flex-col  justify-center items-center">
                                    <Button
                                        className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 w-60 rounded-lg"
                                        onClick={() => setShowSignInDropdown(!showSignInDropdown)}
                                    >
                                        Sign In
                                        {showSignInDropdown ? (
                                            <ArrowUpIcon className="ml-2" size={16} />
                                        ) : (
                                            <ArrowDownIcon className="ml-2" size={16} />
                                        )}
                                    </Button>
                                    {showSignInDropdown && (
                                        <div className="flex justify-center items-center right-0 mt-2 bg-white bg-opacity-50 rounded-lg shadow-md py-4 backdrop-filter backdrop-blur-sm w-60">
                                            <div className="flex flex-col justify-center">
                                                <Button
                                                    className="bg-blue-300 hover:bg-blue-500 text-white px-2 py-2 rounded-lg w-56"
                                                    onClick={() => router.push('/signin')}
                                                >
                                                    <i className="fas fa-user-tie mr-2" /> Login as Admin
                                                </Button>
                                                <div className="h-4" /> {/* add some space between buttons */}
                                                <Button
                                                    className="bg-blue-300 hover:bg-blue-500 text-white px-6 py-2 rounded-lg w-56"
                                                    onClick={() => router.push('/signin')}
                                                >
                                                    <i className="fas fa-user mr-2" /> Login as Customer
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                           
                            {status === 'authenticated' && (
                                <Button
                                    gradientDuoTone="cyanToBlue"
                                    onClick={() => setShowLogoutModal(true)}
                                    className="text-white w-56 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                                >
                                    Logout
                                </Button>
                            )}
                        </div>
                    )}
                </Navbar>
            )}

            {/* Logout Modal */}
            {showLogoutModal && (
                <LogoutModal
                    onConfirm={handleLogout}
                    onCancel={() => setShowLogoutModal(false)}
                />
            )}
        </div>
    );
}
