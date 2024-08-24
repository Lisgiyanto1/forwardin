import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Placeholder from './Placeholder';
import { Bell, ChevronDown, ChevronUp, MoonIcon, Settings, Settings2Icon, SunIcon, User, UserRound } from 'lucide-react';

interface AdminSidebarProps {
    children: ReactNode;
}


export default function AdminSidebar({ children }: AdminSidebarProps) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.replace('/signin');
      };

    useEffect(() => {
        if (status === 'loading') return;

        if (!session || session.user.role !== 'admin') {
            router.push('/signin');
        } else {
            setLoading(false);
        }
    }, [session, status, router]);

    const [isOpen, setIsOpen] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSetDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const adminName = session?.user?.name || 'Admin';
    if (loading) return <div><Placeholder /></div>;
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 h-screen bg-white text-gray-950">
                <div className="p-4">
                    <div className="text-2xl font-bold">
                        <Image src="/logo2.png" width={200} height={10} alt='logo' />
                    </div>
                    <nav className="mt-10">
                        <ul>
                            <li>
                                <Link href="/admin/home">
                                    <p className="block p-2 font-semibold hover:font-bold rounded-2xl px-5 hover:bg-blue-500 hover:text-white">Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <div
                                    className="flex items-center justify-between p-2 font-semibold rounded-2xl px-5 hover:bg-blue-500 hover:text-white cursor-pointer"
                                    onClick={toggleDropdown}
                                >
                                    <p>Contacts</p>
                                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                                </div>
                                {isOpen && (
                                    <ul className="mt-2 space-y-1">
                                        <li>
                                            <Link href="/admin/contact">
                                                <p className="block p-2 font-semibold rounded-2xl px-5 bg-blue-100 hover:bg-blue-200 hover:text-blue-800">
                                                    Contact
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/messages">
                                                <p className="block p-2 font-semibold rounded-2xl px-5 bg-green-100 hover:bg-green-200 hover:text-green-800">
                                                    Groups
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
            <div className='fixed right-0 flex flex-row    rounded-2xl top-10  w-2/5 h-10  '>
                <div className='flex '>

                    <Bell color='black' className='bg-white shadow-2xl left-0 w-10 h-10 mr-8  rounded-3xl py-2' />
                    <span className='bg-white  shadow-2xl flex justify-end items-center w-auto pl-10 rounded-3xl h-10'>
                        <div className='text-center mr-10 font-semibold'>
                            {adminName}
                        </div>
                        <UserRound className='bg-blue-500  shadow-2xl  w-10 h-10 rounded-3xl py-2 text-white' />

                    </span>
                    <Settings
                        className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-transform duration-300 hover:rotate-90 bg-white shadow-2xl shadow-black mx-4 w-10 h-10 rounded-3xl py-2 cursor-pointer`}
                        onClick={toggleSetDropdown}
                    />
                    {isDropdownOpen && (
                        <ul className={`absolute right-0 mt-10 mr-5 w-48 bg-white shadow-lg rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <li>
                                <button
                                   onClick={handleLogout}

                                    className={`block p-2 mx-2 font-semibold text-left rounded-lg w-full hover:bg-gray-200 ${isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                                >
                                    Logout
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={toggleDarkMode}
                                    className={`block p-2 mx-2 font-semibold text-left rounded-lg w-full hover:bg-gray-200 ${isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                                >
                                    {isDarkMode ? (
                                        <SunIcon className="w-6 h-6" />
                                    ) : (
                                        <MoonIcon className="w-6 h-6" />
                                    )}
                                    {isDarkMode ? '' : ' '}
                                </button>
                            </li>
                        </ul>
                    )}


                </div>

            </div>

            {/* Main Content */}
            <main className="flex-1 p-4 bg-white">
                {children}
            </main>
        </div>
    );
}
