import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import AdminSidebar from '@/components/AdminSideBar'; // Adjust path as needed
import Placeholder from '@/components/Placeholder';
import { Calendar } from 'lucide-react'; // Import Calendar icon from Lucide
import Paket from '@/components/content/paket';
import PesanTrack from '@/components/content/pesantrack';
import { useDarkMode } from '@/context/DarkMode';
import Analitik from '@/components/content/analitik';

const AdminHome = () => {
    const { data: session, status } = useSession();
    const [greeting, setGreeting] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }

        const intervalId = setInterval(() => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            };
            setCurrentDate(now.toLocaleDateString('en-US', options));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    if (status === 'loading') {
        return <Placeholder />;
    }

    if (status === 'unauthenticated') {
        return <p>You must be logged in to access the admin dashboard.</p>;
    }

    const adminName = session?.user?.name || 'Admin';

    const dark = isDarkMode ? 'bg-gray-800 text-white ' : 'bg-gray-300 text-gray-900';
    const textDark = isDarkMode ? 'text-gray-50' : 'text-gray-700';

    return (
        <AdminSidebar>
            <div className={`${dark} p-8 w-full h-full rounded-2xl overflow-y-auto custom-scrollbar`}>
                <p className="text-2xl font-bold pt-10">
                    {greeting}, {adminName}.
                </p>
                <div className={`${textDark} flex items-center mt-5 mb-5 justify-end text-gray-700 space-x-2 `}>
                    <div className="flex flex-col items-end">
                        <p className='text-xs font-medium mr-2'>Tanggal hari ini</p>
                        <span className='text-sm font-semibold text-gray-500 pr-3'>{currentDate}</span>
                    </div>
                    <Calendar className="w-7 h-7 text-gray-500" />
                </div>

                <div className='w-auto h-auto flex flex-row justify-between'>
                    <Paket />
                    <div className='pl-10'>
                        <PesanTrack />
                    </div>
                </div>
                <div className='w-auto h-auto mt-10'>
                    <Analitik />
                </div>
            </div>
        </AdminSidebar>
    );
};

export default AdminHome;
