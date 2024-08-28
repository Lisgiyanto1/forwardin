import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Placeholder from './Placeholder';
import { Bell, ChevronDown, ChevronUp, Contact, Group, LayoutDashboard, LogOutIcon, MessageCircle, MessageCircleCode, MoonIcon, Settings, SunIcon, UserRound } from 'lucide-react';
import { Button } from 'flowbite-react';
import { useDarkMode } from '@/context/DarkMode';
import LogoutModal from './LogoutModal';



export default function AdminSidebar({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isContactsOpen, setIsContactsOpen] = useState(false);
    const [isGroupsOpen, setIsGroupsOpen] = useState(false);
    const [isMessageListOpen, setIsMessageListOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string>(router.pathname);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLogout, setLogout] = useState(false);


    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const dark = isDarkMode ? ' bg-gray-900 text-white ' : 'bg-white text-black';
    const hoverDark = isDarkMode ? 'hover:text-black' : '';
    const childDrak = isDarkMode ? 'bg-gray-800 text-white  ' : 'bg-white text-black';
    useEffect(() => {
        if (status === 'loading') return;

        if (!session || session.user.role !== 'admin') {
            router.push('/signin');
        } else {
            setLoading(false);
        }
    }, [session, status, router]);



    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.replace('/signin');
    };

    const toggleContactsDropdown = () => {
        setIsContactsOpen(!isContactsOpen);
    };

    const toggleGroupsDropdown = () => {
        setIsGroupsOpen(!isGroupsOpen);
    };

    const toggleMessageListDropdown = () => {
        setIsMessageListOpen(!isMessageListOpen); // Kontrol dropdown Message List secara independen
    };



    const toggleSetDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const adminName = session?.user?.name || 'Admin';

    if (loading) return <div><Placeholder /></div>;

    const handleMenuClick = (menu: string, route: string) => {
        setActiveMenu(menu);
        router.push(route);
    };
    const handleKeluar = async () => {
        try {
            await signOut({ redirect: false });
            setLogout(false);
            router.replace('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className={`flex ${dark} `}>
            {/* Sidebar */}
            <aside className="w-52 h-screen   text-gray-950 text-sm">
                <div className="p-4">
                    <div className="text-xl font-bold">
                        <Image src="/logo2.png" width={200} height={10} alt='logo' />
                    </div>
                    <nav className="mt-10">
                        <ul>
                            <li>
                                <div
                                    className={`flex flex-row cursor-pointer justify-center rounded-2xl py-2 gap-4 p-0  mb-1 items-center ${activeMenu === '/admin/home' ? 'bg-blue-600 text-white' : 'hover:bg-blue-500 hover:text-white'}`}
                                    onClick={() => handleMenuClick('Dashboard', '/admin/home')}
                                >
                                    <LayoutDashboard />
                                    <span className=" font-semibold pr-11">
                                        Dashboard
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`flex items-center justify-between p-2 font-semibold rounded-2xl px-3 cursor-pointer ${isContactsOpen ? 'bg-gray-300 text-white' : activeMenu === 'Contacts' ? 'bg-gray-400 text-white' : 'hover:bg-blue-500 hover:text-white'}`}
                                    onClick={toggleContactsDropdown}
                                >
                                    <Contact />
                                    <p className='text-left pr-5'>Contacts</p>
                                    {isContactsOpen ? <ChevronUp /> : <ChevronDown />}
                                </div>
                                {isContactsOpen && (
                                    <div className='flex justify-center items-end mb-2 mr-3'>
                                        <ul className="mt-2 space-y-1 flex flex-col w-32 text-center ">
                                            <li>
                                                <Link href="/admin/contact">
                                                    <div
                                                        className={`flex flex-row justify-start  items-center rounded-2xl px-0 pl-2  ${activeMenu === '/admin/contact' ? 'bg-blue-600 text-white' : 'hover:bg-blue-200 hover:text-blue-800'}`}
                                                        onClick={() => handleMenuClick('Contact', '/admin/contact')}
                                                    >
                                                        <Contact />
                                                        <p className="p-2 font-semibold">
                                                            Contact
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/admin/groups">
                                                    <div
                                                        className={`flex flex-row justify-start items-center rounded-2xl px-0 pl-2  ${activeMenu === '/admin/groups' ? 'bg-blue-600 text-white' : 'hover:bg-blue-200 hover:text-blue-800'}`}
                                                        onClick={() => handleMenuClick('Groups', '/admin/groups')}
                                                    >
                                                        <Group />
                                                        <p className="p-2 font-semibold">
                                                            Groups
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <div
                                    className={`flex items-center justify-between mt-1 gap-2 p-2 font-semibold rounded-2xl px-3 cursor-pointer ${isMessageListOpen ? 'bg-gray-300 text-white' : activeMenu === 'Message List' ? 'bg-gray-400 text-white' : 'hover:bg-blue-500 hover:text-white'}`}
                                    onClick={toggleMessageListDropdown} // Toggle Message List secara terpisah
                                >
                                    <MessageCircle />
                                    <p>Message List</p>
                                    {isMessageListOpen ? <ChevronUp /> : <ChevronDown />}
                                </div>
                                {isMessageListOpen && (
                                    <div className='flex justify-center  items-end mb-2'>
                                        <ul className="mt-2 space-y-1 flex flex-col w-auto text-center">
                                            <li>
                                                <Link href="/admin/messenger">
                                                    <div
                                                        className={`flex flex-row justify-start pl-2 items-center rounded-2xl px-0 ${activeMenu === '/admin/messenger' ? 'bg-blue-600 text-white' : 'hover:bg-blue-200 hover:text-blue-800'}`}
                                                        onClick={() => handleMenuClick('Messenger', '/admin/messenger')}
                                                    >
                                                        <MessageCircleCode />
                                                        <p className="p-2 font-semibold">
                                                            Messenger
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/admin/incoming">
                                                    <div
                                                        className={`flex flex-row justify-center items-center rounded-2xl px-2 ${activeMenu === '/admin/incoming' ? 'bg-blue-600 text-white' : 'hover:bg-blue-200 hover:text-blue-800'}`}
                                                        onClick={() => handleMenuClick('Incoming Chat', '/admin/incoming')}
                                                    >
                                                        <Group />
                                                        <p className="p-2 font-semibold">
                                                            Incoming Chat
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className='fixed right-0 flex flex-row rounded-2xl top-10 w-auto h-10 pr-6'>
                <div className='flex'>
                    <Bell className={`${dark} cursor-pointer shadow-2xl left-0 w-10 h-10 mr-8 rounded-3xl py-2`} />
                    <span className={`${dark} shadow-2xl flex justify-end items-center w-auto pl-10 rounded-3xl h-10`}>
                        <div className='text-center mr-10 font-semibold'>
                            {adminName}
                        </div>
                        <UserRound className='bg-blue-500 shadow-2xl w-10 h-10 rounded-3xl py-2 text-white' />
                    </span>
                    <Settings
                        className={`${dark} transition-transform duration-300 hover:rotate-90 shadow-2xl shadow-black mx-4 w-10 h-10 rounded-3xl py-2 cursor-pointer`}
                        onClick={toggleSetDropdown}
                    />
                    {isDropdownOpen && (
                        <ul className={`absolute right-0 mt-12 mr-10 w-auto shadow-lg rounded-xl ${dark}`}>
                            <li className="relative group">
                                <button
                                    onClick={() => setLogout(true)}
                                    className={`${hoverDark} p-2 font-semibold text-left rounded-xl rounded-br-none w-full hover:bg-red-200 ${dark}`}
                                >
                                    <LogOutIcon />
                                </button>
                                <span className="absolute top-full right-1/2 rounded-xl shadow-md shadow-blue-500  transform -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-gray-800 opacity-0 group-hover:opacity-100">
                                    Logout
                                </span>
                            </li>
                            <li className="relative group">
                                <button
                                    onClick={toggleDarkMode}
                                    className={`${hoverDark} p-2 font-semibold text-left rounded-xl w-full hover:bg-gray-200 ${dark}`}
                                >
                                    {isDarkMode ? (
                                        <SunIcon className="w-6 h-6" />
                                    ) : (
                                        <MoonIcon className="w-6 h-6" />
                                    )}
                                </button>
                                <span className="absolute right-1/2 mr-2 top-full transform -translate-x-1/2 mt-2 px-2 w-auto py-1 text-sm text-white bg-gray-800 rounded-xl shadow-md shadow-blue-500 opacity-0 group-hover:opacity-100">
                                    {isDarkMode ? 'Light' : 'Dark'}
                                </span>
                            </li>
                        </ul>
                    )}
                </div>

            </div>
            <>
                {isLogout && (
                    <LogoutModal
                        onConfirm={handleKeluar}
                        onCancel={() => setLogout(false)}
                    />
                )}
            </>


            {/* Main Content */}
            <main className="flex-1 p-4 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    );
}
